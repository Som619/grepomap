#!/usr/bin/env node
/**
 * build_grepolis_mapdata_fr187.js  (nom de fichier historique : fr180.js)
 * -------------------------------
 * Génère mapData.js pour le monde fr187 (Grepolis) + temples statiques.
 * mapData = {
 *   alliances: [ { id, name, front, towns:[{x,y,slot}] } ],
 *   players  : [ { id, name, alliance_id, towns:[{x,y,slot}] } ],
 *   temples  : [ { id, x, y, name, bonus, type, owner } ]
 * }
 *
 * front vaut 'ennemi', 'allie' ou 'neutre' selon la liste ci-dessous.
 */

const http  = require('node:http');
const https = require('node:https');
const fs    = require('node:fs');
const zlib  = require('node:zlib');
const rl    = require('node:readline');
const path  = require('node:path');

/* ---- temples définis manuellement ---- */
/* Protection par mot de passe : voir chiffrement.js.
   - sur ton PC      : temples_static.js (en clair, non publié) est utilisé s'il existe ;
   - sur GitHub      : seul temples_static.enc.json existe, déchiffré avec le secret MAP_PASSWORD. */
const { FILES: ENC, getPassword, readEncrypted, writeEncrypted } = require('./chiffrement.js');
const PASSWORD = getPassword();
const staticTemples = (() => {
  const clair = path.join(__dirname, 'temples_static.js');
  if (fs.existsSync(clair)) return require(clair).staticTemples;
  if (!fs.existsSync(ENC.temples)) throw new Error('temples_static.js introuvable : lancez d\'abord node build_temples.js');
  if (!PASSWORD) throw new Error('Mot de passe manquant (MAP_PASSWORD ou .map_password) pour lire temples_static.enc.json');
  return JSON.parse(readEncrypted(ENC.temples, PASSWORD));
})();
const { grandTemples }  = require('./grands_temples.js');   // les 8 grands temples (Olympus)

const WORLD = 'fr187';
const BASE  = `http://${WORLD}.grepolis.com/data`;
const FILES = {
  players   : 'players.txt.gz',
  alliances : 'alliances.txt.gz',
  towns     : 'towns.txt.gz',
};

/* ───────────────────────── fronts d'alliances ─────────────────────────
   Appariement par ID (et non par nom) : un renommage d'alliance n'a aucun
   impact. Voir fronts_common.js pour la configuration. */
const { frontOf, decorateAlliance } = require('./fronts_common.js');
/* ───────────────────────────────────────────────────────────────────── */

/* ---------- helpers ---------- */
const clean = s => s.replace(/\+/g, ' ');

function download (url) {
  return new Promise((resolve, reject) => {
    (url.startsWith('https') ? https : http).get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location)
        return download(res.headers.location).then(resolve).catch(reject);
      if (res.statusCode !== 200) reject(new Error(`HTTP ${res.statusCode}`));
      else resolve(res);
    }).on('error', reject);
  });
}

function loadCsv (file, parser) {
  return new Promise(async (resolve, reject) => {
    try {
      const stream = (await download(`${BASE}/${file}`)).pipe(zlib.createGunzip());
      const out = [];
      rl.createInterface({ input: stream })
        .on('line', l => out.push(parser(l.split(',').map(decodeURIComponent))))
        .on('close', () => resolve(out))
        .on('error', reject);
    } catch (e) { reject(e); }
  });
}

/* ---------- parsers ---------- */
const parsePlayers   = ([id, name, aid])        => ({ id:+id, name:clean(name), alliance_id:+aid, towns:[] });
const parseAlliances = ([id, name])             => ({ id:+id, name:clean(name), front: frontOf(+id), towns:[] });
const parseTowns     = ([, pid,, x, y, slot])   => ({ player_id:+pid, x:+x, y:+y, slot:+slot });

/* ---------- main ---------- */
(async () => {
  const [players, alliances, towns] = await Promise.all([
    loadCsv(FILES.players,   parsePlayers),
    loadCsv(FILES.alliances, parseAlliances),
    loadCsv(FILES.towns,     parseTowns),
  ]);

  const pById = Object.fromEntries(players.map(p => [p.id, p]));
  const aById = Object.fromEntries(alliances.map(a => [a.id, a]));

  towns.forEach(t => {
    const p = pById[t.player_id];
    if (!p) return;
    p.towns.push({ x:t.x, y:t.y, slot:t.slot });

    if (!aById[p.alliance_id]) {
      aById[p.alliance_id] = {
        id: p.alliance_id,
        name: `Alliance ${p.alliance_id}`,
        front: frontOf(p.alliance_id),
        towns: [],
      };
    }

    aById[p.alliance_id].towns.push({ x:t.x, y:t.y, slot:t.slot });
  });

  Object.values(aById).forEach(decorateAlliance);   // front + rôle + « notre alliance »

  const mapData = {
    alliances: Object.values(aById),
    players  : players,
    temples  : [...staticTemples, ...grandTemples()]        // <── temples injectés
  };

  /* Écriture compacte (≈ 3× plus léger que la version indentée → chargement plus rapide).
     generatedAt = date de la dernière modification RÉELLE des données : si rien n'a changé
     depuis le dernier passage, le fichier n'est pas réécrit (évite un commit inutile toutes
     les 30 min en tâche planifiée). « node fr180.js --force » réécrit quoi qu'il arrive. */
  const outFile = path.join(__dirname, 'mapData.js');
  const body    = JSON.stringify(mapData);
  let previous  = null;
  try {
    /* Avec mot de passe, la référence est le fichier chiffré publié (le seul présent sur GitHub) */
    const txt = PASSWORD ? readEncrypted(ENC.map, PASSWORD) : fs.readFileSync(outFile, 'utf8');
    const old = JSON.parse(txt.slice(txt.indexOf('{'), txt.lastIndexOf('}') + 1));
    delete old.generatedAt;
    previous = JSON.stringify(old);
  } catch { /* premier passage, mot de passe changé ou ancien format illisible → on écrit */ }

  if (previous === body && !process.argv.includes('--force')) {
    console.log('ℹ️  Aucune évolution des données : carte inchangée.');
    return;
  }
  const generatedAt = new Date().toISOString();
  const complet     = JSON.stringify({ generatedAt, ...mapData });
  /* mapData.js = copie en clair pour ouvrir index.html en local ; il n'est PAS publié (.gitignore) */
  fs.writeFileSync(outFile, `// généré le ${generatedAt}\nconst mapData = ${complet};\n`);
  if (PASSWORD) {
    writeEncrypted(ENC.map, complet, PASSWORD);
    console.log('🔒 mapData.enc.json chiffré (c\'est ce fichier que lit le site publié).');
  } else {
    console.warn('⚠️  Aucun mot de passe (MAP_PASSWORD ou .map_password) : mapData.enc.json NON généré, le site publié ne sera pas mis à jour.');
  }

  /* Contrôle : un ID configuré qui n'apparaît nulle part = alliance dissoute/recréée */
  const { ALLIANCE_FRONTS } = require('./fronts_common.js');
  const idsPresents = new Set(mapData.alliances.map(a => a.id));
  Object.entries(ALLIANCE_FRONTS).forEach(([front, ids]) => {
    ids.filter(id => !idsPresents.has(Number(id))).forEach(id => {
      console.warn(`⚠️  ID ${id} (front « ${front} ») introuvable sur le serveur — alliance dissoute ? Vérifiez avec : node find_alliance_id.js`);
    });
  });

  const nbEnnemis = mapData.alliances.filter(a => a.front === 'ennemi').length;
  const nbAllies  = mapData.alliances.filter(a => a.front === 'allie').length;
  console.log(`✅ mapData.js : ${mapData.temples.length} temples, ${mapData.alliances.length} alliances (${nbEnnemis} ennemies, ${nbAllies} alliées), ${mapData.players.length} joueurs.`);
})().catch(err => { console.error(err); process.exit(1); });

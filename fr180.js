#!/usr/bin/env node
/**
 * build_grepolis_mapdata_fr184.js
 * -------------------------------
 * Génère mapData.js pour le monde fr184 (Grepolis) + temples statiques.
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
const { staticTemples } = require('./temples_static.js');   // créez / complétez ce fichier

const WORLD = 'fr184';
const BASE  = `http://${WORLD}.grepolis.com/data`;
const FILES = {
  players   : 'players.txt.gz',
  alliances : 'alliances.txt.gz',
  towns     : 'towns.txt.gz',
};

/* ───────────────────────── fronts d'alliances ─────────────────────────
   Appariement par ID (et non par nom) : un renommage d'alliance n'a aucun
   impact. Voir fronts_common.js pour la configuration. */
const { frontOf } = require('./fronts_common.js');
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

  const mapData = {
    alliances: Object.values(aById),
    players  : players,
    temples  : staticTemples        // <── temples injectés
  };

  fs.writeFileSync(
    path.join(__dirname, 'mapData.js'),
    `// généré le ${new Date().toISOString()}\nconst mapData = ${JSON.stringify(mapData, null, 2)};`
  );

  /* Contrôle : un ID configuré qui n'apparaît nulle part = alliance dissoute/recréée */
  const { ALLIANCE_FRONTS } = require('./fronts_common.js');
  const idsPresents = new Set(mapData.alliances.map(a => a.id));
  Object.entries(ALLIANCE_FRONTS).forEach(([front, ids]) => {
    ids.filter(id => !idsPresents.has(Number(id))).forEach(id => {
      console.warn(`⚠️  ID ${id} (front « ${front} ») introuvable sur le serveur — alliance dissoute ? Vérifiez avec : node find_alliance_id.js`);
    });
  });

  const nbEnnemis = mapData.alliances.filter(a => a.front === 'ennemi').length;
  const nbRose    = mapData.alliances.filter(a => a.front === 'ennemi_rose').length;
  const nbAllies  = mapData.alliances.filter(a => a.front === 'allie').length;
  console.log(`✅ mapData.js : ${mapData.temples.length} temples, ${mapData.alliances.length} alliances (${nbEnnemis} rouges, ${nbRose} roses, ${nbAllies} alliées), ${mapData.players.length} joueurs.`);
})().catch(err => { console.error(err); process.exit(1); });

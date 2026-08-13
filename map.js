#!/usr/bin/env node
/**
 * build_grepolis_mapdata.js
 * -------------------------
 * Génère mapData.js pour le monde fr184.
 * Contenu exporté :
 *   const mapData = {
 *     alliances: [ { id, name, front, towns:[{x,y},…] }, … ],
 *     players  : [ { id, name, alliance_id, towns:[{x,y},…] }, … ],
 *     temples  : [ { id, x, y, name, bonus, type, ... }, … ]
 *   };
 *
 * front vaut 'ennemi', 'allie' ou 'neutre' selon la liste ci-dessous.
 */

const http  = require('node:http');
const https = require('node:https');
const fs    = require('node:fs');
const zlib  = require('node:zlib');
const rl    = require('node:readline');
const path  = require('node:path');

const WORLD = 'fr184';
const BASE  = `http://${WORLD}.grepolis.com/data`;
const FILES = {
  players   : 'players.txt.gz',
  alliances : 'alliances.txt.gz',
  towns     : 'towns.txt.gz',
};
const { staticTemples } = require('./temples_static.js');

/* ───────────────────────── fronts d'alliances ───────────────────────── */
/* Appariement par ID (et non par nom) : un renommage d'alliance n'a aucun
   impact. Voir fronts_common.js pour la configuration. */
const { frontOf } = require('./fronts_common.js');
/* ───────────────────────────────────────────────────────────────────── */

/* ───────────────────────── helpers ───────────────────────── */
const clean = s => s.replace(/\+/g, ' ');

function download (url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200)
        return reject(new Error(`HTTP ${res.statusCode}`));
      resolve(res);
    }).on('error', reject);
  });
}

function loadCsv (file, parser) {
  return new Promise(async (resolve, reject) => {
    try {
      const stream = (await download(`${BASE}/${file}`)).pipe(zlib.createGunzip());
      const rlif   = rl.createInterface({ input: stream });
      const out    = [];
      rlif.on('line', l => out.push(parser(l.split(',').map(decodeURIComponent))));
      rlif.on('close', () => resolve(out));
      rlif.on('error', reject);
    } catch (e) { reject(e); }
  });
}

/* ───────────────────────── parsers ───────────────────────── */
const parsePlayers   = ([id, name, aid])        => ({ id:+id, name:clean(name), alliance_id:+aid, towns:[] });
const parseAlliances = ([id, name])             => ({ id:+id, name:clean(name), front: frontOf(+id), towns:[] });
const parseTowns     = ([, pid, , x, y])        => ({ player_id:+pid, x:+x, y:+y });

/* ───────────────────────── main ───────────────────────── */
(async () => {
  const [players, alliances, towns] = await Promise.all([
    loadCsv(FILES.players,   parsePlayers),
    loadCsv(FILES.alliances, parseAlliances),
    loadCsv(FILES.towns,     parseTowns),
  ]);

  const playersById   = Object.fromEntries(players.map(p => [p.id, p]));
  const alliancesById = Object.fromEntries(alliances.map(a => [a.id, a]));

  for (const { player_id, x, y } of towns) {
    const p = playersById[player_id];
    if (!p) continue;
    p.towns.push({ x, y });

    const aid = p.alliance_id;
    if (!alliancesById[aid]) {
      alliancesById[aid] = { id: aid, name: `Alliance ${aid}`, front: frontOf(aid), towns: [] };
    }
    alliancesById[aid].towns.push({ x, y });
  }

  const mapData = {
    alliances: Object.values(alliancesById),
    players  : players,
    temples  : staticTemples
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
  console.log(`✅ mapData.js écrit : ${mapData.alliances.length} alliances (${nbEnnemis} rouges, ${nbRose} roses, ${nbAllies} alliées), ${mapData.players.length} joueurs.`);
})().catch(err => { console.error(err); process.exit(1); });

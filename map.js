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
const ALLIANCE_FRONTS = {
  ennemi: [
    'Le Harem de Tippi',
    'antr4x fan club',
    'Fer De Lance',
    'BTVF',
    'BTBF',
  ],
  allie: [
    'huit-neuf',
    '- UNSC -',
    'Bo Zinnc Supremacyx',
    'Finir comme Carlos',
    'Sacré DD',
  ],
};

// normalise un nom d'alliance (accents, casse, espaces) pour une comparaison fiable
function canon(s) {
  return String(s)
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .trim()
    .toLowerCase();
}

const frontByName = new Map();
ALLIANCE_FRONTS.ennemi.forEach(n => frontByName.set(canon(n), 'ennemi'));
ALLIANCE_FRONTS.allie.forEach(n => frontByName.set(canon(n), 'allie'));

function frontOf(name) {
  return frontByName.get(canon(name)) || 'neutre';
}
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
const parseAlliances = ([id, name])             => {
  const cleanName = clean(name);
  return { id:+id, name:cleanName, front: frontOf(cleanName), towns:[] };
};
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
      const name = `Alliance ${aid}`;
      alliancesById[aid] = { id: aid, name, front: frontOf(name), towns: [] };
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

  const nbEnnemis = mapData.alliances.filter(a => a.front === 'ennemi').length;
  const nbAllies  = mapData.alliances.filter(a => a.front === 'allie').length;
  console.log(`✅ mapData.js écrit : ${mapData.alliances.length} alliances (${nbEnnemis} ennemies, ${nbAllies} alliées), ${mapData.players.length} joueurs.`);
})().catch(err => { console.error(err); process.exit(1); });

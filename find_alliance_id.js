#!/usr/bin/env node
/**
 * find_alliance_id.js
 * -------------------
 * Retrouve l'ID d'une alliance à partir d'un nom (même approximatif).
 * Utile quand une alliance est dissoute/recréée et reçoit un nouvel ID.
 *
 *   node find_alliance_id.js "harem"
 *   node find_alliance_id.js            → liste les fronts actuellement configurés
 *
 * Reporter ensuite l'ID trouvé dans fronts_common.js.
 */
const http  = require('node:http');
const https = require('node:https');
const zlib  = require('node:zlib');
const rl    = require('node:readline');
const { ALLIANCE_FRONTS } = require('./fronts_common.js');

const WORLD = 'fr184';
const BASE  = `http://${WORLD}.grepolis.com/data`;

const canon = s => String(s).normalize('NFD').replace(/\p{M}/gu, '').trim().toLowerCase();
const clean = s => s.replace(/\+/g, ' ');

function download(url) {
  return new Promise((resolve, reject) => {
    (url.startsWith('https') ? https : http).get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location)
        return download(res.headers.location).then(resolve).catch(reject);
      if (res.statusCode !== 200) reject(new Error(`HTTP ${res.statusCode}`));
      else resolve(res);
    }).on('error', reject);
  });
}

(async () => {
  const query = process.argv[2];
  const stream = (await download(`${BASE}/alliances.txt.gz`)).pipe(zlib.createGunzip());
  const alliances = [];
  await new Promise((resolve, reject) => {
    rl.createInterface({ input: stream })
      .on('line', l => {
        const [id, name] = l.split(',').map(decodeURIComponent);
        alliances.push({ id: +id, name: clean(name) });
      })
      .on('close', resolve)
      .on('error', reject);
  });

  if (!query) {
    console.log('Fronts actuellement configurés dans fronts_common.js :\n');
    for (const [front, ids] of Object.entries(ALLIANCE_FRONTS)) {
      console.log(`  ${front} :`);
      ids.forEach(id => {
        const a = alliances.find(x => x.id === Number(id));
        console.log(`    ${String(id).padStart(6)}  ${a ? a.name : '⚠️  ID INTROUVABLE sur le serveur (alliance dissoute ?)'}`);
      });
      console.log('');
    }
    console.log(`Astuce : node find_alliance_id.js "nom" pour chercher une alliance.`);
    return;
  }

  const q = canon(query);
  const hits = alliances.filter(a => canon(a.name).includes(q));
  if (!hits.length) {
    console.log(`Aucune alliance ne correspond à « ${query} ».`);
    return;
  }
  console.log(`${hits.length} résultat(s) pour « ${query} » :\n`);
  hits.slice(0, 30).forEach(a => console.log(`  ${String(a.id).padStart(6)}  ${a.name}`));
})().catch(err => { console.error(err); process.exit(1); });

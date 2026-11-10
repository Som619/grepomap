#!/usr/bin/env node
/**
 * chiffrement.js
 * --------------
 * Protection de la carte par mot de passe partagé.
 *
 * Le site publié ne contient plus aucune donnée en clair : mapData.js et temples_static.js
 * restent sur ton PC (ils sont dans .gitignore) et seules leurs versions chiffrées
 * (mapData.enc.json, temples_static.enc.json) sont poussées sur GitHub. La page demande le
 * mot de passe et déchiffre dans le navigateur ; sans lui, les fichiers sont illisibles.
 *
 * Où mettre le mot de passe (jamais dans le dépôt) :
 *   - sur ton PC   : fichier « .map_password » à la racine (une ligne), ou variable MAP_PASSWORD
 *   - sur GitHub   : Settings → Secrets and variables → Actions → secret « MAP_PASSWORD »
 *
 * Changer le mot de passe : modifier .map_password ET le secret GitHub, puis lancer
 *   node chiffrement.js
 * et pousser les deux fichiers .enc.json. Tout le monde devra saisir le nouveau.
 *
 * Format : AES-256-GCM, clé dérivée du mot de passe par PBKDF2-SHA256 (600 000 itérations),
 * contenu compressé (gzip) avant chiffrement. Le sel est conservé d'une génération à l'autre
 * tant que le mot de passe ne change pas, pour que « Rester connecté » continue de marcher.
 */
const crypto = require('node:crypto');
const fs     = require('node:fs');
const path   = require('node:path');
const zlib   = require('node:zlib');

const ITERATIONS = 600000;
const FILES = {
  map     : path.join(__dirname, 'mapData.enc.json'),
  temples : path.join(__dirname, 'temples_static.enc.json'),
};

/** Mot de passe courant (variable MAP_PASSWORD, sinon fichier .map_password), ou null. */
function getPassword() {
  const clean = s => String(s || '').trim().normalize('NFC');
  if (clean(process.env.MAP_PASSWORD)) return clean(process.env.MAP_PASSWORD);
  try { return clean(fs.readFileSync(path.join(__dirname, '.map_password'), 'utf8')) || null; }
  catch { return null; }
}

const deriveKey = (password, salt, iter) =>
  crypto.pbkdf2Sync(Buffer.from(password, 'utf8'), salt, iter, 32, 'sha256');

function encryptText(plain, password, saltB64) {
  const salt = saltB64 ? Buffer.from(saltB64, 'base64') : crypto.randomBytes(16);
  const iv   = crypto.randomBytes(12);
  const c    = crypto.createCipheriv('aes-256-gcm', deriveKey(password, salt, ITERATIONS), iv);
  // le tag d'authentification est placé à la suite du chiffré : c'est ce qu'attend WebCrypto
  const data = Buffer.concat([c.update(zlib.gzipSync(Buffer.from(plain, 'utf8'))), c.final(), c.getAuthTag()]);
  return {
    v: 1, kdf: 'PBKDF2-SHA256', iter: ITERATIONS, gzip: true,
    salt: salt.toString('base64'), iv: iv.toString('base64'), data: data.toString('base64'),
  };
}

function decryptObject(enc, password) {
  const raw = Buffer.from(enc.data, 'base64');
  const d   = crypto.createDecipheriv('aes-256-gcm',
    deriveKey(password, Buffer.from(enc.salt, 'base64'), enc.iter), Buffer.from(enc.iv, 'base64'));
  d.setAuthTag(raw.subarray(raw.length - 16));
  const out = Buffer.concat([d.update(raw.subarray(0, raw.length - 16)), d.final()]);
  return (enc.gzip ? zlib.gunzipSync(out) : out).toString('utf8');
}

/** Lit un fichier chiffré. Lève une erreur si le mot de passe est mauvais. */
function readEncrypted(file, password) {
  return decryptObject(JSON.parse(fs.readFileSync(file, 'utf8')), password);
}

/** Écrit `plain` chiffré dans `file` (en gardant le sel existant si le mot de passe est le même). */
function writeEncrypted(file, plain, password) {
  let salt = null;
  try {
    const old = JSON.parse(fs.readFileSync(file, 'utf8'));
    decryptObject(old, password);          // même mot de passe → on garde le sel
    salt = old.salt;
  } catch { /* pas de fichier, ou mot de passe changé → nouveau sel */ }
  const enc = encryptText(plain, password, salt);
  if (decryptObject(enc, password) !== plain) throw new Error(`Autocontrôle du chiffrement échoué pour ${file}`);
  fs.writeFileSync(file, JSON.stringify(enc) + '\n');
}

module.exports = { FILES, getPassword, readEncrypted, writeEncrypted };

/* ---- en ligne de commande : (re)chiffre les fichiers en clair présents sur le PC ---- */
if (require.main === module) {
  const password = getPassword();
  if (!password) {
    console.error('❌ Aucun mot de passe : crée le fichier .map_password (une ligne) ou définis MAP_PASSWORD.');
    process.exit(1);
  }
  let n = 0;
  if (fs.existsSync(path.join(__dirname, 'temples_static.js'))) {
    const { staticTemples } = require('./temples_static.js');
    writeEncrypted(FILES.temples, JSON.stringify(staticTemples), password);
    console.log(`✅ temples_static.enc.json (${staticTemples.length} temples)`); n++;
  }
  if (fs.existsSync(path.join(__dirname, 'mapData.js'))) {
    const txt = fs.readFileSync(path.join(__dirname, 'mapData.js'), 'utf8');
    const data = JSON.parse(txt.slice(txt.indexOf('{'), txt.lastIndexOf('}') + 1));
    if (!data.generatedAt) { const m = txt.match(/g[ée]n[ée]r[ée] le (\S+)/); if (m) data.generatedAt = m[1]; }
    writeEncrypted(FILES.map, JSON.stringify(data), password);
    console.log(`✅ mapData.enc.json (${(data.temples || []).length} temples, ${(data.players || []).length} joueurs)`); n++;
  }
  if (!n) console.log('ℹ️  Rien à chiffrer : ni temples_static.js ni mapData.js sur ce PC.');
}

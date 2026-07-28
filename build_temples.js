// build_temples.js
// Source des données : newtemple.xlsx (liste complète des temples du monde)
//                     + newtemplejoue.xlsx (temples ciblés/joués par l'alliance)
const fs   = require('fs');
const XLSX = require('xlsx');

/* --------------------- sérialisation JS jolie -------------------------- */
function toJsLiteral(v, indent = 0) {
  const pad = ' '.repeat(indent);

  if (Array.isArray(v)) {
    return '[\n' +
      v.map(e => pad + '  ' + toJsLiteral(e, indent + 2)).join(',\n') +
      '\n' + pad + ']';
  }
  if (v && typeof v === 'object') {
    return '{\n' +
      Object.entries(v).map(([k, val]) => {
        const key = /^[a-zA-Z_$][\w$]*$/.test(k) ? k : JSON.stringify(k);
        return pad + '  ' + key + ': ' + toJsLiteral(val, indent + 2);
      }).join(',\n') +
      '\n' + pad + '}';
  }
  if (typeof v === 'string') {
    return `'${v.replace(/\\/g, '\\\\').replace(/'/g, '\\\'')}'`;
  }
  return String(v); // number, boolean, null…
}
/* ---------------------------------------------------------------------- */

(() => {
  /* ---- 1) lecture de la liste complète des temples -------------------- */
  const wbAll    = XLSX.readFile('newtemple.xlsx');
  const sheetAll = wbAll.Sheets['Listing PT'];
  const rowsAll  = XLSX.utils.sheet_to_json(sheetAll, { defval: '' });

  /* ---- 2) lecture des temples ciblés / joués par l'alliance ------------ */
  const wbJoue    = XLSX.readFile('newtemplejoue.xlsx');
  const sheetJoue = wbJoue.Sheets['PT joués'];
  const rowsJoue  = XLSX.utils.sheet_to_json(sheetJoue, { defval: '' });

  // index des temples joués par ID, pour fusion rapide
  const joueParId = new Map();
  rowsJoue.forEach(r => {
    if (r.ID === '') return;
    joueParId.set(+r.ID, {
      type      : String(r.Owner || '').trim(),           // catégorie : Def / Off terr / Off nav / Cag / Portail / Prod
      typeCourt : String(r['Effet réduit'] || '').trim(), // libellé court : '2% def all', '15% archer', …
    });
  });

  /* ---- 3) fusion → objets "temple" ------------------------------------ */
  const temples = rowsAll
    .filter(r => r.ID !== '')
    .map(r => {
      const joue = joueParId.get(+r.ID);
      return {
        id        : +r.ID,                 // ID
        x         : +r.X,                  // X
        y         : +r.Y,                  // Y
        name      : r.Nom,                 // Nom
        bonus     : r.Effet,                // Effet (description complète)
        type      : joue ? joue.type      : '', // catégorie (Def/Off terr/Off nav/Cag/Portail/Prod), vide si non ciblé
        typeCourt : joue ? joue.typeCourt : '', // libellé court, vide si non ciblé
        size      : 'small',
        owner     : 0,
        contest   : 'none',
        focus     : !!joue,                // true si présent dans newtemplejoue.xlsx
      };
    });

  /* ---- 4) tri (facultatif) ------------------------------------------- */
  temples.sort((a, b) => a.id - b.id);

  const nbJoues = temples.filter(t => t.focus).length;

  /* ---- 5) écriture du fichier JS ------------------------------------- */
  fs.writeFileSync(
    'temples_static.js',
    '// généré automatiquement par build_temples.js\n' +
    '// source : newtemple.xlsx (liste complète) + newtemplejoue.xlsx (temples ciblés)\n' +
    'const staticTemples = ' + toJsLiteral(temples, 0) + ';\n\n' +
    'module.exports = { staticTemples };'
  );

  console.log(`✅ temples_static.js généré (${temples.length} temples au total, dont ${nbJoues} marqués/ciblés).`);
})();

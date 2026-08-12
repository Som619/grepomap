// build_temples.js
// Source des données : newtemple.xlsx (liste complète des temples du monde, 150 temples)
//                     + newtemplejoue.xlsx (55 temples déjà catégorisés manuellement)
//
// Chaque temple reçoit une catégorie parmi 8 : 'off nav', 'off terr', 'portail',
// 'def', 'cout', 'duree', 'ressources', 'special'.
// - Pour les temples présents dans newtemplejoue.xlsx, la catégorie vient de la colonne Owner.
// - Pour TOUS les autres (non catégorisés à la main), la catégorie est déduite automatiquement
//   du texte du bonus (colonne Effet) via une reconnaissance de mots-clés — c'est une estimation,
//   pas une donnée vérifiée à la main comme pour les 55 premiers.
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

/* ---- déduction automatique de la catégorie à partir du texte du bonus ---
   Utilisée (a) en repli pour les temples absents de newtemplejoue.xlsx, et
   (b) pour les temples marqués "Poubelle" (rejetés de la liste de ciblage,
   mais on veut tout de même leur vraie catégorie de bonus pour la couleur). */
function guessBucket(bonus) {
  const b = String(bonus || '').toLowerCase();
  if (b.includes('portail')) return 'portail';
  if (b.includes('defensive') && !b.includes('offensive')) return 'def';
  if (/(offensive|attaque)/.test(b)) {
    return /(bateaux-feux|trieres|sirenes|navales|navale)/.test(b) ? 'off nav' : 'off terr';
  }
  if (/(duree|durees)/.test(b)) return 'duree';        // réduction des délais de recrutement (terr/nav)
  if (/(cout|couts)/.test(b))   return 'cout';          // réduction des coûts de recrutement (terr/nav)
  if (b.includes('production')) return 'ressources';   // production de ressources (bois/pierre/argent)
  return 'special'; // effets particuliers : mariage, appel de la mer, retour des enfers, fureur d'Ares…
}

/* ---- pour les temples "Prod" de newtemplejoue.xlsx, l'Owner ne distingue pas coût/délai/
      ressource — on précise toujours à partir du texte du bonus ---- */
function refineProdBucket(bonus) {
  const b = guessBucket(bonus);
  return (b === 'cout' || b === 'duree' || b === 'ressources') ? b : 'cout'; // repli : coût par défaut
}

/* ---- normalise la catégorie "Owner" de newtemplejoue.xlsx vers un bucket ---- */
function bucketFromOwner(owner, bonus) {
  const o = String(owner || '').trim().toLowerCase();
  if (o === 'off nav')   return 'off nav';
  if (o === 'off terr')  return 'off terr';
  if (o === 'portail' || o === 'portail 2') return 'portail';
  if (o === 'def')       return 'def';
  if (o === 'prod')      return refineProdBucket(bonus); // 'cout' / 'duree' / 'ressources' selon le texte du bonus
  if (o === 'poubelle')  return guessBucket(bonus); // rejeté du ciblage, mais on garde sa vraie catégorie de bonus
  return guessBucket(bonus); // valeur Owner inattendue → filet de sécurité sur le texte du bonus
}

(() => {
  /* ---- 1) lecture de la liste complète des temples -------------------- */
  const wbAll    = XLSX.readFile('newtemple.xlsx');
  const sheetAll = wbAll.Sheets['Listing PT'];
  const rowsAll  = XLSX.utils.sheet_to_json(sheetAll, { defval: '' });

  /* ---- 2) lecture des temples déjà catégorisés à la main --------------- */
  const wbJoue    = XLSX.readFile('newtemplejoue.xlsx');
  const sheetJoue = wbJoue.Sheets['PT joués'];
  const rowsJoue  = XLSX.utils.sheet_to_json(sheetJoue, { defval: '' });

  const joueParId = new Map();
  rowsJoue.forEach(r => {
    if (r.ID === '') return;
    joueParId.set(+r.ID, {
      owner     : String(r.Owner || '').trim(),            // Def / Off terr / Off nav / Portail / Portail 2 / Prod / Poubelle
      typeCourt : String(r['Effet réduit'] || '').trim(),  // libellé court : '2% def all', '8% bf', …
    });
  });

  /* ---- 3) fusion → objets "temple" ------------------------------------ */
  const temples = rowsAll
    .filter(r => r.ID !== '')
    .map(r => {
      const joue    = joueParId.get(+r.ID);
      const isSecondaire = !!(joue && joue.owner.toLowerCase() === 'poubelle');
      return {
        id       : +r.ID,
        x        : +r.X,
        y        : +r.Y,
        name     : r.Nom,
        bonus    : r.Effet,
        type     : joue ? joue.typeCourt : '',                  // libellé court si connu
        category : joue ? bucketFromOwner(joue.owner, r.Effet)   // catégorie normalisée : off nav / off terr / portail / def / prod / special
                         : guessBucket(r.Effet),                  // estimée pour les temples non catégorisés à la main
        guessed  : !joue,                                        // true = catégorie devinée automatiquement, pas vérifiée
        size     : 'small',
        owner    : 0,
        contest  : 'none',
        focus    : !!joue,                                       // true si présent dans newtemplejoue.xlsx (cible principale OU secondaire)
        secondary: isSecondaire,                                  // true = cible secondaire ("Poubelle") — priorité moindre mais toujours une cible
      };
    });

  temples.sort((a, b) => a.id - b.id);

  const nbCatManuelle = temples.filter(t => !t.guessed).length;
  const nbDevines     = temples.filter(t => t.guessed).length;
  const nbFocus       = temples.filter(t => t.focus && !t.secondary).length;
  const nbSecondaire  = temples.filter(t => t.secondary).length;

  /* ---- 4) écriture du fichier JS ------------------------------------- */
  fs.writeFileSync(
    'temples_static.js',
    '// généré automatiquement par build_temples.js\n' +
    '// source : newtemple.xlsx (liste complète) + newtemplejoue.xlsx (catégories vérifiées)\n' +
    'const staticTemples = ' + toJsLiteral(temples, 0) + ';\n\n' +
    'module.exports = { staticTemples };'
  );

  console.log(`✅ temples_static.js généré : ${temples.length} temples au total.`);
  console.log(`   - ${nbCatManuelle} avec catégorie vérifiée (newtemplejoue.xlsx)`);
  console.log(`   - ${nbDevines} avec catégorie devinée automatiquement (à partir du texte du bonus)`);
  console.log(`   - ${nbFocus} cibles principales, ${nbSecondaire} cibles secondaires ("Poubelle")`);
})();

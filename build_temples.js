// build_temples.js  —  monde fr187
// ---------------------------------------------------------------------------
// Source principale : newtemple.xlsx (liste complète des temples du monde).
//   Colonnes attendues : ID, X, Y, Nom, Mer, Effet, Owner, Effet réduit
//
// Source optionnelle : newtemplejoue.xlsx (temples ciblés, colonnes Owner et
//   « Effet réduit »). Si le fichier est absent, le script tourne quand même :
//   aucun temple n'est alors marqué comme cible, mais tous sont catégorisés
//   et colorés normalement.
//
// La colonne Owner décide du ciblage :
//   - vide              → temple non ciblé
//   - "Poubelle"        → cible secondaire (anneau jaune)
//   - toute autre valeur→ cible principale (anneau vert)
//
// Catégories possibles : 'off nav', 'portail', 'def', 'cout', 'duree',
// 'ressources', 'special', et pour l'Offensif Terrestre : 'ot_group1'
// (Cavaliers/Contondant/Griffons), 'ot_group2' (Manticores/Armes Blanche/Chars),
// 'off_autres' (tout le reste).
// Quand Owner est vide, la catégorie est déduite du texte du bonus — c'est une
// estimation automatique (champ `guessed: true`), pas une donnée vérifiée.
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

/* ---- lecture d'un classeur sans dépendre du nom de l'onglet ------------
   Le nom de feuille change d'un export à l'autre ('Listing PT', 'Feuille 1',
   'PT joués'…). On prend la feuille demandée si elle existe, sinon la première. */
function readSheet(file, preferredNames = []) {
  const wb = XLSX.readFile(file);
  const name = preferredNames.find(n => wb.Sheets[n]) || wb.SheetNames[0];
  return XLSX.utils.sheet_to_json(wb.Sheets[name], { defval: '' });
}

/* ---- éclate "off terr" en sous-catégories regroupées ------------------- */
function refineOffTerrBucket(bonus) {
  const b = String(bonus || '').toLowerCase();
  // Groupe 1 : Cavaliers / Armes Contondant / Griffons
  if (/cavalier|contondant|griffon/.test(b)) return 'ot_group1';
  // Groupe 2 : Manticores / Armes Blanche / Chars
  if (/manticore|blanche|chars/.test(b))     return 'ot_group2';
  // Reste de l'Offensif Terrestre (Erinyes, Frondeurs, Centaures, Hydres,
  // Satyres, Méduses, non mythiques, Force héroïque, générique…)
  return 'off_autres';
}

function guessBucket(bonus) {
  const b = String(bonus || '').toLowerCase();
  if (b.includes('portail')) return 'portail';
  if (b.includes('defensive') && !b.includes('offensive')) return 'def';
  if (/(offensive|attaque)/.test(b)) {
    if (/(bateaux-feux|trieres|sirenes|navales|navale)/.test(b)) return 'off nav';
    return refineOffTerrBucket(b);
  }
  if (/(duree|durees)/.test(b)) return 'duree';        // délais de recrutement (terr/nav)
  if (/(cout|couts)/.test(b))   return 'cout';          // coûts de recrutement (terr/nav)
  if (b.includes('production')) return 'ressources';   // production de ressources
  return 'special'; // mariage, appel de la mer, fureur d'Arès, vent favorable…
}

/* ---- pour les temples "Prod", l'Owner ne distingue pas coût/délai/ressource :
      on précise toujours à partir du texte du bonus ---- */
function refineProdBucket(bonus) {
  const b = guessBucket(bonus);
  return (b === 'cout' || b === 'duree' || b === 'ressources') ? b : 'cout';
}

/* ---- normalise la valeur "Owner" vers une catégorie -------------------- */
function bucketFromOwner(owner, bonus) {
  const o = String(owner || '').trim().toLowerCase();
  if (o === 'off nav')   return 'off nav';
  if (o === 'off terr')  return refineOffTerrBucket(bonus);
  if (o === 'portail' || o === 'portail 2') return 'portail';
  if (o === 'def')       return 'def';
  if (o === 'prod')      return refineProdBucket(bonus);
  if (o === 'poubelle')  return guessBucket(bonus); // secondaire, mais vraie couleur de bonus
  return guessBucket(bonus); // valeur inattendue → filet de sécurité sur le texte
}

(() => {
  /* ---- 1) liste complète des temples --------------------------------- */
  const rowsAll = readSheet('newtemple.xlsx', ['Listing PT', 'Feuille 1']);

  /* ---- 2) temples ciblés (facultatif) --------------------------------- */
  const JOUE_FILE = 'newtemplejoue.xlsx';
  const joueParId = new Map();
  let joueTrouve = false;

  if (fs.existsSync(JOUE_FILE)) {
    joueTrouve = true;
    readSheet(JOUE_FILE, ['PT joués', 'Feuille 1']).forEach(r => {
      if (r.ID === '' || r.ID == null) return;
      joueParId.set(+r.ID, {
        owner     : String(r.Owner || '').trim(),
        typeCourt : String(r['Effet réduit'] || '').trim(),
      });
    });
  }

  /* ---- 3) fusion → objets "temple" ------------------------------------ */
  const temples = rowsAll
    .filter(r => r.ID !== '' && r.ID != null)
    .map(r => {
      const joue = joueParId.get(+r.ID);

      // Owner : priorité au fichier des temples joués, sinon colonne du fichier principal
      const owner = (joue && joue.owner) || String(r.Owner || '').trim();
      // Libellé court : idem, avec repli sur le fichier principal (rempli pour tous)
      const typeCourt = (joue && joue.typeCourt) || String(r['Effet réduit'] || '').trim();

      const estCible      = owner !== '';
      const estSecondaire = owner.toLowerCase() === 'poubelle';

      return {
        id       : +r.ID,
        x        : +r.X,
        y        : +r.Y,
        name     : r.Nom,
        sea      : r.Mer !== '' && r.Mer != null ? +r.Mer : null,
        bonus    : r.Effet,
        type     : typeCourt,                                    // ex. '2% def all', '8% cont'
        category : estCible ? bucketFromOwner(owner, r.Effet)
                            : guessBucket(r.Effet),
        guessed  : !estCible,        // true = catégorie déduite du bonus, non vérifiée
        size     : 'small',
        owner    : 0,
        contest  : 'none',
        focus    : estCible,         // cible principale OU secondaire
        secondary: estSecondaire,    // cible secondaire ("Poubelle")
      };
    });

  temples.sort((a, b) => a.id - b.id);

  const nbVerifie    = temples.filter(t => !t.guessed).length;
  const nbDevine     = temples.filter(t => t.guessed).length;
  const nbPrincipale = temples.filter(t => t.focus && !t.secondary).length;
  const nbSecondaire = temples.filter(t => t.secondary).length;

  /* ---- 4) écriture ---------------------------------------------------- */
  fs.writeFileSync(
    'temples_static.js',
    '// généré automatiquement par build_temples.js\n' +
    '// source : newtemple.xlsx' + (joueTrouve ? ' + newtemplejoue.xlsx' : '') + '\n' +
    'const staticTemples = ' + toJsLiteral(temples, 0) + ';\n\n' +
    'module.exports = { staticTemples };'
  );

  console.log(`✅ temples_static.js généré : ${temples.length} temples au total.`);
  if (!joueTrouve) {
    console.log(`   ℹ️  ${JOUE_FILE} absent — aucun temple marqué comme cible.`);
    console.log(`      Les 150 temples sont affichés et colorés normalement.`);
  }
  console.log(`   - ${nbVerifie} avec catégorie vérifiée (colonne Owner renseignée)`);
  console.log(`   - ${nbDevine} avec catégorie déduite du texte du bonus`);
  console.log(`   - ${nbPrincipale} cibles principales, ${nbSecondaire} cibles secondaires ("Poubelle")`);
})();

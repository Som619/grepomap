/**
 * grands_temples.js
 * -----------------
 * Les 8 grands temples (phase « grands temples » d'Olympus), un par divinité.
 * Les BONUS sont fixes (wiki officiel Grepolis) : il suffit de renseigner, pour chaque
 * temple, son nom, ses coordonnées et son ID (visible dans le BBCode [temple]ID[/temple]).
 * Un temple sans coordonnées (x/y = 0) n'est pas affiché.
 *
 * Utilisé par fr180.js / map.js : les grands temples sont ajoutés à mapData.temples.
 */

/* Bonus par divinité (source : wiki.fr.grepolis.com — « Olympus : Bonus des petits
   temples et des grands temples »). Chaque grand temple donne aussi +50 population. */
const GOD_BONUSES = {
  aphrodite: { label: 'Aphrodite', bonus: [
    'Population +50',
    'Coût en faveur des unités mythiques −20 %',
    'Festival caritatif et Marche triomphale : coût −25 %',
  ]},
  ares: { label: 'Arès', bonus: [
    'Population +50',
    'Vitesse de toutes les unités +15 %',
    'Attaque des unités navales +10 %',
    'Sacrifice : génération de fureur +50 %',
  ]},
  artemis: { label: 'Artémis', bonus: [
    'Population +50',
    'Coût de recrutement −40 %',
    'Illusion : −20 % de défense sur la ville cible à son arrivée (1 h)',
  ]},
  athena: { label: 'Athéna', bonus: [
    'Population +50',
    'Production de faveur +20 %',
    'Force héroïque : attaque de toutes les unités +12 %',
  ]},
  hades: { label: 'Hadès', bonus: [
    'Population +50',
    'Attaque/défense des unités non mythiques +10 %',
    'Peste : temps de recrutement de la cible +75 %',
  ]},
  hera: { label: 'Héra', bonus: [
    'Population +50',
    'Temps de recrutement de toutes les unités −40 %',
    'Satisfaction : durée du festival −25 %',
  ]},
  poseidon: { label: 'Poséidon', bonus: [
    'Population +50',
    'Attaque/défense des unités navales (hors mythiques) +15 %',
    'Tremblement de terre : recrutement naval de la cible +75 % (2 h)',
  ]},
  zeus: { label: 'Zeus', bonus: [
    'Population +50',
    'Attaque des unités mythiques +15 %',
    'Défense des unités navales +10 %',
    'Éclair : −15 % à −40 % de faveur sur la ville cible',
  ]},
};

/* ─── Grands temples de fr184 (un par divinité) ──────────────────────────── */
const GRANDS_TEMPLES = [
  { god: 'aphrodite', id: 24896, name: 'Artanes',    x: 652, y: 602 },
  { god: 'ares',      id: 24903, name: 'Tragana',    x: 680, y: 459 },
  { god: 'artemis',   id: 24902, name: 'Nisara',     x: 602, y: 344 },
  { god: 'athena',    id: 24898, name: 'Eleutherna', x: 395, y: 655 },
  { god: 'hades',     id: 24901, name: 'Misenum',    x: 463, y: 316 },
  { god: 'hera',      id: 24900, name: 'Kastoria',   x: 344, y: 396 },
  { god: 'poseidon',  id: 24899, name: 'Iolcus',     x: 316, y: 536 },
  { god: 'zeus',      id: 24897, name: 'Bythinion',  x: 534, y: 680 },
];
/* ─────────────────────────────────────────────────────────────────────────── */

/** Grands temples au format de mapData.temples (seuls ceux qui ont des coordonnées). */
function grandTemples() {
  return GRANDS_TEMPLES.filter(t => t.x && t.y).map(t => {
    const g = GOD_BONUSES[t.god];
    if (!g) throw new Error(`grands_temples.js : divinité inconnue « ${t.god} »`);
    return {
      id: t.id || `gt-${t.god}`,
      x: t.x, y: t.y,
      name: t.name || `Grand temple de ${g.label}`,
      god: g.label,
      bonus: g.bonus.join('\n'),
      type: `Grand temple ${g.label}`,
      category: 'grand',
      guessed: false,
      size: 'large',
      grand: true,
      owner: 0,
      contest: 'none',
      focus: false,
      secondary: false,
    };
  });
}

module.exports = { GOD_BONUSES, GRANDS_TEMPLES, grandTemples };

/**
 * fronts_common.js
 * ----------------
 * Définition des fronts d'alliances, appariée par **ID** et non par nom :
 * un changement de nom d'alliance n'a donc aucun impact.
 *
 * Les noms indiqués en commentaire ne servent que de repère humain — ils ne
 * sont jamais utilisés pour l'appariement.
 *
 * Si une alliance est dissoute puis recréée, elle reçoit un NOUVEL ID côté
 * Grepolis : dans ce cas seulement, il faut mettre à jour l'ID ci-dessous.
 * Pour retrouver un ID : node find_alliance_id.js "nom approximatif"
 */

const ALLIANCE_FRONTS = {
  ennemi: [            // « Rouge »
    2,                 // TWIX GOLD
    471,               // TWIX GOLD PRICE
    80,                // antr4x fan club
    301,               // Le Harem de Tippi
    81,                // CARTRUCHE
  ],
  allie: [             // « Alliés »
    420,               // Finir comme Carlos
    121,               // huit-neuf
    856,               // Bienveillance Max
    833,               // Bim Bam Boum
    209,               // Bo Zinnc Supremacyx
    118,               // - UNSC -
    173,               // Maman j'ai raté mon BC
  ],
};

/* Rôle affiché sur la carte (légende + infobulles). Facultatif. */
const ALLIANCE_ROLES = {
  420: 'PROD',
  121: 'OT / Contondant',
  856: 'BF / Jet',
  833: 'DEF',
  209: 'Portail',
  118: 'Portail 2',
};

/* Notre alliance (« Z'êtes ici ») : mise en avant sur la carte. */
const HOME_ALLIANCE = 420;   // Finir comme Carlos

/* index ID → front, construit une seule fois */
const frontById = new Map();
for (const [front, ids] of Object.entries(ALLIANCE_FRONTS)) {
  ids.forEach(id => frontById.set(Number(id), front));
}

/** Renvoie le front d'une alliance à partir de son ID. */
function frontOf(id) {
  return frontById.get(Number(id)) || 'neutre';
}

/** Complète une alliance de mapData : front, rôle éventuel, et marqueur « notre alliance ». */
function decorateAlliance(a) {
  a.front = frontOf(a.id);
  const role = ALLIANCE_ROLES[a.id];
  if (role) a.role = role; else delete a.role;
  if (Number(a.id) === HOME_ALLIANCE) a.home = true; else delete a.home;
  return a;
}

module.exports = { ALLIANCE_FRONTS, ALLIANCE_ROLES, HOME_ALLIANCE, frontOf, decorateAlliance };

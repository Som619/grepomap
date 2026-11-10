/**
 * fronts_common.js
 * ----------------
 * Définition des fronts d'alliances (monde fr187), appariée par **ID** et non par nom :
 * ⚠️ Les IDs sont propres à CHAQUE monde : ceux de fr184 ont été retirés au passage à fr187.
 *
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
  ennemi: [            // « Ennemis » (rouge)
    // à compléter : node find_alliance_id.js "nom"
  ],
  allie: [             // « Alliés » (cyan)
  ],
};

/* Rôle affiché sur la carte (légende + infobulles). Facultatif. Ex. : 123: 'PROD', */
const ALLIANCE_ROLES = {
};

/* Notre alliance (« Z'êtes ici ») : ★ dans la légende et l'infobulle. null = aucune. */
const HOME_ALLIANCE = null;

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

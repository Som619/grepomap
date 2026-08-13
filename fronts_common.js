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
    301,               // Le Harem de Tippi
    80,                // antr4x fan club
    81,                // CARTRUCHE
  ],
  ennemi_rose: [       // « Rose »
    79,                // BTBF
    263,               // BTVF
  ],
  allie: [             // « Alliés »
    121,               // huit-neuf
    118,               // - UNSC -
    209,               // Bo Zinnc Supremacyx
    420,               // Finir comme Carlos
    25,                // Sacré DD
  ],
};

/* index ID → front, construit une seule fois */
const frontById = new Map();
for (const [front, ids] of Object.entries(ALLIANCE_FRONTS)) {
  ids.forEach(id => frontById.set(Number(id), front));
}

/** Renvoie le front d'une alliance à partir de son ID. */
function frontOf(id) {
  return frontById.get(Number(id)) || 'neutre';
}

module.exports = { ALLIANCE_FRONTS, frontOf };

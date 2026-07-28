// généré automatiquement par build_temples.js
// source : newtemple.xlsx (liste complète) + newtemplejoue.xlsx (temples ciblés)
const staticTemples = [
  {
    id: 1,
    x: 518,
    y: 506,
    name: 'Philippopolis',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 2,
    x: 533,
    y: 492,
    name: 'Juktas',
    bonus: 'Augmente la puissance offensive de Sirenes de 8%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 3,
    x: 513,
    y: 534,
    name: 'Argos',
    bonus: 'Portail vers Olympus',
    type: 'Portail',
<<<<<<< Updated upstream
    typeCourt: 'Portail',
=======
    category: 'Portail',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 4,
    x: 517,
    y: 464,
    name: 'Menelaion',
    bonus: 'Reduire tous les couts de recrutement d\'unites navales de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 5,
    x: 463,
    y: 527,
    name: 'Modon',
    bonus: 'Force heroique augmente l\'attaque de toutes les unites de 3%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 6,
    x: 567,
    y: 508,
    name: 'Asine',
    bonus: 'Augmente la valeur defensive des Cerberes de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 7,
    x: 479,
    y: 455,
    name: 'Lampsaque',
    bonus: 'Augmente la valeur offensive de toutes les unites terrestres non mythiques de 6%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '6% non-um',
=======
    type: '6% non-um',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 8,
    x: 449,
    y: 507,
    name: 'Kos',
    bonus: 'Augmente la valeur offensive de toutes les unites de 3%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 9,
    x: 441,
    y: 483,
    name: 'Cnidus',
    bonus: 'Augmente la valeur defensive des Biremes de 8%',
<<<<<<< Updated upstream
    type: 'Cag',
    typeCourt: '8% bibi',
=======
    type: '8% bibi',
    category: 'Cag',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 10,
    x: 565,
    y: 461,
    name: 'Amnisos',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 11,
    x: 429,
    y: 541,
    name: 'Bouthroton',
    bonus: 'Reduire tous les couts de recrutement d\'unites navales de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 12,
    x: 441,
    y: 440,
    name: 'Rhypes',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 13,
    x: 576,
    y: 484,
    name: 'Hierapetra',
    bonus: 'Augmente la valeur defensive des Archers de 15%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 14,
    x: 480,
    y: 570,
    name: 'Laus',
    bonus: 'Augmente la valeur defensive des Archers de 15%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '15% archer',
=======
    type: '15% archer',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 15,
    x: 498,
    y: 580,
    name: 'Massalia',
    bonus: 'Augmente les valeurs offensive et defensive de Chars de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 16,
    x: 422,
    y: 470,
    name: 'Scione',
    bonus: 'Augmente toutes les valeurs offensives des armes Blanche de 8%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 17,
    x: 534,
    y: 601,
    name: 'Philippi',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 20%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 18,
    x: 452,
    y: 588,
    name: 'Areopoli',
    bonus: 'Augmente les valeurs offensive et defensive de Chars de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 19,
    x: 602,
    y: 543,
    name: 'Thyria',
    bonus: 'Reduire tous les couts de recrutement d\'unites navales de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 20,
    x: 410,
    y: 551,
    name: 'Orestias',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 21,
    x: 577,
    y: 422,
    name: 'Opus',
    bonus: 'Augmente la valeur offensive de toutes les unites de 3%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 22,
    x: 607,
    y: 496,
    name: 'Karyes',
    bonus: 'Portail vers Olympus',
    type: 'Portail',
<<<<<<< Updated upstream
    typeCourt: 'Portail',
=======
    category: 'Portail',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 23,
    x: 397,
    y: 521,
    name: 'Nysa',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 24,
    x: 469,
    y: 396,
    name: 'Cythera',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 25,
    x: 480,
    y: 599,
    name: 'Assus',
    bonus: 'Augmente la puissance offensive de Cavaliers de 10%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '10% cava',
=======
    type: '10% cava',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 26,
    x: 510,
    y: 367,
    name: 'Aspendos',
    bonus: 'Retour des Enfers rend 15% d\'unites en plus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 27,
    x: 586,
    y: 598,
    name: 'Ephyra',
    bonus: 'Augmente la valeur offensive de toutes les unites terrestres non mythiques de 8%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '8% non-um',
=======
    type: '8% non-um',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 28,
    x: 440,
    y: 383,
    name: 'Chamaizi',
    bonus: 'Augmente la valeur defensive de toutes les unites de 2%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 29,
    x: 556,
    y: 378,
    name: 'Marathon',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 30,
    x: 393,
    y: 443,
    name: 'Hemeroskopeion',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 31,
    x: 435,
    y: 609,
    name: 'Masis',
    bonus: 'Augmente la valeur offensive de toutes les unites terrestres non mythiques de 6%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '6% non-um',
=======
    type: '6% non-um',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 32,
    x: 367,
    y: 494,
    name: 'Helorus',
    bonus: 'Augmente la valeur defensive des Biremes de 8%',
<<<<<<< Updated upstream
    type: 'Cag',
    typeCourt: '8% bibi',
=======
    type: '8% bibi',
    category: 'Cag',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 33,
    x: 627,
    y: 515,
    name: 'Anthedon',
    bonus: 'Augmente la valeur offensive de toutes les unites navales de 5%',
<<<<<<< Updated upstream
    type: 'Off nav',
    typeCourt: '5% nav',
=======
    type: '5% nav',
    category: 'Off nav',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 34,
    x: 433,
    y: 408,
    name: 'Agde',
    bonus: 'Augmente l\'effet de l\'appel de la mer de 15%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 35,
    x: 617,
    y: 459,
    name: 'Methumna',
    bonus: 'Augmente le bonus de concentration de la chasseresse de 10% supplementaires',
<<<<<<< Updated upstream
    type: 'Off nav',
    typeCourt: '10% chass',
=======
    type: '10% chass',
    category: 'Off nav',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 36,
    x: 526,
    y: 380,
    name: 'Colosse',
    bonus: 'Reduit tous les couts de recrutement d\'unites terrestres de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 37,
    x: 393,
    y: 610,
    name: 'Knossos',
    bonus: 'Augmente les valeurs offensive et defensive de Centaures de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 38,
    x: 434,
    y: 639,
    name: 'Larissa',
    bonus: 'Avec le Festival Caritatif, le cout de la Marche Triomphale est encore reduit de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 39,
    x: 390,
    y: 419,
    name: 'Nicopolis',
    bonus: 'Augmente la valeur offensive de toutes les unites de 3%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 40,
    x: 640,
    y: 499,
    name: 'Apollonie',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 41,
    x: 347,
    y: 474,
    name: 'Percote',
    bonus: 'Augmente les valeurs offensive et defensive de Centaures de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 42,
    x: 537,
    y: 634,
    name: 'Mallia',
    bonus: 'Reduit toutes les durees de recrutement d\'unites terrestres de 4.5%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 43,
    x: 562,
    y: 642,
    name: 'Lato',
    bonus: 'Augmente la valeur offensive de toutes les unites terrestres non mythiques de 8%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '8% non-um',
=======
    type: '8% non-um',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 44,
    x: 581,
    y: 631,
    name: 'Pseira',
    bonus: 'Reduit tous les couts de recrutement d\'unites terrestres de 10%',
<<<<<<< Updated upstream
    type: 'Prod',
    typeCourt: '10% cout ter',
=======
    type: '10% cout ter',
    category: 'Prod',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 45,
    x: 557,
    y: 354,
    name: 'Thassos',
    bonus: 'Reduire tous les couts de recrutement d\'unites navales de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 46,
    x: 504,
    y: 649,
    name: 'Scyllaeum',
    bonus: 'Augmente les valeurs offensive et defensive de Chars de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 47,
    x: 625,
    y: 582,
    name: 'Siteia',
    bonus: 'Augmente la puissance offensive de Griffons de 8%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '8% griffons',
=======
    type: '8% griffons',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 48,
    x: 372,
    y: 574,
    name: 'Dicaearchia',
    bonus: 'Augmente la valeur offensive de toutes les unites de 3%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 49,
    x: 652,
    y: 519,
    name: 'Lilaea',
    bonus: 'Portail vers Olympus',
    type: 'Portail',
<<<<<<< Updated upstream
    typeCourt: 'Portail',
=======
    category: 'Portail',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 50,
    x: 461,
    y: 639,
    name: 'Nicaea',
    bonus: 'Portail vers Olympus',
    type: 'Portail',
<<<<<<< Updated upstream
    typeCourt: 'Portail',
=======
    category: 'Portail',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 51,
    x: 335,
    y: 519,
    name: 'Khrisafa',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 52,
    x: 361,
    y: 404,
    name: 'Lissus',
    bonus: 'Reduit toutes les durees de recrutement d\'unites terrestres de 4.5%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 53,
    x: 485,
    y: 339,
    name: 'Parium',
    bonus: 'Augmente la puissance offensive de Bateaux-feux de 8%',
<<<<<<< Updated upstream
    type: 'Off nav',
    typeCourt: '8% bf',
=======
    type: '8% bf',
    category: 'Off nav',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 54,
    x: 424,
    y: 338,
    name: 'Dodone',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 55,
    x: 654,
    y: 424,
    name: 'Aenus',
    bonus: 'Augmente la puissance offensive de Frondeurs de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 56,
    x: 637,
    y: 413,
    name: 'Amphipolis',
    bonus: 'Reduit tous les couts de recrutement d\'unites terrestres de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 57,
    x: 588,
    y: 345,
    name: 'Akrillai',
    bonus: 'Augmente la puissance offensive de Griffons de 8%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '8% griffons',
=======
    type: '8% griffons',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 58,
    x: 346,
    y: 431,
    name: 'Olympie',
    bonus: 'Augmente la puissance offensive de Griffons de 8%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '8% griffons',
=======
    type: '8% griffons',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 59,
    x: 324,
    y: 485,
    name: 'Nichoria',
    bonus: 'Avec le Festival Caritatif, le cout de la Marche Triomphale est encore reduit de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 60,
    x: 334,
    y: 543,
    name: 'Didyma',
    bonus: 'Augmente la valeur defensive de toutes les unites de 2%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '2% def all',
=======
    type: '2% def all',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 61,
    x: 667,
    y: 458,
    name: 'Phaselis',
    bonus: 'La generation de fureur avec le sacrifice d\'Ares est augmentee de 15%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 62,
    x: 680,
    y: 512,
    name: 'Pharsale',
    bonus: 'Augmente la valeur defensive de toutes les unites de 2%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '2% def all',
=======
    type: '2% def all',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 63,
    x: 611,
    y: 384,
    name: 'Mouriatadha',
    bonus: 'Reduire tous les couts de recrutement bireme de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 64,
    x: 538,
    y: 677,
    name: 'Therma',
    bonus: 'Portail vers Olympus',
    type: 'Portail',
<<<<<<< Updated upstream
    typeCourt: 'Portail',
=======
    category: 'Portail',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 65,
    x: 393,
    y: 361,
    name: 'Myonia',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 66,
    x: 480,
    y: 678,
    name: 'Gournia',
    bonus: 'Augmente la valeur defensive de toutes les unites de 2%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '2% def all',
=======
    type: '2% def all',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 67,
    x: 304,
    y: 544,
    name: 'Adramyttium',
    bonus: 'Reduire tous les couts de recrutement d\'unites navales de 6%',
<<<<<<< Updated upstream
    type: 'Prod',
    typeCourt: '6% cout nav',
=======
    type: '6% cout nav',
    category: 'Prod',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 68,
    x: 606,
    y: 648,
    name: 'Itanos',
    bonus: 'Portail vers Olympus',
    type: 'Portail',
<<<<<<< Updated upstream
    typeCourt: 'Portail',
=======
    category: 'Portail',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 69,
    x: 440,
    y: 315,
    name: 'Mycenes',
    bonus: 'Augmente toutes les valeurs offensives des armes Contondant de 8%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '8% cont',
=======
    type: '8% cont',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 70,
    x: 690,
    y: 486,
    name: 'Rizinia',
    bonus: 'Augmente la puissance offensive de Bateaux-feux de 8%',
<<<<<<< Updated upstream
    type: 'Off nav',
    typeCourt: '8% bf',
=======
    type: '8% bf',
    category: 'Off nav',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 71,
    x: 492,
    y: 314,
    name: 'Gela',
    bonus: 'Reduire toutes les durees de recrutement d\'unites navales de 4.5%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 72,
    x: 461,
    y: 696,
    name: 'Olous',
    bonus: 'Reduire tous les couts de recrutement d\'unites navales de 6%',
<<<<<<< Updated upstream
    type: 'Prod',
    typeCourt: '6% cout nav',
=======
    type: '6% cout nav',
    category: 'Prod',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 73,
    x: 326,
    y: 602,
    name: 'Mulai',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 74,
    x: 637,
    y: 365,
    name: 'Iasos',
    bonus: 'Augmente la valeur defensive des Combattants a l\'epee de 15%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '15% CE',
=======
    type: '15% CE',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 75,
    x: 634,
    y: 650,
    name: 'Kamares',
    bonus: 'La generation de fureur avec le sacrifice d\'Ares est augmentee de 15%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 76,
    x: 690,
    y: 564,
    name: 'Tragurion',
    bonus: 'Augmente le bonus de concentration de la chasseresse de 10% supplementaires',
<<<<<<< Updated upstream
    type: 'Off nav',
    typeCourt: '10% chass',
=======
    type: '10% chass',
    category: 'Off nav',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 77,
    x: 418,
    y: 666,
    name: 'Helike',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 78,
    x: 319,
    y: 449,
    name: 'Kallithea',
    bonus: 'Augmente la valeur defensive de toutes les unites de 2%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '2% def all',
=======
    type: '2% def all',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 79,
    x: 516,
    y: 682,
    name: 'Artemita',
    bonus: 'Reduire tous les couts de recrutement d\'unites navales de 6%',
<<<<<<< Updated upstream
    type: 'Prod',
    typeCourt: '6% cout nav',
=======
    type: '6% cout nav',
    category: 'Prod',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 80,
    x: 593,
    y: 676,
    name: 'Nagidos',
    bonus: 'Augmente la puissance offensive de Erinyes de 8%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 81,
    x: 362,
    y: 355,
    name: 'Alinda',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 82,
    x: 563,
    y: 684,
    name: 'Thebai',
    bonus: 'Augmente toutes les valeurs offensives des armes De jet de 8%',
<<<<<<< Updated upstream
    type: '',
    typeCourt: '8% arme de jet',
=======
    type: '8% arme de jet',
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 83,
    x: 661,
    y: 616,
    name: 'Doriskos',
    bonus: 'Augmente la puissance offensive de Trieres de 8%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 84,
    x: 532,
    y: 307,
    name: 'Actium',
    bonus: 'Augmente la valeur defensive des Combattants a l\'epee de 15%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '15% CE',
=======
    type: '15% CE',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 85,
    x: 355,
    y: 335,
    name: 'Sklavokampos',
    bonus: 'Portail vers Olympus',
    type: 'Portail',
<<<<<<< Updated upstream
    typeCourt: 'Portail',
=======
    category: 'Portail',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 86,
    x: 658,
    y: 338,
    name: 'Pteleum',
    bonus: 'Augmente la valeur defensive des Combattants a l\'epee de 15%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '15% CE',
=======
    type: '15% CE',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 87,
    x: 708,
    y: 521,
    name: 'Alalia',
    bonus: 'Augmente la valeur offensive de toutes les unites de 3%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 88,
    x: 367,
    y: 660,
    name: 'Kannia',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 89,
    x: 291,
    y: 435,
    name: 'Chalcis',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 90,
    x: 680,
    y: 396,
    name: 'Ialysos',
    bonus: 'Portail vers Olympus',
<<<<<<< Updated upstream
    type: 'Cag',
    typeCourt: 'Portail',
=======
    type: 'Portail',
    category: 'Cag',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 91,
    x: 689,
    y: 614,
    name: 'Myndus',
    bonus: 'Augmente la valeur defensive des Hoplites de 15%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '15% hop',
=======
    type: '15% hop',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 92,
    x: 295,
    y: 462,
    name: 'Trezene',
    bonus: 'Portail vers Olympus',
    type: 'Portail',
<<<<<<< Updated upstream
    typeCourt: 'Portail',
=======
    category: 'Portail',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 93,
    x: 394,
    y: 302,
    name: 'Cebrene',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 94,
    x: 658,
    y: 642,
    name: 'Kasmenai',
    bonus: 'Augmente la valeur offensive de toutes les unites de 3%',
<<<<<<< Updated upstream
    type: 'Off nav',
    typeCourt: '3% off all',
=======
    type: '3% off all',
    category: 'Off nav',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 95,
    x: 701,
    y: 542,
    name: 'Oricos',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 96,
    x: 519,
    y: 706,
    name: 'Amphicaea',
    bonus: 'Avec le Festival Caritatif, le cout de la Marche Triomphale est encore reduit de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 97,
    x: 629,
    y: 327,
    name: 'Cynossema',
    bonus: 'Augmente la puissance offensive de Cavaliers de 10%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '10% cava',
=======
    type: '10% cava',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 98,
    x: 341,
    y: 630,
    name: 'Lamia',
    bonus: 'Augmente les valeurs offensive et defensive de Centaures de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 99,
    x: 552,
    y: 707,
    name: 'Lessa',
    bonus: 'Reduit tous les couts de recrutement d\'unites terrestres de 6%',
<<<<<<< Updated upstream
    type: 'Prod',
    typeCourt: '6% cout ter',
=======
    type: '6% cout ter',
    category: 'Prod',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 100,
    x: 631,
    y: 680,
    name: 'Amyclees',
    bonus: 'Augmente la valeur defensive des Archers de 15%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '15% archer',
=======
    type: '15% archer',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 101,
    x: 619,
    y: 308,
    name: 'Kallipolis',
    bonus: 'Avec le Festival Caritatif, le cout de la Marche Triomphale est encore reduit de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 102,
    x: 706,
    y: 416,
    name: 'Taras',
    bonus: 'Reduit toutes les durees de recrutement d\'unites terrestres de 4.5%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 103,
    x: 281,
    y: 539,
    name: 'Myre',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 104,
    x: 436,
    y: 699,
    name: 'Akroinon',
    bonus: 'Augmente les valeurs offensive et defensive de Hydres de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 105,
    x: 456,
    y: 259,
    name: 'Troie',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 106,
    x: 511,
    y: 252,
    name: 'Morgantina',
    bonus: 'Augmente la puissance offensive de Griffons de 8%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '8% griffons',
=======
    type: '8% griffons',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 107,
    x: 555,
    y: 734,
    name: 'Pavlopetri',
    bonus: 'Augmente la valeur offensive de toutes les unites de 3%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 108,
    x: 279,
    y: 572,
    name: 'Bassae',
    bonus: 'Augmente la valeur defensive des Archers de 15%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '15% archer',
=======
    type: '15% archer',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 109,
    x: 717,
    y: 576,
    name: 'Amaseia',
    bonus: 'Augmente la puissance offensive de Bateaux-feux de 8%',
<<<<<<< Updated upstream
    type: 'Off nav',
    typeCourt: '8% bf',
=======
    type: '8% bf',
    category: 'Off nav',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 110,
    x: 265,
    y: 446,
    name: 'Heraklion',
    bonus: 'Reduit tous les couts de recrutement d\'unites terrestres de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 111,
    x: 740,
    y: 522,
    name: 'Kerkinitida',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 112,
    x: 700,
    y: 393,
    name: 'Copae',
    bonus: 'Portail vers Olympus',
<<<<<<< Updated upstream
    type: 'Cag',
    typeCourt: 'Portail',
=======
    type: 'Portail',
    category: 'Cag',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 113,
    x: 465,
    y: 741,
    name: 'Gorgippia',
    bonus: 'Reduit toutes les durees de recrutement d\'unites terrestres de 4.5%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 114,
    x: 580,
    y: 284,
    name: 'Heraclea',
    bonus: 'Reduit tous les couts de recrutement d\'unites terrestres de 10%',
<<<<<<< Updated upstream
    type: 'Prod',
    typeCourt: '10% cout ter',
=======
    type: '10% cout ter',
    category: 'Prod',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 115,
    x: 423,
    y: 285,
    name: 'Maenace',
    bonus: 'Augmente la puissance offensive de Cavaliers de 10%',
<<<<<<< Updated upstream
    type: 'Off terr',
    typeCourt: '10% cava',
=======
    type: '10% cava',
    category: 'Off terr',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 116,
    x: 654,
    y: 689,
    name: 'Pharae',
    bonus: 'Reduit toutes les durees de recrutement d\'unites terrestres de 4.5%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 117,
    x: 412,
    y: 726,
    name: 'Arginuses',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 118,
    x: 266,
    y: 492,
    name: 'Selinus',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 119,
    x: 688,
    y: 342,
    name: 'Decelie',
    bonus: 'Augmente toutes les valeurs offensives des armes Blanche de 8%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 120,
    x: 383,
    y: 707,
    name: 'Pella',
    bonus: 'Augmente toutes les valeurs offensives des armes Blanche de 8%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 121,
    x: 732,
    y: 487,
    name: 'Kydonia',
    bonus: 'Reduit toutes les durees de recrutement d\'unites terrestres de 4.5%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 122,
    x: 583,
    y: 730,
    name: 'Chytri',
    bonus: 'Reduit tous les couts de recrutement d\'unites terrestres de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 123,
    x: 537,
    y: 276,
    name: 'Akragas',
    bonus: 'Augmente la valeur defensive des Archers de 15%',
<<<<<<< Updated upstream
    type: 'Def',
    typeCourt: '15% archer',
=======
    type: '15% archer',
    category: 'Def',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 124,
    x: 323,
    y: 358,
    name: 'Dioscurias',
    bonus: 'Augmente la puissance offensive de Manticores de 8%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 125,
    x: 357,
    y: 689,
    name: 'Olbia',
    bonus: 'Augmente toutes les valeurs offensives des armes Blanche de 8%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 126,
    x: 531,
    y: 253,
    name: 'Eubea',
    bonus: 'Reduit toutes les durees de recrutement d\'unites terrestres de 4.5%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 127,
    x: 244,
    y: 437,
    name: 'Mukenai',
    bonus: 'Augmente la valeur defensive des Archers de 15%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 128,
    x: 703,
    y: 656,
    name: 'Abydos',
    bonus: 'Reduit tous les couts de recrutement d\'unites terrestres de 10%',
<<<<<<< Updated upstream
    type: 'Prod',
    typeCourt: '10% cout ter',
=======
    type: '10% cout ter',
    category: 'Prod',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 129,
    x: 651,
    y: 280,
    name: 'Epidamnos',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 130,
    x: 281,
    y: 641,
    name: 'Camiros',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 131,
    x: 349,
    y: 291,
    name: 'Pitane',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 132,
    x: 749,
    y: 555,
    name: 'Emporion',
    bonus: 'Augmente la valeur offensive de toutes les unites de 3%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 133,
    x: 399,
    y: 249,
    name: 'Antioche',
    bonus: 'Mariage donne 120 ressources en plus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 134,
    x: 598,
    y: 259,
    name: 'Antipatrea',
    bonus: 'Mariage donne 120 ressources en plus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 135,
    x: 755,
    y: 444,
    name: 'Tenedos',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 136,
    x: 727,
    y: 358,
    name: 'Pydna',
    bonus: 'Augmente la valeur offensive de toutes les unites de 3%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 137,
    x: 769,
    y: 468,
    name: 'Callipolis',
    bonus: 'Augmente la puissance offensive de Manticores de 8%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 138,
    x: 315,
    y: 327,
    name: 'Parthenopolis',
    bonus: 'Augmente la valeur offensive de toutes les unites navales de 5%',
<<<<<<< Updated upstream
    type: 'Off nav',
    typeCourt: '5% nav',
=======
    type: '5% nav',
    category: 'Off nav',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 139,
    x: 533,
    y: 767,
    name: 'Amphigeneia',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 140,
    x: 491,
    y: 765,
    name: 'Thebes',
    bonus: 'Augmente toutes les valeurs offensives des armes Blanche de 8%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 141,
    x: 615,
    y: 723,
    name: 'Stratos',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 142,
    x: 294,
    y: 327,
    name: 'Teos',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 143,
    x: 239,
    y: 505,
    name: 'Same',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 144,
    x: 331,
    y: 712,
    name: 'Aegae',
    bonus: 'Augmente le bonus de concentration de la chasseresse de 10% supplementaires',
<<<<<<< Updated upstream
    type: 'Off nav',
    typeCourt: '10% chass',
=======
    type: '10% chass',
    category: 'Off nav',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: true
  },
  {
    id: 145,
    x: 360,
    y: 717,
    name: 'Delion',
    bonus: 'Augmente la production de bois, de pierre et d\'argent de 10%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 146,
    x: 726,
    y: 627,
    name: 'Gortyn',
    bonus: 'Augmente la valeur defensive de toutes les unites de 2%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 147,
    x: 741,
    y: 600,
    name: 'Naxos',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 148,
    x: 560,
    y: 758,
    name: 'Kelenderis',
    bonus: 'Force heroique augmente l\'attaque de toutes les unites de 3%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 149,
    x: 570,
    y: 241,
    name: 'Delos',
    bonus: 'Portail vers Olympus',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  },
  {
    id: 150,
    x: 743,
    y: 400,
    name: 'Pharos',
    bonus: 'Reduire tous les couts de recrutement d\'unites navales de 6%',
    type: '',
<<<<<<< Updated upstream
    typeCourt: '',
=======
    category: '',
>>>>>>> Stashed changes
    size: 'small',
    owner: 0,
    contest: 'none',
    focus: false
  }
];

module.exports = { staticTemples };
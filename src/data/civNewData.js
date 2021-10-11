import Japanese from "../blasons/CivIcon-Japanese.png";

export const civNewData = [
  {
    id: 1,
    name: "Aztecs",
    population: "6 000 000",
    currency: "quauhtli",
    img_url:
      "https://static.wikia.nocookie.net/ageofempires/images/0/0c/CivIcon-Aztecs.png",
    battlescore: "D",
    army_type: "Infantry & Monk",
    unique_unit: "Jaguar Warrior",
    unique_tech: "Garland Wars",
    team_bonus: "Relics generate +33% gold",
    civilization_bonus: [
      "Villagers carry +5",
      "Military units created 15% faster",
      "+5 Monk hit points for each Monastery technology",
      "Loom free",
    ],
  },

  {
    id: 2,
    name: "Britons",
    population: "2 500 000",
    currency: "pound",
    img_url:
      "https://static.wikia.nocookie.net/ageofempires/images/a/ae/CivIcon-Britons.png",
    battlescore: "B",
    army_type: "Foot Archer",
    unique_unit: "Longbowman",
    unique_tech: "Yeomen",
    team_bonus: "Archery Ranges work 20% faster",
    civilization_bonus: [
      "Town Centers cost -50% wood upon reaching the Castle Age",
      "Foot archers (excluding Skirmishers) have +1 range in Castle Age and +1 in Imperial Age (for +2 total)",
      "Shepherds work 25% faster",
    ],
  },

  {
    id: 3,
    name: "Byzantines",
    population: "9 000 000",
    currency: "solidus",
    img_url:
      "https://static.wikia.nocookie.net/ageofempires/images/2/27/CivIcon-Byzantines.png",
    battlescore: "D",
    army_type: "Defensive",
    unique_unit: "Cataphract",
    unique_tech: "Logistica",
    team_bonus: "Monks +50% heal speed",
    civilization_bonus: [
      "Buildings (except gates) have +10% HP in Dark Age / +20% HP in Feudal Age / +30% in Castle Age / +40% in Imperial Age",
      "Spearman skirmisher and camel lines cost 25% less",
      "Fire Ships attack 20% faster",
      "Imperial Age costs -33%",
      "Town Watch is free",
    ],
  },

  {
    id: 4,
    name: "Celts",
    expansion: "Age of Kings",
    population: " 500 000",
    currency: "statère",
    img_url:
      "https://static.wikia.nocookie.net/ageofempires/images/5/59/CivIcon-Celts.png",
    battlescore: "C",
    army_type: "Infantry",
    unique_unit: "Woad Raider",
    unique_tech: "Furor Celtica",
    team_bonus: "Siege Workshops work 20% faster",
    civilization_bonus: [
      "Infantry moves 15% faster",
      "Lumberjacks work 15% faster",
      "Siege weapons reload 20% faster",
      "Sheep cannot be stolen if within one Celt unit's line of sight",
    ],
  },

  {
    id: 5,
    name: "Chinese",
    population: "103 000 000",
    currency: "bei",
    img_url:
      "https://static.wikia.nocookie.net/ageofempires/images/c/cc/CivIcon-Chinese.png",
    battlescore: "A",
    army_type: "Archer",
    unique_unit: "Chu Ko Nu",
    unique_tech: "Rocketry",
    team_bonus: "Farms provide +45 food",
    civilization_bonus: [
      "Start game with 3 extra villagers but -50 wood and -200 food",
      "Technologies cost -10% in Feudal Age/ -15% in Castle Age/-20% in Imperial Age",
      "Town Centers support 10 population instead of 5",
      "Demolition Ships have +50% HP",
    ],
  },

  {
    id: 6,
    name: "Franks",
    population: "16 250 000",
    currency: "écu",
    img_url:
      "https://static.wikia.nocookie.net/ageofempires/images/1/1b/CivIcon-Franks.png",
    battlescore: "B",
    army_type: "Cavalry",
    unique_unit: "Throwing Axeman",
    unique_tech: "Bearded Axe",
    team_bonus: "Knights have +2 line of sight",
    civilization_bonus: [
      "Castles are 25% cheaper",
      "Knights have +20% HP",
      "Farm upgrades are free (Mill is required to receive bonus)",
    ],
  },

  {
    id: 7,
    name: "Goths",
    population: "23 000 000",
    currency: "goth",
    img_url:
      "https://static.wikia.nocookie.net/ageofempires/images/2/24/CivIcon-Goths.png",
    battlescore: "B",
    army_type: "Infantry",
    unique_unit: "Huskarl",
    unique_tech: "Anarchy",
    team_bonus: "Barracks operate 20% faster",
    civilization_bonus: [
      "Infantry cost 35% less (starting in Feudal Age)",
      "Infantry have +1 attack against buildings",
      "Villagers have +5 attack versus wild boar",
      "Hunters carry +15 meat",
      "+10 to population limit in Imperial Age",
    ],
  },

  {
    id: 8,
    name: "Huns",
    population: "500 000",
    currency: "hun",
    img_url: "https://static.wikia.nocookie.net/ageofempires/images/2/24/CivIcon-Huns.png/",
    army_type: "Cavalry",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/tarkan",
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/atheism",
    ],
    team_bonus: "Stables are 20% faster",
    civilization_bonus: [
      "Houses are not required to support population",
      "Start game with -100 Wood",
      "Cavalry Archers cost -25% in Castle Age/ -30% in Imperial Age",
      "Trebuchets are 35% more accurate.",
    ],
  },

  {
    id: 9,
    name: "Japanese",
    population: "8 000 000",
    currency: "koshosen",
    img_url: {Japanese},
    battlescore: "C",
    army_type: "Infantry",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/samurai",
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/kataparuto",
    ],
    team_bonus: "Galleys have +50% line of sight",
    civilization_bonus: [
      "Fishing Ships have 2x HP and +2 pierce armor",
      "Fishing Ships work +5% faster in Dark Age/ +10% in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
      "Lumber Camps / Mining Camps / Mills are 50% cheaper",
      "Infantry attack 25% faster (starting in Feudal Age)",
    ],
  },

  {
    id: 10,
    name: "Koreans",
    population: "8 000 000",
    currency: "won",
    img_url: "../blasons/CivIcon-Koreans.png",
    battlescore: "D",
    army_type: "Tower and naval",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/war_wagon",
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/turtle_ship",
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/shinkichon",
    ],
    team_bonus: "Mangonel line has +1 range",
    civilization_bonus: [
      "Villagers have +3 line of sight",
      "Stone miners work 20% faster",
      "Guard Tower and Keep upgrades are free",
      "Towers (except bombard towers) have +1 range in Castle Age/ +2 in Imperial Age",
    ],
  },

  {
    id: 11,
    name: "Mayans",
    population: "10 000 000",
    currency: "cacao",
    img_url: "../blasons/CivIcon-Mayans.png",
    battlescore: "C",
    army_type: "Archer",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/plumed_archer",
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/el_dorado",
    ],
    team_bonus: "Walls are 50% cheaper",
    civilization_bonus: [
      "Start game with 1 extra villager but -50 food",
      "Natural resources last 20% longer",
      "Archers cost -10% in Feudal Age/ -20% in Castle Age/ -30% in Imperial Age",
    ],
  },

  {
    id: 12,
    name: "Mongols",
    population: "3 000 000",
    currency: "tugrik",
    img_url: "../blasons/CivIcon-Mongols.png",
    battlescore: "A",
    army_type: "Cavalry Archer",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mangudai",
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/drill",
    ],
    team_bonus: "Scout line has +2 Line of sight",
    civilization_bonus: [
      "Cavalry Archers reload 20% faster",
      "Light Cavalry and Hussars have +30% HP",
      "Hunters work 50% faster",
    ],
  },

  {
    id: 13,
    name: "Persians",
    population: "50 000 000",
    currency: "darique",
    img_url: "../blasons/CivIcon-Persians.png",
    battlescore: "B",
    army_type: "Cavalry",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/war_elephant",
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/mahouts",
    ],
    team_bonus: "Knights have +2 attack versus Archers",
    civilization_bonus: [
      "Start game with +50 wood and food",
      "Town Center and Docks have 2x HP",
      "Town Centers and Docks operate +10% faster in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
    ],
  },

  {
    id: 14,
    name: "Saracens",
    population: "10 000 000",
    currency: "dinar",
    img_url: "../blasons/CivIcon-Saracens.png",
    battlescore: "C",
    army_type: "Camel and naval",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mameluke",
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/zealotry",
    ],
    team_bonus: "Foot archers have +2 attack bonus against buildings",
    civilization_bonus: [
      "Market trade cost is only 5%",
      "Transport Ships have 2x HP and carry capacity",
      "Galleys attack 20% faster",
      "Cavalry Archers have +4 attack bonus against buildings",
    ],
  },

  {
    id: 15,
    name: "Spanish",
    population: "9 000 000",
    currency: "réal",
    img_url: "../blasons/CivIcon-Spanish.png",
    battlescore: "B",
    army_type: "Gunpowder and Monk",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/conquistador",
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/missionary",
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/supremacy",
    ],
    team_bonus: "Trade units generate +33% Gold",
    civilization_bonus: [
      "Villagers construct buildings 30% faster",
      "Blacksmith upgrades do not cost any gold",
      "Cannon Galleons benefit from Ballistics (less reload time and more accuracy)",
      "Hand Cannoneers and Bombard Cannons reload 15% faster",
    ],
  },

  {
    id: 16,
    name: "Teutons",
    population: "7 500 000",
    currency: "mark",
    img_url: "../blasons/CivIcon-Teutons.png",
    battlescore: "C",
    army_type: "Infantry",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/teutonic_knight",
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/crenellations",
    ],
    team_bonus: "Units are more resistant to conversion",
    civilization_bonus: [
      "Monks have 2x healing range",
      "Towers can garrison 2x units (more arrows)",
      "Murder Holes is free",
      "Farms cost 33% less",
      "Town Centers have +1 attack and +5 line of sight",
    ],
  },

  {
    id: 17,
    name: "Turks",
    population: "11 000 000",
    currency: "akce",
    img_url: "../blasons/CivIcon-Turks.png",
    battlescore: "A",
    army_type: "Gunpowder",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/janissary",
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/artillery",
    ],
    team_bonus: "Gunpowder units are created 20% faster",
    civilization_bonus: [
      "Gunpowder Units have +25% HP",
      "Gunpowder technologies cost 50% less",
      "Chemistry is free",
      "Gold miners work 15% faster",
      "Light Cavalry and Hussar upgrades are free",
    ],
  },

  {
    id: 18,
    name: "Vikings",
    population: "1 690 000",
    currency: "airdeconut",
    img_url: "../blasons/CivIcon-Vikings.png",
    battlescore: "C",
    army_type: "Infantry and naval",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/berserk",
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/longboat",
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/berserkergang",
    ],
    team_bonus: "Docks are 25% cheaper",
    civilization_bonus: [
      "Warships cost 20% less",
      "Infantry have +10% HP in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
      "Wheelbarrow and Hand Cart are free",
    ],
  },

  {
    id: 19,
    name: "Berbers",
    population: "2 300 000",
    currency: "dirham",
    img_url: "../blasons/CivIcon-Berbers.png",
    battlescore: "C",
    army_type: "Calvary and Naval",
    unique_unit: [ ],
    unique_tech: [ ],
    team_bonus: "Genitour availible at Archery Range",
    civilization_bonus: [
    "Villagers move +10% faster",
    " Stable units cost -20% (starting in Castle Age)",
    " Ships move +10% faster"
    ],
  },

  {
    id: 20,
    name: "Burmese",
    population: "1 500 000",
    currency: "kyat",
    img_url: "../blasons/CivIcon-Burmese.png",
    battlescore: "D",
    army_type: "Monk and Elephant",
unique_unit: [ ],
unique_tech: [ ],
team_bonus: "Relics are visible on the min map",
civilization_bonus: [
"Free lumber camp upgrades",
"Infantry +1 Attacks per Age (starting in Feudal Age)",
" Monastery techs 50% cheaper"
],
  },

  {
    id: 21,
    name: "Ethiopians",
    population: "5 000 000",
    currency: "birr",
    img_url: "../blasons/CivIcon-Ethiopians.png",
    battlescore: "D",
    army_type: "Archer",
    unique_unit: [ ],
    unique_tech: [ ],
    team_bonus: "Towers and Outposts +3 LOS",
    civilization_bonus: [
    "Archers move +15% faster",
    "Receive +100 gold and +100 food when advancing to the next age",
    "Pikemen and Halberdier upgrades free"
    ],
  },

  {
    id: 23,
    name: "Incas",
    population: "12 000 000",
    currency: "inti",
    img_url: "../blasons/CivIcon-Incas.png",
    battlescore: "B",
    army_type: "Infantry",
    unique_unit: [ ],
    unique_tech: [ ],
    team_bonus: "Farms built 50% faster",
    civilization_bonus: [
    "Start with a free llama",
    "Villagers affected by Blacksmith upgrades",
    "Houses support 10 population",
    "Buildings cost -15% stone",
    "Scout Cavalry is replaced by Eagle Warrior"
    ],   
  },

  {
    id: 24,
    name: "Indians",
    population: "55 000 000",
    currency: "roupie",
    img_url: "../blasons/CivIcon-Indians.png",
    battlescore: "B",
    army_type: "Gunpowder and Cavalry",
unique_unit: [ ],
unique_tech: [ ],
team_bonus: "Camels have +5 attack vs. buildings",
civilization_bonus: [
"Villagers cost -10% Dark, -15% Feudal, -20% Castle, -25% Imperial",
"Fishermen work 15% faster and carry +15",
"Camels +1/+1 armor"
],
  },

  {
    id: 25,
    name: "Italians",
    population: "13 000 000",
    currency: "lire",
    img_url: "../blasons/CivIcon-Italians.png",
    battlescore: "D",
    army_type: "Archer and naval",
unique_unit: [ ],
unique_tech: [ ],
team_bonus: "Condottiero also available in allies' barracks in Imperial Age (once you have built a castle)",
civilization_bonus: [
"Advance to next age costs -15%",
"All dock tech costs -50%",
"Fishing ship cost -15 wood",
"Gunpowder unit costs -25%"
],
  },

  {
    id: 27,
    name: "Khmer",
    population: "15 000 000",
    currency: "riel",
    img_url: "../blasons/CivIcon-Khmer.png",
    battlescore: "B",
    army_type: "Siege and Elephant Civilzation",
unique_unit: [ ],
unique_tech: [ ],
team_bonus: "Scorpions have +1 range",
civilization_bonus: [
"Prereq buildings aren't required to advance to further ages or unlock other buildings",
"Battle Elephants are +15% faster",
"Villagers can garrison in Houses"
],
  },

  {
    id: 28,
    name: "Magyars",
    population: "4 000 000",
    currency: "forint",
    img_url: "../blasons/CivIcon-Magyars.png",
    battlescore: "D",
    army_type: "Calvary Infantry",
unique_unit: [ ],
unique_tech: [ ],
team_bonus: "Foot archers +2 LOS",
civilization_bonus: [
"Villagers can kill wolves with 1 strike",
"Forging, Iron Casting, Blast Furnace are free",
"Scout Cavalry, Light Cavalry, Hussar cost -15%"
],
  },

  {
    id: 29,
    name: "Malians",
    population: "10 000 000",
    currency: "or",
    img_url: "../blasons/CivIcon-Malians.png",
    battlescore: "A",
    army_type: "Infantry",
unique_unit: [ ],
unique_tech: [ ],
team_bonus: "University researches +80% faster",
civilization_bonus: [
"Buildings cost -15% wood",
"Barracks unit +1 pierce armor per age",
"Gold mining upgrades free"
],
  },

  {
    id: 30,
    name: "Portuguese",
    population: "1 000 000",
    currency: "escudo",
    img_url: "../blasons/CivIcon-Portuguese.png",
    battlescore: "D",
    army_type: "Naval and Gunpowder",
unique_unit: [ ],
unique_tech: [ ],
team_bonus: "Free cartography from Dark Age",
civilization_bonus: [
"All units costs -15% gold",
"Ships +10% HP",
"Can build Feitoria in Imperial Age"
],
  },

  {
    id: 31,
    name: "Slavs",
    population: "6 000 000",
    currency: "rouble",
    img_url: "../blasons/CivIcon-Slavs.png",
    battlescore: "B",
    army_type: "Cavalry",
unique_unit: [ ],
unique_tech: [ ],
team_bonus: "Military buildings provide +5% population",
civilization_bonus: [
"Farmers works 15% faster",
"Siege weapons 15% cheaper",
"Tracking free"
],
  },

  {
    id: 32,
    name: "Vietnamese",
    population: "5 625 400",
    currency: "dong",
    img_url: "../blasons/CivIcon-Vietnamese.png",
    battlescore: "C",
    army_type: "Archer",
unique_unit: [ ],
unique_tech: [ ],
team_bonus: "Have access to Imperial Skirmisher Upgrade",
civilization_bonus: [
"Reveals enemy positions at game start",
"Archery Range units have +10% HP in Feudal Age, +15% in Castle Age, and +20% in Imperial Age. Does not stack."
],
  },
];

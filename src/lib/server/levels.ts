// src/data/levelData.ts



export type TileType = "normal" | "boulder" | "dull02" | "boulder002" | "boulder003" |"locked" | "lineBlasterRow" | "lineBlasterColumn" | "fire" | "velvet" | "cursed" | "warped" | "removed" | "mystery" | "infected" | "dull" | "exclamator" | "bone" | "bulb" | "ice" | "fridge" | "bookOpen" | "bookClosed";

export type Difficulty = "Hard Level" | "demon";

export type GemTiles = "purple" 

export type TutorialTypes = "Locked Tiles" | "Ethereal Tiles" | "Surprise Tile" | "Exclaimer" | "Purifiers" | "Burning Tiles" | "Poisoned Tile" | "Warped Tiles" | "Cursed Tiles" | "Dull Tiles" | "Lightbulbs" | "Frozen Tiles" | "Flippers";


type Objective = {
  type: 'score' | 'words' | 'boss' | 'destroy' | 'lightsUp'  | 'defrost' | 'alphabet' | 'collectVelvet';


  
  bossHp?: number | undefined;
  bossMaxHp?: number | undefined;
  bossColor?: string;
  objGoal: number;
  tileType?: 'cursed' | 'fire' | 'exclamator' | 'warped' | "dull" | "locked" | "velvet" | "bone" | "bulb" | "ice" | "infected" | "flippers" | "mystery";
  minLength?: number;
  groundLayout?: ('none' | 'cleanse')[][];
};



export type LevelData = {
  id: number;
  name: string;
  gemtiles?: GemTiles;
  difficulty?: Difficulty;
  fridgeHP?: number;
  fridgeCharge?: number;
fridgeChargeMax?: number;
fridgeMaxHP?: number;
  objective: Objective;
  locked: boolean;
  dullTurns2?: number;
  board: TileType[][];
  layout?: string[][];
  shouldWarpedSpawn?: boolean;
  shouldCursedSpawn?: boolean;
  shouldFireSpawn?: boolean;
  cursedTurns?: number;
  shouldLockSpawn?: boolean;
  lockTurns?: number;
  shouldSpawnVelvet?: boolean;
  allowHardLetters?: boolean;
  allowBulbTiles?: boolean;
  warpTurns?: number;
  moves?: number;
  boss?: {
    hp: number;
    maxHp: number;
    color?: string;
  };
  boulderHP?: number;
  dullTurns?: number;
  shouldDullSpawn?: boolean;
  boneTurns?: number;
  isInfected?: boolean;

  boneRipeTurns?: number;
  boneUnripeTurns?: number;
  isLightBulb?: boolean;
  isBulbOn?: boolean;
  shouldShowTutorial?: boolean;
  tutorialTileType?: TutorialTypes;
  groundLayout?: ('none' | 'cleanse')[][];
  tutorialTilePosition?: { row: number; col: number };
  tutorialMessage?: string;

  tutorial?: {
    title?: string;
    message?: string;
    highlightedTile?: { row: number; col: number };
  }
};


export const levels: LevelData[] = [

  {
    id: 1,
    name: "Level 1",
    objective: { type: 'words', objGoal: 5, minLength: 3 },
    moves: 5,
    fridgeHP: 9,
    fridgeMaxHP: 24,

    allowHardLetters: false,
    locked: false,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],
    groundLayout: [
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ],

  },
  {
    id: 2,
    name: "Level 2",
    objective: { type: "score", objGoal: 2300 },
    locked: true,
    moves: 20,
    allowHardLetters: false,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"]
    ],

  },
  {
    id: 3,
    name: "Level 3",
    objective: { type: "score", objGoal: 2500 },
    locked: true,
    moves: 25,
    allowHardLetters: false,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 4,
    name: "Level 4",
    objective: { type: "score", objGoal: 3500 },
    locked: true,
    allowHardLetters: false,
    moves: 20,
    board: [
      ["normal", "removed", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "removed", "normal", "normal", "removed", "removed", "normal"]
    ],

  },
  {
    id: 5,
    name: "Level 5",
    objective: { type: "score", objGoal: 4000 },
    locked: true,
    moves: 35,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"]
    ],

  },
  {
    id: 6,
    name: "Level 6",
    objective: { type: 'score', objGoal: 3700 },
    locked: true,
    moves: 14,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "dull", "normal", "normal", "normal", "dull", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],
    dullTurns: 3,
    tutorialTileType: 'Dull Tiles',
    tutorialMessage: "Dull tiles gives no points when used, Tile returns to normal when number gets to 0",
    tutorial: {}



  },
  {
    id: 7,
    name: "Level 7",
    objective: { type: 'score', objGoal: 3000 },
    locked: true,
    moves: 18,
    allowHardLetters: false,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "dull", "normal", "normal", "normal", "normal", "dull", "normal"],
      ["normal", "normal", "dull", "normal", "normal", "dull", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "dull", "dull", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"]
    ],
    dullTurns: 5,
  },
  {
    id: 8,
    name: "Level 8",
    objective: { type: 'score', objGoal: 4300 },
    locked: true,
    moves: 18,
    board: [
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "dull", "dull", "dull", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "removed", "removed", "dull", "normal", "normal"],
      ["normal", "removed", "dull", "normal", "normal", "dull", "removed", "normal"],
      ["removed", "removed", "dull", "dull", "dull", "dull", "removed", "removed"]
    ],
    dullTurns: 4,
  },
  {
    id: 9,
    name: "Level 9",
    objective: { type: 'score', objGoal: 2600 },
    locked: true,
    moves: 18,
    board: [
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "dull", "dull", "dull", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "normal", "normal", "dull", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "dull", "removed"]
    ],
    lockTurns: 7,
    dullTurns: 9
  },
  {
    id: 10,
    name: "Level 10",
    objective: { type: 'words', objGoal: 1, minLength: 6 },
    locked: true,
    moves: 18,
    difficulty: "Hard Level",
    allowHardLetters: false,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "dull", "normal", "normal", "normal", "normal", "dull", "normal"],
      ["normal", "normal", "dull", "dull", "dull", "dull", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "dull", "dull", "dull", "dull", "normal", "normal"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"]
    ],
    lockTurns: 7,
    dullTurns: 7
  },
  {
    id: 11,
    name: "Level 11",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 5 },
    locked: true,
    moves: 18,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "dull", "normal", "normal", "dull", "normal", "removed"]
    ],

    dullTurns: 8
  },
  {
    id: 12,
    name: "Level 12",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 2 },
    locked: false,
    moves: 18,

    board: [
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "dull", "normal", "normal"],
      ["normal", "normal", "normal", "dull", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "dull", "normal", "normal", "normal"],
      ["normal", "normal", "dull", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "removed", "removed"]
    ],

    dullTurns: 3,
    shouldCursedSpawn: true
  },
  {
    id: 13,
    name: "Level 13",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 4 },
    locked: false,
    moves: 18,

    board: [
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["dull", "normal", "normal", "dull", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "dull", "normal", "normal", "dull"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "removed", "dull", "dull", "removed", "normal", "normal"]
    ],

    dullTurns: 5,
    shouldCursedSpawn: true
  },
  {
    id: 14,
    name: "Level 14",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 4 },
    locked: false,
    moves: 33,

    board: [
      ["removed", "dull", "removed", "dull", "dull", "removed", "dull", "removed"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["dull", "normal", "dull", "normal", "normal", "dull", "normal", "dull"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "normal", "removed", "removed", "normal", "removed", "normal"],
      ["normal", "removed", "normal", "removed", "removed", "normal", "removed", "normal"]
    ],

    dullTurns: 6,
    shouldCursedSpawn: true,
    shouldFireSpawn: true
  },
  {
    id: 15,
    name: "Level 15",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 17 },
    locked: false,
    moves: 33,

    board: [
      ["normal", "dull", "removed", "dull", "normal", "normal", "normal", "normal"],
      ["normal", "dull", "dull", "dull", "normal", "normal", "dull", "dull"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["normal", "normal", "normal", "dull", "dull", "normal", "dull", "dull"],
      ["dull", "dull", "normal", "dull", "dull", "normal", "normal", "normal"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["dull", "dull", "normal", "normal", "dull", "dull", "dull", "normal"],
      ["normal", "normal", "normal", "normal", "dull", "removed", "dull", "normal"]
    ],

    dullTurns: 15,
    shouldCursedSpawn: true,
    shouldFireSpawn: true
  },
  {
    id: 16,
    name: "Level 16",
    objective: { type: 'words', minLength: 5, objGoal: 5 },
    locked: false,
    moves: 33,

    board: [
      ["normal", "normal", "normal", "normal", "dull", "dull", "dull", "dull"],
      ["normal", "normal", "normal", "normal", "normal", "dull", "dull", "dull"],
      ["normal", "normal", "dull", "normal", "normal", "normal", "dull", "dull"],
      ["normal", "normal", "normal", "dull", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "dull", "normal", "normal", "normal"],
      ["dull", "dull", "normal", "normal", "normal", "dull", "normal", "normal"],
      ["dull", "dull", "dull", "normal", "normal", "normal", "normal", "normal"],
      ["dull", "dull", "dull", "dull", "normal", "normal", "normal", "normal"]
    ],

    dullTurns: 8,
    shouldCursedSpawn: true,
    shouldFireSpawn: true
  },
  {
    id: 17,
    name: "Level 17",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 2 },
    locked: false,
    moves: 15,
    allowHardLetters: false,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "dull", "dull", "dull", "dull", "removed", "normal"]
    ],

    dullTurns: 5,
  },
  {
    id: 18,
    name: "Level 18",
    objective: { type: 'score', objGoal: 7000 },
    locked: false,
    moves: 45,
    allowHardLetters: false,
    board: [
      ["removed", "removed", "removed", "dull", "dull", "removed", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "normal", "dull", "dull", "dull", "dull", "normal", "removed"],
      ["dull", "normal", "dull", "removed", "removed", "dull", "normal", "dull"],
      ["dull", "normal", "dull", "removed", "removed", "dull", "normal", "dull"],
      ["removed", "normal", "dull", "dull", "dull", "dull", "normal", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "removed", "dull", "dull", "removed", "removed", "removed"]
    ],

    dullTurns: 12,
  },
  {
    id: 19,
    name: "Level 19",
    objective: { type: 'score', objGoal: 5000 },
    locked: false,
    moves: 20,
    difficulty: 'Hard Level',
    allowHardLetters: false,
    board: [
      ["dull", "normal", "dull", "normal", "dull", "normal", "dull", "removed"],
      ["normal", "dull", "normal", "dull", "normal", "dull", "normal", "removed"],
      ["dull", "normal", "dull", "normal", "dull", "normal", "dull", "removed"],
      ["normal", "dull", "normal", "dull", "normal", "dull", "normal", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "dull", "normal", "dull", "normal", "dull", "normal", "dull"],
      ["removed", "normal", "dull", "normal", "dull", "normal", "dull", "normal"],
      ["removed", "dull", "normal", "dull", "normal", "dull", "normal", "dull"]
    ],

    dullTurns: 10,
  },
  {
    id: 20,
    name: "Level 20",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 22 },
    locked: false,
    moves: 28,
    allowHardLetters: false,
    board: [
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "dull", "dull", "dull", "dull", "dull", "dull", "dull"]
    ],

    dullTurns: 19,
  },
  {
    id: 21,
    name: "Level 21",
    objective: { type: 'words', minLength: 5, objGoal: 2 },
    locked: false,
    moves: 30,
    allowHardLetters: false,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["locked", "locked", "locked", "locked", "locked", "locked", "locked", "removed"],
      ["locked", "locked", "locked", "locked", "locked", "locked", "locked", "removed"],
      ["locked", "locked", "locked", "locked", "locked", "locked", "locked", "removed"]
    ],
    lockTurns: 7,


    tutorialTileType: 'Locked Tiles',
    tutorialMessage: "Tile can not be selected for a determined number of turns",
    tutorial: {}
  },
  {
    id: 22,
    name: "Level 22",
    objective: { type: 'score', objGoal: 5400 },
    locked: false,
    moves: 40,
    allowHardLetters: false,
    board: [
      ["locked", "normal", "removed", "removed", "removed", "removed", "normal", "locked"],
      ["normal", "locked", "normal", "removed", "removed", "normal", "locked", "normal"],
      ["normal", "normal", "locked", "normal", "normal", "locked", "normal", "normal"],
      ["removed", "normal", "normal", "locked", "locked", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "locked", "locked", "locked", "locked", "removed", "removed"]
    ],
    lockTurns: 4,

  },
  {
    id: 23,
    name: "Level 23",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 10 },
    locked: false,
    moves: 36,
    allowHardLetters: false,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "removed", "dull", "dull"],
      ["normal", "normal", "normal", "normal", "normal", "removed", "dull", "dull"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["removed", "removed", "removed", "locked", "locked", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "locked", "locked", "removed", "removed", "removed"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["dull", "dull", "removed", "normal", "normal", "normal", "normal", "normal"],
      ["dull", "dull", "removed", "normal", "normal", "normal", "normal", "normal"]
    ],
    dullTurns: 9,
    lockTurns: 5
  },
  {
    id: 24,
    name: "Level 24",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 15 },
    locked: false,
    moves: 30,
    allowHardLetters: true,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "removed"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "removed"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "removed"]
    ],
    dullTurns: 13
  },
  {
    id: 25,
    name: "Level 25",
    objective: { type: 'score', objGoal: 8000 },
    locked: false,
    moves: 40,
    allowHardLetters: false,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "dull", "dull", "dull", "dull", "dull", "dull", "normal"],
      ["normal", "dull", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "dull", "normal", "dull", "dull", "dull", "dull", "normal"],
      ["normal", "dull", "normal", "dull", "normal", "normal", "dull", "normal"],
      ["normal", "dull", "normal", "normal", "normal", "normal", "dull", "normal"],
      ["normal", "dull", "dull", "dull", "dull", "dull", "dull", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],
    dullTurns: 20,
    shouldCursedSpawn: true
  },
  {
    id: 26,
    name: "Level 26",
    objective: { type: 'words', minLength: 6, objGoal: 1 },
    locked: false,
    moves: 5,
    allowHardLetters: false,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],
    dullTurns: 20,

  },
  {
    id: 27,
    name: "Level 27",
    objective: { type: 'words', minLength: 5, objGoal: 5 },
    locked: false,
    moves: 30,
    allowHardLetters: false,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "locked", "locked", "locked", "locked", "locked", "locked"],
      ["locked", "normal", "locked", "normal", "normal", "locked", "normal", "locked"],
      ["locked", "normal", "locked", "normal", "normal", "locked", "normal", "locked"],
      ["locked", "locked", "locked", "locked", "locked", "locked", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"]
    ],
    dullTurns: 20,
    lockTurns: 8,
  },
  {
    id: 28,
    name: "Level 28",
    objective: { type: 'score', objGoal: 8000 },
    locked: false,
    moves: 45,
    allowHardLetters: false,
    board: [
      ["locked", "removed", "locked", "normal", "normal", "normal", "removed", "normal"],
      ["locked", "removed", "dull", "removed", "normal", "normal", "removed", "normal"],
      ["dull", "locked", "dull", "removed", "normal", "normal", "normal", "normal"],
      ["dull", "locked", "locked", "removed", "normal", "normal", "normal", "normal"],
      ["dull", "locked", "locked", "removed", "normal", "normal", "normal", "normal"],
      ["dull", "dull", "dull", "removed", "normal", "normal", "normal", "normal"],
      ["locked", "removed", "locked", "removed", "normal", "normal", "removed", "normal"],
      ["locked", "removed", "dull", "normal", "normal", "normal", "removed", "normal"]
    ],
    dullTurns: 12,
    lockTurns: 9
  },
  {
    id: 29,
    name: "Level 29",
    objective: { type: 'destroy', objGoal: 16, tileType: 'dull' },
    locked: false,
    moves: 15,
    allowHardLetters: false,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "dull", "dull", "normal", "normal", "dull", "dull", "removed"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "removed"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "removed"],
      ["removed", "removed", "removed", "dull", "dull", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],
    dullTurns: 8,

  },
  {
    id: 30,
    name: "Level 30",
    objective: { type: 'destroy', objGoal: 2, tileType: 'dull' },
    locked: true,
    moves: 18,
    allowHardLetters: true,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "locked", "locked", "normal", "normal", "normal"],
      ["normal", "locked", "locked", "locked", "locked", "locked", "locked", "normal"],
      ["normal", "locked", "locked", "locked", "locked", "locked", "locked", "normal"],
      ["locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked"],
      ["locked", "locked", "locked", "dull", "dull", "locked", "locked", "locked"]
    ],
    dullTurns: 14,
    lockTurns: 6
  },
  {
    id: 31,
    name: "Level 31",
    objective: { type: 'destroy', objGoal: 3, tileType: 'dull' },
    locked: true,
    moves: 20,
    allowHardLetters: false,
    board: [
      ["normal", "normal", "normal", "removed", "normal", "normal", "normal", "dull"],
      ["normal", "normal", "normal", "removed", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "removed", "normal", "normal", "normal"],
      ["dull", "normal", "normal", "normal", "removed", "normal", "normal", "dull"]
    ],
    dullTurns: 8,

  },
  {
    id: 32,
    name: "Level 32",
    objective: { type: 'score', objGoal: 3500 },
    locked: true,
    moves: 38,
    difficulty: 'Hard Level',
    allowHardLetters: false,
    board: [
      ["dull", "dull", "locked", "dull", "dull", "locked", "dull", "dull"],
      ["dull", "dull", "locked", "dull", "dull", "locked", "dull", "dull"],
      ["dull", "dull", "locked", "dull", "dull", "locked", "dull", "dull"],
      ["dull", "dull", "locked", "dull", "dull", "locked", "dull", "dull"],
      ["dull", "dull", "locked", "dull", "dull", "locked", "dull", "dull"],
      ["dull", "dull", "locked", "dull", "dull", "locked", "dull", "dull"],
      ["dull", "dull", "locked", "dull", "dull", "locked", "dull", "dull"],
      ["dull", "dull", "locked", "dull", "dull", "locked", "dull", "dull"]
    ],
    dullTurns: 25,
    shouldCursedSpawn: true
  },
  {
    id: 33,
    name: "Level 33",
    objective: { type: 'words', minLength: 6, objGoal: 3 },
    locked: true,
    moves: 40,
    allowHardLetters: false,
    board: [
      ["normal", "normal", "removed", "dull", "dull", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["locked", "normal", "normal", "normal", "normal", "normal", "normal", "locked"],
      ["removed", "normal", "locked", "normal", "normal", "locked", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "locked", "locked", "normal", "normal", "removed"]
    ],
    dullTurns: 8,
    lockTurns: 10,
    shouldDullSpawn: true
  },
  {
    id: 34,
    name: "Level 34",
    objective: { type: 'words', minLength: 4, objGoal: 10 },
    locked: true,
    moves: 35,
    allowHardLetters: false,
    board: [
      ["normal", "normal", "locked", "normal", "locked", "normal", "normal", "normal"],
      ["normal", "locked", "normal", "normal", "normal", "locked", "normal", "normal"],
      ["locked", "normal", "normal", "normal", "normal", "normal", "locked", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "locked"],
      ["locked", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "locked", "normal", "normal", "normal", "normal", "normal", "locked"],
      ["normal", "normal", "locked", "normal", "normal", "normal", "locked", "normal"],
      ["normal", "normal", "normal", "locked", "normal", "locked", "normal", "normal"]
    ],
    dullTurns: 8,
    lockTurns: 18,
    shouldDullSpawn: true
  },
  {
    id: 35,
    name: "Level 35",
    objective: { type: 'score', objGoal: 3000 },
    locked: true,
    moves: 15,
    allowHardLetters: false,
    board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "locked", "locked", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "locked", "locked", "dull", "dull"],
      ["normal", "normal", "normal", "normal", "locked", "locked", "dull", "dull"],
      ["normal", "normal", "normal", "normal", "locked", "locked", "dull", "dull"],
      ["normal", "normal", "normal", "normal", "locked", "locked", "dull", "dull"]
    ],
    dullTurns: 12,
    lockTurns: 9,
    shouldDullSpawn: true
  },

  {
    id: 36,
    name: "Level 36",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 9 },
    locked: true,
    moves: 35,
    allowHardLetters: false,
    board: [
      ["dull", "dull", "normal", "removed", "removed", "normal", "dull", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "dull", "removed", "dull", "dull", "removed", "dull", "dull"]
    ],
    dullTurns: 12,
    lockTurns: 9,
    shouldDullSpawn: true
  },
  {
    id: 37,
    name: "Level 37",
    objective: { type: 'score', objGoal: 4000 },
    locked: true,
    moves: 40,
    allowHardLetters: false,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["locked", "locked", "normal", "normal", "normal", "normal", "locked", "locked"],
      ["removed", "locked", "normal", "normal", "normal", "normal", "locked", "removed"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "removed"],
      ["removed", "removed", "locked", "locked", "locked", "locked", "removed", "removed"],
      ["removed", "removed", "dull", "dull", "dull", "dull", "removed", "removed"]
    ],
    lockTurns: 11,
    dullTurns: 8,
    shouldDullSpawn: true
  },
  {
    id: 38,
    name: "Level 38",
    objective: { type: 'words', objGoal: 1, minLength: 6 },
    moves: 30,
    allowHardLetters: false,
    locked: false,
    lockTurns: 18,
    dullTurns: 25,
    board: [
      ["removed", "removed", "removed", "dull", "dull", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "dull", "dull", "removed", "removed", "removed"],
      ["normal", "normal", "locked", "locked", "locked", "locked", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked"],
      ["removed", "dull", "dull", "removed", "removed", "dull", "dull", "removed"],
      ["removed", "dull", "dull", "removed", "removed", "dull", "dull", "removed"]
    ],

  },
  {
    id: 39,
    name: "Level 39",
    objective: { type: 'score', objGoal: 6000 },
    moves: 30,
    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    dullTurns: 13,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "locked", "locked", "locked", "locked", "locked", "locked", "locked"],
      ["removed", "locked", "locked", "locked", "locked", "locked", "locked", "locked"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "dull", "dull", "dull", "dull", "dull", "dull"],
      ["removed", "removed", "dull", "dull", "dull", "dull", "dull", "dull"]
    ],

  },
  {
    id: 40,
    name: "Level 40",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 10 },
    moves: 7,
    allowHardLetters: false,
    locked: false,
    lockTurns: 3,
    dullTurns: 4,
    difficulty: 'Hard Level',
    board: [
      ["normal", "normal", "dull", "dull", "dull", "dull", "normal", "normal"],
      ["dull", "normal", "normal", "dull", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "dull", "dull", "dull"],
      ["dull", "dull", "dull", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "dull", "normal", "normal", "dull"],
      ["normal", "normal", "dull", "dull", "dull", "dull", "normal", "normal"]
    ],

  },
  {
    id: 41,
    name: "Level 41",
    objective: { type: 'score', objGoal: 4500 },
    moves: 36,
    allowHardLetters: false,

    locked: false,
    warpTurns: 5,
    board: [
      ["removed", "normal", "normal", "removed", "removed", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["warped", "normal", "normal", "normal", "normal", "normal", "normal", "warped"],
      ["removed", "normal", "normal", "warped", "warped", "normal", "normal", "removed"],
      ["removed", "normal", "warped", "removed", "removed", "warped", "normal", "removed"]
    ],
    tutorialTileType: 'Warped Tiles',
    tutorialMessage: "Warped Tiles changes into harder letters every turns",
    tutorial: {}
  },
  {
    id: 42,
    name: "Level 42",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 2 },
    moves: 10,
    allowHardLetters: false,
    dullTurns: 3,
    locked: false,
    warpTurns: 5,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "locked", "normal", "normal", "locked", "normal", "normal"],
      ["normal", "locked", "normal", "normal", "normal", "normal", "locked", "normal"],
      ["normal", "normal", "locked", "normal", "normal", "locked", "normal", "normal"],
      ["normal", "locked", "normal", "normal", "normal", "normal", "locked", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "warped", "dull", "warped", "warped", "dull", "warped", "normal"],
      ["normal", "normal", "warped", "normal", "normal", "warped", "normal", "normal"]
    ],
  },
  {
    id: 43,
    name: "Level 43",
    objective: { type: 'words', objGoal: 8, minLength: 4 },
    moves: 30,
    allowHardLetters: false,
    dullTurns: 3,
    locked: false,
    warpTurns: 5,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "warped", "normal", "normal", "normal", "normal", "warped", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "warped", "warped", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["warped", "normal", "removed", "removed", "removed", "removed", "normal", "warped"]
    ],
  },
  {
    id: 44,
    name: "Level 44",
    objective: { type: 'score', objGoal: 6000 },
    moves: 28,
    allowHardLetters: false,
    dullTurns: 11,
    lockTurns: 10,
    locked: false,
    warpTurns: 5,
    board: [
      ["removed", "normal", "normal", "removed", "removed", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["locked", "normal", "locked", "normal", "normal", "locked", "normal", "locked"],
      ["locked", "normal", "dull", "normal", "normal", "dull", "normal", "locked"],
      ["locked", "normal", "locked", "normal", "normal", "locked", "normal", "locked"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "locked", "locked", "removed", "removed", "removed"]
    ],
  },
  {
    id: 45,
    name: "Level 45",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 8 },
    moves: 25,
    difficulty: 'Hard Level',
    allowHardLetters: false,
    dullTurns: 16,
    locked: false,
    warpTurns: 8,
    board: [
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["normal", "removed", "removed", "normal", "normal", "removed", "removed", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "warped", "warped", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "warped", "warped", "normal", "normal", "normal"],
      ["normal", "normal", "removed", "dull", "dull", "removed", "normal", "normal"],
      ["normal", "removed", "removed", "dull", "dull", "removed", "removed", "normal"],
      ["removed", "removed", "dull", "dull", "dull", "dull", "removed", "removed"]
    ],
  },
  {
    id: 46,
    name: "Level 46",
    objective: { type: 'score', objGoal: 8000 },
    moves: 45,
    allowHardLetters: false,
    dullTurns: 16,
    locked: false,
    warpTurns: 8,
    board: [
      ["normal", "normal", "normal", "normal", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "dull", "dull", "dull", "dull", "dull", "dull"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "dull"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["dull", "dull", "dull", "dull", "dull", "dull", "dull", "removed"],
      ["dull", "dull", "dull", "dull", "dull", "dull", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "normal", "normal", "normal", "normal"]
    ],
  },
  {
    id: 47,
    name: "Level 47",
    objective: { type: 'score', objGoal: 1400 },
    moves: 7,
    allowHardLetters: false,
    dullTurns: 6,
    locked: false,
    warpTurns: 6,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["warped", "normal", "warped", "normal", "normal", "dull", "normal", "dull"],
      ["normal", "warped", "normal", "normal", "dull", "normal", "dull", "normal"],
      ["warped", "normal", "warped", "normal", "normal", "dull", "normal", "dull"],
      ["normal", "warped", "normal", "normal", "dull", "normal", "dull", "normal"],
      ["removed", "normal", "warped", "normal", "normal", "dull", "normal", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],
  },
  {
    id: 48,
    name: "Level 48",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 8 },
    moves: 33,
    allowHardLetters: true,
    dullTurns: 6,
    locked: false,
    warpTurns: 6,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "dull", "removed", "dull", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "removed", "removed", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "dull", "removed", "dull", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],
  },
  {
    id: 49,
    name: "Level 49",
    objective: { type: 'words', minLength: 6, objGoal: 4 },
    moves: 40,
    allowHardLetters: false,
    dullTurns: 6,
    locked: false,
    warpTurns: 6,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "warped"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "warped"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "warped"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "warped"],
      ["warped", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["warped", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["warped", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["warped", "normal", "normal", "normal", "normal", "normal", "normal", "removed"]
    ],
  },
  {
    id: 50,
    name: "Level 50",
    objective: { type: 'destroy', objGoal: 9, tileType: 'dull' },
    moves: 40,
    allowHardLetters: true,
    difficulty: 'Hard Level',
    dullTurns: 20,
    locked: false,
    warpTurns: 7,
    board: [
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["dull", "warped", "normal", "normal", "normal", "normal", "warped", "dull"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["dull", "warped", "normal", "normal", "normal", "normal", "warped", "dull"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["dull", "warped", "dull", "normal", "normal", "dull", "warped", "dull"],
      ["removed", "dull", "normal", "dull", "dull", "normal", "dull", "removed"]
    ],
  },
  {
    id: 51,
    name: "Level 51",
    objective: { type: 'lightsUp', objGoal: 4, tileType: 'bulb' },
    moves: 40,
    allowHardLetters: true,
    dullTurns: 6,
    locked: false,
    warpTurns: 6,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "bulb", "normal", "normal", "normal", "normal", "bulb", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "bulb", "normal", "normal", "normal", "normal", "bulb", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"]
    ],
    tutorialTileType: 'Lightbulbs',
    tutorialMessage: "An Objective collectible, Toggles on and off when used in a word, When all bulb tiles are turned on, they all disappear",
    tutorial: {}
  },
  {
    id: 52,
    name: "Level 52",
    objective: { type: 'lightsUp', objGoal: 8, tileType: 'bulb' },
    moves: 15,
    allowHardLetters: true,
    dullTurns: 6,
    locked: false,
    warpTurns: 6,
    board: [
      ["removed", "removed", "removed", "removed", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "bulb", "bulb", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "bulb", "bulb", "normal", "normal"],
      ["normal", "normal", "bulb", "bulb", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "bulb", "bulb", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 53,
    name: "Level 53",
    objective: { type: 'lightsUp', objGoal: 4, tileType: 'bulb' },
    moves: 35,
    difficulty: 'Hard Level',
    allowHardLetters: true,
    dullTurns: 6,
    locked: false,
    warpTurns: 6,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["bulb", "locked", "normal", "normal", "normal", "normal", "warped", "bulb"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["bulb", "warped", "normal", "normal", "normal", "normal", "locked", "bulb"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"]
    ],

  },
  {
    id: 54,
    name: "Level 54",
    objective: { type: 'destroy', objGoal: 12, tileType: 'dull' },
    moves: 35,

    allowHardLetters: true,
    dullTurns: 9,
    locked: false,
    warpTurns: 6,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "removed", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["dull", "dull", "dull", "normal", "normal", "normal", "normal", "removed"],
      ["dull", "dull", "dull", "removed", "normal", "normal", "normal", "removed"],
      ["dull", "dull", "dull", "removed", "normal", "normal", "normal", "removed"],
      ["dull", "dull", "dull", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 55,
    name: "Level 55",
    objective: { type: 'destroy', objGoal: 10, tileType: 'dull' },
    moves: 50,

    allowHardLetters: true,
    dullTurns: 25,
    locked: false,
    warpTurns: 9,
    board: [
      ["removed", "dull", "dull", "removed", "dull", "dull", "removed", "removed"],
      ["dull", "warped", "normal", "dull", "normal", "warped", "dull", "removed"],
      ["dull", "normal", "normal", "warped", "normal", "normal", "dull", "removed"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["dull", "warped", "normal", "normal", "normal", "warped", "dull", "removed"],
      ["removed", "dull", "normal", "normal", "normal", "dull", "removed", "removed"],
      ["removed", "removed", "dull", "warped", "dull", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "dull", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 56,
    name: "Level 56",
    objective: { type: 'lightsUp', objGoal: 10, tileType: 'bulb' },
    moves: 40,

    allowHardLetters: false,
    locked: false,
    board: [
      ["bulb", "normal", "bulb", "removed", "normal", "normal", "normal", "bulb"],
      ["normal", "normal", "normal", "removed", "normal", "normal", "normal", "removed"],
      ["bulb", "normal", "normal", "removed", "normal", "normal", "normal", "bulb"],
      ["normal", "normal", "normal", "removed", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "normal", "normal", "bulb"],
      ["bulb", "normal", "normal", "normal", "removed", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "removed", "normal", "normal", "bulb"],
      ["bulb", "normal", "bulb", "normal", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 57,
    name: "Level 57",
    objective: { type: 'destroy', objGoal: 3, tileType: 'warped' },
    moves: 40,
    warpTurns: 10,
    allowHardLetters: false,
    locked: false,
    board: [
      ["removed", "removed", "removed", "normal", "normal", "normal", "normal", "removed"],
      ["warped", "normal", "removed", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "warped"],
      ["removed", "removed", "removed", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "warped", "normal", "normal", "normal", "removed", "removed", "removed"]
    ],

  },

  {
    id: 58,
    name: "Level 58",
    objective: { type: 'destroy', objGoal: 2, tileType: 'warped' },
    moves: 30,
    warpTurns: 19,
    allowHardLetters: false,
    lockTurns: 12,
    locked: false,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["locked", "locked", "locked", "normal", "normal", "locked", "locked", "locked"],
      ["locked", "warped", "normal", "normal", "normal", "normal", "warped", "locked"],
      ["locked", "locked", "locked", "normal", "normal", "locked", "locked", "locked"]
    ],

  },

  {
    id: 59,
    name: "Level 59",
    objective: { type: 'words', minLength: 5, objGoal: 6 },
    moves: 30,
    warpTurns: 19,
    allowHardLetters: false,
    lockTurns: 12,

    locked: false,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 60,
    name: "Level 60",
    objective: { type: 'score', objGoal: 9000 },
    moves: 20,
    warpTurns: 8,
    allowHardLetters: false,


    locked: false,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["warped", "normal", "normal", "warped", "warped", "normal", "removed", "removed"],
      ["bulb", "warped", "warped", "bulb", "bulb", "warped", "warped", "bulb"]
    ],

  },
  {
    id: 61,
    name: "Level 61",
    objective: { type: 'defrost', objGoal: 10, tileType: 'ice' },
    moves: 30,
    warpTurns: 8,
    allowHardLetters: false,


    locked: false,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "ice", "normal", "normal", "normal", "normal", "ice", "removed"],
      ["removed", "ice", "normal", "normal", "normal", "normal", "ice", "removed"],
      ["removed", "ice", "normal", "normal", "normal", "normal", "ice", "removed"],
      ["removed", "ice", "ice", "ice", "ice", "ice", "ice", "removed"]
    ],
    tutorialTileType: 'Frozen Tiles',
    tutorialMessage: "Ice tiles can not be selected, Can be destroyed by making adjacent words next to it!",
    tutorial: {}
  },
  {
    id: 62,
    name: "Level 62",
    objective: { type: 'defrost', objGoal: 24, tileType: 'ice' },
    moves: 30,
    warpTurns: 8,
    allowHardLetters: false,


    locked: false,
    board: [
      ["ice", "removed", "ice", "removed", "ice", "removed", "ice", "removed"],
      ["ice", "normal", "ice", "normal", "ice", "normal", "ice", "normal"],
      ["ice", "normal", "ice", "normal", "ice", "normal", "ice", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "ice", "normal", "ice", "normal", "ice", "normal", "ice"],
      ["normal", "ice", "normal", "ice", "normal", "ice", "normal", "ice"],
      ["removed", "ice", "removed", "ice", "removed", "ice", "removed", "ice"]
    ],

  },
  {
    id: 63,
    name: "Level 63",
    objective: { type: 'destroy', objGoal: 2, tileType: 'dull' },
    moves: 35,
    warpTurns: 8,
    allowHardLetters: false,
    dullTurns: 10,

    locked: false,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "ice", "ice", "ice"],
      ["normal", "normal", "normal", "normal", "ice", "ice", "dull", "ice"],
      ["normal", "normal", "normal", "normal", "normal", "ice", "ice", "ice"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "ice", "ice"],
      ["ice", "ice", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "normal", "normal", "normal", "normal", "normal"],
      ["ice", "dull", "ice", "ice", "normal", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 64,
    name: "Level 64",
    objective: { type: 'defrost', objGoal: 10, tileType: 'ice' },
    moves: 38,
    warpTurns: 8,
    allowHardLetters: false,
    dullTurns: 16,
    lockTurns: 5,
    locked: false,
    board: [
      ["removed", "removed", "normal", "normal", "removed", "ice", "removed", "removed"],
      ["removed", "dull", "dull", "normal", "normal", "ice", "normal", "removed"],
      ["normal", "dull", "dull", "normal", "normal", "ice", "ice", "ice"],
      ["removed", "normal", "normal", "locked", "locked", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "locked", "locked", "normal", "normal", "removed"],
      ["ice", "ice", "ice", "normal", "normal", "dull", "dull", "normal",],
      ["removed", "normal", "ice", "normal", "normal", "dull", "dull", "removed"],
      ["removed", "removed", "ice", "removed", "normal", "normal", "removed", "removed"]
    ],

  },
  {
    id: 65,
    name: "Level 65",
    objective: { type: 'destroy', objGoal: 24, tileType: 'dull' },
    moves: 38,
    warpTurns: 8,
    allowHardLetters: false,
    dullTurns: 16,
    lockTurns: 5,
    locked: false,
    difficulty: 'Hard Level',
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "dull", "normal", "removed", "removed", "normal", "dull", "normal"],
      ["normal", "normal", "dull", "normal", "removed", "dull", "normal", "normal"],
      ["removed", "normal", "normal", "dull", "dull", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["dull", "dull", "dull", "removed", "normal", "dull", "dull", "dull"],
      ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"],
      ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"]
    ],

  },
  {
    id: 66,
    name: "Level 66",
    objective: { type: 'score', objGoal: 4000 },
    moves: 38,
    warpTurns: 8,
    allowHardLetters: false,
    dullTurns: 19,
    lockTurns: 13,
    locked: false,

    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["ice", "ice", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["removed", "ice", "dull", "ice", "locked", "normal", "normal", "normal"],
      ["removed", "ice", "dull", "ice", "locked", "normal", "normal", "normal"],
      ["removed", "ice", "dull", "ice", "locked", "normal", "normal", "normal"],
      ["removed", "ice", "dull", "ice", "locked", "normal", "normal", "normal"],
      ["ice", "ice", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "normal", "normal"]
    ],

  },
  {
    id: 67,
    name: "Level 67",
    objective: { type: 'destroy', objGoal: 4, tileType: 'dull' },
    moves: 38,
    warpTurns: 8,
    allowHardLetters: false,
    dullTurns: 10,
    lockTurns: 13,
    locked: false,

    board: [
      ["removed", "removed", "dull", "dull", "removed", "removed", "removed", "removed"],
      ["ice", "ice", "ice", "ice", "ice", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "normal", "normal", "normal", "normal", "ice"],
      ["ice", "ice", "normal", "normal", "normal", "normal", "ice", "ice"],
      ["ice", "normal", "normal", "normal", "normal", "ice", "ice", "ice"],
      ["normal", "normal", "normal", "normal", "ice", "ice", "ice", "ice"],
      ["normal", "normal", "normal", "ice", "ice", "ice", "ice", "ice"],
      ["removed", "removed", "removed", "removed", "dull", "dull", "removed", "removed"]
    ],

  },

  {
    id: 68,
    name: "Level 68",
    objective: { type: 'lightsUp', objGoal: 12, tileType: 'bulb' },
    moves: 45,
    warpTurns: 8,
    difficulty: 'Hard Level'
    , allowHardLetters: false,
    dullTurns: 10,
    lockTurns: 13,
    locked: false,

    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "bulb", "bulb", "bulb", "bulb", "bulb", "bulb", "removed"],
      ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "bulb", "bulb", "bulb", "bulb", "removed", "normal"],
      ["bulb", "normal", "removed", "normal", "normal", "removed", "normal", "bulb"]
    ],

  },
  {
    id: 69,
    name: "Level 69",
    objective: { type: 'lightsUp', objGoal: 8, tileType: 'bulb' },
    moves: 45,
    warpTurns: 8,
    allowHardLetters: false,
    dullTurns: 10,
    lockTurns: 13,
    locked: false,

    board: [
      ["warped", "normal", "normal", "ice", "ice", "normal", "normal", "warped"],
      ["normal", "warped", "ice", "bulb", "bulb", "ice", "warped", "normal"],
      ["normal", "ice", "bulb", "ice", "ice", "bulb", "ice", "normal"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "ice"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "ice"],
      ["normal", "ice", "bulb", "ice", "ice", "bulb", "ice", "normal"],
      ["normal", "dull", "ice", "bulb", "bulb", "ice", "dull", "normal"],
      ["dull", "normal", "normal", "ice", "ice", "normal", "normal", "dull"]
    ],

  },
  {
    id: 70,
    name: "Level 70",
    objective: { type: 'words', objGoal: 15, minLength: 4 },
    moves: 50,
    allowHardLetters: true,
    locked: false,
    allowBulbTiles: true,
    lockTurns: 10,
    dullTurns: 8,
    warpTurns: 7,
    board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["dull", "ice", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["removed", "ice", "normal", "normal", "normal", "normal", "warped", "warped"],
      ["removed", "ice", "normal", "normal", "normal", "normal", "warped", "removed"],
      ["removed", "ice", "normal", "normal", "normal", "normal", "warped", "removed"],
      ["removed", "ice", "locked", "locked", "locked", "locked", "warped", "warped"],
      ["dull", "ice", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 71,
    name: "Level 71",
    objective: { type: 'score', objGoal: 3400 },
    moves: 25,
    allowHardLetters: true,
    locked: false,
    allowBulbTiles: true,
    lockTurns: 10,
    dullTurns: 8,
    cursedTurns: 5,
    warpTurns: 7,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["cursed", "normal", "cursed", "cursed", "cursed", "cursed", "normal", "cursed"],
      ["cursed", "normal", "cursed", "cursed", "cursed", "cursed", "normal", "cursed"],
      ["removed", "normal", "normal", "cursed", "cursed", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "cursed", "cursed", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "cursed", "cursed", "normal", "normal", "removed"]
    ],
    tutorialTileType: 'Cursed Tiles',
    tutorialMessage: "Cursed tiles are not your friend!, they reduce your points when used in a word, Wait till the timer reaches zero to use it!",
    tutorial: {}
  },
  {
    id: 72,
    name: "Level 72",
    objective: { type: 'score', objGoal: 6000 },
    moves: 30,
    allowHardLetters: false,
    locked: false,
    allowBulbTiles: true,
    lockTurns: 10,
    dullTurns: 8,
    cursedTurns: 8,
    warpTurns: 7,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "ice", "ice", "normal", "normal", "normal"],
      ["normal", "cursed", "ice", "ice", "ice", "ice", "cursed", "normal"],
      ["normal", "ice", "ice", "cursed", "cursed", "ice", "ice", "normal"],
      ["normal", "ice", "ice", "cursed", "cursed", "ice", "ice", "normal"],
      ["normal", "cursed", "ice", "ice", "ice", "ice", "cursed", "normal"],
      ["normal", "normal", "normal", "ice", "ice", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],
  },
  {
    id: 73,
    name: "Level 73",
    objective: { type: 'score', objGoal: 4000 },
    moves: 30,
    allowHardLetters: false,
    locked: false,
    allowBulbTiles: true,
    lockTurns: 0,
    dullTurns: 12,
    cursedTurns: 9,
    warpTurns: 7,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "cursed", "dull", "normal", "normal", "cursed", "dull", "normal"],
      ["normal", "cursed", "dull", "normal", "normal", "cursed", "dull", "normal"],
      ["dull", "normal", "dull", "normal", "normal", "cursed", "normal", "cursed"],
      ["cursed", "normal", "dull", "normal", "normal", "cursed", "normal", "dull"],
      ["normal", "cursed", "dull", "normal", "normal", "cursed", "dull", "normal"],
      ["normal", "cursed", "dull", "normal", "normal", "cursed", "dull", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],
  },
  {
    id: 74,
    name: "Level 74",
    objective: { type: 'destroy', objGoal: 4, tileType: 'dull' },
    moves: 55,
    allowHardLetters: false,
    locked: false,
    allowBulbTiles: true,
    lockTurns: 0,
    difficulty: 'demon',
    dullTurns: 30,
    cursedTurns: 9,
    warpTurns: 7,
    board: [
      ["dull", "removed", "dull", "removed", "dull", "removed", "dull", "removed"],
      ["ice", "removed", "ice", "removed", "ice", "removed", "ice", "ice"],
      ["ice", "removed", "ice", "removed", "ice", "ice", "ice", "ice"],
      ["ice", "removed", "ice", "ice", "ice", "ice", "ice", "ice"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "ice"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],
  },
  {
    id: 75,
    name: "Level 75",
    objective: { type: 'words', objGoal: 4, minLength: 5 },
    moves: 55,
    allowHardLetters: false,
    locked: false,
    allowBulbTiles: true,
    lockTurns: 0,
    dullTurns: 30,
    cursedTurns: 9,
    warpTurns: 7,
    board: [
      ["cursed", "cursed", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["cursed", "cursed", "ice", "normal", "normal", "normal", "normal", "normal"],
      ["cursed", "cursed", "ice", "normal", "normal", "normal", "normal", "normal"],
      ["cursed", "ice", "ice", "normal", "normal", "normal", "ice", "ice"],
      ["ice", "ice", "normal", "normal", "normal", "ice", "ice", "cursed"],
      ["normal", "normal", "normal", "normal", "normal", "ice", "cursed", "cursed"],
      ["normal", "normal", "normal", "normal", "normal", "ice", "cursed", "cursed"],
      ["normal", "removed", "removed", "removed", "removed", "removed", "cursed", "cursed"]
    ],
  },
  {
    id: 76,
    name: "Level 76",
    objective: { type: 'destroy', objGoal: 3, tileType: 'warped' },
    moves: 45,
    allowHardLetters: false,
    locked: false,
    allowBulbTiles: true,
    lockTurns: 5,
    dullTurns: 8,
    cursedTurns: 9,
    warpTurns: 7,
    board: [
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["locked", "locked", "locked", "normal", "normal", "removed", "normal", "normal"],
      ["locked", "warped", "locked", "normal", "normal", "normal", "normal", "normal"],
      ["locked", "locked", "locked", "ice", "ice", "ice", "cursed", "cursed"],
      ["locked", "locked", "locked", "ice", "ice", "ice", "cursed", "cursed"],
      ["locked", "locked", "locked", "ice", "ice", "ice", "cursed", "cursed"],
      ["removed", "locked", "locked", "ice", "ice", "warped", "warped", "removed"],
      ["removed", "removed", "removed", "ice", "ice", "removed", "removed", "removed"]
    ],
  },
  {
    id: 77,
    name: "Level 77",
    objective: { type: 'lightsUp', objGoal: 6, tileType: 'bulb' },
    moves: 30,
    allowHardLetters: false,
    locked: false,
    allowBulbTiles: true,
    lockTurns: 15,
    dullTurns: 8,
    cursedTurns: 9,
    warpTurns: 7,
    board: [
      ["bulb", "removed", "bulb", "removed", "bulb", "removed", "removed", "removed"],
      ["normal", "removed", "normal", "removed", "normal", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "normal", "removed", "normal", "removed", "normal"],
      ["removed", "removed", "removed", "bulb", "removed", "bulb", "removed", "bulb"]
    ],
  },
  {
    id: 78,
    name: "Level 78",
    objective: { type: 'destroy', objGoal: 30, tileType: 'dull' },
    moves: 47,
    allowHardLetters: false,
    locked: false,
    allowBulbTiles: true,
    lockTurns: 15,
    dullTurns: 20,
    cursedTurns: 9,
    warpTurns: 7,
    board: [
      ["normal", "removed", "dull", "dull", "dull", "dull", "removed", "normal"],
      ["normal", "removed", "removed", "normal", "normal", "removed", "removed", "normal"],
      ["normal", "normal", "removed", "dull", "dull", "removed", "normal", "normal"],
      ["normal", "normal", "dull", "normal", "normal", "dull", "normal", "normal"],
      ["normal", "dull", "dull", "dull", "dull", "dull", "dull", "normal"],
      ["normal", "removed", "dull", "dull", "dull", "dull", "removed", "normal"],
      ["removed", "removed", "dull", "dull", "dull", "dull", "removed", "removed"],
      ["dull", "dull", "dull", "dull", "dull", "dull", "dull", "dull"]
    ],
  },
  {
    id: 79,
    name: "Level 79",
    objective: { type: 'score', objGoal: 6000 },
    moves: 40,
    allowHardLetters: false,
    locked: false,
    cursedTurns: 15,
   
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "normal", "normal", "removed", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "removed", "removed", "normal", "removed", "removed"],
      ["cursed", "normal", "normal", "cursed", "cursed", "normal", "normal", "cursed"],
      ["normal", "normal", "cursed", "normal", "normal", "cursed", "normal", "normal"],
      ["cursed", "normal", "normal", "normal", "normal", "normal", "normal", "cursed"],
      ["normal", "normal", "cursed", "cursed", "cursed", "cursed", "normal", "normal"],
      ["removed", "removed", "normal", "removed", "normal", "normal", "removed", "removed"],
      ["removed", "normal", "normal", "removed", "removed", "normal", "normal", "removed"]
    ],

  },

  {
    id: 80,
    name: "Level 80",
    objective: { type: 'defrost', objGoal: 23, tileType: 'ice' },
    difficulty: 'Hard Level',
    moves: 35,
    allowHardLetters: false,
    locked: false,
    lockTurns: 10,
    allowBulbTiles: true,
    board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["locked", "ice", "normal", "normal", "normal", "normal", "ice", "locked"],
      ["ice", "ice", "locked", "normal", "normal", "locked", "ice", "ice"],
      ["ice", "ice", "locked", "normal", "normal", "locked", "ice", "ice"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "ice"],
      ["removed", "ice", "ice", "removed", "removed", "ice", "ice", "removed"],
      ["removed", "ice", "ice", "removed", "removed", "ice", "ice", "removed"],
      ["removed", "ice", "removed", "removed", "removed", "removed", "ice", "removed"]
    ],

  },

  {
    id: 81,
    name: "Level 81",
    objective: { type: 'words', objGoal: 10, minLength: 4 },

    moves: 40,
    allowHardLetters: false,
    locked: false,
    lockTurns: 13,
    dullTurns: 5,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "locked", "locked", "removed", "removed", "normal", "normal", "removed"],
      ["locked", "locked", "locked", "locked", "normal", "normal", "normal", "normal"],
      ["locked", "locked", "dull", "locked", "normal", "normal", "normal", "normal"],
      ["locked", "dull", "locked", "locked", "normal", "normal", "normal", "normal"],
      ["locked", "locked", "dull", "locked", "normal", "normal", "normal", "normal"],
      ["removed", "locked", "locked", "removed", "removed", "normal", "normal", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },

  {
    id: 82,
    name: "Level 82",
    objective: { type: 'destroy', objGoal: 12, tileType: 'dull' },

    moves: 50,
    allowHardLetters: false,
    locked: false,
    lockTurns: 13,
    dullTurns: 15,
    allowBulbTiles: true,
    board: [
      ["removed", "normal", "removed", "normal", "removed", "normal", "removed", "normal"],
      ["removed", "normal", "removed", "normal", "normal", "normal", "removed", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "ice"],
      ["dull", "removed", "dull", "removed", "dull", "removed", "dull", "removed"],
      ["dull", "removed", "dull", "removed", "dull", "removed", "dull", "removed"],
      ["dull", "removed", "dull", "removed", "dull", "removed", "dull", "removed"]
    ],

  },
  {
    id: 83,
    name: "Level 83",
    objective: { type: 'score', objGoal: 8000 },

    moves: 40,
    allowHardLetters: false,
    locked: false,
    cursedTurns: 10,
    dullTurns: 15,
    warpTurns: 8,
    allowBulbTiles: true,
    board: [
      ["removed", "warped", "warped", "removed", "removed", "warped", "warped", "removed"],
      ["removed", "removed", "warped", "normal", "normal", "warped", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["cursed", "dull", "cursed", "normal", "normal", "dull", "cursed", "dull"],
      ["removed", "removed", "dull", "normal", "normal", "cursed", "removed", "removed"],
      ["removed", "dull", "cursed", "removed", "removed", "dull", "cursed", "removed"]
    ],

  },
  {
    id: 84,
    name: "Level 84",
    objective: { type: 'lightsUp', objGoal: 6, tileType: 'bulb' },

    moves: 45,
    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    dullTurns: 5,
    allowBulbTiles: true,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "locked", "locked", "normal"],
      ["normal", "removed", "removed", "removed", "removed", "bulb", "locked", "normal"],
      ["normal", "removed", "bulb", "removed", "removed", "bulb", "removed", "normal"],
      ["normal", "removed", "bulb", "removed", "removed", "bulb", "removed", "normal"],
      ["normal", "ice", "bulb", "removed", "removed", "removed", "removed", "normal"],
      ["normal", "ice", "ice", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 85,
    name: "Level 85",
    objective: { type: 'destroy', objGoal: 9, tileType: 'cursed' },

    moves: 40,
    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    cursedTurns: 12,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "cursed", "cursed", "cursed"],
      ["removed", "removed", "normal", "normal", "locked", "cursed", "cursed", "cursed"],
      ["normal", "normal", "normal", "normal", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "normal", "normal", "normal", "normal"],
      ["cursed", "cursed", "cursed", "locked", "normal", "normal", "removed", "removed"],
      ["cursed", "cursed", "cursed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 86,
    name: "Level 86",
    objective: { type: 'lightsUp', objGoal: 3, tileType: 'bulb' },

    moves: 16,
    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    cursedTurns: 12,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "ice", "bulb", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "ice", "removed", "removed"],
      ["removed", "removed", "ice", "normal", "normal", "ice", "removed", "removed"],
      ["removed", "removed", "bulb", "ice", "ice", "bulb", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 87,
    name: "Level 87",
    objective: { type: 'words', minLength: 5, objGoal: 8 },

    moves: 50,
    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    cursedTurns: 12,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "normal", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "normal", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 88,
    name: "Level 88",
    objective: { type: 'score', objGoal: 4000 },

    moves: 30,
    allowHardLetters: true,
    locked: false,
    lockTurns: 14,
    cursedTurns: 12,
    dullTurns: 10,
    warpTurns: 8,
    allowBulbTiles: true,
    board: [
      ["normal", "normal", "normal", "cursed", "cursed", "normal", "normal", "normal"],
      ["normal", "normal", "cursed", "dull", "dull", "cursed", "normal", "normal"],
      ["normal", "cursed", "dull", "warped", "warped", "dull", "cursed", "normal"],
      ["cursed", "dull", "warped", "locked", "locked", "warped", "dull", "cursed"],
      ["cursed", "dull", "warped", "locked", "locked", "warped", "dull", "cursed"],
      ["normal", "cursed", "dull", "warped", "warped", "dull", "cursed", "normal"],
      ["normal", "normal", "cursed", "dull", "dull", "cursed", "normal", "normal"],
      ["normal", "normal", "normal", "cursed", "cursed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 89,
    name: "Level 89",
    objective: { type: 'score', objGoal: 8000 },

    moves: 30,
    difficulty: 'Hard Level',
    allowHardLetters: false,
    locked: false,
    lockTurns: 14,
    cursedTurns: 12,
    dullTurns: 10,
    warpTurns: 8,
    allowBulbTiles: false,
    board: [
      ["dull", "removed", "dull", "removed", "dull", "dull", "removed", "dull"],
      ["normal", "removed", "normal", "removed", "normal", "normal", "removed", "normal"],
      ["locked", "normal", "normal", "removed", "normal", "normal", "removed", "normal"],
      ["normal", "normal", "locked", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "normal", "locked", "normal", "normal", "locked", "normal"],
      ["normal", "removed", "normal", "removed", "normal", "locked", "normal", "normal"],
      ["normal", "removed", "normal", "removed", "normal", "removed", "normal", "normal"],
      ["normal", "removed", "normal", "removed", "normal", "removed", "normal", "normal"]
    ],

  },
  {
    id: 90,
    name: "Level 90",
    objective: { type: 'defrost', objGoal: 20, tileType: 'ice' },

    moves: 50,
    allowHardLetters: false,
    locked: false,
    lockTurns: 17,
    cursedTurns: 12,
    dullTurns: 10,
    warpTurns: 8,
    allowBulbTiles: false,
    board: [
      ["ice", "normal", "normal", "normal", "normal", "normal", "normal", "ice"],
      ["ice", "ice", "normal", "normal", "normal", "normal", "ice", "ice"],
      ["ice", "ice", "locked", "normal", "normal", "locked", "ice", "ice"],
      ["ice", "ice", "locked", "removed", "removed", "locked", "ice", "ice"],
      ["ice", "ice", "locked", "removed", "removed", "locked", "ice", "ice"],
      ["ice", "ice", "locked", "normal", "normal", "locked", "ice", "ice"],
      ["ice", "ice", "locked", "locked", "locked", "locked", "ice", "ice"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "ice"]
    ],

  },
  {
    id: 91,
    name: "Level 91",
    objective: { type: 'destroy', objGoal: 6, tileType: 'dull' },

    moves: 30,
    allowHardLetters: false,
    locked: false,
    lockTurns: 17,
    cursedTurns: 12,
    dullTurns: 13,
    warpTurns: 8,
    allowBulbTiles: false,
    board: [
      ["removed", "removed", "fire", "removed", "removed", "fire", "removed", "removed"],
      ["normal", "normal", "dull", "normal", "normal", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "normal", "normal", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "normal", "normal", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "normal", "normal", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "normal", "normal", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "normal", "normal", "dull", "normal", "normal"],
      ["removed", "removed", "dull", "removed", "removed", "dull", "removed", "removed"]
    ],
    tutorialTileType: 'Burning Tiles',
    tutorialMessage: "Burning tiles are destructive tiles that burns a tile below it every move, When it reaches the bottom if not used , you lose the game!",
    tutorial: {}
  },
  {
    id: 92,
    name: "Level 92",
    objective: { type: 'defrost', objGoal: 10, tileType: 'ice' },

    moves: 40,
    allowHardLetters: false,
    locked: false,
    lockTurns: 17,
    cursedTurns: 12,
    dullTurns: 13,
    warpTurns: 8,
    allowBulbTiles: false,
    board: [
      ["ice", "ice", "fire", "removed", "removed", "normal", "normal", "normal"],
      ["ice", "fire", "ice", "removed", "normal", "normal", "normal", "normal"],
      ["fire", "ice", "ice", "removed", "normal", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "ice", "normal", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "ice", "normal", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "ice", "removed", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "ice", "removed", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 93,
    name: "Level 93",
    objective: { type: 'score', objGoal: 1200 },
    difficulty: 'Hard Level',
    moves: 40,
    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    cursedTurns: 12,
    allowBulbTiles: true,
    board: [
      ["fire", "fire", "removed", "removed", "removed", "removed", "fire", "fire"],
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "fire", "fire", "normal", "normal", "normal"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["fire", "fire", "normal", "normal", "normal", "normal", "fire", "fire"],
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"]
    ],

  },
  {
    id: 94,
    name: "Level 94",
    objective: { type: 'destroy', objGoal: 16, tileType: 'dull' },

    moves: 20,
    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    dullTurns: 8,
    allowBulbTiles: true,
    board: [
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "dull", "normal", "normal", "normal", "normal", "dull", "dull"],
      ["normal", "dull", "normal", "normal", "normal", "normal", "dull", "normal"],
      ["removed", "removed", "removed", "removed", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "removed", "removed", "removed", "removed"],
      ["normal", "dull", "normal", "normal", "normal", "normal", "dull", "normal"],
      ["dull", "dull", "normal", "normal", "normal", "normal", "dull", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"]
    ],

  },
  {
    id: 95,
    name: "Level 95",
    objective: { type: 'lightsUp', objGoal: 6, tileType: 'bulb' },
    difficulty: 'Hard Level',
    moves: 50,
    allowHardLetters: true,
    locked: false,
    lockTurns: 9,
    dullTurns: 8,
    allowBulbTiles: true,
    board: [
      ["bulb", "removed", "removed", "removed", "removed", "bulb", "bulb", "removed"],
      ["ice", "ice", "removed", "removed", "ice", "ice", "ice", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "ice", "ice", "ice", "removed", "removed", "ice", "ice"],
      ["removed", "bulb", "bulb", "removed", "removed", "removed", "removed", "bulb"]
    ],

  },
  {
    id: 96,
    name: "Level 96",
    objective: { type: 'words', objGoal: 6, minLength: 6 },

    moves: 50,
    allowHardLetters: false,
    locked: false,
    lockTurns: 11,
    warpTurns: 16,
    allowBulbTiles: true,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "locked", "locked", "locked"],
      ["normal", "normal", "normal", "normal", "normal", "locked", "fire", "locked"],
      ["normal", "normal", "normal", "normal", "normal", "locked", "normal", "locked"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["locked", "locked", "locked", "normal", "normal", "normal", "normal", "normal"],
      ["locked", "warped", "locked", "normal", "normal", "normal", "normal", "normal"],
      ["locked", "locked", "locked", "normal", "normal", "normal", "normal", "normal"]
    ],

  },

  {
    id: 97,
    name: "Level 97",
    objective: { type: 'words', minLength: 4, objGoal: 3 },

    moves: 20,
    allowHardLetters: false,
    locked: false,
    dullTurns: 17,
    cursedTurns: 10,
    allowBulbTiles: true,
    board: [
      ["dull", "dull", "dull", "removed", "removed", "removed", "removed", "removed"],
      ["dull", "dull", "dull", "removed", "removed", "removed", "removed", "removed"],
      ["dull", "dull", "dull", "dull", "cursed", "normal", "normal", "cursed"],
      ["dull", "dull", "dull", "cursed", "normal", "normal", "cursed", "dull"],
      ["dull", "dull", "cursed", "normal", "normal", "cursed", "dull", "dull"],
      ["dull", "cursed", "normal", "normal", "cursed", "dull", "dull", "dull"],
      ["removed", "removed", "removed", "removed", "removed", "dull", "dull", "dull"],
      ["removed", "removed", "removed", "removed", "removed", "dull", "dull", "dull"]
    ],

  },
  {
    id: 98,
    name: "Level 98",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 20 },

    moves: 40,
    allowHardLetters: false,
    locked: false,
    dullTurns: 17,
    cursedTurns: 10,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "dull", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "dull", "dull", "dull", "dull", "removed", "removed"],
      ["normal", "normal", "dull", "removed", "removed", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "removed", "removed", "dull", "normal", "dull"],
      ["dull", "normal", "dull", "removed", "removed", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "removed", "removed", "dull", "normal", "normal"],
      ["removed", "removed", "dull", "dull", "dull", "dull", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "dull", "removed", "removed", "removed"]
    ],

  },

  {
    id: 99,
    name: "Level 99",
    objective: { type: 'score', objGoal: 9500 },

    moves: 40,
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    allowBulbTiles: true,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "locked", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "locked", "ice", "locked", "normal", "locked", "normal", "normal"],
      ["locked", "ice", "fire", "ice", "locked", "ice", "locked", "locked"],
      ["removed", "normal", "ice", "normal", "ice", "fire", "ice", "removed"],
      ["removed", "normal", "ice", "normal", "normal", "ice", "normal", "removed"],
      ["removed", "normal", "ice", "normal", "normal", "ice", "normal", "removed"]
    ],

  },

  {
    id: 100,
    name: "Level 100",
    objective: { type: 'destroy', objGoal: 10, tileType: 'cursed' },

    moves: 40,
    allowHardLetters: false,
    locked: false,
    cursedTurns: 10,
    lockTurns: 8,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "normal", "removed", "removed", "normal", "removed", "removed"],
      ["removed", "cursed", "normal", "removed", "removed", "normal", "cursed", "removed"],
      ["fire", "normal", "normal", "normal", "normal", "normal", "normal", "fire"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "cursed", "cursed", "cursed", "cursed", "normal", "normal"],
      ["normal", "cursed", "removed", "removed", "removed", "removed", "cursed", "normal"],
      ["cursed", "removed", "removed", "removed", "removed", "removed", "removed", "cursed"]
    ],

  },
  {
    id: 101,
    name: "Level 101",
    objective: { type: 'words', objGoal: 4, minLength: 4 },
    difficulty: 'Hard Level',
    moves: 30,
    allowHardLetters: false,
    locked: false,

    lockTurns: 8,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "infected", "normal", "normal", "infected", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "normal", "removed", "removed"],
      ["infected", "normal", "normal", "infected", "normal", "normal", "normal", "infected"],
      ["normal", "infected", "normal", "normal", "normal", "normal", "infected", "normal"],
      ["normal", "normal", "normal", "normal", "infected", "normal", "normal", "infected"],
      ["infected", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "infected", "removed", "removed", "removed", "removed"],
      ["removed", "infected", "normal", "normal", "removed", "removed", "removed", "removed"]
    ],
    tutorialTileType: 'Poisoned Tile',
    tutorialMessage: "A Poisoned tile is very annoying cause when used , it doesnt count towards the respected objective, And if not used, it spread to tiles next to it!",
    tutorial: {}
  },

  {
    id: 102,
    name: "Level 102",
    objective: { type: 'score', objGoal: 1500 },

    moves: 40,
    allowHardLetters: false,
    locked: false,

    dullTurns: 9,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "infected", "normal", "normal", "normal", "normal", "infected", "removed"],
      ["removed", "infected", "normal", "normal", "normal", "normal", "infected", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "dull", "normal", "normal", "dull", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "infected", "infected", "removed", "removed", "removed"]
    ],

  },
  {
    id: 103,
    name: "Level 103",
    objective: { type: 'lightsUp', objGoal: 1, tileType: 'bulb' },

    moves: 30,
    allowHardLetters: false,
    locked: false,
    cursedTurns: 7,
    warpTurns: 8,
    dullTurns: 9,
    allowBulbTiles: true,
    board: [
      ["bulb", "ice", "normal", "removed", "removed", "removed", "removed", "removed"],
      ["cursed", "ice", "removed", "normal", "removed", "removed", "removed", "removed"],
      ["ice", "ice", "normal", "normal", "normal", "normal", "fire", "removed"],
      ["ice", "dull", "warped", "cursed", "normal", "normal", "normal", "removed"],
      ["ice", "ice", "ice", "ice", "ice", "normal", "normal", "fire"],
      ["warped", "dull", "cursed", "ice", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "normal", "removed", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 104,
    name: "Level 104",
    objective: { type: 'lightsUp', objGoal: 8, tileType: 'bulb' },

    moves: 40,
    allowHardLetters: false,
    locked: false,
    cursedTurns: 7,
    warpTurns: 8,
    dullTurns: 9,
    allowBulbTiles: true,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "infected", "bulb"],
      ["bulb", "infected", "normal", "normal", "normal", "normal", "normal", "bulb"],
      ["bulb", "normal", "normal", "normal", "normal", "normal", "infected", "bulb"],
      ["bulb", "infected", "normal", "normal", "normal", "normal", "normal", "bulb"],
      ["bulb", "normal", "normal", "normal", "normal", "normal", "infected", "bulb"],
      ["bulb", "infected", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },

  {
    id: 105,
    name: "Level 105",
    objective: { type: 'destroy', objGoal: 4, tileType: 'dull' },

    moves: 15,
    allowHardLetters: true,
    locked: false,
    cursedTurns: 4,
    warpTurns: 8,
    dullTurns: 5,
    allowBulbTiles: true,
    board: [
      ["removed", "cursed", "removed", "cursed", "removed", "cursed", "removed", "cursed"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 106,
    name: "Level 106",
    objective: { type: 'defrost', objGoal: 20, tileType: 'ice' },

    moves: 45,
    allowHardLetters: false,
    locked: false,
    cursedTurns: 25,
    warpTurns: 8,
    dullTurns: 5,
    allowBulbTiles: true,
    board: [
      ["removed", "normal", "ice", "removed", "removed", "ice", "normal", "removed"],
      ["removed", "cursed", "ice", "removed", "removed", "ice", "normal", "removed"],
      ["removed", "normal", "ice", "normal", "normal", "ice", "normal", "removed"],
      ["removed", "ice", "ice", "normal", "normal", "ice", "ice", "removed"],
      ["ice", "ice", "normal", "infected", "infected", "normal", "ice", "ice"],
      ["ice", "normal", "infected", "normal", "normal", "infected", "normal", "ice"],
      ["ice", "infected", "normal", "normal", "normal", "cursed", "infected", "ice"],
      ["ice", "normal", "normal", "removed", "removed", "normal", "normal", "ice"]
    ],

  },



  {
    id: 107,
    name: "Level 107",
    objective: { type: 'destroy', objGoal: 4, tileType: 'dull' },

    moves: 40,
    allowHardLetters: false,
    locked: false,

    warpTurns: 8,
    dullTurns: 15,
    allowBulbTiles: true,
    board: [
      ["dull", "removed", "infected", "normal", "normal", "normal", "removed", "dull"],
      ["normal", "removed", "normal", "normal", "normal", "infected", "removed", "normal"],
      ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
      ["normal", "removed", "infected", "normal", "normal", "infected", "removed", "normal"],
      ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
      ["normal", "removed", "infected", "normal", "normal", "infected", "removed", "normal"],
      ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
      ["dull", "removed", "normal", "infected", "infected", "normal", "removed", "dull"]
    ],

  },

  {
    id: 108,
    name: "Level 108",
    objective: { type: 'destroy', objGoal: 32, tileType: 'warped' },

    moves: 30,
    allowHardLetters: false,
    locked: false,

    warpTurns: 20,

    allowBulbTiles: true,
    board: [
      ["warped", "normal", "warped", "normal", "warped", "normal", "warped", "normal"],
      ["normal", "warped", "normal", "warped", "normal", "warped", "infected", "warped"],
      ["warped", "infected", "warped", "normal", "warped", "normal", "warped", "normal"],
      ["normal", "warped", "normal", "warped", "normal", "warped", "normal", "warped"],
      ["warped", "normal", "warped", "normal", "warped", "normal", "warped", "normal"],
      ["normal", "warped", "normal", "warped", "normal", "warped", "infected", "warped"],
      ["warped", "infected", "warped", "normal", "warped", "normal", "warped", "normal"],
      ["normal", "warped", "normal", "warped", "normal", "warped", "normal", "warped"]
    ],

  },
  {
    id: 109,
    name: "Level 109",
    objective: { type: 'words', objGoal: 5, minLength: 4 },

    moves: 50,
    allowHardLetters: false,
    locked: false,
    difficulty: 'Hard Level',
    warpTurns: 20,

    allowBulbTiles: true,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "infected", "infected", "infected", "infected", "infected", "normal"],
      ["removed", "removed", "normal", "normal", "infected", "normal", "normal", "removed"],
      ["removed", "removed", "removed", "infected", "infected", "infected", "removed", "removed"],
      ["removed", "removed", "infected", "infected", "infected", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "infected", "normal", "normal", "removed", "removed"],
      ["normal", "infected", "infected", "infected", "infected", "infected", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 110,
    name: "Level 110",
    objective: { type: 'lightsUp', objGoal: 4, tileType: 'bulb' },

    moves: 50,
    allowHardLetters: false,
    locked: false,

    warpTurns: 20,

    allowBulbTiles: true,
    board: [
      ["removed", "bulb", "ice", "ice", "ice", "removed", "bulb", "removed"],
      ["removed", "removed", "removed", "ice", "ice", "removed", "ice", "removed"],
      ["ice", "ice", "ice", "ice", "ice", "normal", "ice", "ice"],
      ["ice", "ice", "ice", "normal", "normal", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "ice", "normal", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "normal", "normal"],
      ["removed", "ice", "removed", "ice", "ice", "removed", "removed", "removed"],
      ["removed", "bulb", "removed", "ice", "ice", "ice", "bulb", "removed"]
    ],

  },
  {
    id: 111,
    name: "Level 111",
    objective: { type: 'score', objGoal: 10000 },

    moves: 50,
    allowHardLetters: false,
    locked: false,

    cursedTurns: 10,

    allowBulbTiles: true,
    board: [
      ["cursed", "normal", "normal", "normal", "normal", "normal", "normal", "cursed"],
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "removed", "cursed", "normal", "normal", "cursed", "removed", "normal"],
      ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
      ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
      ["normal", "removed", "cursed", "normal", "normal", "cursed", "removed", "normal"],
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["cursed", "normal", "normal", "normal", "normal", "normal", "normal", "cursed"]
    ],

  },
  {
    id: 112,
    name: "Level 112",
    objective: { type: 'score', objGoal: 3000 },

    moves: 30,
    allowHardLetters: false,
    locked: false,

    warpTurns: 10,

    allowBulbTiles: true,
    board: [
      ["removed", "removed", "infected", "removed", "removed", "removed", "infected", "removed"],
      ["removed", "removed", "removed", "infected", "warped", "warped", "warped", "removed"],
      ["infected", "warped", "warped", "warped", "warped", "warped", "warped", "infected"],
      ["removed", "warped", "warped", "warped", "infected", "removed", "infected", "removed"],
      ["removed", "infected", "removed", "infected", "warped", "warped", "warped", "removed"],
      ["infected", "warped", "warped", "warped", "warped", "warped", "warped", "infected"],
      ["removed", "warped", "warped", "warped", "infected", "removed", "removed", "removed"],
      ["removed", "infected", "removed", "removed", "removed", "infected", "removed", "removed"]
    ],

  },
  {
    id: 113,
    name: "Level 113",
    objective: { type: 'lightsUp', objGoal: 14, tileType: 'bulb' },

    moves: 30,
    allowHardLetters: false,
    locked: false,
    difficulty: 'Hard Level',
    warpTurns: 10,

    allowBulbTiles: true,
    board: [
      ["normal", "normal", "bulb", "removed", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "removed", "bulb", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "bulb", "removed", "removed", "bulb", "removed", "bulb"],
      ["normal", "normal", "normal", "normal", "bulb", "removed", "bulb", "removed"],
      ["removed", "bulb", "removed", "bulb", "normal", "normal", "normal", "normal"],
      ["bulb", "removed", "bulb", "removed", "removed", "bulb", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "bulb", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "removed", "bulb", "normal", "normal"]
    ],

  },
  {
    id: 114,
    name: "Level 114",
    objective: { type: 'destroy', objGoal: 18, tileType: 'dull' },

    moves: 45,
    allowHardLetters: false,
    locked: false,

    dullTurns: 13,

    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "ice", "normal", "normal", "normal", "normal", "ice", "dull"],
      ["dull", "ice", "ice", "normal", "normal", "ice", "ice", "dull"],
      ["dull", "dull", "normal", "normal", "normal", "normal", "dull", "dull"],
      ["removed", "dull", "dull", "ice", "ice", "dull", "dull", "removed"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "removed"],
      ["removed", "removed", "removed", "dull", "dull", "removed", "removed", "removed"]
    ],

  },
  {
    id: 115,
    name: "Level 115",
    objective: { type: 'defrost', objGoal: 12, tileType: 'ice' },

    moves: 25,
    allowHardLetters: false,
    locked: false,

    dullTurns: 13,

    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["ice", "removed", "removed", "removed", "removed", "removed", "removed", "ice"],
      ["normal", "normal", "ice", "removed", "removed", "ice", "normal", "normal"],
      ["normal", "normal", "ice", "removed", "removed", "ice", "normal", "normal"],
      ["normal", "normal", "ice", "removed", "removed", "ice", "normal", "normal"],
      ["normal", "normal", "ice", "removed", "removed", "ice", "normal", "normal"],
      ["ice", "removed", "removed", "removed", "removed", "removed", "removed", "ice"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 116,
    name: "Level 116",
    objective: { type: 'destroy', objGoal: 10, tileType: 'dull' },

    moves: 10,
    allowHardLetters: false,
    locked: false,

    dullTurns: 7,

    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "dull", "normal", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["dull", "normal", "removed", "removed", "dull", "normal", "dull", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "dull", "normal", "dull", "removed", "removed", "normal", "dull"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "dull", "removed", "removed", "removed"]
    ],

  },
  {
    id: 117,
    name: "Level 117",
    objective: { type: 'words', objGoal: 1, minLength: 8 },

    moves: 50,
    allowHardLetters: false,
    locked: false,
    difficulty: 'demon',
    dullTurns: 7,

    allowBulbTiles: true,
    board: [
      ["normal", "infected", "removed", "removed", "removed", "removed", "infected", "normal"],
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["infected", "normal", "normal", "removed", "removed", "normal", "normal", "infected"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "infected", "normal", "normal", "infected", "removed", "removed"]
    ],

  },
  {
    id: 118,
    name: "Level 118",
    objective: { type: 'words', objGoal: 25, minLength: 3 },

    moves: 40,
    allowHardLetters: false,
    locked: false,
    cursedTurns: 9,
    dullTurns: 13,

    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "dull", "dull", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "cursed", "infected", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "cursed", "infected", "normal", "normal", "removed"],
      ["dull", "infected", "infected", "infected", "infected", "cursed", "cursed", "dull"],
      ["dull", "cursed", "cursed", "infected", "infected", "infected", "infected", "dull"],
      ["removed", "normal", "normal", "infected", "cursed", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "infected", "cursed", "normal", "normal", "removed"],
      ["removed", "removed", "removed", "dull", "dull", "removed", "removed", "removed"]
    ],

  },
  {
    id: 119,
    name: "Level 119",
    objective: { type: 'score', objGoal: 18000 },

    moves: 30,
    allowHardLetters: false,
    locked: false,
    cursedTurns: 9,
    dullTurns: 13,
    warpTurns: 14,
    allowBulbTiles: true,
    board: [
      ["normal", "removed", "bulb", "normal", "bulb", "removed", "normal", "warped"],
      ["normal", "removed", "normal", "normal", "normal", "removed", "normal", "cursed"],
      ["normal", "removed", "normal", "normal", "normal", "removed", "normal", "cursed"],
      ["cursed", "warped", "normal", "normal", "normal", "warped", "cursed", "cursed"],
      ["cursed", "cursed", "normal", "normal", "normal", "normal", "warped", "cursed"],
      ["normal", "cursed", "removed", "normal", "normal", "normal", "removed", "cursed"],
      ["normal", "cursed", "removed", "normal", "normal", "normal", "removed", "normal"],
      ["warped", "cursed", "removed", "bulb", "normal", "bulb", "removed", "normal"]
    ],

  },
  {
    id: 120,
    name: "Level 120",
    objective: { type: 'lightsUp', objGoal: 2, tileType: 'bulb' },

    moves: 40,
    allowHardLetters: false,
    locked: false,
    cursedTurns: 9,
    dullTurns: 13,
    warpTurns: 14,
    allowBulbTiles: true,
    board: [
      ["removed", "ice", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "ice", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "ice", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["ice", "ice", "normal", "normal", "normal", "ice", "bulb", "removed"],
      ["bulb", "ice", "normal", "normal", "normal", "ice", "ice", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "ice", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "ice", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "ice", "normal", "normal"]
    ],

  },
  {
    id: 121,
    name: "Level 121",
    objective: { type: 'lightsUp', objGoal: 16, tileType: 'bulb' },
    difficulty: 'Hard Level',
    moves: 40,
    allowHardLetters: false,
    locked: false,
    cursedTurns: 9,
    dullTurns: 13,
    warpTurns: 14,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "normal", "normal", "removed", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "bulb", "bulb", "bulb", "bulb", "normal", "normal"],
      ["removed", "normal", "bulb", "bulb", "bulb", "bulb", "normal", "normal"],
      ["normal", "normal", "bulb", "bulb", "bulb", "bulb", "normal", "removed"],
      ["normal", "normal", "bulb", "bulb", "bulb", "bulb", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "removed", "removed", "normal", "normal", "removed", "removed"]
    ],

  },

  {
    id: 122,
    name: "Level 122",
    objective: { type: 'destroy', objGoal: 8, tileType: 'dull' },

    moves: 36,
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    dullTurns: 23,
    warpTurns: 14,
    allowBulbTiles: true,
    board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "locked", "dull", "locked", "normal", "normal", "normal", "normal"],
      ["normal", "dull", "removed", "dull", "normal", "normal", "normal", "normal"],
      ["removed", "locked", "dull", "locked", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "dull", "locked", "dull", "removed"],
      ["normal", "normal", "normal", "normal", "locked", "removed", "locked", "normal"],
      ["normal", "normal", "normal", "normal", "dull", "locked", "dull", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 123,
    name: "Level 123",
    objective: { type: 'lightsUp', objGoal: 2, tileType: 'bulb' },
    difficulty: 'demon',
    moves: 47,
    allowHardLetters: true,
    locked: false,
    lockTurns: 8,
    dullTurns: 23,
    warpTurns: 10,
    allowBulbTiles: true,
    board: [
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "warped", "removed", "removed"],
      ["removed", "warped", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "warped", "removed"],
      ["removed", "removed", "warped", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["bulb", "infected", "removed", "normal", "normal", "removed", "infected", "bulb"]
    ],

  },
  {
    id: 124,
    name: "Level 124",
    objective: { type: 'words', objGoal: 2, minLength: 5 },

    moves: 30,
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    dullTurns: 23,
    warpTurns: 10,
    allowBulbTiles: true,
    board: [
      ["infected", "removed", "removed", "removed", "normal", "removed", "removed", "infected"],
      ["normal", "normal", "normal", "infected", "normal", "normal", "normal", "normal"],
      ["normal", "infected", "normal", "normal", "normal", "infected", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "infected", "normal", "normal", "normal", "infected", "normal"],
      ["normal", "normal", "normal", "normal", "infected", "normal", "normal", "normal"],
      ["infected", "removed", "removed", "normal", "removed", "removed", "removed", "infected"]
    ],

  },
  {
    id: 125,
    name: "Level 125",
    objective: { type: 'score', objGoal: 5000 },

    moves: 30,
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    dullTurns: 12,
    warpTurns: 17,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "ice", "removed", "removed"],
      ["removed", "warped", "warped", "warped", "ice", "ice", "ice", "removed"],
      ["warped", "warped", "warped", "ice", "ice", "ice", "ice", "removed"],
      ["removed", "warped", "warped", "warped", "ice", "infected", "ice", "removed"],
      ["removed", "dull", "warped", "dull", "infected", "infected", "infected", "removed"],
      ["removed", "dull", "dull", "dull", "dull", "infected", "infected", "infected"],
      ["removed", "dull", "dull", "dull", "infected", "infected", "infected", "removed"],
      ["removed", "removed", "dull", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 126,
    name: "Level 126",
    objective: { type: 'score', objGoal: 7000 },

    moves: 20,
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    cursedTurns: 20,
    warpTurns: 17,
    allowBulbTiles: true,
    board: [
      ["cursed", "removed", "cursed", "normal", "normal", "cursed", "removed", "cursed"],
      ["normal", "removed", "normal", "removed", "removed", "normal", "removed", "normal"],
      ["normal", "cursed", "normal", "normal", "normal", "normal", "cursed", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "cursed", "normal", "normal", "normal", "normal", "cursed", "normal"],
      ["normal", "removed", "normal", "removed", "removed", "normal", "removed", "normal"],
      ["cursed", "removed", "cursed", "normal", "normal", "cursed", "removed", "cursed"]
    ],

  },
  {
    id: 127,
    name: "Level 127",
    objective: { type: 'destroy', tileType: 'warped', objGoal: 8 },

    moves: 12,
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    dullTurns: 11,
    warpTurns: 6,
    allowBulbTiles: true,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "dull", "dull", "normal", "dull", "dull", "dull", "normal"],
      ["normal", "dull", "warped", "normal", "warped", "warped", "dull", "normal"],
      ["normal", "dull", "warped", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "warped", "dull", "normal"],
      ["normal", "dull", "warped", "warped", "normal", "warped", "dull", "normal"],
      ["normal", "dull", "dull", "dull", "normal", "dull", "dull", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 128,
    name: "Level 128",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 27 },

    moves: 42,
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    dullTurns: 21,
    warpTurns: 6,
    allowBulbTiles: true,
    board: [
      ["dull", "dull", "removed", "dull", "dull", "dull", "dull", "removed"],
      ["dull", "dull", "removed", "removed", "removed", "removed", "dull", "normal"],
      ["dull", "normal", "normal", "normal", "normal", "removed", "dull", "normal"],
      ["dull", "normal", "normal", "normal", "normal", "removed", "dull", "normal"],
      ["dull", "dull", "dull", "normal", "normal", "dull", "dull", "normal"],
      ["normal", "removed", "dull", "normal", "normal", "dull", "removed", "normal"],
      ["normal", "removed", "dull", "normal", "normal", "dull", "removed", "normal"],
      ["normal", "removed", "dull", "dull", "dull", "dull", "removed", "normal"]
    ],

  },
  {
    id: 129,
    name: "Level 129",
    objective: { type: 'score', objGoal: 4500 },

    moves: 30,
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    dullTurns: 21,
    warpTurns: 6,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "ice", "ice", "normal", "normal", "removed"],
      ["normal", "normal", "locked", "normal", "normal", "locked", "normal", "normal"],
      ["normal", "locked", "ice", "locked", "locked", "ice", "locked", "normal"],
      ["locked", "ice", "locked", "ice", "ice", "locked", "ice", "locked"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 130,
    name: "Level 130",
    objective: { type: 'score', objGoal: 7000 },

    moves: 15,
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    dullTurns: 21,
    warpTurns: 6,
    shouldDullSpawn: true,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 131,
    name: "Level 131",
    objective: { type: 'score', objGoal: 6000 },

    moves: 35,
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    dullTurns: 21,
    warpTurns: 6,
    allowBulbTiles: true,
    board: [
      ["removed", "removed", "removed", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["infected", "normal", "infected", "normal", "infected", "normal", "infected", "normal"],
      ["normal", "infected", "normal", "infected", "normal", "infected", "normal", "infected"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "removed", "removed", "removed"]
    ],
    groundLayout: [
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse'],
      ['cleanse', 'cleanse', 'none', 'none', 'none', 'none', 'cleanse', 'cleanse'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ]
    ,

    tutorialTileType: 'Purifiers',
    tutorialMessage: "Purifiers cleanse infected and cursed tiles when it lands on the glowing overlay grounds!",
    tutorial: {}
  },
  {
    id: 132,
    name: "Level 132",
    objective: { type: 'lightsUp', tileType: 'bulb', objGoal: 7 },

    moves: 35,
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    dullTurns: 21,
    warpTurns: 6,
    allowBulbTiles: true,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "infected", "infected", "infected", "infected", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "bulb", "normal"],
      ["normal", "infected", "bulb", "normal", "normal", "bulb", "infected", "normal"],
      ["normal", "removed", "bulb", "normal", "normal", "bulb", "removed", "normal"],
      ["normal", "removed", "bulb", "normal", "normal", "bulb", "removed", "normal"]
    ],
    groundLayout: [
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'cleanse', 'cleanse', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'cleanse', 'cleanse', 'none', 'none', 'none'],
      ['none', 'none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none', 'none'],
      ['none', 'none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none', 'none'],
    ]
  },
  {
    id: 133,
    name: "Level 133",
    objective: { type: 'destroy', objGoal: 12, tileType: 'warped' },
    moves: 35,
    allowHardLetters: true,
    difficulty: 'Hard Level',
    cursedTurns: 8,
    locked: false,
    warpTurns: 11,
    board: [
      ["normal", "removed", "normal", "removed", "normal", "removed", "normal", "removed"],
      ["removed", "cursed", "normal", "warped", "warped", "normal", "cursed", "normal"],
      ["normal", "normal", "cursed", "normal", "normal", "cursed", "normal", "removed"],
      ["removed", "warped", "normal", "warped", "warped", "normal", "warped", "normal"],
      ["normal", "warped", "normal", "warped", "warped", "normal", "warped", "removed"],
      ["removed", "normal", "cursed", "normal", "normal", "cursed", "normal", "normal"],
      ["normal", "cursed", "normal", "warped", "warped", "normal", "cursed", "removed"],
      ["removed", "normal", "removed", "normal", "removed", "normal", "removed", "normal"]
    ],
  },
  {
    id: 134,
    name: "Level 134",
    objective: { type: 'destroy', objGoal: 10, tileType: 'dull' },
    moves: 45,
    allowHardLetters: false,

    dullTurns: 10,
    locked: false,
    warpTurns: 11,
    board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "dull", "dull", "removed", "normal", "normal"],
      ["removed", "removed", "bulb", "normal", "normal", "bulb", "removed", "removed"],
      ["removed", "bulb", "dull", "dull", "dull", "dull", "bulb", "removed"],
      ["removed", "normal", "dull", "infected", "infected", "dull", "normal", "removed"],
      ["removed", "removed", "dull", "bulb", "bulb", "dull", "removed", "removed"],
      ["normal", "normal", "bulb", "normal", "normal", "bulb", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"]
    ],
  },
  {
    id: 135,
    name: "Level 135",
    objective: { type: 'words', minLength: 4, objGoal: 7 },
    moves: 45,
    allowHardLetters: false,

    cursedTurns: 40,
    locked: false,
    warpTurns: 11,
    board: [
      ["removed", "removed", "removed", "cursed", "cursed", "removed", "removed", "removed"],
      ["removed", "removed", "cursed", "normal", "normal", "cursed", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"]
    ],

    groundLayout: [
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none', 'none'],
      ['none', 'none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none', 'none'],
      ['none', 'none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none', 'none'],
      ['none', 'none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none', 'none'],
    ]
  },
  {
    id: 136,
    name: "Level 136",
    objective: { type: 'lightsUp', objGoal: 14, tileType: 'bulb' },
    moves: 40,
    allowHardLetters: false,

    dullTurns: 10,
    locked: false,
    warpTurns: 11,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "bulb", "normal", "bulb"],
      ["removed", "bulb", "normal", "bulb", "removed", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "bulb", "normal", "bulb"],
      ["removed", "normal", "normal", "bulb", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "bulb", "normal", "normal", "removed"],
      ["bulb", "normal", "bulb", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "removed", "bulb", "normal", "bulb", "removed"],
      ["bulb", "normal", "bulb", "removed", "removed", "removed", "removed", "removed"]
    ],
  },
  {
    id: 137,
    name: "Level 137",
    objective: { type: 'score', objGoal: 7200 },
    moves: 45,
    allowHardLetters: true,

    cursedTurns: 8,
    locked: false,
    warpTurns: 21,
    dullTurns: 15,
    board: [
      ["dull", "removed", "removed", "normal", "normal", "removed", "removed", "dull"],
      ["removed", "dull", "dull", "normal", "normal", "normal", "dull", "dull"],
      ["removed", "normal", "normal", "warped", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "warped", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "warped", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "warped", "normal", "normal", "removed"],
      ["normal", "dull", "dull", "normal", "normal", "dull", "dull", "removed"],
      ["dull", "removed", "removed", "normal", "normal", "removed", "removed", "dull"]
    ],
  },

  {
    id: 138,
    name: "Level 138",
    objective: { type: 'score', objGoal: 6000 },
    moves: 55,
    allowHardLetters: false,

    cursedTurns: 17,
    locked: false,
    warpTurns: 21,
    dullTurns: 15,
    board: [
      ["infected", "normal", "infected", "removed", "removed", "cursed", "normal", "cursed"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["infected", "normal", "infected", "removed", "removed", "cursed", "normal", "cursed"]
    ],
    groundLayout: [
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['cleanse', 'none', 'none', 'none', 'none', 'none', 'none', 'cleanse'],
      ['none', 'cleanse', 'none', 'none', 'none', 'none', 'cleanse', 'none'],
      ['none', 'none', 'cleanse', 'none', 'none', 'cleanse', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ]
  },
  {
    id: 139,
    name: "Level 139",
    objective: { type: 'destroy', objGoal: 5, tileType: 'warped' },
    moves: 30,
    allowHardLetters: false,

    lockTurns: 9,
    locked: false,
    warpTurns: 20,
    dullTurns: 15,
    board: [
      ["normal", "normal", "locked", "warped", "locked", "normal", "normal", "normal"],
      ["normal", "normal", "locked", "locked", "locked", "normal", "locked", "locked"],
      ["locked", "locked", "normal", "normal", "normal", "normal", "locked", "warped"],
      ["warped", "locked", "normal", "normal", "normal", "normal", "locked", "locked"],
      ["locked", "locked", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "dull", "dull", "dull", "dull", "dull", "dull", "normal"],
      ["normal", "dull", "dull", "dull", "dull", "dull", "dull", "normal"],
      ["normal", "dull", "dull", "warped", "warped", "dull", "dull", "normal"]
    ],

  },
  {
    id: 140,
    name: "Level 140",
    objective: { type: 'destroy', objGoal: 8, tileType: 'cursed' },
    moves: 40,
    allowHardLetters: false,

    lockTurns: 9,
    locked: false,
    cursedTurns: 10,
    dullTurns: 15,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["cursed", "removed", "cursed", "removed", "cursed", "removed", "cursed", "removed"],
      ["normal", "cursed", "normal", "cursed", "normal", "cursed", "normal", "cursed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["cursed", "normal", "cursed", "normal", "cursed", "normal", "cursed", "normal"],
      ["removed", "cursed", "removed", "cursed", "removed", "cursed", "removed", "cursed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],
    groundLayout: [
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['cleanse', 'none', 'cleanse', 'none', 'cleanse', 'none', 'cleanse', 'none'],
      ['none', 'cleanse', 'none', 'cleanse', 'none', 'cleanse', 'none', 'cleanse'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ]
  },



  {
    id: 141,
    name: "Level 141",
    objective: { type: 'destroy', objGoal: 4, tileType: 'fire' },
    moves: 25,
    allowHardLetters: false,

    lockTurns: 9,
    locked: false,
    warpTurns: 20,
    dullTurns: 15,
    board: [
      ["removed", "fire", "fire", "removed", "removed", "fire", "fire", "removed"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "ice"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "removed", "removed", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "removed", "removed", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "removed", "removed", "normal", "normal", "removed"]
    ],

  },
  {
    id: 142,
    name: "Level 142",
    objective: { type: 'destroy', objGoal: 12, tileType: 'dull' },
    moves: 30,
    allowHardLetters: false,
    difficulty: 'Hard Level',
    lockTurns: 9,
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 20,
    dullTurns: 18,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "normal", "removed", "removed", "normal", "removed", "normal"],
      ["normal", "removed", "normal", "removed", "removed", "normal", "removed", "normal"],
      ["dull", "dull", "normal", "normal", "normal", "normal", "dull", "dull"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "removed"],
      ["removed", "fire", "normal", "normal", "normal", "normal", "fire", "removed"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 143,
    name: "Level 143",
    objective: { type: 'destroy', objGoal: 2, tileType: 'cursed' },
    moves: 30,
    allowHardLetters: false,

    lockTurns: 8,
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 20,
    cursedTurns: 10,
    board: [
      ["normal", "normal", "normal", "normal", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "locked", "locked", "locked", "removed"],
      ["normal", "normal", "normal", "normal", "removed", "cursed", "locked", "removed"],
      ["normal", "normal", "normal", "normal", "removed", "locked", "removed", "removed"],
      ["removed", "removed", "locked", "removed", "removed", "ice", "ice", "ice"],
      ["removed", "locked", "cursed", "removed", "ice", "normal", "normal", "normal"],
      ["removed", "locked", "locked", "locked", "ice", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "ice", "normal", "normal", "normal"]
    ],

  },
  {
    id: 144,
    name: "Level 144",
    objective: { type: 'lightsUp', objGoal: 6, tileType: 'bulb' },
    moves: 30,
    allowHardLetters: false,

    lockTurns: 8,
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 20,
    cursedTurns: 10,
    board: [
      ["normal", "removed", "normal", "removed", "removed", "normal", "removed", "normal"],
      ["normal", "removed", "ice", "bulb", "normal", "ice", "removed", "normal"],
      ["normal", "normal", "ice", "removed", "bulb", "ice", "normal", "normal"],
      ["normal", "normal", "ice", "bulb", "removed", "ice", "normal", "normal"],
      ["removed", "normal", "ice", "removed", "bulb", "ice", "normal", "removed"],
      ["normal", "normal", "ice", "bulb", "removed", "ice", "normal", "normal"],
      ["normal", "removed", "ice", "normal", "bulb", "ice", "removed", "normal"],
      ["normal", "removed", "normal", "removed", "removed", "normal", "removed", "normal"]
    ],

  },
  {
    id: 145,
    name: "Level 145",
    objective: { type: 'lightsUp', objGoal: 6, tileType: 'bulb' },
    moves: 50,
    allowHardLetters: false,

    lockTurns: 8,
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 17,
    cursedTurns: 10,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["bulb", "warped", "normal", "normal", "normal", "normal", "warped", "bulb"],
      ["warped", "normal", "normal", "normal", "normal", "normal", "normal", "warped"],
      ["warped", "normal", "removed", "normal", "normal", "removed", "normal", "warped"],
      ["bulb", "warped", "ice", "normal", "normal", "ice", "warped", "bulb"],
      ["removed", "normal", "warped", "ice", "ice", "warped", "normal", "removed"],
      ["removed", "warped", "bulb", "removed", "removed", "bulb", "warped", "removed"]
    ],

  },
  {
    id: 146,
    name: "Level 146",
    objective: { type: 'score', objGoal: 20000 },
    moves: 50,
    allowHardLetters: false,

    lockTurns: 9,
    locked: false,
    shouldFireSpawn: true,
    dullTurns: 15,
    cursedTurns: 17,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["cursed", "removed", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["cursed", "removed", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["cursed", "removed", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["cursed", "locked", "locked", "locked", "locked", "locked", "locked", "removed"],
      ["removed", "locked", "dull", "normal", "dull", "normal", "dull", "locked"],
      ["removed", "locked", "locked", "locked", "locked", "locked", "locked", "locked"]
    ],

  },
  {
    id: 147,
    name: "Level 147",
    objective: { type: 'destroy', objGoal: 14, tileType: 'warped' },
    moves: 50,
    allowHardLetters: false,

    lockTurns: 9,
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 8,
    dullTurns: 17,
    board: [
      ["removed", "removed", "removed", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "warped", "dull", "normal", "normal", "normal", "normal"],
      ["removed", "warped", "warped", "warped", "dull", "normal", "normal", "normal"],
      ["normal", "dull", "warped", "warped", "warped", "dull", "normal", "normal"],
      ["normal", "normal", "dull", "warped", "warped", "warped", "dull", "normal"],
      ["normal", "normal", "normal", "dull", "warped", "warped", "warped", "removed"],
      ["normal", "normal", "normal", "normal", "dull", "warped", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "removed", "removed", "removed"]
    ],

  },
  {
    id: 148,
    name: "Level 148",
    objective: { type: 'score', objGoal: 16500 },
    moves: 40,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 9,
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 8,
    dullTurns: 7,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "cursed", "ice", "dull", "ice", "ice", "warped", "normal"],
      ["normal", "ice", "normal", "normal", "normal", "normal", "ice", "normal"],
      ["normal", "ice", "normal", "ice", "ice", "normal", "fire", "normal"],
      ["normal", "locked", "normal", "ice", "ice", "normal", "ice", "normal"],
      ["normal", "ice", "normal", "normal", "normal", "normal", "ice", "normal"],
      ["normal", "dull", "ice", "ice", "infected", "ice", "locked", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 149,
    name: "Level 149",
    objective: { type: 'lightsUp', objGoal: 8, tileType: 'bulb' },
    moves: 40,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 2,
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 8,
    dullTurns: 7,
    board: [
      ["bulb", "bulb", "normal", "bulb", "bulb", "normal", "bulb", "bulb"],
      ["bulb", "normal", "normal", "normal", "normal", "normal", "normal", "bulb"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["locked", "normal", "locked", "removed", "removed", "locked", "normal", "locked"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 150,
    name: "Level 150",
    objective: { type: 'words', objGoal: 4, minLength: 4 },
    moves: 7,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 2,
    difficulty: 'demon',
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 8,
    dullTurns: 7,
    board: [
      ["normal", "infected", "removed", "removed", "removed", "infected", "normal", "normal"],
      ["normal", "normal", "removed", "removed", "removed", "normal", "normal", "normal"],
      ["infected", "normal", "removed", "removed", "normal", "normal", "normal", "infected"],
      ["normal", "normal", "removed", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "infected", "normal", "normal", "normal", "removed", "infected", "normal"],
      ["normal", "normal", "normal", "normal", "removed", "removed", "normal", "normal"],
      ["removed", "normal", "normal", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "infected"]
    ],

  },
  {
    id: 151,
    name: "Level 151",
    objective: { type: 'words', objGoal: 4, minLength: 8 },
    moves: 47,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 2,

    locked: false,
    shouldFireSpawn: true,
    warpTurns: 8,
    dullTurns: 7,
    board: [
      ["removed", "removed", "removed", "removed", "normal", "normal", "normal", "removed"],
      ["exclamator", "normal", "normal", "normal", "normal", "normal", "normal", "exclamator"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "exclamator", "ice", "ice", "exclamator", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["ice", "ice", "exclamator", "ice", "ice", "exclamator", "ice", "ice"],
      ["exclamator", "ice", "normal", "normal", "normal", "normal", "ice", "exclamator"],
      ["removed", "normal", "normal", "normal", "removed", "removed", "removed", "removed"]
    ],
    tutorialTileType: 'Exclaimer',
    tutorialMessage: "Tile can only be used ONLY at the end of a word, Not first or in-between!",
    tutorial: {}
  },
  {
    id: 152,
    name: "Level 152",
    objective: { type: 'lightsUp', objGoal: 4, tileType: 'bulb' },
    moves: 47,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 2,

    locked: false,
    shouldFireSpawn: true,
    warpTurns: 8,
    dullTurns: 7,
    board: [
      ["removed", "normal", "removed", "removed", "removed", "removed", "normal", "removed"],
      ["removed", "normal", "removed", "removed", "removed", "removed", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "exclamator", "exclamator", "removed", "removed", "exclamator", "exclamator", "removed"],
      ["removed", "bulb", "bulb", "removed", "removed", "bulb", "bulb", "removed"]
    ],

  },

  {
    id: 153,
    name: "Level 153",
    objective: { type: 'destroy', objGoal: 20, tileType: 'dull' },
    moves: 25,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 8,

    locked: false,
    shouldFireSpawn: true,
    warpTurns: 8,
    dullTurns: 21,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "dull", "dull", "dull", "normal", "dull", "dull", "normal"],
      ["normal", "dull", "dull", "locked", "normal", "normal", "dull", "normal"],
      ["normal", "dull", "locked", "dull", "locked", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "locked", "dull", "locked", "dull", "normal"],
      ["normal", "dull", "normal", "normal", "locked", "dull", "dull", "normal"],
      ["normal", "dull", "dull", "normal", "dull", "dull", "dull", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 154,
    name: "Level 154",
    objective: { type: 'score', objGoal: 2500 },
    moves: 25,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 8,

    locked: false,
    shouldFireSpawn: true,
    warpTurns: 8,
    dullTurns: 21,
    board: [
      ["removed", "removed", "cursed", "normal", "normal", "cursed", "removed", "removed"],
      ["normal", "removed", "cursed", "normal", "normal", "cursed", "removed", "normal"],
      ["normal", "removed", "removed", "normal", "normal", "removed", "removed", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["infected", "normal", "removed", "removed", "removed", "removed", "normal", "infected"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["infected", "normal", "infected", "normal", "normal", "infected", "normal", "infected"]
    ],

  },
  {
    id: 155,
    name: "Level 155",
    objective: { type: 'words', minLength: 5, objGoal: 1 },
    moves: 14,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 8,

    locked: false,
    shouldFireSpawn: true,
    warpTurns: 8,
    dullTurns: 16,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "dull", "normal"],
      ["normal", "dull", "normal", "removed", "normal", "dull", "normal", "normal"],
      ["removed", "removed", "dull", "normal", "dull", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "dull", "normal", "dull", "removed", "removed"],
      ["normal", "normal", "dull", "normal", "removed", "normal", "dull", "normal"],
      ["normal", "dull", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 156,
    name: "Level 156",
    objective: { type: 'destroy', tileType: 'warped', objGoal: 12 },
    moves: 56,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 8,
    boneTurns: 2,
    boneRipeTurns: 3,
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 15,
    dullTurns: 16,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "ice", "ice", "ice", "normal", "normal", "normal", "normal"],
      ["removed", "ice", "warped", "ice", "ice", "ice", "normal", "normal"],
      ["removed", "ice", "warped", "ice", "warped", "ice", "ice", "ice"],
      ["removed", "ice", "warped", "ice", "warped", "ice", "warped", "ice"],
      ["removed", "ice", "warped", "ice", "warped", "ice", "warped", "ice"],
      ["removed", "ice", "warped", "ice", "warped", "ice", "warped", "ice"]
    ],

  },
  {
    id: 157,
    name: "Level 157",
    objective: { type: 'lightsUp', tileType: 'bulb', objGoal: 16 },
    moves: 40,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 8,
    boneTurns: 2,
    boneRipeTurns: 3,
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 15,
    dullTurns: 16,
    board: [
      ["bulb", "ice", "ice", "normal", "normal", "ice", "ice", "bulb"],
      ["removed", "bulb", "ice", "ice", "ice", "ice", "bulb", "removed"],
      ["removed", "removed", "bulb", "ice", "ice", "bulb", "removed", "removed"],
      ["removed", "bulb", "normal", "normal", "normal", "normal", "bulb", "removed"],
      ["removed", "bulb", "normal", "normal", "normal", "normal", "bulb", "removed"],
      ["removed", "removed", "bulb", "ice", "ice", "bulb", "removed", "removed"],
      ["removed", "bulb", "ice", "ice", "ice", "ice", "bulb", "removed"],
      ["bulb", "ice", "ice", "normal", "normal", "ice", "ice", "bulb"]
    ],

  },
  {
    id: 158,
    name: "Level 158",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 22 },
    moves: 40,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 8,
    boneTurns: 2,
    boneRipeTurns: 3,
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 15,
    dullTurns: 25,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "removed"],
      ["dull", "removed", "normal", "normal", "normal", "removed", "dull", "removed"],
      ["dull", "removed", "removed", "normal", "normal", "removed", "dull", "dull"],
      ["dull", "dull", "removed", "normal", "normal", "removed", "removed", "dull"],
      ["removed", "dull", "removed", "normal", "normal", "normal", "removed", "dull"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },

  {
    id: 159,
    name: "Level 159",
    objective: { type: 'destroy', tileType: 'fire', objGoal: 10 },
    moves: 40,
    allowHardLetters: false,
    cursedTurns: 8,
    lockTurns: 8,
    boneTurns: 2,
    boneRipeTurns: 3,
    locked: false,
    shouldFireSpawn: true,
    warpTurns: 15,
    dullTurns: 25,
    board: [
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["fire", "fire", "fire", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "fire", "fire", "fire"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["fire", "fire", "fire", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "fire", "fire", "fire"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 160,
    name: "Level 160",
    objective: { type: 'score', objGoal: 8000 },
    moves: 45,
    allowHardLetters: false,
    locked: false,
    dullTurns: 30,
    board: [
      ["normal", "removed", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["normal", "normal", "normal", "dull", "dull", "dull", "dull", "normal"],
      ["normal", "removed", "normal", "normal", "normal", "removed", "removed", "normal"],
      ["normal", "dull", "normal", "normal", "normal", "normal", "dull", "normal"],
      ["normal", "dull", "normal", "normal", "normal", "normal", "dull", "normal"],
      ["normal", "removed", "removed", "normal", "normal", "normal", "removed", "normal"],
      ["normal", "dull", "dull", "dull", "dull", "normal", "normal", "normal"],
      ["normal", "removed", "removed", "removed", "removed", "removed", "removed", "normal"]
    ],

  },
  {
    id: 161,
    name: "Level 161",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 8 },
    moves: 6,
    allowHardLetters: false,
    locked: false,
    dullTurns: 4,
    board: [
      ["removed", "dull", "removed", "removed", "removed", "removed", "dull", "removed"],
      ["removed", "dull", "removed", "removed", "removed", "removed", "dull", "removed"],
      ["removed", "dull", "removed", "removed", "removed", "removed", "dull", "removed"],
      ["removed", "dull", "removed", "removed", "removed", "removed", "dull", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "lineBlasterColumn", "normal", "normal", "normal", "normal", "lineBlasterColumn", "normal"]
    ],

  },
  {
    id: 162,
    name: "Level 162",
    objective: { type: 'lightsUp', tileType: 'bulb', objGoal: 4 },
    moves: 26,
    allowHardLetters: false,
    locked: false,
    dullTurns: 4,
    board: [
      ["normal", "removed", "removed", "bulb", "removed", "bulb", "removed", "normal"],
      ["normal", "removed", "bulb", "removed", "bulb", "removed", "removed", "normal"],
      ["normal", "removed", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["normal", "normal", "ice", "ice", "ice", "ice", "ice", "normal"],
      ["removed", "normal", "ice", "ice", "ice", "lineBlasterColumn", "normal", "removed"],
      ["normal", "normal", "ice", "ice", "lineBlasterColumn", "ice", "normal", "normal"],
      ["removed", "normal", "ice", "lineBlasterColumn", "ice", "ice", "normal", "removed"],
      ["removed", "removed", "lineBlasterColumn", "ice", "ice", "ice", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"]
    ],

  },
  {
    id: 163,
    name: "Level 163",
    objective: { type: 'defrost', tileType: 'ice', objGoal: 10 },
    moves: 30,
    allowHardLetters: false,
    locked: false,
    warpTurns: 14,
    board: [
      ["infected", "warped", "normal", "normal", "normal", "normal", "warped", "infected"],
      ["removed", "warped", "normal", "normal", "normal", "normal", "warped", "removed"],
      ["removed", "warped", "normal", "removed", "removed", "normal", "warped", "removed"],
      ["removed", "warped", "normal", "normal", "normal", "normal", "warped", "removed"],
      ["infected", "warped", "normal", "normal", "normal", "normal", "warped", "infected"],
      ["removed", "removed", "removed", "ice", "ice", "removed", "removed", "removed"],
      ["ice", "normal", "ice", "normal", "normal", "ice", "normal", "ice"],
      ["normal", "ice", "removed", "ice", "ice", "removed", "ice", "normal"]
    ],
    groundLayout: [
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['cleanse', 'cleanse', 'none', 'none', 'none', 'none', 'cleanse', 'cleanse'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ]
  },



  {
    id: 164,
    name: "Level 164",
    objective: { type: 'words', minLength: 5, objGoal: 6 },
    moves: 30,
    allowHardLetters: false,
    locked: false,
    dullTurns: 25,
    cursedTurns: 30,
    warpTurns: 15,
    board: [
      ["removed", "normal", "normal", "cursed", "warped", "cursed", "warped", "cursed"],
      ["cursed", "removed", "normal", "warped", "normal", "normal", "removed", "warped"],
      ["dull", "normal", "removed", "cursed", "normal", "removed", "normal", "cursed"],
      ["cursed", "normal", "normal", "normal", "normal", "normal", "normal", "warped"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "normal", "cursed"],
      ["cursed", "normal", "removed", "normal", "cursed", "removed", "normal", "warped"],
      ["dull", "removed", "normal", "normal", "dull", "normal", "removed", "cursed"],
      ["cursed", "dull", "cursed", "dull", "cursed", "normal", "normal", "removed"]
    ],

  },
  {
    id: 165,
    name: "Level 165",
    objective: { type: 'destroy', objGoal: 2, tileType: 'dull' },
    moves: 35,
    allowHardLetters: false,
    locked: false,
    dullTurns: 20,
    cursedTurns: 30,
    warpTurns: 15,
    board: [
      ["removed", "removed", "lineBlasterColumn", "removed", "removed", "removed", "normal", "normal"],
      ["removed", "removed", "normal", "removed", "removed", "removed", "normal", "normal"],
      ["lineBlasterRow", "removed", "normal", "removed", "dull", "removed", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "removed", "removed", "normal", "normal"],
      ["removed", "removed", "normal", "removed", "removed", "removed", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "removed", "normal", "normal", "normal"],
      ["removed", "removed", "dull", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 166,
    name: "Level 166",
    objective: { type: 'score', objGoal: 6700 },
    moves: 40,
    difficulty: 'Hard Level',
    allowHardLetters: false,
    locked: false,
    dullTurns: 25,
    cursedTurns: 40,
    warpTurns: 15,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "cursed", "cursed", "cursed", "cursed", "cursed", "cursed", "normal"],
      ["cursed", "removed", "removed", "cursed", "cursed", "removed", "removed", "cursed"],
      ["normal", "cursed", "removed", "cursed", "cursed", "removed", "cursed", "normal"],
      ["normal", "normal", "cursed", "normal", "normal", "cursed", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "cursed", "normal", "normal", "cursed", "normal", "removed"],
      ["removed", "normal", "removed", "normal", "normal", "removed", "normal", "removed"]
    ],

  },
  {
    id: 167,
    name: "Level 167",
    objective: { type: 'lightsUp', tileType: 'bulb', objGoal: 4 },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    cursedTurns: 40,
    warpTurns: 15,
    board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "removed", "normal", "normal", "removed", "removed", "normal"],
      ["normal", "ice", "normal", "normal", "normal", "normal", "locked", "normal"],
      ["ice", "bulb", "locked", "removed", "removed", "locked", "bulb", "ice"],
      ["normal", "locked", "normal", "normal", "normal", "normal", "ice", "normal"],
      ["normal", "removed", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["normal", "normal", "locked", "bulb", "bulb", "ice", "normal", "normal"]
    ],

  },
  {
    id: 168,
    name: "Level 168",
    objective: { type: 'score', objGoal: 8500 },
    moves: 50,

    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    cursedTurns: 40,
    warpTurns: 15,
    board: [
      ["infected", "infected", "infected", "infected", "infected", "infected", "infected", "infected"],
      ["infected", "infected", "infected", "infected", "infected", "infected", "infected", "infected"],
      ["infected", "cursed", "lineBlasterRow", "normal", "normal", "lineBlasterColumn", "cursed", "infected"],
      ["infected", "normal", "normal", "normal", "normal", "normal", "normal", "infected"],
      ["infected", "normal", "normal", "normal", "normal", "normal", "normal", "infected"],
      ["infected", "cursed", "normal", "normal", "normal", "normal", "cursed", "infected"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],
    groundLayout: [
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none', 'none'],
      ['none', 'none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none', 'none'],
      ['none', 'none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none', 'none'],
      ['cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse'],
      ['cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse'],
    ]
  },
  {
    id: 169,
    name: "Level 169",
    objective: { type: 'destroy', objGoal: 10, tileType: 'warped' },
    moves: 40,
    allowHardLetters: false,
    locked: false,
    dullTurns: 20,
    cursedTurns: 30,
    warpTurns: 15,
    board: [
      ["ice", "normal", "normal", "normal", "warped", "removed", "removed", "removed"],
      ["ice", "normal", "normal", "warped", "removed", "normal", "normal", "normal"],
      ["ice", "normal", "warped", "removed", "warped", "normal", "normal", "ice"],
      ["ice", "exclamator", "normal", "warped", "normal", "normal", "exclamator", "ice"],
      ["ice", "exclamator", "normal", "normal", "warped", "normal", "exclamator", "ice"],
      ["ice", "exclamator", "normal", "warped", "removed", "warped", "exclamator", "ice"],
      ["normal", "normal", "normal", "removed", "warped", "normal", "normal", "ice"],
      ["removed", "removed", "removed", "warped", "normal", "normal", "normal", "ice"]
    ],

  },
  {
    id: 170,
    name: "Level 170",
    objective: { type: 'words', objGoal: 7, minLength: 6 },
    moves: 60,
    difficulty: 'demon',
    allowHardLetters: false,
    locked: false,
    dullTurns: 20,
    cursedTurns: 30,
    warpTurns: 15,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "normal", "removed", "removed", "bulb", "removed", "removed"],
      ["removed", "bulb", "normal", "removed", "removed", "normal", "bulb", "removed"],
      ["bulb", "infected", "lineBlasterRow", "normal", "normal", "normal", "infected", "infected"],
      ["infected", "infected", "normal", "normal", "normal", "normal", "infected", "bulb"],
      ["removed", "bulb", "normal", "removed", "removed", "normal", "bulb", "removed"],
      ["removed", "removed", "bulb", "removed", "removed", "infected", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],
    groundLayout: [
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'cleanse', 'none', 'none', 'cleanse', 'none', 'none'],
      ['none', 'none', 'cleanse', 'none', 'none', 'cleanse', 'none', 'none'],
      ['none', 'none', 'cleanse', 'none', 'none', 'cleanse', 'none', 'none'],
      ['none', 'none', 'cleanse', 'none', 'none', 'cleanse', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ],
  },

  {
    id: 171,
    name: "Level 171",
    objective: { type: 'collectVelvet', objGoal: 4, tileType: 'velvet' },
    moves: 40,

    allowHardLetters: false,
    locked: false,
    dullTurns: 20,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["removed", "removed", "removed", "normal", "removed", "warped", "normal", "velvet"],
      ["removed", "normal", "normal", "normal", "removed", "normal", "warped", "normal"],
      ["removed", "normal", "normal", "normal", "removed", "warped", "normal", "warped"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["velvet", "normal", "velvet", "removed", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "removed", "normal", "normal", "normal", "removed"],
      ["velvet", "normal", "velvet", "removed", "normal", "removed", "removed", "removed"]
    ],

  },


  {
    id: 172,
    name: "Level 172",
    objective: { type: 'collectVelvet', objGoal: 14, tileType: 'velvet' },
    moves: 20,

    allowHardLetters: false,
    locked: false,
    dullTurns: 20,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["removed", "removed", "normal", "velvet", "velvet", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "velvet", "velvet", "normal", "velvet", "normal"],
      ["normal", "normal", "velvet", "velvet", "velvet", "normal", "normal", "normal"],
      ["velvet", "velvet", "velvet", "removed", "removed", "velvet", "velvet", "velvet"],
      ["velvet", "velvet", "velvet", "removed", "removed", "velvet", "velvet", "velvet"],
      ["normal", "normal", "normal", "velvet", "velvet", "velvet", "normal", "normal"],
      ["normal", "velvet", "normal", "velvet", "velvet", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "velvet", "velvet", "normal", "removed", "removed"]
    ],

  },
  {
    id: 173,
    name: "Level 173",
    objective: { type: 'collectVelvet', objGoal: 6, tileType: 'velvet' },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    dullTurns: 20,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
      ["normal", "velvet", "ice", "exclamator", "normal", "ice", "velvet", "normal"],
      ["normal", "removed", "ice", "normal", "normal", "ice", "removed", "normal"],
      ["normal", "velvet", "ice", "normal", "exclamator", "ice", "velvet", "normal"],
      ["normal", "removed", "ice", "ice", "ice", "ice", "removed", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "velvet", "velvet", "removed", "removed", "removed"]
    ],

  },
  {
    id: 174,
    name: "Level 174",
    objective: { type: 'lightsUp', objGoal: 4, tileType: 'bulb' },
    moves: 40,
    difficulty: 'Hard Level',
    allowHardLetters: false,
    locked: false,
    dullTurns: 20,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "normal", "lineBlasterColumn", "normal", "normal", "normal", "normal"],
      ["normal", "exclamator", "normal", "normal", "normal", "normal", "exclamator", "normal"],
      ["normal", "normal", "exclamator", "exclamator", "exclamator", "exclamator", "normal", "normal"],
      ["normal", "normal", "exclamator", "bulb", "bulb", "exclamator", "normal", "normal"],
      ["normal", "normal", "exclamator", "bulb", "bulb", "exclamator", "normal", "normal"],
      ["normal", "normal", "exclamator", "exclamator", "exclamator", "exclamator", "normal", "normal"],
      ["normal", "exclamator", "normal", "exclamator", "exclamator", "normal", "exclamator", "normal"],
      ["exclamator", "normal", "normal", "exclamator", "exclamator", "normal", "normal", "exclamator"]
    ],

  },
  {
    id: 175,
    name: "Level 175",
    objective: { type: 'score', objGoal: 6650 },
    moves: 40,

    allowHardLetters: false,
    locked: false,
    dullTurns: 17,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "removed", "removed", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "normal", "infected", "normal"],
      ["normal", "infected", "removed", "normal", "normal", "dull", "normal", "normal"],
      ["removed", "normal", "dull", "normal", "dull", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "dull", "normal", "dull", "normal", "removed"],
      ["normal", "normal", "dull", "normal", "removed", "normal", "infected", "normal"],
      ["normal", "infected", "normal", "normal", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 176,
    name: "Level 176",
    objective: { type: 'collectVelvet', objGoal: 10, tileType: 'velvet' },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    dullTurns: 20,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "velvet", "velvet", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "velvet", "velvet", "removed", "normal", "normal"],
      ["velvet", "velvet", "ice", "normal", "normal", "ice", "velvet", "velvet"],
      ["velvet", "velvet", "ice", "normal", "normal", "ice", "velvet", "velvet"],
      ["ice", "ice", "removed", "removed", "removed", "removed", "ice", "ice"],
      ["ice", "velvet", "velvet", "removed", "removed", "velvet", "velvet", "normal"],
      ["ice", "velvet", "velvet", "removed", "removed", "velvet", "velvet", "normal"]
    ],

  },
  {
    id: 177,
    name: "Level 177",
    objective: { type: 'lightsUp', objGoal: 2, tileType: 'bulb' },
    moves: 20,

    allowHardLetters: false,
    locked: false,
    dullTurns: 20,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["ice", "bulb", "infected", "normal", "normal", "infected", "bulb", "ice"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"]
    ],

  },
  {
    id: 178,
    name: "Level 178",
    objective: { type: 'collectVelvet', objGoal: 9, tileType: 'velvet' },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    dullTurns: 40,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "velvet", "normal", "velvet", "velvet", "normal", "velvet", "normal"],
      ["normal", "normal", "velvet", "dull", "dull", "velvet", "normal", "normal"],
      ["removed", "velvet", "dull", "normal", "normal", "dull", "normal", "removed"],
      ["removed", "normal", "dull", "normal", "normal", "dull", "velvet", "removed"],
      ["normal", "normal", "velvet", "dull", "dull", "velvet", "normal", "normal"],
      ["normal", "velvet", "normal", "velvet", "velvet", "normal", "velvet", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 179,
    name: "Level 179",
    objective: { type: 'destroy', objGoal: 4, tileType: 'dull' },
    moves: 8,

    allowHardLetters: false,
    locked: false,
    dullTurns: 8,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "ice", "normal", "normal", "ice", "removed", "removed"],
      ["removed", "dull", "ice", "normal", "normal", "ice", "dull", "removed"],
      ["normal", "normal", "ice", "normal", "normal", "ice", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["removed", "removed", "normal", "ice", "ice", "normal", "removed", "removed"],
      ["normal", "normal", "normal", "dull", "dull", "normal", "normal", "normal"]
    ],

  },
  {
    id: 180,
    name: "Level 180",
    objective: { type: 'collectVelvet', objGoal: 6, tileType: 'velvet' },
    moves: 45,
    difficulty: 'demon',
    allowHardLetters: false,
    locked: false,
    dullTurns: 45,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "velvet", "removed", "velvet", "removed", "velvet", "removed", "removed"],
      ["removed", "removed", "normal", "removed", "normal", "removed", "normal", "removed"],
      ["removed", "normal", "removed", "normal", "removed", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "removed", "normal", "removed", "normal", "removed"],
      ["removed", "normal", "removed", "normal", "removed", "normal", "removed", "removed"],
      ["removed", "removed", "velvet", "removed", "velvet", "removed", "velvet", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 181,
    name: "Level 181",
    objective: { type: 'lightsUp', objGoal: 16, tileType: 'bulb' },
    moves: 45,

    allowHardLetters: false,
    locked: false,
    dullTurns: 45,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "removed", "bulb", "removed", "removed", "bulb", "removed", "normal"],
      ["normal", "removed", "bulb", "normal", "normal", "bulb", "removed", "normal"],
      ["normal", "normal", "normal", "bulb", "bulb", "normal", "normal", "normal"],
      ["removed", "normal", "bulb", "normal", "normal", "bulb", "normal", "removed"],
      ["normal", "normal", "bulb", "normal", "normal", "bulb", "normal", "normal"],
      ["normal", "normal", "normal", "bulb", "bulb", "normal", "normal", "normal"],
      ["normal", "removed", "bulb", "normal", "normal", "bulb", "removed", "normal"],
      ["normal", "removed", "bulb", "normal", "normal", "bulb", "removed", "normal"]
    ],

  },
  {
    id: 182,
    name: "Level 182",
    objective: { type: 'score', objGoal: 7000 },
    moves: 35,

    allowHardLetters: false,
    locked: false,
    dullTurns: 45,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "removed", "ice", "ice", "ice", "ice", "removed", "normal"],
      ["normal", "ice", "ice", "infected", "ice", "removed", "ice", "normal"],
      ["removed", "ice", "infected", "normal", "infected", "ice", "ice", "removed"],
      ["removed", "ice", "ice", "infected", "normal", "infected", "ice", "removed"],
      ["normal", "ice", "removed", "ice", "infected", "ice", "ice", "normal"],
      ["normal", "removed", "ice", "ice", "ice", "ice", "removed", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 183,
    name: "Level 183",
    objective: { type: 'destroy', objGoal: 14, tileType: 'dull' },
    moves: 25,

    allowHardLetters: true,
    locked: false,
    dullTurns: 15,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["dull", "removed", "removed", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "dull", "normal", "normal", "exclamator", "dull", "normal", "normal"],
      ["dull", "normal", "dull", "exclamator", "dull", "normal", "dull", "normal"],
      ["normal", "dull", "normal", "dull", "exclamator", "dull", "normal", "dull"],
      ["normal", "normal", "dull", "exclamator", "normal", "normal", "dull", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "removed", "removed", "dull"],
      ["normal", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 184,
    name: "Level 184",
    objective: { type: 'collectVelvet', objGoal: 11, tileType: 'velvet' },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    dullTurns: 45,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["removed", "normal", "velvet", "normal", "normal", "velvet", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "velvet", "normal", "velvet", "velvet", "normal", "velvet", "normal"],
      ["normal", "velvet", "normal", "velvet", "velvet", "normal", "velvet", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "velvet", "normal", "normal", "velvet", "normal", "removed"]
    ],

  },
  {
    id: 185,
    name: "Level 185",
    objective: { type: 'words', objGoal: 7, minLength: 5 },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "locked", "locked", "normal", "normal", "removed"],
      ["removed", "normal", "locked", "normal", "normal", "locked", "normal", "removed"],
      ["normal", "locked", "normal", "bulb", "bulb", "normal", "locked", "normal"],
      ["locked", "normal", "bulb", "removed", "removed", "bulb", "normal", "locked"],
      ["normal", "bulb", "removed", "removed", "removed", "removed", "bulb", "normal"],
      ["bulb", "removed", "removed", "removed", "removed", "removed", "removed", "bulb"]
    ],

  },
  {
    id: 186,
    name: "Level 186",
    objective: { type: 'score', objGoal: 4000 },
    moves: 45,

    allowHardLetters: false,
    locked: false,
    dullTurns: 30,
    cursedTurns: 20,
    warpTurns: 18,
    board: [
      ["dull", "normal", "dull", "normal", "dull", "normal", "dull", "normal"],
      ["normal", "dull", "normal", "dull", "normal", "dull", "normal", "dull"],
      ["dull", "normal", "dull", "normal", "dull", "normal", "dull", "normal"],
      ["normal", "dull", "normal", "dull", "normal", "dull", "normal", "dull"],
      ["cursed", "normal", "cursed", "normal", "cursed", "normal", "cursed", "normal"],
      ["normal", "dull", "normal", "dull", "normal", "dull", "normal", "dull"],
      ["dull", "normal", "dull", "normal", "dull", "normal", "dull", "normal"],
      ["normal", "dull", "normal", "dull", "normal", "dull", "normal", "dull"]
    ],

  },
  {
    id: 187,
    name: "Level 187",
    objective: { type: 'lightsUp', objGoal: 6, tileType: 'bulb' },
    moves: 35,

    allowHardLetters: false,
    locked: false,
    dullTurns: 45,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "ice", "bulb"],
      ["normal", "normal", "normal", "removed", "normal", "normal", "ice", "bulb"],
      ["normal", "normal", "normal", "removed", "normal", "normal", "ice", "bulb"],
      ["normal", "normal", "normal", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "removed", "fire", "fire", "fire"],
      ["ice", "ice", "ice", "ice", "removed", "normal", "normal", "normal"],
      ["bulb", "bulb", "bulb", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 188,
    name: "Level 188",
    objective: { type: 'destroy', objGoal: 8, tileType: 'dull' },
    moves: 45,

    allowHardLetters: false,
    locked: false,
    dullTurns: 25,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "removed", "normal", "normal", "normal", "normal", "normal"],
      ["ice", "removed", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["ice", "dull", "ice", "normal", "removed", "normal", "normal", "normal"],
      ["ice", "dull", "ice", "removed", "normal", "normal", "normal", "normal"],
      ["ice", "dull", "dull", "ice", "ice", "normal", "removed", "normal"],
      ["ice", "dull", "dull", "dull", "dull", "removed", "removed", "normal"],
      ["ice", "ice", "ice", "ice", "ice", "normal", "normal", "normal"]
    ],

  },
  {
    id: 189,
    name: "Level 189",
    objective: { type: 'collectVelvet', objGoal: 4, tileType: 'velvet' },
    moves: 10,

    allowHardLetters: false,
    locked: false,
    dullTurns: 45,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "removed", "fire", "fire", "removed", "normal", "removed"],
      ["removed", "fire", "removed", "normal", "normal", "removed", "fire", "removed"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "velvet", "velvet", "velvet", "velvet", "velvet", "velvet", "normal"]
    ],

  },
  {
    id: 190,
    name: "Level 190",
    objective: { type: 'lightsUp', objGoal: 11, tileType: 'bulb' },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    lockTurns: 15,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "bulb", "locked", "locked", "bulb", "normal", "normal"],
      ["removed", "normal", "locked", "normal", "normal", "locked", "normal", "removed"],
      ["removed", "normal", "bulb", "locked", "locked", "bulb", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["bulb", "locked", "bulb", "removed", "removed", "bulb", "locked", "bulb"],
      ["locked", "normal", "removed", "locked", "normal", "removed", "normal", "locked"],
      ["bulb", "removed", "locked", "bulb", "normal", "normal", "removed", "bulb"]
    ],

  },
  {
    id: 191,
    name: "Level 191",
    objective: { type: 'lightsUp', objGoal: 10, tileType: 'bulb' },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    lockTurns: 15,
    cursedTurns: 30,
    warpTurns: 18,
    board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "bulb"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "bulb", "removed"],
      ["normal", "normal", "normal", "infected", "infected", "bulb", "removed", "removed"],
      ["normal", "normal", "infected", "normal", "normal", "infected", "bulb", "removed"],
      ["normal", "infected", "bulb", "normal", "normal", "normal", "infected", "bulb"],
      ["infected", "bulb", "removed", "bulb", "normal", "normal", "normal", "infected"],
      ["bulb", "removed", "removed", "removed", "bulb", "normal", "normal", "normal"]
    ],

  },
  {
    id: 192,
    name: "Level 192",
    objective: { type: 'destroy', objGoal: 10, tileType: 'dull' },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    cursedTurns: 30,
    dullTurns: 35,
    board: [
      ["locked", "dull", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["dull", "removed", "removed", "normal", "normal", "normal", "normal", "dull"],
      ["normal", "removed", "removed", "normal", "normal", "removed", "removed", "normal"],
      ["normal", "dull", "dull", "locked", "locked", "removed", "removed", "normal"],
      ["normal", "removed", "removed", "locked", "locked", "dull", "dull", "normal"],
      ["dull", "removed", "removed", "normal", "normal", "removed", "removed", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "removed", "removed", "dull"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "dull", "normal"]
    ],

  },
  {
    id: 193,
    name: "Level 193",
    objective: { type: 'defrost', objGoal: 30, tileType: 'ice' },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    cursedTurns: 30,
    dullTurns: 35,
    board: [
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["ice", "ice", "normal", "normal", "normal", "normal", "ice", "ice"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "ice"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "ice"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "ice"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "ice"],
      ["ice", "removed", "removed", "normal", "normal", "removed", "removed", "ice"]
    ],

  },
  {
    id: 194,
    name: "Level 194",
    objective: { type: 'collectVelvet', objGoal: 10, tileType: 'velvet' },
    moves: 25,

    allowHardLetters: false,
    locked: false,
    lockTurns: 8,
    cursedTurns: 30,
    dullTurns: 35,
    board: [
      ["removed", "removed", "removed", "normal", "velvet", "normal", "velvet", "normal"],
      ["removed", "removed", "normal", "normal", "exclamator", "normal", "exclamator", "normal"],
      ["removed", "normal", "normal", "normal", "velvet", "normal", "velvet", "normal"],
      ["normal", "normal", "normal", "normal", "exclamator", "velvet", "exclamator", "normal"],
      ["normal", "exclamator", "velvet", "exclamator", "removed", "removed", "removed", "removed"],
      ["normal", "velvet", "normal", "velvet", "normal", "removed", "removed", "removed"],
      ["normal", "exclamator", "normal", "exclamator", "removed", "removed", "removed", "removed"],
      ["normal", "velvet", "normal", "velvet", "normal", "removed", "removed", "removed"]
    ],

  },
  {
    id: 195,
    name: "Level 195",
    objective: { type: 'lightsUp', objGoal: 12, tileType: 'bulb' },
    moves: 45,

    allowHardLetters: false,
    locked: false,
    warpTurns: 17,
    cursedTurns: 30,
    dullTurns: 35,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "exclamator", "exclamator", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "bulb", "bulb", "removed", "removed", "removed"],
      ["removed", "removed", "bulb", "warped", "warped", "bulb", "removed", "removed"],
      ["removed", "bulb", "warped", "bulb", "bulb", "warped", "bulb", "removed"],
      ["bulb", "warped", "bulb", "normal", "normal", "bulb", "warped", "bulb"]
    ],

  },
  {
    id: 196,
    name: "Level 196",
    objective: { type: 'destroy', objGoal: 18, tileType: 'dull' },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    dullTurns: 20,
    cursedTurns: 30,

    board: [
      ["dull", "normal", "normal", "normal", "dull", "removed", "removed", "removed"],
      ["normal", "dull", "normal", "dull", "normal", "dull", "removed", "removed"],
      ["normal", "normal", "dull", "normal", "normal", "normal", "dull", "removed"],
      ["normal", "dull", "normal", "normal", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "normal", "normal", "dull", "normal"],
      ["removed", "dull", "normal", "normal", "normal", "dull", "normal", "normal"],
      ["removed", "removed", "dull", "normal", "dull", "normal", "dull", "normal"],
      ["removed", "removed", "removed", "dull", "normal", "normal", "normal", "dull"]
    ],

  },
  {
    id: 197,
    name: "Level 197",
    objective: { type: 'score', objGoal: 6500 },
    moves: 65,
    difficulty: 'Hard Level',
    allowHardLetters: false,
    locked: false,
    lockTurns: 8,

    dullTurns: 50,
    board: [
      ["normal", "normal", "removed", "normal", "infected", "removed", "infected", "normal"],
      ["normal", "normal", "normal", "normal", "infected", "removed", "infected", "normal"],
      ["dull", "dull", "dull", "dull", "infected", "infected", "infected", "normal"],
      ["removed", "removed", "removed", "dull", "normal", "normal", "normal", "normal"],
      ["dull", "dull", "dull", "dull", "dull", "dull", "dull", "dull"],
      ["normal", "infected", "infected", "infected", "dull", "removed", "removed", "removed"],
      ["normal", "infected", "removed", "infected", "dull", "dull", "dull", "dull"],
      ["normal", "infected", "removed", "infected", "normal", "removed", "normal", "normal"]
    ],

  },
  {
    id: 198,
    name: "Level 198",
    objective: { type: 'collectVelvet', objGoal: 12, tileType: 'velvet' },
    moves: 35,

    allowHardLetters: false,
    locked: false,
    warpTurns: 10,

    cursedTurns: 7,
    board: [
      ["velvet", "normal", "infected", "warped", "warped", "infected", "normal", "velvet"],
      ["normal", "velvet", "normal", "normal", "normal", "normal", "velvet", "normal"],
      ["infected", "normal", "velvet", "cursed", "cursed", "velvet", "normal", "infected"],
      ["warped", "normal", "cursed", "normal", "normal", "cursed", "normal", "warped"],
      ["warped", "normal", "cursed", "normal", "normal", "cursed", "normal", "warped"],
      ["infected", "normal", "velvet", "cursed", "cursed", "velvet", "normal", "infected"],
      ["normal", "velvet", "normal", "normal", "normal", "normal", "velvet", "normal"],
      ["velvet", "normal", "infected", "warped", "warped", "infected", "normal", "velvet"]
    ],

  },
  {
    id: 199,
    name: "Level 199",
    objective: { type: 'words', objGoal: 4, minLength: 5 },
    moves: 45,

    allowHardLetters: false,
    locked: false,
    lockTurns: 10,

    cursedTurns: 7,
    board: [
      ["ice", "normal", "removed", "infected", "normal", "normal", "normal", "locked"],
      ["normal", "ice", "removed", "normal", "infected", "removed", "locked", "normal"],
      ["ice", "normal", "removed", "infected", "normal", "removed", "normal", "normal"],
      ["normal", "ice", "removed", "normal", "infected", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "infected", "normal", "removed", "ice", "normal"],
      ["normal", "normal", "removed", "normal", "infected", "removed", "normal", "ice"],
      ["normal", "locked", "removed", "infected", "normal", "removed", "ice", "normal"],
      ["locked", "normal", "normal", "normal", "infected", "removed", "normal", "ice"]
    ],

  },
  {
    id: 200,
    name: "Level 200",
    objective: { type: 'destroy', objGoal: 12, tileType: 'exclamator' },
    moves: 60,
    difficulty: 'demon',
    allowHardLetters: false,
    locked: false,
    lockTurns: 20,

    cursedTurns: 7,
    board: [
      ["exclamator", "normal", "normal", "normal", "normal", "normal", "normal", "exclamator"],
      ["removed", "exclamator", "normal", "normal", "normal", "normal", "exclamator", "removed"],
      ["removed", "ice", "exclamator", "normal", "normal", "exclamator", "ice", "removed"],
      ["removed", "ice", "ice", "ice", "ice", "ice", "ice", "removed"],
      ["normal", "locked", "normal", "locked", "locked", "normal", "locked", "normal"],
      ["locked", "exclamator", "ice", "ice", "ice", "ice", "exclamator", "locked"],
      ["normal", "exclamator", "ice", "ice", "ice", "ice", "exclamator", "normal"],
      ["locked", "exclamator", "ice", "ice", "ice", "ice", "exclamator", "locked"]
    ],

  },
  {
    id: 201,
    name: "Level 201",
    objective: { type: 'defrost', objGoal: 20, tileType: 'ice' },
    moves: 45,

    allowHardLetters: false,
    locked: false,
    lockTurns: 20,

    cursedTurns: 7,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "ice", "bookClosed", "normal", "normal", "bookClosed", "ice", "normal"],
      ["removed", "ice", "ice", "bookClosed", "bookClosed", "ice", "ice", "removed"],
      ["removed", "ice", "ice", "ice", "ice", "ice", "ice", "removed"],
      ["removed", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "removed"],
      ["removed", "ice", "ice", "ice", "ice", "ice", "ice", "removed"],
      ["removed", "normal", "bookClosed", "ice", "ice", "bookClosed", "normal", "removed"]
    ],

    tutorialTileType: 'Flippers',
    tutorialMessage: "Flipper tiles hides and reveals tile letters every turns, Hidden tiles can not be selected!",
    tutorial: {}
  },
  {
    id: 202,
    name: "Level 202",
    objective: { type: 'lightsUp', objGoal: 6, tileType: 'bulb' },
    moves: 20,

    allowHardLetters: false,
    locked: false,
    lockTurns: 20,

    cursedTurns: 7,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "normal", "bulb", "bookClosed", "bulb", "normal", "removed"],
      ["removed", "removed", "normal", "bookClosed", "bulb", "bookClosed", "normal", "removed"],
      ["removed", "normal", "bookClosed", "bulb", "bookClosed", "normal", "removed", "removed"],
      ["removed", "normal", "bulb", "bookClosed", "bulb", "normal", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 203,
    name: "Level 203",
    objective: { type: 'lightsUp', objGoal: 4, tileType: 'bulb' },
    moves: 20,
    difficulty: 'Hard Level',
    allowHardLetters: false,
    locked: false,
    lockTurns: 20,

    cursedTurns: 7,
    board: [
      ["bulb", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bulb"],
      ["bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen"],
      ["bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed"],
      ["bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen"],
      ["bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed"],
      ["bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen"],
      ["bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed"],
      ["bulb", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "bulb"]
    ],

  },
  {
    id: 204,
    name: "Level 204",
    objective: { type: 'score', objGoal: 25000 },
    moves: 50,

    allowHardLetters: false,
    locked: false,
    dullTurns: 20,

    cursedTurns: 7,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["infected", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "normal", "normal"],
      ["normal", "dull", "bookClosed", "bookOpen", "bookOpen", "bookClosed", "dull", "normal"],
      ["normal", "dull", "bookClosed", "bookOpen", "bookOpen", "bookClosed", "dull", "normal"],
      ["normal", "dull", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "dull", "normal"],
      ["bookClosed", "bookClosed", "bookOpen", "bookOpen", "bookOpen", "bookOpen", "bookClosed", "bookClosed"],
      ["dull", "bookClosed", "dull", "dull", "dull", "dull", "bookClosed", "dull"]
    ],

  },
  {
    id: 205,
    name: "Level 205",
    objective: { type: 'lightsUp', objGoal: 2, tileType: 'bulb' },
    moves: 25,

    allowHardLetters: false,
    locked: false,
    dullTurns: 20,

    cursedTurns: 7,
    board: [
      ["removed", "exclamator", "normal", "normal", "normal", "normal", "exclamator", "removed"],
      ["removed", "normal", "exclamator", "normal", "normal", "exclamator", "normal", "removed"],
      ["removed", "normal", "normal", "exclamator", "exclamator", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "removed", "normal", "normal", "removed", "normal", "removed"],
      ["removed", "normal", "removed", "normal", "normal", "removed", "normal", "removed"],
      ["removed", "bulb", "removed", "normal", "normal", "removed", "bulb", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"]
    ],

  },
  {
    id: 206,
    name: "Level 206",
    objective: { type: 'collectVelvet', objGoal: 10, tileType: 'velvet' },
    moves: 40,

    allowHardLetters: false,
    locked: false,
    dullTurns: 20,

    cursedTurns: 7,
    board: [
      ["velvet", "velvet", "removed", "velvet", "velvet", "removed", "velvet", "velvet"],
      ["velvet", "velvet", "removed", "velvet", "velvet", "removed", "bookClosed", "bookClosed"],
      ["velvet", "velvet", "removed", "bookClosed", "bookClosed", "removed", "velvet", "velvet"],
      ["velvet", "velvet", "removed", "velvet", "velvet", "removed", "velvet", "velvet"],
      ["bookClosed", "bookClosed", "removed", "velvet", "velvet", "removed", "velvet", "velvet"],
      ["velvet", "velvet", "removed", "velvet", "velvet", "removed", "bookClosed", "bookClosed"],
      ["velvet", "velvet", "removed", "bookClosed", "bookClosed", "removed", "velvet", "velvet"],
      ["velvet", "velvet", "removed", "velvet", "velvet", "removed", "velvet", "velvet"]
    ],

  },
  {
    id: 207,
    name: "Level 207",
    objective: { type: 'destroy', objGoal: 16, tileType: 'warped' },
    moves: 15,

    allowHardLetters: false,
    locked: false,
    warpTurns: 10,

    cursedTurns: 7,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "removed", "warped", "warped", "removed", "normal", "removed"],
      ["normal", "normal", "warped", "warped", "warped", "warped", "normal", "normal"],
      ["normal", "normal", "removed", "warped", "warped", "removed", "normal", "normal"],
      ["normal", "normal", "warped", "bookClosed", "bookClosed", "warped", "normal", "normal"],
      ["normal", "normal", "removed", "warped", "warped", "removed", "normal", "normal"],
      ["removed", "normal", "warped", "removed", "removed", "warped", "normal", "removed"],
      ["removed", "normal", "warped", "warped", "warped", "warped", "normal", "removed"]
    ],

  },
  {
    id: 208,
    name: "Level 208",
    objective: { type: 'lightsUp', objGoal: 8, tileType: 'bulb' },
    moves: 45,

    allowHardLetters: false,
    locked: false,
    warpTurns: 10,

    cursedTurns: 7,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "normal", "removed", "removed", "removed", "removed", "normal", "removed"],
      ["normal", "bookClosed", "bulb", "removed", "removed", "bulb", "bookOpen", "normal"],
      ["normal", "bookClosed", "bulb", "removed", "removed", "bulb", "bookOpen", "normal"],
      ["normal", "bookClosed", "bulb", "removed", "removed", "bulb", "bookOpen", "normal"],
      ["normal", "bookClosed", "bulb", "removed", "removed", "bulb", "bookOpen", "normal"],
      ["removed", "normal", "removed", "removed", "removed", "removed", "normal", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 209,
    name: "Level 209",
    objective: { type: 'words', objGoal: 9, minLength: 4 },
    moves: 40,

    allowHardLetters: false,
    locked: false,
    warpTurns: 10,

    cursedTurns: 7,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["infected", "normal", "infected", "normal", "normal", "infected", "normal", "infected"]
    ],

  },
  {
    id: 210,
    name: "Level 210",
    objective: { type: 'collectVelvet', objGoal: 4, tileType: 'velvet' },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    lockTurns: 25,
    dullTurns: 30,
    cursedTurns: 7,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "locked", "locked", "dull", "locked", "locked", "locked", "normal"],
      ["normal", "locked", "dull", "normal", "velvet", "dull", "locked", "normal"],
      ["normal", "locked", "velvet", "dull", "removed", "bookClosed", "dull", "normal"],
      ["normal", "dull", "bookClosed", "removed", "dull", "velvet", "locked", "normal"],
      ["normal", "locked", "dull", "velvet", "normal", "dull", "locked", "normal"],
      ["normal", "locked", "locked", "locked", "dull", "locked", "locked", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 211,
    name: "Level 211",
    objective: { type: 'lightsUp', objGoal: 2, tileType: 'bulb' },
    moves: 45,
    difficulty: 'Hard Level',
    allowHardLetters: true,
    locked: false,
    lockTurns: 25,
    dullTurns: 30,
    cursedTurns: 7,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "ice", "removed", "removed", "normal", "removed", "removed"],
      ["normal", "ice", "bulb", "ice", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "ice", "removed", "removed", "normal", "removed", "normal"],
      ["normal", "removed", "normal", "removed", "removed", "infected", "removed", "normal"],
      ["normal", "normal", "normal", "normal", "infected", "bulb", "infected", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "infected", "normal", "normal"]
    ],

  },
  {
    id: 212,
    name: "Level 212",
    objective: { type: 'words', objGoal: 10, minLength: 5 },
    moves: 55,

    allowHardLetters: false,
    locked: false,
    lockTurns: 17,
    dullTurns: 30,
    cursedTurns: 7,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "locked", "removed", "removed"],
      ["normal", "normal", "locked", "normal", "normal", "removed", "removed", "fire"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "removed", "normal"],
      ["normal", "removed", "removed", "normal", "normal", "removed", "infected", "normal"],
      ["locked", "removed", "removed", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 213,
    name: "Level 213",
    objective: { type: 'destroy', objGoal: 2, tileType: 'dull' },
    moves: 9,

    allowHardLetters: true,
    locked: false,
    lockTurns: 17,
    dullTurns: 30,
    cursedTurns: 7,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "bookClosed", "bookClosed", "bookClosed", "bookOpen", "bookOpen", "normal", "normal"],
      ["normal", "bookClosed", "bookOpen", "bookOpen", "bookOpen", "bookOpen", "normal", "normal"],
      ["normal", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "normal", "normal"],
      ["normal", "bookClosed", "bookOpen", "bookClosed", "bookOpen", "bookClosed", "normal", "normal"],
      ["normal", "bookClosed", "dull", "bookOpen", "dull", "bookOpen", "normal", "normal"],
      ["normal", "bookClosed", "bookClosed", "bookClosed", "bookOpen", "bookOpen", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"]
    ],

  },
  {
    id: 214,
    name: "Level 214",
    objective: { type: 'collectVelvet', objGoal: 5, tileType: 'velvet' },
    moves: 20,

    allowHardLetters: false,
    locked: false,
    lockTurns: 17,
    dullTurns: 30,
    cursedTurns: 7,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "velvet", "removed", "removed", "removed", "velvet", "removed"],
      ["removed", "removed", "removed", "velvet", "removed", "velvet", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "infected", "normal", "removed", "normal", "removed", "normal", "infected"],
      ["removed", "infected", "normal", "normal", "normal", "normal", "normal", "infected"],
      ["removed", "removed", "removed", "normal", "removed", "normal", "removed", "removed"],
      ["removed", "removed", "velvet", "removed", "removed", "removed", "velvet", "removed"]
    ],

  },
  {
    id: 215,
    name: "Level 215",
    objective: { type: 'score', objGoal: 9000 },
    moves: 40,

    allowHardLetters: false,
    locked: false,
    lockTurns: 17,
    dullTurns: 25,
    warpTurns: 20,
    cursedTurns: 15,
    board: [
      ["normal", "removed", "warped", "fire", "cursed", "dull", "removed", "normal"],
      ["normal", "removed", "bookClosed", "infected", "ice", "locked", "removed", "normal"],
      ["normal", "removed", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 216,
    name: "Level 216",
    objective: { type: 'lightsUp', objGoal: 8, tileType: 'bulb' },
    moves: 40,

    allowHardLetters: false,
    locked: false,
    lockTurns: 14,
    dullTurns: 25,
    warpTurns: 20,
    cursedTurns: 15,
    board: [
      ["removed", "fire", "removed", "normal", "normal", "removed", "fire", "removed"],
      ["bulb", "normal", "removed", "normal", "normal", "removed", "normal", "bulb"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "locked", "normal", "locked", "locked", "normal", "locked", "normal"],
      ["bulb", "normal", "locked", "normal", "normal", "locked", "normal", "bulb"],
      ["removed", "locked", "bulb", "normal", "normal", "bulb", "locked", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "removed", "bulb", "bulb", "removed", "normal", "removed"]
    ],

  },
  {
    id: 217,
    name: "Level 217",
    objective: { type: 'destroy', objGoal: 16, tileType: 'dull' },
    moves: 18,

    allowHardLetters: false,
    locked: false,
    lockTurns: 14,
    dullTurns: 15,
    warpTurns: 20,
    cursedTurns: 15,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "dull", "removed"],
      ["removed", "dull", "normal", "normal", "normal", "dull", "normal", "removed"],
      ["removed", "normal", "dull", "normal", "dull", "normal", "dull", "removed"],
      ["removed", "normal", "normal", "dull", "normal", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "normal", "dull", "normal", "normal", "removed"],
      ["removed", "dull", "normal", "dull", "normal", "dull", "normal", "removed"],
      ["removed", "normal", "dull", "normal", "normal", "normal", "dull", "removed"],
      ["removed", "dull", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 218,
    name: "Level 218",
    objective: { type: 'lightsUp', objGoal: 2, tileType: 'bulb' },
    moves: 10,

    allowHardLetters: false,
    locked: false,
    lockTurns: 14,
    dullTurns: 15,
    warpTurns: 20,
    cursedTurns: 15,
    board: [
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["infected", "normal", "normal", "infected", "infected", "normal", "normal", "infected"],
      ["normal", "infected", "infected", "infected", "infected", "infected", "infected", "normal"],
      ["normal", "infected", "infected", "normal", "normal", "infected", "infected", "normal"],
      ["normal", "bulb", "infected", "normal", "normal", "infected", "bulb", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"]
    ],
    groundLayout: [
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['cleanse', 'none', 'none', 'none', 'none', 'none', 'none', 'cleanse'],
      ['cleanse', 'cleanse', 'none', 'none', 'none', 'none', 'cleanse', 'cleanse'],
      ['none', 'none', 'none', 'cleanse', 'cleanse', 'none', 'none', 'none'],
    ],
  },
  {
    id: 219,
    name: "Level 219",
    objective: { type: 'words', objGoal: 3, minLength: 6 },
    moves: 40,

    allowHardLetters: false,
    locked: false,
    lockTurns: 14,
    dullTurns: 15,
    warpTurns: 20,
    cursedTurns: 15,
    board: [
      ["bookClosed", "normal", "normal", "normal", "normal", "normal", "bookClosed", "normal"],
      ["normal", "bookClosed", "normal", "normal", "exclamator", "bookClosed", "normal", "normal"],
      ["normal", "normal", "bookClosed", "normal", "bookClosed", "normal", "normal", "bookClosed"],
      ["normal", "exclamator", "normal", "normal", "normal", "normal", "bookClosed", "normal"],
      ["normal", "bookClosed", "normal", "normal", "normal", "normal", "exclamator", "normal"],
      ["bookClosed", "normal", "normal", "bookClosed", "normal", "bookClosed", "normal", "normal"],
      ["normal", "normal", "bookClosed", "exclamator", "normal", "normal", "bookClosed", "normal"],
      ["normal", "bookClosed", "normal", "normal", "normal", "normal", "normal", "bookClosed"]
    ],

  },

  {
    id: 220,
    name: "Level 220",
    objective: { type: 'lightsUp', objGoal: 7, tileType: 'bulb' },
    moves: 50,

    allowHardLetters: false,
    locked: false,

    cursedTurns: 15,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "ice", "normal", "normal", "normal", "normal"],
      ["removed", "ice", "ice", "ice", "normal", "bulb", "bulb", "normal"],
      ["removed", "ice", "bulb", "ice", "normal", "bulb", "bulb", "normal"],
      ["removed", "ice", "ice", "ice", "ice", "normal", "normal", "normal"],
      ["ice", "ice", "ice", "ice", "bulb", "normal", "normal", "normal"],
      ["ice", "bulb", "ice", "ice", "ice", "ice", "removed", "removed"],
      ["ice", "ice", "ice", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 221,
    name: "Level 221",
    objective: { type: 'score', objGoal: 9000 },
    moves: 30,

    allowHardLetters: false,
    locked: false,

    warpTurns: 15,
    board: [
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "warped", "normal", "normal", "normal", "warped", "normal"],
      ["removed", "bookClosed", "bookClosed", "warped", "removed", "warped", "bookClosed", "bookClosed"],
      ["removed", "warped", "normal", "bookClosed", "removed", "bookClosed", "normal", "warped"],
      ["removed", "normal", "warped", "normal", "removed", "normal", "warped", "normal"],
      ["removed", "bookClosed", "bookClosed", "warped", "removed", "warped", "bookClosed", "bookClosed"],
      ["removed", "warped", "normal", "bookClosed", "removed", "bookClosed", "warped", "normal"],
      ["removed", "removed", "warped", "normal", "removed", "warped", "normal", "removed"]
    ],

  },
  {
    id: 222,
    name: "Level 222",
    objective: { type: 'score', objGoal: 10000 },
    moves: 40,

    allowHardLetters: false,
    locked: false,

    dullTurns: 33,
    board: [
      ["dull", "dull", "dull", "dull", "dull", "dull", "dull", "dull"],
      ["removed", "dull", "dull", "dull", "dull", "dull", "dull", "dull"],
      ["removed", "removed", "dull", "dull", "dull", "dull", "dull", "dull"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "fire", "fire"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 223,
    name: "Level 223",
    objective: { type: 'score', objGoal: 6000 },
    moves: 30,

    allowHardLetters: false,
    locked: false,

    dullTurns: 33,
    board: [
      ["removed", "normal", "normal", "infected", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "normal", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "removed", "removed", "infected"],
      ["normal", "normal", "infected", "normal", "normal", "normal", "infected", "normal"],
      ["normal", "infected", "normal", "normal", "normal", "infected", "normal", "normal"],
      ["infected", "removed", "removed", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "normal", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "infected", "normal", "normal", "removed"]

    ],

  },
  {
    id: 224,
    name: "Level 224",
    objective: { type: 'destroy', objGoal: 16, tileType: 'dull' },
    moves: 50,

    allowHardLetters: false,
    locked: false,

    dullTurns: 25,
    board: [
      ["normal", "removed", "fire", "removed", "removed", "fire", "removed", "normal"],
      ["normal", "removed", "normal", "removed", "removed", "normal", "removed", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["dull", "dull", "dull", "normal", "normal", "dull", "dull", "dull"],
      ["dull", "ice", "dull", "ice", "ice", "dull", "ice", "dull"],
      ["removed", "ice", "dull", "ice", "ice", "dull", "ice", "removed"],
      ["removed", "removed", "dull", "dull", "dull", "dull", "removed", "removed"]
    ],

  },
  {
    id: 225,
    name: "Level 225",
    objective: { type: 'collectVelvet', objGoal: 4, tileType: 'velvet' },
    moves: 24,

    allowHardLetters: false,
    locked: false,

    dullTurns: 25,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "velvet", "ice", "removed", "removed", "ice", "velvet", "removed"],
      ["removed", "ice", "ice", "normal", "normal", "ice", "ice", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "ice", "ice", "normal", "normal", "ice", "ice", "removed"],
      ["removed", "velvet", "ice", "removed", "removed", "ice", "velvet", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 226,
    name: "Level 226",
    objective: { type: 'score', objGoal: 4300 },
    moves: 20,

    allowHardLetters: false,
    locked: false,
    warpTurns: 20,
    dullTurns: 20,
    board: [
      ["normal", "removed", "removed", "warped", "infected", "removed", "removed", "normal"],
      ["normal", "dull", "removed", "removed", "warped", "removed", "dull", "normal"],
      ["normal", "dull", "removed", "warped", "infected", "removed", "dull", "normal"],
      ["normal", "dull", "removed", "infected", "removed", "removed", "dull", "normal"],
      ["normal", "dull", "removed", "warped", "infected", "removed", "dull", "normal"],
      ["normal", "dull", "removed", "removed", "removed", "removed", "dull", "normal"],
      ["normal", "dull", "dull", "dull", "dull", "dull", "dull", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 227,
    name: "Level 227",
    objective: { type: 'destroy', objGoal: 61  , tileType:'flippers' },
    moves: 50,

    allowHardLetters: false,
    locked: false,
    warpTurns: 20,
    dullTurns: 20,
    board: [
      ["bookClosed", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "bookClosed"],
      ["bookClosed", "bookClosed", "bookOpen", "bookOpen", "bookOpen", "bookOpen", "bookClosed", "bookClosed"],
      ["bookClosed", "bookOpen", "bookOpen", "bookOpen", "bookOpen", "bookOpen", "bookOpen", "bookClosed"],
      ["bookClosed", "bookOpen", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "bookOpen", "bookClosed"],
      ["bookClosed", "bookOpen", "bookOpen", "bookClosed", "bookClosed", "bookOpen", "bookOpen", "bookClosed"],
      ["bookClosed", "bookOpen", "bookOpen", "bookOpen", "bookOpen", "bookOpen", "bookOpen", "bookClosed"],
      ["bookClosed", "bookClosed", "bookOpen", "bookOpen", "bookOpen", "bookOpen", "bookClosed", "bookClosed"],
      ["bookClosed", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "bookClosed", "bookClosed"]
    ],

  },
  {
    id: 228,
    name: "Level 228",
    objective: { type: 'destroy', objGoal:  16 , tileType:'dull' },
    moves: 30,

    allowHardLetters: false,
    locked: false,
    warpTurns: 20,
    dullTurns: 40,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["normal", "removed", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["dull", "dull", "normal", "removed", "removed", "normal", "dull", "dull"],
      ["removed", "dull", "normal", "dull", "dull", "normal", "dull", "removed"],
      ["removed", "dull", "normal", "dull", "dull", "normal", "dull", "removed"],
      ["dull", "dull", "normal", "removed", "removed", "normal", "dull", "dull"],
      ["normal", "removed", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 229,
    name: "Level 229",
    objective: { type: 'collectVelvet', objGoal:  16 , tileType:'velvet' },
    moves: 60,
   difficulty: 'demon',
    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    dullTurns: 40,
    board: [
      ["normal", "removed", "normal", "removed", "ice", "velvet", "removed", "velvet"],
      ["normal", "removed", "normal", "removed", "ice", "ice", "removed", "normal"],
      ["normal", "normal", "normal", "removed", "ice", "ice", "locked", "locked"],
      ["normal", "normal", "ice", "ice", "ice", "ice", "locked", "locked"],
      ["locked", "locked", "ice", "ice", "ice", "ice", "normal", "normal"],
      ["locked", "locked", "ice", "ice", "removed", "normal", "normal", "normal"],
      ["normal", "removed", "ice", "ice", "removed", "normal", "removed", "normal"],
      ["velvet", "removed", "velvet", "ice", "removed", "normal", "removed", "normal"]
    ],

  },
  {
    id: 230,
    name: "Level 230",
    objective: { type: 'lightsUp', objGoal:  4 , tileType:'bulb' },
    moves: 20,

    allowHardLetters: true,
    locked: false,
    lockTurns: 20,
    dullTurns: 40,
    board: [
     ["bookClosed", "bookClosed", "bookClosed", "bookClosed", "removed", "bookOpen", "bookOpen", "bookOpen"],
        ["bookClosed", "bookClosed", "bookClosed", "bookClosed", "removed", "bookOpen", "bookOpen", "bulb"],
        ["bookClosed", "bulb", "bookClosed", "bookClosed", "removed", "bookOpen", "bookOpen", "bookOpen"],
        ["removed", "removed", "removed", "removed", "removed", "bookOpen", "bookOpen", "bookOpen"],
        ["bookOpen", "bookOpen", "bookOpen", "removed", "removed", "removed", "removed", "removed"],
        ["bookOpen", "bookOpen", "bookOpen", "removed", "bookClosed", "bookClosed", "bulb", "bookClosed"],
        ["bulb", "bookOpen", "bookOpen", "removed", "bookClosed", "bookClosed", "bookClosed", "bookClosed"],
        ["bookOpen", "bookOpen", "bookOpen", "removed", "bookClosed", "bookClosed", "bookClosed", "bookClosed"]
    ],

  },
  {
    id: 231,
    name: "Level 231",
    objective: { type: 'score', objGoal:  8900},
    moves: 20,

    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    dullTurns: 40,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "mystery", "normal", "mystery", "mystery", "normal", "mystery", "removed"],
      ["removed", "mystery", "normal", "normal", "normal", "normal", "mystery", "removed"],
      ["removed", "mystery", "normal", "normal", "normal", "normal", "mystery", "removed"],
      ["removed", "removed", "removed", "mystery", "mystery", "removed", "removed", "removed"]
    ],
    tutorialTileType: 'Surprise Tile',
    tutorialMessage: "Surprise tiles are mysterious tiles. When matched, it either spawns Good gems, or Evil Negative  tiles. You'll never know!",
    tutorial: {}
  },
  {
    id: 232,
    name: "Level 232",
    objective: { type: 'score', objGoal:  21900},
    moves: 13,

    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    dullTurns: 40,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "mystery", "ice", "mystery", "mystery", "ice", "mystery", "normal"],
      ["normal", "ice", "mystery", "ice", "ice", "mystery", "ice", "normal"],
      ["normal", "mystery", "ice", "mystery", "mystery", "ice", "mystery", "normal"],
      ["normal", "ice", "mystery", "ice", "ice", "mystery", "ice", "normal"],
      ["normal", "mystery", "ice", "mystery", "mystery", "ice", "mystery", "normal"],
      ["normal", "ice", "mystery", "ice", "ice", "mystery", "ice", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 233,
    name: "Level 233",
    objective: { type: 'lightsUp', tileType: 'bulb', objGoal: 4 },
    moves: 13,
    difficulty: 'Hard Level',
    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    dullTurns: 40,
    board: [
      ["normal", "lineBlasterColumn", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "locked", "removed", "locked", "removed", "locked", "normal"],
      ["normal", "locked", "bulb", "ice", "ice", "bulb", "removed", "normal"],
      ["normal", "removed", "ice", "fire", "removed", "ice", "locked", "normal"],
      ["normal", "locked", "ice", "removed", "fire", "ice", "removed", "normal"],
      ["normal", "removed", "bulb", "ice", "ice", "bulb", "locked", "normal"],
      ["normal", "locked", "removed", "locked", "removed", "locked", "removed", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 234,
    name: "Level 234",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 2 },
    moves: 45,
   
    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    dullTurns: 35,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["normal", "ice", "dull", "removed", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "removed", "removed", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "removed", "normal", "normal", "normal", "ice", "ice"],
      ["normal", "removed", "normal", "normal", "normal", "ice", "removed", "normal"],
      ["normal", "removed", "normal", "ice", "ice", "removed", "removed", "normal"],
      ["normal", "normal", "ice", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "ice", "removed", "removed", "dull", "ice", "normal", "normal"]
    ],

  },
  {
    id: 235,
    name: "Level 235",
    objective: { type: 'words', minLength: 5, objGoal: 2 },
    moves: 35,
   
    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    dullTurns: 35,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["infected", "removed", "normal", "normal", "normal", "normal", "removed", "infected"],
      ["normal", "removed", "removed", "normal", "normal", "removed", "removed", "normal"],
      ["infected", "normal", "infected", "normal", "normal", "infected", "normal", "infected"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "infected", "normal", "normal", "infected", "normal", "removed"],
      ["removed", "normal", "removed", "normal", "normal", "removed", "normal", "removed"]
    ],

  },
  {
    id: 236,
    name: "Level 236",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 1 },
    moves: 14,
   
    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    dullTurns: 35,
    board: [
        ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
        ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
        ["bulb", "mystery", "normal", "normal", "normal", "normal", "mystery", "bulb"],
        ["removed", "mystery", "normal", "mystery", "mystery", "normal", "mystery", "removed"],
        ["removed", "removed", "normal", "mystery", "mystery", "normal", "removed", "removed"],
        ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
        ["bulb", "mystery", "removed", "mystery", "mystery", "removed", "mystery", "bulb"],
        ["removed", "removed", "removed", "mystery", "mystery", "removed", "removed", "removed"]
    ],

  },
  {
    id: 237,
    name: "Level 237",
    objective: { type: 'collectVelvet', tileType: 'velvet', objGoal: 13 },
    moves: 14,
   
    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    dullTurns: 35,
    board: [
      ["normal", "velvet", "normal", "normal", "normal", "normal", "velvet", "normal"],
      ["velvet", "velvet", "velvet", "velvet", "velvet", "velvet", "velvet", "velvet"],
      ["normal", "normal", "normal", "velvet", "velvet", "normal", "normal", "normal"],
      ["velvet", "velvet", "velvet", "velvet", "velvet", "velvet", "velvet", "velvet"],
      ["normal", "mystery", "velvet", "normal", "normal", "velvet", "mystery", "normal"],
      ["velvet", "velvet", "velvet", "velvet", "velvet", "velvet", "velvet", "velvet"],
      ["mystery", "velvet", "mystery", "mystery", "mystery", "mystery", "velvet", "mystery"],
      ["velvet", "velvet", "velvet", "mystery", "mystery", "velvet", "velvet", "velvet"]
    ],

  },
  {
    id: 238,
    name: "Level 238",
    objective: { type: 'destroy', tileType: 'dull', objGoal: 22 },
    moves: 25,
   
    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    dullTurns: 17,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "dull", "removed", "removed", "dull", "normal", "normal"],
      ["normal", "dull", "dull", "dull", "dull", "dull", "dull", "normal"],
      ["removed", "removed", "dull", "dull", "normal", "dull", "removed", "removed"],
      ["removed", "removed", "dull", "normal", "dull", "dull", "removed", "removed"],
      ["normal", "dull", "dull", "dull", "dull", "dull", "dull", "normal"],
      ["normal", "normal", "dull", "removed", "removed", "dull", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"]
    ],

  },
  {
    id: 239,
    name: "Level 239",
    objective: { type: 'lightsUp', tileType: 'bulb', objGoal: 2 },
    moves: 15,
   
    allowHardLetters: false,
    locked: false,
    lockTurns: 20,
    dullTurns: 17,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "infected", "infected", "infected", "infected", "infected", "infected", "normal"],
      ["normal", "infected", "infected", "infected", "infected", "infected", "infected", "normal"],
      ["normal", "infected", "infected", "mystery", "mystery", "infected", "infected", "normal"],
      ["normal", "infected", "mystery", "bulb", "bulb", "mystery", "infected", "normal"]
    ],

  },
  {
    id: 240,
    name: "Level 240",
    objective: { type: 'destroy', tileType: 'warped', objGoal: 3 },
    moves: 45,
     difficulty: 'Hard Level',
    allowHardLetters: false,
    locked: false,
    warpTurns: 5,
    dullTurns: 17,
    board: [
      ["normal", "normal", "normal", "mystery", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "mystery", "normal", "mystery", "normal", "normal"],
      ["removed", "mystery", "mystery", "mystery", "mystery", "mystery", "normal", "normal"],
      ["removed", "mystery", "warped", "mystery", "mystery", "mystery", "mystery", "removed"],
      ["removed", "mystery", "mystery", "mystery", "mystery", "exclamator", "mystery", "removed"],
      ["normal", "normal", "mystery", "mystery", "mystery", "mystery", "mystery", "removed"],
      ["normal", "normal", "mystery", "normal", "mystery", "normal", "normal", "normal"],
      ["normal", "normal", "removed", "removed", "mystery", "normal", "normal", "normal"]
    ],

  },
  {
    id: 241,
    name: "Level 241",
    objective: { type: 'lightsUp', tileType: 'bulb', objGoal: 10 },
    moves: 40,
     
    allowHardLetters: false,
    locked: false,
    warpTurns: 5,
    lockTurns: 19,
    board: [
      ["removed", "locked", "bulb", "locked", "bulb", "locked", "removed", "removed"],
      ["removed", "bulb", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["normal", "locked", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "bulb", "normal", "normal", "locked", "bulb", "locked", "normal"],
      ["normal", "locked", "bulb", "locked", "ice", "ice", "bulb", "normal"],
      ["normal", "normal", "ice", "ice", "ice", "ice", "locked", "normal"],
      ["removed", "removed", "ice", "ice", "ice", "ice", "bulb", "removed"],
      ["removed", "removed", "locked", "bulb", "locked", "bulb", "locked", "removed"]
    ],

  },
  {
    id: 242,
    name: "Level 242",
    objective: { type: 'score',  objGoal: 8900 },
    moves: 40,
     
    allowHardLetters: false,
    locked: false,
    warpTurns: 5,
    dullTurns: 20,
    board: [
      ["infected", "removed", "dull", "normal", "dull", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "dull", "removed", "infected"],
      ["infected", "normal", "normal", "normal", "normal", "normal", "removed", "normal"],
      ["normal", "normal", "normal", "dull", "dull", "normal", "removed", "infected"],
      ["infected", "normal", "normal", "dull", "dull", "normal", "normal", "normal"],
      ["normal", "removed", "normal", "normal", "normal", "normal", "normal", "infected"],
      ["infected", "removed", "dull", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "dull", "normal", "dull", "removed", "infected"]
    ],

  },
  {
    id: 243,
    name: "Level 243",
    objective: { type: 'lightsUp',  objGoal: 4 , tileType: 'bulb'},
    moves: 55,
     
    allowHardLetters: false,
    locked: false,
    warpTurns: 5,
    dullTurns: 20,
    board: [
      ["normal", "normal", "mystery", "normal", "normal", "mystery", "normal", "normal"],
      ["mystery", "removed", "normal", "normal", "normal", "normal", "removed", "mystery"],
      ["normal", "normal", "mystery", "removed", "removed", "mystery", "normal", "normal"],
      ["mystery", "removed", "normal", "bulb", "bulb", "normal", "removed", "mystery"],
      ["normal", "normal", "mystery", "removed", "removed", "mystery", "normal", "normal"],
      ["mystery", "removed", "normal", "bulb", "bulb", "normal", "removed", "mystery"],
      ["normal", "normal", "mystery", "removed", "removed", "mystery", "normal", "normal"],
      ["mystery", "removed", "normal", "normal", "normal", "normal", "removed", "mystery"]
    ],

  },
  {
    id: 244,
    name: "Level 244",
    objective: { type: 'destroy',  objGoal: 17 , tileType: 'warped'},
    moves: 20,
     
    allowHardLetters: false,
    locked: false,
    warpTurns: 18,
    dullTurns: 20,
    board: [
      ["normal", "warped", "removed", "warped", "normal", "removed", "normal", "normal"],
      ["normal", "warped", "removed", "warped", "normal", "removed", "normal", "normal"],
      ["normal", "warped", "removed", "warped", "normal", "normal", "normal", "normal"],
      ["removed", "warped", "removed", "removed", "warped", "normal", "normal", "removed"],
      ["removed", "normal", "warped", "removed", "removed", "warped", "warped", "removed"],
      ["normal", "normal", "normal", "warped", "removed", "removed", "warped", "normal"],
      ["normal", "normal", "removed", "normal", "warped", "removed", "warped", "normal"],
      ["normal", "normal", "removed", "normal", "warped", "removed", "warped", "normal"]
    ],

  },
  {
    id: 245,
    name: "Level 245",
    objective: { type: 'lightsUp',  objGoal: 7 , tileType: 'bulb'},
    moves: 20,
     
    allowHardLetters: false,
    locked: false,
    warpTurns: 18,
    lockTurns: 10,
    board: [
      ["normal", "normal", "bulb", "normal", "normal", "removed", "removed", "removed"],
      ["normal", "normal", "removed", "bulb", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "removed", "removed", "bulb", "normal", "normal", "normal"],
      ["normal", "normal", "removed", "removed", "removed", "bulb", "normal", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "removed", "bulb", "normal"],
      ["locked", "locked", "locked", "normal", "removed", "removed", "normal", "bulb"],
      ["locked", "bulb", "locked", "normal", "normal", "removed", "normal", "normal"],
      ["removed", "removed", "removed", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 246,
    name: "Level 246",
    objective: { type: 'words',  objGoal: 4 , minLength: 5},
    moves: 20,
     
    allowHardLetters: false,
    locked: false,
    warpTurns: 18,
    dullTurns: 20,
    board: [
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["infected", "removed", "normal", "infected", "infected", "normal", "removed", "infected"],
      ["normal", "infected", "normal", "normal", "normal", "normal", "infected", "normal"],
      ["normal", "normal", "infected", "normal", "normal", "infected", "normal", "normal"],
      ["normal", "infected", "normal", "infected", "infected", "normal", "infected", "normal"],
      ["infected", "normal", "removed", "infected", "infected", "removed", "normal", "infected"],
      ["removed", "normal", "removed", "infected", "infected", "removed", "normal", "removed"],
      ["removed", "normal", "removed", "infected", "infected", "removed", "normal", "removed"]
    ],

  },
  {
    id: 247,
    name: "Level 247",
    objective: { type: 'destroy',  objGoal: 16, tileType: 'dull'},
    moves: 16,
     
    allowHardLetters: false,
    locked: false,
    warpTurns: 18,
    dullTurns: 12,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"],
      ["dull", "removed", "dull", "removed", "removed", "dull", "removed", "dull"],
      ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"]
    ],

  },
  {
    id: 248,
    name: "Level 248",
    objective: { type: 'lightsUp',  objGoal: 3, tileType: 'bulb'},
    moves: 46,
     difficulty: 'Hard Level',
    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    dullTurns: 12,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "removed", "normal", "removed", "ice", "ice"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "ice", "bulb"],
      ["removed", "removed", "normal", "normal", "locked", "ice", "ice", "removed"],
      ["removed", "removed", "normal", "locked", "locked", "ice", "ice", "bulb"],
      ["removed", "removed", "normal", "locked", "ice", "ice", "locked", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "locked", "bulb"],
      ["removed", "normal", "normal", "removed", "removed", "removed", "locked", "locked"]
    ],

  },
  {
    id: 249,
    name: "Level 249",
    objective: { type: 'collectVelvet',  objGoal: 7, tileType: 'velvet'},
    moves: 46,
  
    allowHardLetters: true,
    locked: false,
    lockTurns: 9,
    dullTurns: 12,
    board: [
        ["dull", "normal", "removed", "mystery", "mystery", "removed", "normal", "dull"],
        ["velvet", "dull", "normal", "normal", "normal", "locked", "dull", "velvet"],
        ["dull", "locked", "removed", "normal", "normal", "removed", "normal", "dull"],
        ["velvet", "dull", "normal", "normal", "normal", "locked", "dull", "velvet"],
        ["dull", "locked", "removed", "normal", "normal", "removed", "normal", "dull"],
        ["velvet", "dull", "normal", "normal", "normal", "locked", "dull", "velvet"],
        ["dull", "locked", "removed", "mystery", "mystery", "removed", "normal", "dull"],
        ["removed", "removed", "removed", "velvet", "velvet", "removed", "removed", "removed"]
    ],

  },
  {
    id: 250,
    name: "Level 250",
    objective: { type: 'lightsUp',  objGoal: 11, tileType: 'bulb'},
    moves: 50,
  
    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    dullTurns: 12,
    board: [
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "bulb", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "bulb", "exclamator", "exclamator", "removed", "normal"],
      ["normal", "normal", "bulb", "exclamator", "normal", "removed", "normal", "normal"],
      ["normal", "bulb", "removed", "bulb", "normal", "bulb", "exclamator", "normal"],
      ["bulb", "removed", "bulb", "normal", "bulb", "exclamator", "bulb", "removed"],
      ["normal", "bulb", "normal", "exclamator", "exclamator", "normal", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"]
    ],

  },
  {
    id: 251,
    name: "Level 251",
    objective: { type: 'score',  objGoal: 10000},
    moves: 40,
  
    allowHardLetters: false,
    locked: false,
    lockTurns: 10,
    dullTurns: 25,
    board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "locked", "locked", "locked", "locked", "locked", "locked", "normal"],
      ["normal", "locked", "dull", "dull", "dull", "dull", "ice", "normal"],
      ["normal", "locked", "dull", "removed", "removed", "dull", "ice", "normal"],
      ["normal", "locked", "dull", "removed", "removed", "dull", "ice", "normal"],
      ["normal", "locked", "dull", "dull", "dull", "dull", "ice", "normal"],
      ["normal", "ice", "ice", "ice", "ice", "ice", "ice", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 252,
    name: "Level 252",
    objective: { type: 'lightsUp',  objGoal: 10, tileType: 'bulb'},
    moves: 45,
  
    allowHardLetters: false,
    locked: false,
    lockTurns: 10,
    dullTurns: 25,
    board: [
      ["bulb", "removed", "removed", "normal", "normal", "removed", "removed", "bulb"],
      ["removed", "bookOpen", "normal", "removed", "removed", "normal", "bookClosed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["bulb", "removed", "normal", "normal", "normal", "normal", "removed", "bulb"],
      ["bulb", "removed", "normal", "normal", "normal", "normal", "removed", "bulb"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "bookClosed", "normal", "removed", "removed", "normal", "bookOpen", "removed"],
      ["bulb", "removed", "removed", "bulb", "bulb", "removed", "removed", "bulb"]
    ],

  },
   {
    id: 253,
    name: "Level 253",
    objective: { type: 'destroy',  objGoal: 6, tileType: 'dull'},
    moves: 30,
  
    allowHardLetters: false,
    locked: false,
    lockTurns: 10,
    dullTurns: 15,
    board: [
      ["normal", "normal", "ice", "removed", "dull", "ice", "normal", "normal"],
      ["removed", "normal", "ice", "removed", "ice", "ice", "normal", "normal"],
      ["normal", "normal", "ice", "removed", "dull", "ice", "normal", "normal"],
      ["normal", "normal", "ice", "dull", "ice", "ice", "normal", "normal"],
      ["normal", "normal", "ice", "ice", "dull", "ice", "normal", "normal"],
      ["normal", "normal", "ice", "dull", "removed", "ice", "normal", "normal"],
      ["normal", "normal", "ice", "ice", "removed", "ice", "normal", "removed"],
      ["normal", "normal", "ice", "dull", "removed", "ice", "normal", "normal"]
    ],

  },
  {
    id: 254,
    name: "Level 254",
    objective: { type: 'destroy',  objGoal: 18, tileType: 'warped'},
    moves: 30,
  
    allowHardLetters: false,
    locked: false,
    lockTurns: 11,
    warpTurns: 25,
    board: [
      ["removed", "removed", "normal", "removed", "warped", "warped", "removed", "removed"],
      ["removed", "removed", "normal", "removed", "warped", "warped", "removed", "removed"],
      ["warped", "warped", "locked", "normal", "normal", "normal", "ice", "warped"],
      ["warped", "warped", "normal", "locked", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "locked", "normal", "warped", "warped"],
      ["warped", "ice", "normal", "normal", "normal", "locked", "warped", "warped"],
      ["removed", "removed", "warped", "warped", "removed", "normal", "removed", "removed"],
      ["removed", "removed", "warped", "warped", "removed", "normal", "removed", "removed"]
    ],

  },
  {
    id: 255,
    name: "Level 255",
    objective: { type: 'score',  objGoal: 7000},
    moves: 60,
    difficulty: 'Hard Level',
    allowHardLetters: false,
    locked: false,
    cursedTurns: 45,
    warpTurns: 25,
    board: [
      ["removed", "cursed", "bulb", "removed", "removed", "bulb", "cursed", "removed"],
      ["removed", "bulb", "cursed", "removed", "removed", "cursed", "bulb", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["normal", "normal", "normal", "infected", "infected", "normal", "normal", "normal"],
      ["cursed", "normal", "normal", "infected", "infected", "normal", "normal", "cursed"],
      ["normal", "cursed", "cursed", "normal", "normal", "cursed", "cursed", "normal"],
      ["removed", "removed", "bulb", "cursed", "cursed", "bulb", "removed", "removed"],
      ["removed", "removed", "removed", "bulb", "bulb", "removed", "removed", "removed"]
    ],

  },
  {
    id: 256,
    name: "Level 256",
    objective: { type: 'score',  objGoal: 14000},
    moves: 60,

    allowHardLetters: false,
    locked: false,
    lockTurns: 14,
    warpTurns: 25,
    board: [
      ["mystery", "removed", "removed", "locked", "normal", "removed", "removed", "normal"],
      ["mystery", "removed", "removed", "normal", "locked", "removed", "removed", "normal"],
      ["mystery", "mystery", "mystery", "locked", "normal", "removed", "removed", "normal"],
      ["mystery", "mystery", "mystery", "normal", "locked", "removed", "removed", "normal"],
      ["normal", "removed", "removed", "locked", "normal", "mystery", "mystery", "mystery"],
      ["normal", "removed", "removed", "normal", "locked", "mystery", "mystery", "mystery"],
      ["normal", "removed", "removed", "locked", "normal", "removed", "removed", "mystery"],
      ["normal", "removed", "removed", "normal", "locked", "removed", "removed", "mystery"]
    ],

  },
  {
    id: 257,
    name: "Level 257",
    objective: { type: 'lightsUp',  objGoal: 10, tileType: 'bulb'},
    moves: 35,

    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    dullTurns: 25,
    board: [
      ["dull", "bulb", "removed", "removed", "normal", "removed", "dull", "bulb"],
      ["bulb", "bulb", "ice", "normal", "normal", "removed", "dull", "dull"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "locked", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "locked", "locked", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "locked", "locked", "normal"],
      ["removed", "ice", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["bulb", "bulb", "removed", "normal", "normal", "ice", "bulb", "bulb"],
      ["dull", "bulb", "removed", "normal", "removed", "removed", "bulb", "dull"]
    ],

  },
  {
    id: 258,
    name: "Level 258",
    objective: { type: 'score',  objGoal: 3000},
    moves: 35,
    difficulty: 'demon',
    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    cursedTurns: 20,
    board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "mystery", "mystery", "removed", "removed", "cursed", "removed"],
      ["removed", "cursed", "exclamator", "normal", "removed", "removed", "exclamator", "removed"],
      ["removed", "exclamator", "cursed", "normal", "cursed", "exclamator", "cursed", "removed"],
      ["removed", "cursed", "exclamator", "cursed", "normal", "cursed", "exclamator", "removed"],
      ["removed", "exclamator", "removed", "removed", "normal", "exclamator", "cursed", "removed"],
      ["removed", "cursed", "removed", "removed", "mystery", "mystery", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]
    ],

  },
  {
    id: 259,
    name: "Level 259",
    objective: { type: 'score',  objGoal: 8000},
    moves: 35,

    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    cursedTurns: 50,
    board: [
      ["removed", "cursed", "cursed", "cursed", "cursed", "cursed", "cursed", "removed"],
      ["removed", "cursed", "cursed", "cursed", "cursed", "cursed", "cursed", "removed"],
      ["removed", "cursed", "cursed", "cursed", "cursed", "cursed", "cursed", "removed"],
      ["removed", "cursed", "removed", "cursed", "removed", "cursed", "removed", "removed"],
      ["removed", "removed", "normal", "removed", "normal", "removed", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"]
    ],
    groundLayout: [
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      ['none', 'none', 'cleanse', 'none', 'cleanse', 'none', 'none', 'none'],
      ['none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none'],
      ['none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none'],
      ['none', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'cleanse', 'none'],
    ],
  },
  {
    id: 260,
    name: "Level 260",
    objective: { type: 'collectVelvet',  objGoal: 4, tileType: 'velvet'},
    moves: 40,

    allowHardLetters: true,
    locked: false,
    lockTurns: 9,
    cursedTurns: 20,
    board: [
      ["velvet", "bookClosed", "removed", "removed", "removed", "removed", "bookClosed", "velvet"],
      ["bookClosed", "bookOpen", "bookClosed", "normal", "removed", "bookClosed", "bookOpen", "bookClosed"],
      ["removed", "normal", "bookOpen", "bookClosed", "bookClosed", "bookOpen", "removed", "removed"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "bookOpen", "bookClosed", "bookClosed", "normal", "bookOpen", "removed"],
      ["bookClosed", "bookOpen", "bookClosed", "removed", "normal", "bookClosed", "bookOpen", "bookClosed"],
      ["velvet", "bookClosed", "removed", "removed", "removed", "removed", "bookClosed", "velvet"]
    ],

  },
   {
    id: 261,
    name: "Level 261",
    objective: { type: 'destroy',  objGoal: 15, tileType: 'bone'},
    moves: 45,
     
    allowHardLetters: false,
    locked: false,
    dullTurns: 20,
    boneTurns: 3,
    cursedTurns: 20,
    board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "bone", "bone", "bone", "normal", "normal", "normal", "normal"],
      ["normal", "bone", "dull", "bone", "bone", "bone", "normal", "normal"],
      ["removed", "bone", "bone", "bone", "dull", "bone", "normal", "removed"],
      ["removed", "normal", "bone", "dull", "bone", "bone", "bone", "removed"],
      ["normal", "normal", "bone", "bone", "bone", "dull", "bone", "normal"],
      ["normal", "normal", "normal", "normal", "bone", "bone", "bone", "normal"],
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"]    ],
      tutorialTileType: 'Ethereal Tiles',
      tutorialMessage: "Ethereal tiles starts dead for a certain amount of turns, When the dead tile ran out of turns, it becomes Ethereal and usable for a certain amount of turns, When used, the regular tile next to it gets undead, Also if not used till turn runs out, it gets dead again!",
      tutorial: {}
  },
   {
    id: 262,
    name: "Level 262",
    objective: { type: 'score',  objGoal: 25000},
    moves: 50,
       
    allowHardLetters: false,
    locked: false,
    boneTurns: 8,
    cursedTurns: 20,
    board: [
      ["removed", "removed", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "bone", "normal", "bone", "normal", "normal", "normal"],
      ["ice", "bone", "normal", "bone", "normal", "bone", "normal", "normal"],
      ["ice", "ice", "bone", "removed", "removed", "normal", "bone", "normal"],
      ["ice", "bone", "normal", "removed", "removed", "bone", "normal", "normal"],
      ["ice", "ice", "bone", "normal", "bone", "normal", "bone", "normal"],
      ["ice", "ice", "ice", "bone", "ice", "bone", "removed", "removed"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "removed", "removed"]   ],

  },
  {
    id: 263,
    name: "Level 263",
    objective: { type: 'destroy',  objGoal: 3, tileType: 'flippers'},
    moves: 35,

    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    cursedTurns: 20,
    board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["bone", "bone", "removed", "normal", "normal", "removed", "normal", "normal"],
      ["bone", "bookOpen", "removed", "bone", "bone", "removed", "normal", "normal"],
      ["removed", "removed", "removed", "bone", "bookClosed", "removed", "bone", "bone"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "bone", "bookOpen"]
    ],

  },
   {
   id: 264,
    name: "Level 264",
    objective: { type: 'lightsUp',  objGoal: 3, tileType: 'bulb'},
    moves: 30,

    allowHardLetters: false,
    locked: false,
    lockTurns: 9,
    cursedTurns: 20,
    board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "removed", "normal", "normal", "normal", "removed", "normal"],
      ["removed", "normal", "locked", "removed", "normal", "removed", "locked", "normal"],
      ["removed", "normal", "ice", "bulb", "normal", "bulb", "ice", "normal"],
      ["removed", "normal", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["removed", "normal", "normal", "locked", "bulb", "ice", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "removed", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
    ],

  },
  {
    id: 265,
     name: "Level 265",
     objective: { type: 'destroy',  objGoal: 8, tileType: 'warped'},
     moves: 48,
 
     allowHardLetters: false,
     locked: false,
     boneTurns: 7,
     warpTurns: 30,
     board: [
      ["warped", "bone", "warped", "removed", "warped", "removed", "warped", "bone"],
      ["bone", "removed", "normal", "removed", "normal", "removed", "bone", "normal"],
      ["normal", "removed", "normal", "removed", "normal", "bone", "normal", "bone"],
      ["bone", "removed", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "removed", "bone"],
      ["bone", "normal", "bone", "normal", "removed", "normal", "removed", "normal"],
      ["normal", "bone", "removed", "normal", "removed", "normal", "removed", "bone"],
      ["bone", "warped", "removed", "warped", "removed", "warped", "bone", "warped"]
     ],
 
   },
   {
    id: 266,
     name: "Level 266",
     objective: { type: 'score',  objGoal: 5040},
     moves: 25,
 
     allowHardLetters: false,
     locked: false,
     boneTurns: 7,
     warpTurns: 30,
     board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "normal", "removed", "normal", "normal", "removed", "normal"],
      ["normal", "normal", "infected", "infected", "infected", "infected", "normal", "normal"],
      ["normal", "normal", "infected", "removed", "removed", "infected", "removed", "normal"],
      ["normal", "removed", "infected", "removed", "removed", "infected", "normal", "normal"],
      ["normal", "normal", "infected", "infected", "infected", "infected", "normal", "normal"],
      ["normal", "removed", "normal", "normal", "removed", "normal", "removed", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
     ],
 
   },
   {
    id: 267,
     name: "Level 267",
     objective: { type: 'score',  objGoal: 50000},
     moves: 60,
     difficulty: "Hard Level",
     allowHardLetters: false,
     locked: false,
     boneTurns: 6,
     warpTurns: 15,
     dullTurns: 40,
     cursedTurns: 40 ,
     board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "bone", "bone", "bone", "bone", "bone", "bone", "normal"],
      ["normal", "bone", "dull", "dull", "dull", "dull", "bone", "normal"],
      ["normal", "bone", "bone", "warped", "cursed", "bone", "bone", "normal"],
      ["normal", "normal", "bone", "cursed", "warped", "bone", "normal", "normal"],
      ["normal", "normal", "bone", "warped", "cursed", "bone", "normal", "normal"],
      ["normal", "normal", "bone", "bone", "bone", "bone", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
     ],
 
   },
   {
    id: 268,
     name: "Level 268",
     objective: { type: 'destroy',  objGoal: 50, tileType: 'bone'},
     moves: 55,
 
     allowHardLetters: false,
     locked: false,
     boneTurns: 2,
     boneRipeTurns: 2,
     warpTurns: 15,
     dullTurns: 40,
     cursedTurns: 40 ,
     board: [
      ["bone", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["bone", "normal", "bone", "bone", "bone", "normal", "bone", "bone"],
      ["bone", "normal", "bone", "mystery", "bone", "normal", "bone", "mystery"],
      ["bone", "normal", "bone", "normal", "bone", "normal", "bone", "normal"],
      ["bone", "normal", "bone", "normal", "bone", "normal", "bone", "normal"],
      ["bone", "mystery", "bone", "normal", "bone", "mystery", "bone", "normal"],
      ["bone", "normal", "bone", "normal", "bone", "bone", "bone", "normal"],
      ["bone", "bone", "bone", "normal", "normal", "normal", "normal", "normal"]
     ],
 
   },
   {
    id: 269,
     name: "Level 269",
     objective: { type: 'lightsUp',  objGoal: 4, tileType: 'bulb'},
     moves: 40,
 
     allowHardLetters: false,
     locked: false,
     boneTurns: 2,
     boneRipeTurns: 2,
     warpTurns: 15,
     dullTurns: 40,
     cursedTurns: 40 ,
     board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "exclamator", "normal", "removed", "removed", "normal", "exclamator", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "removed", "normal", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "removed", "exclamator", "exclamator", "removed", "removed", "removed"],
      ["normal", "exclamator", "bulb", "bone", "bone", "bulb", "exclamator", "normal"],
      ["normal", "exclamator", "bookClosed", "bone", "bone", "bookClosed", "exclamator", "normal"],
      ["normal", "exclamator", "removed", "bulb", "bulb", "removed", "exclamator", "normal"]
     ],
 
   },
   {
    id: 270,
     name: "Level 270",
     objective: { type: 'destroy',  objGoal:25, tileType: 'dull'},
     moves: 30,
     difficulty: 'Hard Level',
     allowHardLetters: false,
     locked: false,
     boneTurns: 2,
     boneRipeTurns: 2,
     warpTurns: 15,
     dullTurns: 40,
     cursedTurns: 40 ,
     board: [
      ["fire", "removed", "fire", "removed", "removed", "fire", "removed", "fire"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"],
      ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"],
      ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"],
      ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"]
     ],
 
   },
   {
    id: 271,
     name: "Level 271",
     objective: { type: 'words',  objGoal: 10, minLength: 4},
     moves: 45,
   
     allowHardLetters: false,
     locked: false,
     boneTurns: 2,
     boneRipeTurns: 2,
     warpTurns: 15,
     dullTurns: 40,
     cursedTurns: 40 ,
     board: [
      ["removed", "normal", "mystery", "mystery", "mystery", "mystery", "mystery", "removed"],
      ["removed", "normal", "normal", "infected", "infected", "normal", "normal", "removed"],
      ["mystery", "normal", "mystery", "mystery", "mystery", "mystery", "normal", "mystery"],
      ["mystery", "infected", "mystery", "mystery", "mystery", "mystery", "infected", "mystery"],
      ["mystery", "infected", "mystery", "mystery", "mystery", "mystery", "infected", "mystery"],
      ["mystery", "normal", "mystery", "mystery", "mystery", "mystery", "normal", "mystery"],
      ["removed", "normal", "normal", "infected", "infected", "normal", "normal", "removed"],
      ["removed", "normal", "mystery", "mystery", "mystery", "mystery", "mystery", "removed"]
     ],
 
   },
   {
    id: 272,
     name: "Level 272",
     objective: { type: 'lightsUp',  objGoal: 4,tileType: 'bulb'},
     moves: 30,
   
     allowHardLetters: false,
     locked: false,
     boneTurns: 2,
     boneRipeTurns: 2,
     warpTurns: 15,
     lockTurns: 8,
     cursedTurns: 40 ,
     board: [
      ["normal", "normal", "normal", "removed", "removed", "removed", "ice", "ice"],
      ["normal", "bulb", "locked", "normal", "removed", "ice", "bulb", "ice"],
      ["removed", "locked", "locked", "normal", "ice", "ice", "ice", "ice"],
      ["removed", "removed", "normal", "locked", "normal", "ice", "normal", "removed"],
      ["removed", "normal", "ice", "normal", "locked", "normal", "removed", "removed"],
      ["ice", "ice", "ice", "ice", "ice", "locked", "locked", "removed"],
      ["ice", "bulb", "ice", "removed", "normal", "locked", "bulb", "normal"],
      ["ice", "ice", "removed", "removed", "removed", "normal", "normal", "normal"]
     ],
 
   },
     {
    id: 273,
     name: "Level 273",
     objective: { type: 'destroy',  objGoal: 8,tileType: 'exclamator'},
     moves: 30,
   
     allowHardLetters: true,
     locked: false,
     boneTurns: 2,
     boneRipeTurns: 2,
     warpTurns: 15,
     lockTurns: 8,
     cursedTurns: 40 ,
     board: [
      ["exclamator", "normal", "exclamator", "normal", "exclamator", "normal", "exclamator", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "exclamator", "normal", "exclamator", "normal", "exclamator", "normal", "exclamator"]
     ],
 
   },
   {
    id: 274,
     name: "Level 274",
     objective: { type: 'lightsUp',  objGoal: 10,tileType: 'bulb'},
     moves: 50,
   
     allowHardLetters: false,
     locked: false,
     boneTurns: 7,
     boneRipeTurns: 4,
     warpTurns: 15,
     lockTurns: 8,
     cursedTurns: 40 ,
     board: [
      ["bulb", "removed", "removed", "removed", "ice", "bone", "bulb", "removed"],
      ["normal", "bulb", "removed", "ice", "bone", "bulb", "removed", "normal"],
      ["normal", "normal", "bulb", "ice", "ice", "removed", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "removed", "bone", "bone", "bulb", "normal", "normal"],
      ["normal", "removed", "bulb", "bone", "bone", "bone", "bulb", "normal"],
      ["removed", "bulb", "bone", "bone", "removed", "removed", "removed", "bulb"]

     ],
 
   },
   
   {
    id: 275,
     name: "Level 275",
     objective: { type: 'lightsUp',  objGoal: 2,tileType: 'bulb'},
     moves: 50,
   
     allowHardLetters: true,
     locked: true,
     boneTurns: 7,
     boneRipeTurns: 4,
     warpTurns: 15,
     lockTurns: 10,
     cursedTurns: 40 ,
     board: [
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["removed", "ice", "locked", "locked", "normal", "normal", "normal", "removed"],
        ["removed", "locked", "bulb", "locked", "normal", "removed", "removed", "removed"],
        ["removed", "locked", "locked", "ice", "normal", "removed", "removed", "removed"],
        ["removed", "removed", "removed", "normal", "ice", "locked", "locked",  "removed"],
        ["removed", "removed", "removed","normal", "locked", "bulb", "locked",  "removed"],
        ["removed", "normal", "normal","normal", "locked", "locked", "ice",  "removed"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]
     ],
 
   },
   {
    id: 276,
     name: "Level 276",
     objective: { type: 'defrost',  objGoal: 3,tileType: 'ice'},
     moves: 55,
   
     allowHardLetters: true,
     locked: true,
     boneTurns: 10,
     boneRipeTurns: 5,
     warpTurns: 15,
     dullTurns: 10,
     cursedTurns: 40 ,
     board: [
      ["removed", "removed", "dull", "warped", "dull", "removed", "removed", "removed"],
      ["removed", "dull", "dull", "warped", "dull", "dull", "removed", "removed"],
      ["removed", "dull", "warped", "warped", "warped", "dull", "removed", "removed"],
      ["removed", "bone", "bone", "mystery", "bone", "bone", "removed", "removed"],
      ["removed", "ice", "bone", "bone", "bone", "ice", "removed", "removed"],
      ["removed", "removed", "removed", "bone", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "bone", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "ice", "removed", "removed", "removed", "removed"]

     ],
 
   },
   {
    id: 277,
     name: "Level 277",
     objective: { type: 'destroy',  objGoal: 33,tileType: 'dull'},
     moves: 40,
   
     allowHardLetters: false,
     locked: true,
     boneTurns: 10,
     boneRipeTurns: 5,
     warpTurns: 15,
     dullTurns: 45,
     cursedTurns: 40 ,
     board: [
      ["dull", "dull", "dull", "dull", "dull", "dull", "dull", "dull"],
      ["dull", "removed", "removed", "normal", "normal", "removed", "removed", "dull"],
      ["dull", "removed", "dull", "normal", "normal", "dull", "removed", "dull"],
      ["normal", "normal", "dull", "normal", "normal", "dull", "normal", "normal"],
      ["removed", "normal", "dull", "removed", "removed", "dull", "normal", "removed"],
      ["dull", "normal", "dull", "removed", "removed", "dull", "normal", "dull"],
      ["dull", "removed", "dull", "normal", "normal", "dull", "removed", "dull"],
      ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"]

     ],
 
   },
   {
    id: 278,
     name: "Level 278",
     objective: { type: 'lightsUp',  objGoal: 6,tileType: 'bulb'},
     moves: 30,
     difficulty: 'demon',
     allowHardLetters: false,
     locked: true,
     boneTurns: 10,
     boneRipeTurns: 5,
     lockTurns: 13,
     dullTurns: 45,
     cursedTurns: 40 ,
     board: [
      ["removed", "normal", "removed", "removed", "removed", "removed", "normal", "removed"],
      ["removed", "removed", "normal", "removed", "removed", "normal", "removed", "removed"],
      ["removed", "bulb", "locked", "normal", "normal", "locked", "bulb", "removed"],
      ["removed", "normal", "removed", "normal", "normal", "removed", "normal", "removed"],
      ["normal", "normal", "exclamator", "exclamator", "exclamator", "exclamator", "normal", "normal"],
      ["ice", "removed", "normal", "normal", "normal", "normal", "removed", "ice"],
      ["bulb", "removed", "normal", "removed", "removed", "normal", "removed", "bulb"],
      ["removed", "removed", "removed", "bulb", "bulb", "removed", "removed", "removed"]

     ],
 
   },
   {
    id: 279,
     name: "Level 279",
     objective: { type: 'destroy',  objGoal: 5,tileType: 'dull'},
     moves: 28,
 
     allowHardLetters: false,
     locked: true,
     boneTurns: 9,
     boneRipeTurns: 5,
     lockTurns: 24,
     dullTurns: 15,
     cursedTurns: 40 ,
     board: [
      ["fire", "removed", "normal", "normal", "normal", "normal", "removed", "fire"],
      ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
      ["normal", "removed", "normal", "removed", "removed", "normal", "removed", "normal"],
      ["normal", "removed", "normal", "removed", "removed", "normal", "removed", "normal"],
      ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
      ["normal", "removed", "dull", "mystery", "mystery", "dull", "removed", "normal"],
      ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
      ["mystery", "mystery", "mystery", "dull", "dull", "mystery", "mystery", "mystery"]
     ],
 
   },
   {
    id: 280,
     name: "Level 280",
     objective: { type: 'collectVelvet',  objGoal: 6,tileType: 'velvet'},
     moves: 20,
 
     allowHardLetters: false,
     locked: true,
     boneTurns: 8,
     boneRipeTurns: 5,
     lockTurns: 24,
     dullTurns: 15,
     cursedTurns: 40 ,
     board: [
      ["normal", "normal", "normal", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "velvet", "bone", "bone", "bone", "bone", "velvet", "normal"],
      ["removed", "bone", "normal", "removed", "removed", "normal", "bone", "normal"],
      ["removed", "bone", "removed", "velvet", "velvet", "removed", "bone", "removed"],
      ["removed", "bone", "removed", "velvet", "velvet", "removed", "bone", "removed"],
      ["normal", "bone", "normal", "removed", "removed", "normal", "bone", "removed"],
      ["normal", "velvet", "bone", "bone", "bone", "bone", "velvet", "normal"],
      ["normal", "normal", "removed", "removed", "removed", "normal", "normal", "normal"]
     ],
 
   },
   {
    id: 281,
     name: "Level 281",
     objective: { type: 'score',  objGoal: 13230},
     moves: 20,
 
     allowHardLetters: false,
     locked: true,
     boneTurns: 8,
     boneRipeTurns: 5,
     lockTurns: 24,
     dullTurns: 15,
     boulderHP: 1,
     cursedTurns: 40 ,
     board: [
      ["removed", "removed", "normal", "removed", "removed", "normal", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["boulder", "boulder", "normal", "normal", "normal", "normal", "normal", "boulder"],
      ["boulder", "boulder", "normal", "normal", "normal", "normal", "boulder", "boulder"],
      ["boulder", "boulder", "boulder", "boulder", "boulder", "boulder", "boulder", "boulder"],
      ["removed", "boulder", "boulder", "mystery", "mystery", "boulder", "boulder", "removed"],
      ["removed", "boulder", "mystery", "mystery", "mystery", "mystery", "boulder", "removed"]
     ],
 
   },
   {
    id: 282,
     name: "Level 282",
     objective: { type: 'lightsUp', tileType: "bulb" ,  objGoal: 4},
     moves: 40,
 
     allowHardLetters: false,
     locked: true,
     boneTurns: 8,
     boneRipeTurns: 5,
     lockTurns: 24,
     dullTurns: 15,
     boulderHP: 1,
     cursedTurns: 40 ,
     board: [
      ["removed", "removed", "removed", "normal", "removed", "removed", "removed", "removed"],
      ["removed", "normal", "normal", "normal", "boulder", "normal", "removed", "removed"],
      ["removed", "normal", "boulder", "boulder", "boulder", "normal", "removed", "removed"],
      ["normal", "boulder", "boulder", "bulb", "boulder", "normal", "removed", "removed"],
      ["removed", "normal", "boulder", "bulb", "boulder", "boulder", "normal", "removed"],
      ["removed", "normal", "boulder", "boulder", "boulder", "normal", "removed", "removed"],
      ["removed", "normal", "boulder", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "removed", "removed", "removed", "removed"]
     ],
 
   },
   {
    id: 283,
     name: "Level 283",
     objective: { type: 'destroy',  objGoal: 15,tileType: 'bone'},
     moves: 40,
 
     allowHardLetters: false,
     locked: true,
     boneTurns: 5,
     boneRipeTurns: 4,
     lockTurns: 24,
     dullTurns: 15,
     cursedTurns: 40 ,
     board: [
      ["removed", "bone", "bookOpen", "removed", "normal", "normal", "normal", "removed"],
      ["removed", "bookOpen", "bone", "removed", "normal", "normal", "normal", "removed"],
      ["removed", "bone", "bookOpen", "removed", "normal", "normal", "normal", "normal"],
      ["bone", "bookOpen", "bone", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "normal", "normal", "normal"],
      ["bookClosed", "bone", "bookClosed", "bone", "removed", "normal", "normal", "removed"],
      ["removed", "bookClosed", "bone", "bookClosed", "removed", "normal", "normal", "removed"],
      ["removed", "bone", "bookClosed", "bone", "removed", "normal", "normal", "removed"]

     ],
 
   },
   {
    id: 284,
     name: "Level 284",
     objective: { type: 'collectVelvet',  objGoal: 8,tileType: 'velvet'},
     moves: 45,
 
     allowHardLetters: false,
     locked: true,
     boneTurns: 5,
     boneRipeTurns: 4,
     lockTurns: 24,
     dullTurns: 23,
     cursedTurns: 40 ,
     board: [
      ["dull", "normal", "velvet", "normal", "dull", "normal", "velvet", "normal"],
      ["removed", "normal", "removed", "normal", "removed", "normal", "removed", "normal"],
      ["dull", "normal", "velvet", "normal", "dull", "normal", "velvet", "normal"],
      ["removed", "normal", "removed", "normal", "removed", "normal", "removed", "normal"],
      ["dull", "normal", "velvet", "normal", "dull", "normal", "velvet", "normal"],
      ["removed", "normal", "removed", "normal", "removed", "normal", "removed", "normal"],
      ["dull", "normal", "velvet", "normal", "dull", "normal", "velvet", "normal"],
      ["removed", "normal", "removed", "normal", "removed", "normal", "removed", "normal"]

     ],
 
   },
   {
    id: 285,
     name: "Level 285",
     objective: { type: 'defrost',  objGoal: 12,tileType: 'ice'},
     moves: 45,
 
     allowHardLetters: false,
     locked: true,
     boneTurns: 5,
     boneRipeTurns: 4,
     lockTurns: 24,
     dullTurns: 23,
     cursedTurns: 40 ,
     board: [
      ["normal", "normal", "normal", "removed", "removed", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "locked", "ice", "normal", "normal", "normal"],
      ["normal", "mystery", "removed", "ice", "locked", "removed", "mystery", "normal"],
      ["normal", "normal", "removed", "locked", "ice", "removed", "normal", "normal"],
      ["removed", "normal", "normal", "ice", "locked", "normal", "normal", "removed"],
      ["removed", "bone", "bone", "removed", "removed", "bone", "bone", "removed"],
      ["ice", "ice", "bone", "normal", "normal", "bone", "ice", "ice"],
      ["ice", "ice", "bone", "lineBlasterColumn", "lineBlasterColumn", "bone", "ice", "ice"]

     ],
 
   },
   {
    id: 286,
     name: "Level 286",
     objective: { type: 'destroy',  objGoal:  11,tileType: 'dull'},
     moves: 14,
 
     allowHardLetters: false,
     locked: true,
     boneTurns: 5,
     boneRipeTurns: 4,
     lockTurns: 24,
     dullTurns: 23,
     cursedTurns: 40 ,
     board: [
      ["removed", "removed", "removed", "fire", "fire", "removed", "removed", "removed"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["removed", "normal", "dull", "normal", "normal", "dull", "normal", "removed"],
      ["dull", "normal", "normal", "dull", "dull", "normal", "normal", "dull"],
      ["dull", "normal", "normal", "dull", "dull", "normal", "normal", "dull"],
      ["removed", "normal", "dull", "normal", "normal", "dull", "normal", "removed"],
      ["removed", "dull", "normal", "normal", "normal", "normal", "dull", "removed"],
      ["removed", "removed", "removed", "dull", "dull", "removed", "removed", "removed"]

     ],
 
   },
   {
    id: 287,
     name: "Level 287",
     objective: { type: 'score',  objGoal: 100000},
     moves: 50,
      difficulty: 'Hard Level',
     allowHardLetters: false,
     locked: true,
     boneTurns: 2,
     boneRipeTurns: 6,
     lockTurns: 24,
     boulderHP: 1,
     dullTurns: 23,
     cursedTurns: 40 ,
     board: [
      ["mystery", "bone", "mystery", "boulder", "boulder", "mystery", "bone", "mystery"],
      ["mystery", "bone", "mystery", "boulder", "boulder", "mystery", "bone", "mystery"],
      ["mystery", "bone", "mystery", "boulder", "boulder", "mystery", "bone", "mystery"],
      ["mystery", "bone", "mystery", "boulder", "boulder", "mystery", "bone", "mystery"],
      ["mystery", "bone", "mystery", "mystery", "mystery", "mystery", "bone", "mystery"],
      ["mystery", "bone", "bone", "mystery", "mystery", "bone", "bone", "mystery"],
      ["mystery", "bone", "bone", "mystery", "mystery", "bone", "bone", "mystery"],
      ["mystery", "mystery", "mystery", "mystery", "mystery", "mystery", "mystery", "mystery"]

     ],
 
   },
   {
    id: 288,
     name: "Level 288",
     objective: { type: 'collectVelvet' , objGoal: 7, tileType: 'velvet'},
     moves: 30,
      boulderHP: 2,
     allowHardLetters: false,
     locked: true,
     boneTurns: 2,
     boneRipeTurns: 6,
     lockTurns: 24,
    
     dullTurns: 23,
     cursedTurns: 40 ,
     board: [
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["removed", "normal", "normal", "boulder", "boulder", "normal", "normal", "removed"],
      ["normal", "normal", "normal", "boulder", "boulder", "normal", "normal", "normal"],
      ["boulder", "boulder", "boulder", "boulder", "boulder", "boulder", "boulder", "boulder"],
      ["removed", "boulder", "velvet", "velvet", "velvet", "velvet", "boulder", "removed"],
      ["removed", "boulder", "boulder", "boulder", "boulder", "boulder", "boulder", "removed"],
      ["removed", "velvet", "boulder", "velvet", "velvet", "boulder", "velvet", "removed"]


     ],
 
   },
   {
    id: 289,
     name: "Level 289",
     objective: { type: 'destroy' , objGoal: 6, tileType: 'bone'},
     moves: 40,
      boulderHP: 1,
     allowHardLetters: false,
     locked: true,
     boneTurns: 4,
     boneRipeTurns: 5,
     lockTurns: 24,
    
     dullTurns: 23,
     cursedTurns: 40 ,
     board: [
      ["removed", "normal", "removed", "normal", "removed", "normal", "removed", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
      ["ice", "ice", "ice", "ice", "ice", "ice", "ice", "removed"],
      ["boulder", "boulder", "boulder", "boulder", "boulder", "boulder", "boulder", "removed"],
      ["boulder", "removed", "bone", "removed", "bone", "removed", "boulder", "removed"]



     ],
 
   },
   {
    id: 290,
     name: "Level 290",
     objective: { type: 'lightsUp' , objGoal: 2, tileType: 'bulb'},
     moves: 40,
      boulderHP: 2,
     allowHardLetters: false,
     locked: true,
     boneTurns: 4,
     boneRipeTurns: 5,
     lockTurns: 24,
    
     dullTurns: 23,
     cursedTurns: 40 ,
     board: [
      ["boulder", "boulder", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["boulder", "boulder", "boulder", "removed", "removed", "removed", "normal", "normal"],
      ["bulb", "boulder", "boulder", "normal", "removed", "normal", "normal", "normal"],
      ["boulder", "boulder", "boulder", "normal", "normal", "normal", "normal", "normal"],
      ["boulder", "boulder", "boulder", "normal", "normal", "normal", "normal", "normal"],
      ["bulb", "boulder", "boulder", "removed", "normal", "normal", "normal", "normal"],
      ["boulder", "boulder", "removed", "removed", "removed", "normal", "normal", "normal"],
      ["boulder", "removed", "removed", "removed", "removed", "removed", "normal", "normal"]


     ],
 
   },
   {
    id: 291,
     name: "Level 291",
     objective: { type: 'score' , objGoal: 8230},
     moves: 30,
      boulderHP: 2,
     allowHardLetters: false,
     locked: true,
     boneTurns: 3,
     boneRipeTurns: 5,
     cursedTurns: 24,
    
     dullTurns: 23,
     
     board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "boulder002"],
      ["boulder", "boulder", "boulder", "bone", "cursed", "bone", "cursed", "boulder002"],
      ["boulder", "bone", "boulder", "normal", "normal", "normal", "bone", "boulder002"],
      ["boulder", "mystery", "boulder", "normal", "normal", "normal", "cursed", "boulder002"],
      ["boulder", "bone", "normal", "normal", "normal", "boulder002", "bone", "boulder002"],
      ["boulder", "mystery", "normal", "normal", "normal", "boulder002", "cursed", "boulder002"],
      ["boulder", "bone", "mystery", "bone", "mystery", "boulder002", "boulder002", "boulder002"],
      ["boulder", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]


     ],
 
   },
   {
    id: 292,
     name: "Level 292",
     objective: { type: 'words' , objGoal: 5, minLength: 7},
     moves: 50,
      boulderHP: 2,
     allowHardLetters: false,
     locked: true,
     boneTurns: 3,
     boneRipeTurns: 5,
     cursedTurns: 24,
     difficulty: "Hard Level",
     dullTurns: 23,
     
     board: [
      ["removed", "removed", "fire", "removed", "removed", "fire", "removed", "removed"],
      ["removed", "normal", "removed", "removed", "removed", "removed", "normal", "removed"],
      ["removed", "normal", "removed", "removed", "removed", "removed", "normal", "removed"],
      ["removed", "removed", "normal", "removed", "removed", "normal", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]


     ],
 
   },
   {
    id: 293,
     name: "Level 293",
     objective: { type: 'destroy' , objGoal: 16, tileType: 'dull'},
     moves: 30,
      boulderHP: 2,
     allowHardLetters: true,
     locked: true,
     boneTurns: 3,
     boneRipeTurns: 5,
     cursedTurns: 24,
     
     dullTurns: 25,
     lockTurns: 10,
     board: [
     
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "locked", "dull", "locked", "dull", "locked", "dull", "normal"],
      ["normal", "dull", "locked", "dull", "locked", "dull", "locked", "normal"],
      ["normal", "locked", "dull", "locked", "dull", "locked", "dull", "normal"],
      ["normal", "dull", "locked", "dull", "locked", "dull", "locked", "normal"],
      ["normal", "locked", "dull", "locked", "dull", "locked", "dull", "normal"],
      ["normal", "dull", "locked", "dull", "locked", "dull", "locked", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]


     ],
 
   },
   
   {
    id: 294,
     name: "Level 294",
     objective: { type: 'destroy' , objGoal: 5, tileType: 'bone'},
     moves: 40,
      boulderHP: 2,
     allowHardLetters: false,
     locked: true,
     boneTurns: 3,
     boneRipeTurns: 5,
     cursedTurns: 24,
     dullTurns2: 15,
     dullTurns: 25,
     lockTurns: 10,
     board: [
     
      ["normal", "removed", "removed", "bone", "bone", "removed", "removed", "normal"],
      ["normal", "removed", "removed", "boulder", "boulder", "removed", "removed", "normal"],
      ["normal", "removed", "removed", "boulder", "boulder", "removed", "removed", "normal"],
      ["dull", "dull", "normal", "boulder", "boulder", "normal", "dull02", "dull02"],
      ["dull", "dull", "normal", "boulder", "boulder", "normal", "dull02", "dull02"],
      ["dull", "dull", "removed", "removed", "removed", "removed", "dull02", "dull02"],
      ["normal", "dull", "removed", "removed", "removed", "removed", "dull02", "normal"],
      ["normal", "dull", "normal", "removed", "removed", "normal", "dull02", "normal"]


     ],
 
   },
   {
    id: 295,
     name: "Level 295",
     objective: { type: 'score' , objGoal: 9100},
     moves: 40,
      boulderHP: 2,
     allowHardLetters: false,
     locked: true,
     boneTurns: 3,
     boneRipeTurns: 5,
     cursedTurns: 24,
     dullTurns2: 15,
     dullTurns: 25,
     lockTurns: 10,
     board: [
     
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "mystery", "normal", "removed", "normal", "mystery", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "mystery", "normal", "removed", "normal", "mystery", "removed"],
      ["removed", "normal", "mystery", "removed", "removed", "removed", "mystery", "normal"],
      ["removed", "removed", "mystery", "normal", "removed", "normal", "mystery", "removed"],
      ["removed", "removed", "removed", "normal", "normal", "normal", "removed", "removed"],
      ["removed", "removed", "mystery", "normal", "removed", "normal", "mystery", "removed"]


     ],
 
   },
   {
    id: 296,
     name: "Level 296",
     objective: { type: 'destroy' , objGoal: 13, tileType: 'bone'},
     moves: 24,
      boulderHP: 2,
     allowHardLetters: false,
     locked: true,
     boneTurns: 2,
     boneRipeTurns: 5,
     cursedTurns: 24,
     dullTurns2: 15,
     dullTurns: 25,
     lockTurns: 10,
     board: [
     
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "removed", "bone", "bone", "removed", "bone", "removed", "normal"],
      ["normal", "bone", "infected", "infected", "infected", "infected", "bone", "normal"],
      ["normal", "removed", "infected", "infected", "removed", "normal", "bone", "normal"],
      ["normal", "bone", "infected", "removed", "normal", "normal", "removed", "normal"],
      ["normal", "bone", "infected", "normal", "normal", "normal", "bone", "normal"],
      ["normal", "removed", "bone", "removed", "bone", "bone", "removed", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"]

     ],
 
   },
   {
    id: 297,
     name: "Level 297",
     objective: { type: 'destroy' , objGoal: 9, tileType: 'warped'},
     moves: 39,
      boulderHP: 3,
     allowHardLetters: false,
     locked: true,
     boneTurns: 2,
     boneRipeTurns: 5,
     warpTurns: 20,
     dullTurns2: 15,
     dullTurns: 25,
     lockTurns: 10,
     board: [
     
      ["normal", "removed", "boulder", "warped", "warped", "boulder", "removed", "normal"],
      ["normal", "removed", "warped", "warped", "warped", "warped", "removed", "normal"],
      ["normal", "removed", "boulder", "warped", "warped", "boulder", "removed", "normal"],
      ["normal", "removed", "removed", "removed", "removed", "removed", "removed", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["exclamator", "normal", "removed", "removed", "removed", "removed", "exclamator", "exclamator"],
      ["exclamator", "normal", "removed", "removed", "removed", "removed", "warped", "exclamator"],
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"]

     ],
 
   },
   {
    id: 298,
     name: "Level 298",
     objective: { type: 'defrost' , objGoal: 28, tileType: 'ice'},
     moves: 39,
      boulderHP: 3,
     allowHardLetters: false,
     locked: true,
     boneTurns: 2,
     boneRipeTurns: 5,
     warpTurns: 20,
     dullTurns2: 15,
     dullTurns: 25,
     lockTurns: 10,
     board: [
     
      ["removed", "removed", "ice", "normal", "normal", "ice", "removed", "removed"],
      ["removed", "removed", "normal", "ice", "ice", "normal", "removed", "removed"],
      ["ice", "normal", "normal", "ice", "ice", "normal", "normal", "ice"],
      ["normal", "ice", "ice", "normal", "normal", "ice", "ice", "normal"],
      ["normal", "ice", "ice", "normal", "normal", "ice", "ice", "normal"],
      ["ice", "normal", "normal", "ice", "ice", "normal", "normal", "ice"],
      ["removed", "removed", "normal", "ice", "ice", "normal", "removed", "removed"],
      ["removed", "removed", "ice", "normal", "normal", "ice", "removed", "removed"]

     ],
 
   },
   {
    id: 299,
     name: "Level 299",
     objective: { type: 'destroy' , objGoal: 1, tileType: 'dull'},
     moves: 65,
      boulderHP: 3,
     allowHardLetters: false,
     locked: true,
     boneTurns: 2,
     boneRipeTurns: 5,
     warpTurns: 20,
     dullTurns2: 15,
     dullTurns: 55,
     lockTurns: 10,
     board: [
     
      ["normal", "normal", "boulder003", "boulder002", "boulder", "removed", "removed", "removed"],
      ["normal", "normal", "boulder003", "boulder002", "boulder", "removed", "dull", "removed"],
      ["normal", "normal", "boulder003", "boulder002", "boulder", "removed", "removed", "removed"],
      ["normal", "normal", "boulder003", "boulder002", "boulder", "boulder", "boulder", "boulder"],
      ["boulder003", "boulder003", "boulder003", "boulder002", "boulder", "boulder", "boulder", "boulder"],
      ["boulder003", "boulder003", "boulder003", "boulder002", "boulder", "boulder", "boulder", "boulder"],
      ["boulder003", "boulder003", "boulder003", "boulder002", "boulder", "boulder", "boulder", "boulder"],
      ["boulder003", "boulder003", "boulder003", "boulder002", "boulder", "boulder", "boulder", "boulder"]

     ],
 
   },
   {
    id: 300,
     name: "Level 300",
     objective: { type: 'destroy' , objGoal: 20, tileType: 'bone'},
     moves: 40,
     difficulty: 'Hard Level',
      boulderHP: 2,
     allowHardLetters: false,
     locked: true,
     boneTurns: 6,
     boneRipeTurns: 5,
     warpTurns: 20,
     dullTurns2: 15,
     dullTurns: 55,
     lockTurns: 10,
     board: [
      ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "boulder", "removed", "removed", "removed", "removed", "removed"],
      ["removed", "removed", "boulder", "removed", "removed", "fire", "removed", "removed"],
      ["normal", "normal", "boulder", "bone", "bone", "boulder", "normal", "normal"],
      ["normal", "normal", "boulder", "bone", "bone", "boulder", "normal", "normal"],
      ["normal", "normal", "boulder", "bone", "bone", "boulder", "normal", "normal"],
      ["removed", "removed", "boulder", "removed", "removed", "boulder", "removed", "removed"],
      ["removed", "removed", "removed", "removed", "removed", "boulder", "removed", "removed"]
     ],
 
   },
   {
    id: 301,
     name: "Level 301",
     objective: { type: 'score' , objGoal: 5500},
     moves: 40,
      fridgeCharge: 0,
      fridgeChargeMax: 2,
      fridgeHP: 2,
     allowHardLetters: false,
     locked: true,
     boneTurns: 6,
     boneRipeTurns: 5,
     warpTurns: 20,
     dullTurns2: 15,
     dullTurns: 55,
     lockTurns: 10,
     board: [
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "fridge", "fridge", "removed", "normal", "normal"],
      ["normal", "normal", "fridge", "normal", "normal", "fridge", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
      ["normal", "normal", "fridge", "normal", "normal", "fridge", "normal", "normal"],
      ["normal", "normal", "removed", "fridge", "fridge", "removed", "normal", "normal"],
      ["normal", "normal", "removed", "removed", "removed", "removed", "normal", "normal"]

     ],
 
   },
];
// src/data/levelData.ts

export type TileType = "normal" | "locked"| "fire" | "cursed" | "warped" | "removed" | "dull" | "bone" | "bulb" | "ice";

export type Difficulty = "Hard Level" | "demon";

export type GemTiles = "purple"

export type TutorialTypes = "Locked Tiles" | "Fire Tiles" | "Warped Tiles" |"Cursed Tiles" | "Dull Tiles" | "Lightbulbs" | "Frozen Tiles" ;


export type Objective =
  | { type: 'score'; objGoal: number }
  | { type: 'words'; objGoal: number; minLength?: number } 
  |  {type: 'lightsUp'; objGoal: number ; tileType: 'bulb'}
  | {type: 'defrost'; objGoal: number; tileType: 'ice'}
  | { type: 'destroy'; objGoal: number; tileType: 'cursed' | 'fire' | 'warped' | 'dull' | 'bone' | "bulb"};

export type LevelData = {
  id: number;
  name: string;
  gemtiles?: GemTiles;
  difficulty?: Difficulty;
  objective: Objective;
  locked: boolean;
  board: TileType[][];
  layout?: string[][];
  shouldWarpedSpawn?: boolean;
  shouldCursedSpawn?: boolean;
  shouldFireSpawn?: boolean;
  cursedTurns?: number;
  shouldLockSpawn?: boolean;
  lockTurns?: number;
  allowHardLetters?: boolean;
  allowBulbTiles?: boolean;
  warpTurns?: number;
  moves?: number;
  dullTurns?: number;
  shouldDullSpawn?: boolean;
  boneTurns?: number;
  boneRipeTurns?: number;
boneUnripeTurns?: number;
   isLightBulb?: boolean;
isBulbOn?: boolean;
shouldShowTutorial?: boolean;
tutorialTileType?: TutorialTypes;

tutorialTilePosition?: { row: number; col: number };
tutorialMessage?: string;

  tutorial?: {
    title?: string;
    message?: string;
    highlightedTile?: { row: number; col: number }; }
};


export const levels: LevelData[] = [

    {
      id: 1,
      name: "Level 1",
      objective: { type: 'words', objGoal: 5, minLength: 3 },
      moves: 10,
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
     
    },
    {
      id: 2,
      name: "Level 2",
      objective:  { type: "score", objGoal: 300},
      locked: true,
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
      objective: { type: "score", objGoal: 500 },
      locked: true,
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
      objective: { type: "score", objGoal: 500},
      locked: true,
      allowHardLetters:false,
      moves: 40,
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
      objective: { type: "score", objGoal: 1000 },
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
      objective: { type: 'score' , objGoal: 700 },
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
      objective: { type: 'score', objGoal: 1000},
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
      objective: { type: 'score', objGoal: 1300},
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
      objective: {type: 'score', objGoal: 100},
      locked: true,
      moves: 18,
      board: [
         ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["removed", "removed", "dull", "dull", "dull", "dull", "removed", "removed"],
        ["normal", "normal", "dull", "normal", "normal", "dull", "normal", "normal"],
        ["removed", "normal", "dull", "normal", "normal", "dull", "normal", "normal"]
      ],
      lockTurns: 7,
      dullTurns: 10
    },
     {
      id: 10,
      name: "Level 10",
      objective: {type: 'words', objGoal: 1, minLength: 6},
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
      objective: {type: 'destroy', tileType: 'dull', objGoal: 5},
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
      objective: {type: 'destroy', tileType: 'dull', objGoal: 2},
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
      objective: {type: 'destroy', tileType: 'dull', objGoal: 4},
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
      objective: {type: 'destroy', tileType: 'dull', objGoal: 4},
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
      objective: {type: 'destroy', tileType: 'dull', objGoal: 17},
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
      objective: {type: 'words', minLength: 5 , objGoal: 5},
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
      objective: {type: 'destroy', tileType: 'dull' , objGoal: 2},
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
      objective: {type: 'score',  objGoal: 7000},
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
      objective: {type: 'score',  objGoal: 5000},
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
      objective: {type: 'destroy', tileType: 'dull', objGoal: 22},
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
      objective: {type: 'words', minLength: 5, objGoal: 2},
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
      objective: {type: 'score', objGoal: 5400},
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
      objective: {type: 'destroy', tileType: 'dull', objGoal: 10},
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
      objective: {type: 'destroy', tileType: 'dull', objGoal: 15},
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
      objective: {type: 'score', objGoal: 8000},
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
      objective: {type: 'words', minLength: 6, objGoal: 1},
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
      objective: {type: 'words', minLength: 5, objGoal: 5},
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
      objective: {type: 'score', objGoal: 10000},
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
      objective: {type: 'destroy', objGoal: 16, tileType: 'dull'},
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
      objective: {type: 'destroy', objGoal: 2, tileType: 'dull'},
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
      objective: {type: 'destroy', objGoal: 3, tileType: 'dull'},
      locked: true,
      moves:20,
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
      objective: {type: 'score', objGoal: 3500},
      locked: true,
      moves: 38,
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
      objective: {type: 'words', minLength: 6, objGoal: 3},
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
      objective: {type: 'words', minLength: 4, objGoal: 10},
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
      objective: {type: 'score', objGoal: 3000},
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
      objective: {type: 'destroy', tileType: 'dull' , objGoal: 9},
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
      objective: {type: 'score', objGoal: 4000},
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
      objective: { type: 'words', objGoal: 1, minLength: 7 },
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
      objective: { type: 'score' , objGoal: 6000 },
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
      objective: { type: 'score', objGoal: 6000},
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
      objective: { type: 'destroy', tileType: 'dull', objGoal: 8},
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
      objective: { type: 'score', objGoal: 8000},
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
      objective: { type: 'score', objGoal: 1400},
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
      objective: { type: 'destroy', tileType: 'dull', objGoal: 8},
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
      objective: { type: 'words', minLength: 6, objGoal: 4},
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
      objective: { type: 'destroy', objGoal: 9, tileType: 'dull'},
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
      objective: { type: 'lightsUp' , objGoal: 4, tileType: 'bulb'},
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
      objective: { type: 'lightsUp' , objGoal: 8, tileType: 'bulb'},
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
      objective: { type: 'lightsUp' , objGoal: 4, tileType: 'bulb'},
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
      objective: { type: 'destroy' , objGoal:12, tileType: 'dull'},
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
      objective: { type: 'destroy' , objGoal:10, tileType: 'dull'},
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
      objective: { type: 'lightsUp' , objGoal:10, tileType: 'bulb'},
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
      objective: { type: 'destroy' , objGoal: 3, tileType: 'warped'},
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
      objective: { type: 'destroy' , objGoal: 2, tileType: 'warped'},
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
      objective: { type: 'words' , minLength: 5 ,  objGoal: 6},
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
      objective: { type: 'score' , objGoal: 9000},
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
      objective: { type: 'defrost' , objGoal: 10  , tileType: 'ice'},
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
      objective: { type: 'defrost' , objGoal: 24  , tileType: 'ice'},
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
      objective: { type: 'destroy' , objGoal: 2  , tileType: 'dull'},
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
      objective: { type: 'defrost' , objGoal: 10  , tileType: 'ice'},
      moves: 38,
     warpTurns: 8,
      allowHardLetters: false, 
      dullTurns: 16,
      lockTurns: 5,
      locked: false,
      board: [
        ["removed", "removed", "normal", "removed", "normal", "ice", "removed", "removed"],
        ["removed", "dull", "dull", "normal", "normal", "ice", "normal", "removed"],
        ["normal", "dull", "dull", "normal", "normal", "ice", "ice", "ice"],
        ["removed", "normal", "normal", "locked", "locked", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "locked", "locked", "normal", "normal", "removed"],
        ["ice", "ice", "ice", "normal", "normal",  "dull", "dull", "normal", ],
        ["removed", "normal", "ice", "normal", "normal", "dull", "dull", "removed"],
        ["removed", "removed", "ice", "removed", "normal", "normal", "removed", "removed"]
      ],
       
    },
        {
      id: 65,
      name: "Level 65",
      objective: { type: 'destroy' , objGoal: 24  , tileType: 'dull'},
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
        ["dull", "dull", "dull", "removed", "normal",  "dull", "dull", "dull"],
        ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"],
        ["dull", "dull", "dull", "removed", "removed", "dull", "dull", "dull"]
      ],
       
    },
     {
      id: 66,
      name: "Level 66",
      objective: { type: 'score' , objGoal: 13000},
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
        ["removed", "ice", "dull", "ice", "locked",  "normal", "normal", "normal"],
        ["ice", "ice", "removed", "removed", "removed", "removed", "normal", "normal"],
        ["removed", "removed", "removed", "removed", "removed", "removed", "normal", "normal"]
      ],
       
    },
     {
      id: 67,
      name: "Level 67",
      objective: { type: 'destroy' , objGoal: 4,  tileType: 'dull'},
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
        ["normal", "normal", "normal", "normal", "ice",  "ice", "ice", "ice"],
        ["normal", "normal", "normal", "ice", "ice", "ice", "ice", "ice"],
        ["removed", "removed", "removed", "removed", "dull", "dull", "removed", "removed"]
      ],
       
    },

     {
      id: 68,
      name: "Level 68",
      objective: { type: 'lightsUp' , objGoal: 12,  tileType: 'bulb'},
      moves: 45,
     warpTurns: 8,
     difficulty: 'Hard Level'
,      allowHardLetters: false, 
      dullTurns: 10,
      lockTurns: 13,
      locked: false,
      
      board: [
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["removed", "bulb", "bulb", "bulb", "bulb", "bulb", "bulb", "removed"],
        ["normal", "removed", "normal", "normal", "normal", "normal", "removed", "normal"],
        ["normal", "normal", "removed", "normal", "normal", "removed", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "normal",  "normal", "normal", "normal"],
        ["normal", "removed", "bulb", "bulb", "bulb", "bulb", "removed", "normal"],
        ["bulb", "normal", "removed", "normal", "normal", "removed", "normal", "bulb"]
      ],
       
    },
     {
      id: 69,
      name: "Level 69",
      objective: { type: 'lightsUp' , objGoal: 8,  tileType: 'bulb'},
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
        ["normal", "ice", "bulb", "ice", "ice",  "bulb", "ice", "normal"],
        ["normal", "dull", "ice", "bulb", "bulb", "ice", "dull", "normal"],
        ["dull", "normal", "normal", "ice", "ice", "normal", "normal", "dull"]
      ],
       
    },
     {
      id: 70,
      name: "Level 70",
      objective: { type: 'words', objGoal: 15,  minLength: 4},
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
      objective: { type: 'score', objGoal: 3400},
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
      objective: { type: 'score', objGoal: 6000},
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
      objective: { type: 'score', objGoal: 4000},
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
        ["normal", "cursed", "dull", "normal","normal", "cursed", "dull",  "normal"],
        ["normal", "cursed", "dull", "normal","normal" , "cursed", "dull",  "normal"],
        ["dull", "normal", "dull", "normal","normal", "cursed", "normal",  "cursed"],
        ["cursed", "normal", "dull", "normal","normal", "cursed", "normal",  "dull"],
        ["normal", "cursed", "dull", "normal","normal", "cursed", "dull",  "normal"],
        ["normal", "cursed", "dull", "normal","normal", "cursed", "dull",  "normal"],
        ["normal", "normal", "normal", "normal","normal", "normal", "normal",  "normal"]
      ],
    },
      {
      id: 74,
      name: "Level 74",
      objective: { type: 'destroy',  objGoal: 4, tileType: 'dull'},
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
        ["ice", "removed", "ice", "removed","ice", "removed", "ice",  "ice"],
        ["ice", "removed", "ice", "removed","ice" , "ice", "ice",  "ice"],
        ["ice", "removed", "ice", "ice","ice", "ice", "ice",  "ice"],
        ["ice", "ice", "ice", "ice","ice", "ice", "ice",  "ice"],
        ["normal", "normal", "normal", "normal","normal", "normal", "normal",  "normal"],
        ["normal", "normal", "normal", "normal","normal", "normal", "normal",  "normal"],
        ["normal", "normal", "normal", "normal","normal", "normal", "normal",  "normal"]
      ],
    },
    {
      id: 75,
      name: "Level 75",
      objective: { type: 'words',  objGoal: 4,  minLength: 5 },
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
        ["cursed", "cursed", "ice", "normal","normal", "normal", "normal",  "normal"],
        ["cursed", "cursed", "ice", "normal","normal" , "normal", "normal",  "normal"],
        ["cursed", "ice", "ice", "normal","normal", "normal", "ice",  "ice"],
        ["ice", "ice", "normal", "normal","normal", "ice", "ice",  "cursed"],
        ["normal", "normal", "normal", "normal","normal", "ice", "cursed",  "cursed"],
        ["normal", "normal", "normal", "normal","normal", "ice", "cursed",  "cursed"],
        ["normal", "removed", "removed", "removed","removed", "removed", "cursed",  "cursed"]
      ],
    },
     {
      id: 76,
      name: "Level 76",
      objective: { type: 'destroy', objGoal: 3, tileType:'warped'},
      moves: 45,
      allowHardLetters: false,
      locked: false,
      allowBulbTiles: true,
      lockTurns: 15,
      dullTurns: 8,
      cursedTurns: 9,
      warpTurns: 7,
      board: [
        ["removed", "removed", "removed", "normal", "normal", "removed", "removed", "removed"],
        ["locked", "locked", "locked", "normal","normal", "removed", "normal",  "normal"],
        ["locked", "warped", "locked", "normal","normal" , "normal", "normal",  "normal"],
        ["locked", "locked", "locked", "ice","ice", "ice", "cursed",  "cursed"],
        ["locked", "locked", "locked", "ice","ice", "ice", "cursed",  "cursed"],
        ["locked", "locked", "locked", "ice","ice", "ice", "cursed",  "cursed"],
        ["removed", "locked", "locked", "ice","ice", "warped", "warped",  "removed"],
        ["removed", "removed", "removed", "ice","ice", "removed", "removed",  "removed"]
      ],
    },
    {
      id: 77,
      name: "Level 77",
      objective: { type: 'lightsUp', objGoal: 6, tileType:'bulb'},
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
        ["normal", "removed", "normal", "removed","normal", "removed", "removed",  "removed"],
        ["normal", "normal", "normal", "normal","normal" , "normal", "normal",  "normal"],
        ["normal", "normal", "normal", "normal","normal", "normal", "normal",  "normal"],
        ["normal", "normal", "normal", "normal","normal", "normal", "normal",  "normal"],
        ["normal", "normal", "normal", "normal","normal", "normal", "normal",  "normal"],
        ["removed", "removed", "removed", "normal","removed", "normal", "removed",  "normal"],
        ["removed", "removed", "removed", "bulb","removed", "bulb", "removed",  "bulb"]
      ],
    },
     {
      id: 78,
      name: "Level 78",
      objective: { type: 'destroy', objGoal: 30, tileType:'dull'},
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
        ["normal", "removed", "removed", "normal","normal", "removed", "removed",  "normal"],
        ["normal", "normal", "removed", "dull","dull" , "removed", "normal",  "normal"],
        ["normal", "normal", "dull", "normal","normal", "dull", "normal",  "normal"],
        ["normal", "dull", "dull", "dull","dull", "dull", "dull",  "normal"],
        ["normal", "removed", "dull", "dull","dull", "dull", "removed",  "normal"],
        ["removed", "removed", "dull", "dull","dull", "dull", "removed",  "removed"],
        ["dull", "dull", "dull", "dull","dull", "dull", "dull",  "dull"]
      ],
    },
     {
      id: 79,
      name: "Level 79",
      objective: { type: 'score', objGoal: 10000},
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
      objective: { type: 'defrost', objGoal: 23, tileType: 'ice'},
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
      objective: { type: 'words', objGoal: 10, minLength: 4},
      
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
      objective: { type: 'destroy', objGoal: 12, tileType: 'dull'},
      
      moves: 50,
      allowHardLetters: false,
      locked: false,
      lockTurns: 13,
      dullTurns: 5,
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
      objective: { type: 'score', objGoal: 8000},
      
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
      objective: { type: 'lightsUp', objGoal: 6, tileType: 'bulb'},
      
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
  ];


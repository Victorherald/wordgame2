// src/data/levelData.ts

export type TileType = "normal" | "locked"| "fire" | "cursed" | "warped" | "removed" | "dull" | "bone" | "bulb";

export type Objective =
  | { type: 'score'; objGoal: number }
  | { type: 'words'; objGoal: number; minLength?: number } 
  |  {type: 'lightsUp'; objGoal: number ; tileType: 'bulb'}
  | { type: 'destroy'; objGoal: number; tileType: 'cursed' | 'fire' | 'warped' | 'dull' | 'bone' | "bulb"};

export type LevelData = {
  id: number;
  name: string;
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
  shouldBoneSpawn?: boolean;
  boneTurns?: number;
  boneRipeTurns?: number;
boneUnripeTurns?: number;
   isLightBulb?: boolean;
isBulbOn?: boolean
};


export const levels: LevelData[] = [

    {
      id: 1,
      name: "Level 1",
      objective: { type: 'words', objGoal: 5, minLength: 3 },
      moves: 6,
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
      objective: {type: 'words', objGoal: 1, minLength: 8},
      locked: true,
      moves: 18,
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
      dullTurns: 19,
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
      locked: false,
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
  ];


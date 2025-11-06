// src/data/levelData.ts

export type TileType = "normal" | "locked"| "fire" | "cursed" | "warped" | "removed" | "dull" | "bone";

export type Objective =
  | { type: 'score'; objGoal: number }
  | { type: 'words'; objGoal: number; minLength?: number }
  | { type: 'destroy'; objGoal: number; tileType: 'cursed' | 'fire' | 'warped' | 'dull' | 'locked' | 'bone'};

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
  warpTurns?: number;
  moves?: number;
  dullTurns?: number;
  shouldBoneSpawn?: boolean;
  boneTurns?: number;
  boneRipeTurns?: number;
boneUnripeTurns?: number;

};


export const levels: LevelData[] = [

    {
      id: 1,
      name: "Level 1",
      objective: { type: 'words', objGoal: 5, minLength: 4 },
      moves: 5,
      allowHardLetters: false,
      locked: false,
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
      name: "Level 67",
      objective: {type: 'score', objGoal: 7500},
      locked: false,
      moves: 18,
      board: [
           ["removed", "removed", "fire", "fire", "removed", "removed", "removed", "removed"],
        ["locked", "locked", "locked", "normal", "normal", "normal", "normal", "normal"],
        ["locked", "locked", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["locked", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "locked"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "locked", "locked"],
        ["normal", "normal", "normal", "normal", "normal", "locked", "locked", "locked"],
        ["removed", "removed", "removed", "removed", "dull", "dull", "removed", "removed"]
      ],
      lockTurns: 7,
      dullTurns: 10
    }
  ];


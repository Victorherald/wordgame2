// src/data/levelData.ts

export type TileType = "normal" | "fire" | "cursed" | "warped" | "removed" | "dull";

export type Objective =
  | { type: 'score'; objGoal: number }
  | { type: 'words'; objGoal: number; minLength?: number }
  | { type: 'destroy'; objGoal: number; tileType: 'cursed' | 'fire' | 'warped' | 'dull' };

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
  warpTurns?: number;
  moves?: number;
  dullTurns?: number;
};


export function baseLevels(): LevelData[] {
  return [
    {
      id: 1,
      name: "Level 1",
      objective: { type: 'words', objGoal: 5, minLength: 4 },
      moves: 5,
      locked: false,
      board: [
        ["removed", "normal", "normal", "normal", "normal", "removed", "removed", "removed"],
        ["removed", "normal", "cursed", "normal", "normal", "normal", "normal", "normal"],
        ["removed", "dull", "normal", "normal", "normal", "normal", "cursed", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["normal", "cursed", "normal", "normal", "normal", "normal", "normal", "removed"],
        ["normal", "normal", "normal", "normal", "normal", "cursed", "normal", "removed"],
        ["removed", "removed", "removed", "normal", "normal", "normal", "normal", "removed"]
      ],
      shouldWarpedSpawn: true,
      shouldCursedSpawn: false,
      shouldFireSpawn: false,
      cursedTurns: 7
    },
    {
      id: 2,
      name: "Level 2",
      objective: { type: 'destroy', objGoal: 2, tileType: 'cursed' },
      locked: true,
      board: [
        ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
        ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
        ["warped", "normal", "normal", "normal", "normal", "normal", "normal", "warped"],
        ["warped", "cursed", "normal", "normal", "normal", "normal", "cursed", "warped"],
        ["warped", "normal", "normal", "normal", "normal", "normal", "normal", "warped"],
        ["warped", "normal", "normal", "normal", "normal", "normal", "normal", "warped"],
        ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"],
        ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "removed"]
      ],
      shouldWarpedSpawn: false,
      shouldCursedSpawn: false,
      shouldFireSpawn: false,
    },
    {
      id: 3,
      name: "Level 3",
      objective: { type: 'destroy', objGoal: 4, tileType: 'cursed' },
      locked: true,
      board: [
        ["removed", "removed", "removed", "removed", "removed", "removed", "removed", "removed"],
        ["removed", "warped", "normal", "normal", "normal", "normal", "normal", "warped"],
        ["removed", "normal", "warped", "normal", "normal", "normal", "warped", "normal"],
        ["removed", "normal", "normal", "normal", "cursed", "normal", "normal", "normal"],
        ["removed", "normal", "normal", "cursed", "fire", "cursed", "normal", "normal"],
        ["removed", "normal", "normal", "normal", "cursed", "normal", "normal", "normal"],
        ["removed", "normal", "warped", "normal", "normal", "normal", "warped", "normal"],
        ["removed", "warped", "normal", "normal", "normal", "normal", "normal", "warped"]
      ],
      shouldWarpedSpawn: false,
      shouldCursedSpawn: false,
      shouldFireSpawn: false,
    },
    {
      id: 4,
      name: "Level 4",
      objective: { type: 'destroy', objGoal: 6, tileType: 'cursed' },
      locked: true,
      moves: 40,
      board: [
        ["cursed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["removed", "cursed", "normal", "normal", "normal", "normal", "normal", "cursed"],
        ["removed", "removed", "cursed", "normal", "normal", "normal", "cursed", "removed"],
        ["removed", "removed", "removed", "normal", "normal", "normal", "removed", "removed"],
        ["removed", "removed", "normal", "normal", "normal", "removed", "removed", "removed"],
        ["removed", "cursed", "normal", "normal", "normal", "cursed", "removed", "removed"],
        ["cursed", "normal", "normal", "normal", "normal", "normal", "cursed", "removed"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "cursed"]
      ],
      shouldWarpedSpawn: false,
      shouldCursedSpawn: true,
      shouldFireSpawn: false,
    },
     {
      id: 5,
      name: "Level 5",
      objective: { type: 'words', objGoal: 10, minLength: 3 },
      locked: true,
      moves: 14,
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
      shouldWarpedSpawn: false,
      shouldCursedSpawn: true,
      shouldFireSpawn: false,
    },
     {
      id: 6,
      name: "Level 6",
      objective: { type: 'destroy', objGoal: 11, tileType: 'cursed' },
      locked: true,
      moves: 14,
      board: [
        ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["removed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["removed", "normal", "normal", "warped", "normal", "warped", "normal", "normal"],
        ["removed", "cursed", "normal", "normal", "warped", "normal", "cursed", "normal"],
        ["removed", "normal", "normal", "warped", "normal", "warped", "normal", "normal"],
        ["removed", "normal", "normal", "normal", "warped", "normal", "normal", "normal"]
      ],
      shouldWarpedSpawn: false,
      shouldCursedSpawn: true,
      shouldFireSpawn: false,
      cursedTurns: 4,
    }
  ];
}

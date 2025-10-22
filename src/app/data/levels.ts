// src/data/levelData.ts

export type TileType = "normal" | "fire" | "cursed" | "warped" | "removed";

export type Objective = 
  | { type: 'score'; objGoal: number }
  | { type: 'words'; objGoal: number; minLength?: number }
  | { type: 'destroy'; objGoal: number; tileType: 'cursed' | 'fire' | 'warped' };

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

  moves?: number;
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
  ["removed", "normal", "normal", "normal", "normal", "normal", "cursed", "normal"],
  ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
  ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
  ["normal", "cursed", "normal", "normal", "normal", "normal", "normal", "removed"],
  ["normal", "normal", "normal", "normal", "normal", "cursed", "normal", "removed"],
  ["removed", "removed", "removed", "normal", "normal", "normal", "normal", "removed"]
      ],
      shouldWarpedSpawn: true,
      shouldCursedSpawn: false,
      shouldFireSpawn: false,
    },
    {
      id: 2,
      name: "Level 2",
      objective: { type: 'destroy', objGoal: 3, tileType: 'cursed' },
      locked: true,
      board: [
        ["normal", "normal", "fire", "normal", "cursed", "normal", "normal", "normal"],
        ["normal", "fire", "normal", "normal", "normal", "normal", "normal", "warped"],
        ["normal", "normal", "cursed", "normal", "normal", "normal", "fire", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "warped", "normal", "normal"],
        ["fire", "normal", "normal", "cursed", "normal", "normal", "normal", "normal"],
        ["normal", "normal", "warped", "normal", "normal", "normal", "fire", "normal"],
        ["normal", "normal", "normal", "normal", "cursed", "normal", "normal", "normal"],
        ["warped", "normal", "normal", "fire", "normal", "normal", "normal", "cursed"]
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
        ["normal", "normal", "warped", "normal", "normal", "normal", "cursed", "normal"],
        ["normal", "fire", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["cursed", "normal", "fire", "warped", "normal", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "cursed", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "warped", "fire"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "fire", "normal"],
        ["normal", "normal", "cursed", "normal", "warped", "normal", "normal", "normal"],
        ["normal", "fire", "normal", "normal", "normal", "normal", "normal", "cursed"],
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
        ["warped", "normal", "normal", "normal", "cursed", "normal", "normal", "normal"],
        ["normal", "normal", "fire", "normal", "normal", "normal", "normal", "warped"],
        ["normal", "fire", "normal", "normal", "normal", "normal", "cursed", "normal"],
        ["cursed", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "warped", "normal", "normal", "normal", "fire"],
        ["normal", "normal", "cursed", "normal", "normal", "normal", "normal", "normal"],
        ["normal", "warped", "normal", "fire", "normal", "normal", "normal", "normal"],
        ["fire", "normal", "normal", "normal", "normal", "normal", "cursed", "normal"],
      ],
      shouldWarpedSpawn: false,
      shouldCursedSpawn: false,
      shouldFireSpawn: false,
    }
  ];
}

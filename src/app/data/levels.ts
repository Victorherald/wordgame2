// src/data/levelData.ts

export type TileType = "normal" | "fire" | "cursed" | "warped";

export type LevelData = {
  id: number;
  name: string;
  objective: string;
  locked: boolean;
  board: TileType[][];
  layout?: string[][];
    shouldWarpedSpawn?: boolean;
  shouldCursedSpawn?: boolean;
  shouldFireSpawn?: boolean;
  goal?: number;
};


export function baseLevels(): LevelData[] {
  return [
    {
      id: 1,
      name: "Level 1",
      objective: "Form 8 words of 4+ letters",
      locked: false,
      board: [
        ["normal", "normal", "cursed", "cursed", "cursed", "cursed", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "normal", "cursed", "normal", "normal"],
        ["cursed", "cursed", "cursed", "cursed", "cursed", "cursed", "normal", "cursed"],
        ["cursed", "normal", "cursed", "cursed", "cursed", "cursed", "normal", "cursed"],
        ["cursed", "normal", "cursed", "cursed", "cursed", "cursed", "normal", "cursed"],
        ["cursed", "normal", "cursed", "cursed", "cursed", "cursed", "cursed", "cursed"],
        ["normal", "normal", "cursed", "normal", "warped", "normal", "normal", "normal"],
        ["normal", "normal", "cursed", "cursed", "cursed", "cursed", "normal", "normal"],
      ],
      shouldWarpedSpawn: false,
      shouldCursedSpawn: false,
      shouldFireSpawn: false,
    },
    {
      id: 2,
      name: "Level 2",
      objective: "Score 1000 points",
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
      objective: "Use 1 gem tile",
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
      objective: "Finish in 90 seconds",
      locked: true,
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

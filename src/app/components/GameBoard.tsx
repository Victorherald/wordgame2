'use client';
import React, { useEffect, useState } from 'react';
import '../animations/tileAnimations.css';
import { ScoreCounter } from '../components/ScoreCounter';
import { WordDisplay } from '../components/WordDisp';
import { wordList } from '../dictionary/wordlist';
import { LevelData } from '../data/levels';
import { Info } from 'lucide-react';

type Rarity = 'bronze' | 'silver' | 'gold' | 'none';
type GemColor = 'purple' | 'green' | 'orange' | 'blue' | 'red' | 'pink' | 'whiteDiamond';

type Tile = {
  letter: string;
  rarity: Rarity;
  gem?: GemColor;
  isFire?: boolean;
  isCursed?: boolean;
  curseTurns?: number;
  presets?: boolean;
  isWarped?: boolean;
  warpTurns?: number;
  isChanging?: boolean;
};

type Position = { row: number; col: number };

type LetterBoardProps = {
  level?: LevelData;
  layout?: ("normal" | "cursed" | "warped" | "fire")[][];
  objective?: string;
};



const specialTileSettings = {
  allowRandomFireTiles: false,
  allowRandomCursedTiles: false,
  allowRandomWarpedTiles: true,
  allowWarpedTiles: true,
  allowPresetTiles: true,
  allowFireTiles: true,
  allowCursedTiles: true,
  allowRandomSpecialTiles: true
};

export function LetterBoard({ level, layout }: LetterBoardProps) {
  const [grid, setGrid] = useState<Tile[][]>([]);
  const [selected, setSelected] = useState<Position[]>([]);
  const [newTiles, setNewTiles] = useState<Position[]>([]);
  const [score, setScore] = useState(0);
  const [isWordValid, setIsWordValid] = useState(false);
  const [showObjectivePopup, setShowObjectivePopup] = useState(true);
  const [objMet, setObjMet] = useState(0);

 // Objective setup
  const objective = level?.objective || 'Form 5 words of 4+ letters';
  const goal = level?.goal || 5;

// Automatically hide the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowObjectivePopup(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


   // 🔹 Prefer layout from prop → fallback to level.board
  const presetTileMap = layout ?? level?.board ?? [];

  const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","QU","R","S","T","U","V","W","X","Y","Z"];
  const HARD_LETTERS = ['Q', 'X', 'Z', 'J', 'K', 'Y'];




  // rarity logic
  function getRarityByLetter(letter: string): Rarity {
    const bronze = ['A', 'D', 'E', 'G', 'I', 'L', 'N', 'S', 'O', 'R', 'T', 'U'];
    const silver = ['B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y'];
    const gold = ["J" , "K", "Qu", "X", "Z"];
    return bronze.includes(letter) ? 'bronze' : silver.includes(letter) ? 'silver' : gold.includes(letter) ? 'gold' : 'none' ;
  }

  // random tile
  function generateRandomTile(): Tile {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const rarity = getRarityByLetter(letter);

    const shouldBeFire =
      specialTileSettings.allowFireTiles &&
      specialTileSettings.allowRandomSpecialTiles &&
      Math.random() < 0.0;

    const shouldBeWarped =
      specialTileSettings.allowWarpedTiles &&
      specialTileSettings.allowRandomSpecialTiles &&
      Math.random() < 0.0;

    const shouldBeCursed =
      specialTileSettings.allowCursedTiles &&
      specialTileSettings.allowRandomSpecialTiles &&
      Math.random() < 0.0;

    if (shouldBeWarped) return { letter, isWarped: true, warpTurns: 5, rarity: 'bronze' };
    if (shouldBeFire) return { letter, rarity, isFire: true };
    if (shouldBeCursed) return { letter, rarity: 'bronze', isCursed: true, curseTurns: 3 };

    return { letter, rarity };
  }

  // board init
  const initializeBoard = (rows: number, cols: number): Tile[][] => {
    const newGrid: Tile[][] = [];

    for (let row = 0; row < rows; row++) {
      const rowTiles: Tile[] = [];
      for (let col = 0; col < cols; col++) {
        const presetType = presetTileMap[row]?.[col] ?? "normal";

        if (specialTileSettings.allowPresetTiles) {
          if (presetType === "fire" && specialTileSettings.allowFireTiles)
            rowTiles.push({ ...generateRandomTile(), isFire: true, presets: true });
          else if (presetType === "cursed" && specialTileSettings.allowCursedTiles)
            rowTiles.push({ ...generateRandomTile(), isCursed: true, curseTurns: 3, presets: true });
          else if (presetType === "warped" && specialTileSettings.allowWarpedTiles)
            rowTiles.push({ ...generateRandomTile(), isWarped: true, warpTurns: 3, presets: true });
          else rowTiles.push(generateRandomTile());
        } else rowTiles.push(generateRandomTile());
      }
      newGrid.push(rowTiles);
    }

    return newGrid;
  };

  useEffect(() => setGrid(initializeBoard(8, 8)), []);
  useEffect(() => {
    if (newTiles.length > 0) {
      const t = setTimeout(() => setNewTiles([]), 500);
      return () => clearTimeout(t);
    }
  }, [newTiles]);

  const getRarityColor = (r: Rarity) =>
    r === 'bronze' ? 'bg-amber-700' : r === 'silver' ? 'bg-gray-300' : 'bg-yellow-400';

  const clearSelection = () => setSelected([]);
  const handleRightClick = (r: number, c: number) =>
    setSelected((p) => p.filter((pos) => !(pos.row === r && pos.col === c)));

  const getSelectedWord = () => selected.map(({ row, col }) => grid[row]?.[col]?.letter ?? '').join('');
  const isSelected = (r: number, c: number) => selected.some((p) => p.row === r && p.col === c);
  const isAdjacent = (a: Position, b: Position) => Math.abs(a.row - b.row) <= 1 && Math.abs(a.col - b.col) <= 1 && !(a.row === b.row && a.col === b.col);

  const handleTileClick = (row: number, col: number) => {
    const last = selected[selected.length - 1];
    const current = { row, col };
    if (selected.length === 0 || isAdjacent(last, current))
      if (!isSelected(row, col)) setSelected([...selected, current]);
  };

  useEffect(() => setIsWordValid(selected.length >= 3), [selected]);

  // 🔥 warped effect helper
  function getNewWarpedLetter(current: string) {
    const available = letters.filter((l) => l !== current);
    return available[Math.floor(Math.random() * available.length)];
  }

  function applyWarpedEffect(grid: Tile[][]) {
  const warpedGrid = grid.map((row) => [...row]);

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const t = grid[r][c];

      if (t?.isWarped) {
        const newTurns = (t.warpTurns ?? 1) - 1;

        if (newTurns <= 0) {
          // 🌀 Turns expired → revert to normal tile
          warpedGrid[r][c] = {
            letter: getNewWarpedLetter(t.letter),
            rarity: getRarityByLetter(t.letter),
          };
        } else {
          // 🌀 Still warped → mutate slightly
          warpedGrid[r][c] = {
            ...t,
            letter: getNewWarpedLetter(t.letter),
            warpTurns: newTurns,
          };
        }
      }
    }
  }

  return warpedGrid;
}


  // ✅ main logic
  const applyWordMatch = () => {
    if (selected.length < 3) return;

    let updatedGrid = grid.map((r) => [...r]);
    updatedGrid = applyWarpedEffect(updatedGrid);

    // burn tiles
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 8; c++) {
        if (grid[r][c]?.isFire) updatedGrid[r + 1][c] = null as any;
      }
    }

    // score system
    let points = selected.length * 10;
    selected.forEach(({ row, col }) => {
      const t = grid[row][col];
      if (t?.isCursed && t.curseTurns && t.curseTurns > 0) points -= 15;
    });
    setScore((p) => p + points);

    // gem color logic
    function getGemByLength(l: number): GemColor | null {
      if (l === 5) return 'purple';
      if (l === 6) return 'green';
      if (l === 7) return 'orange';
      if (l === 8) return 'blue';
      if (l === 9) return 'red';
      if (l >= 10 && l < 12) return 'pink';
      if (l >= 12) return 'whiteDiamond';
      return null;
    }

    const gem = getGemByLength(selected.length);
    const newGenerated: Position[] = [];

    let skipLast = false;
    if (gem) {
      const last = selected[selected.length - 1];
      updatedGrid[last.row][last.col] = { ...updatedGrid[last.row][last.col], gem };
      skipLast = true;
    }

    const clearTiles = skipLast ? selected.slice(0, -1) : selected;
    clearTiles.forEach(({ row, col }) => (updatedGrid[row][col] = null as any));

   // gravity + regen
const cols = updatedGrid[0].length;

for (let c = 0; c < cols; c++) {
  const colTiles: Tile[] = [];

  for (let r = 7; r >= 0; r--) {
    const t = updatedGrid[r][c];
    if (t) {
      // 🔮 Handle cursed tiles
      if (t.isCursed) {
        const remaining = (t.curseTurns ?? 0) - 1;

        if (remaining > 0) {
          t.curseTurns = remaining;
        } else {
          // ✅ Remove curse completely
          delete t.isCursed;
          delete t.curseTurns;
        }
      }

      // 🌀 Handle warped tiles
      if (t.isWarped) {
        const remaining = (t.warpTurns ?? 0) - 1;

        if (remaining > 0) {
          t.warpTurns = remaining;
        } else {
          // ✅ Remove warp completely
          delete t.isWarped;
          delete t.warpTurns;
        }
      }

      colTiles.push(t);
    }
  }

  // gravity + refill
  for (let r = 7; r >= 0; r--) {
    if (colTiles.length > 0) {
      updatedGrid[r][c] = colTiles.shift()!;
    } else {
      const newT = generateRandomTile();
      updatedGrid[r][c] = newT;
      newGenerated.push({ row: r, col: c });
    }
  }
}

setGrid(updatedGrid);
setNewTiles(newGenerated);
setSelected([]);
  }

  const getGemGlow = (gem: string) =>
    ({
      purple: 'ring-2 ring-purple-500 shadow-purple-500/40',
      green: 'ring-2 ring-green-500 shadow-green-500/40',
      orange: 'ring-2 ring-orange-500 shadow-orange-500/40',
      blue: 'ring-2 ring-blue-500 shadow-blue-500/40',
      red: 'ring-2 ring-red-500 shadow-red-500/40',
      pink: 'ring-2 ring-pink-400 shadow-pink-400/40',
      whiteDiamond: 'ring-2 ring-white shadow-white/80 animate-pulse'
    }[gem] || '');

  const getGemBackground = (gem: string) =>
    ({
      purple: 'bg-purple-500/40',
      green: 'bg-green-500/40',
      orange: 'bg-orange-500/40',
      blue: 'bg-blue-500/40',
      red: 'bg-red-500/40',
      pink: 'bg-pink-400/40',
      whiteDiamond: 'bg-gradient-to-br from-white via-sky-100 to-white opacity-70'
    }[gem] || '');

  return (

    
    

   

   <div className="min-h-screen w-full bg-neutral-950 flex justify-center items-start py-1 px-2">
  <div
    className="
      w-full max-w-6xl
      grid grid-cols-3 md:grid-cols-[280px_1fr]
      gap-4
      bg-neutral-900
      rounded-xl
      shadow-inner shadow-black/30
      overflow-hidden
      p-3
    "
  >
    {/* 🎯 Sidebar */}
    <div
      className="
        flex flex-col justify-between
        bg-neutral-950 p-4 rounded-lg border border-neutral-800
        h-[900px] md:h-auto
        overflow-y-auto space-y-3
      "
    >
     {/* Words Left Counter + Info Icon */}
          <div className="flex items-center justify-between bg-neutral-800/70 border border-neutral-700 rounded-lg p-3 mb-2">
            <p className="text-white text-sm font-semibold">
              Words Left {objMet}/{goal}
            </p>
            <button
              onClick={() => setShowObjectivePopup(true)}
              className="text-gray-300 hover:text-white transition"
              title="Show Objective"
            >
              <Info size={18} />
            </button>
          </div>

      {/* Score + Controls */}
      <div className="flex flex-col gap-3 flex-grow overflow-hidden">
        <ScoreCounter score={score} />

        <button
          onClick={clearSelection}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Clear Selection
        </button>

        <button
          disabled={!isWordValid}
          onClick={applyWordMatch}
          className={`px-4 py-2 rounded transition ${
            isWordValid
              ? 'bg-green-600 text-white shadow-lg shadow-green-400 animate-pulse'
              : 'bg-gray-700 text-white'
          }`}
        >
          Submit Word
        </button>

        {/* Current word (desktop only) */}
        <div className="hidden md:block flex-1 overflow-auto mt-2">
          <WordDisplay word={getSelectedWord()} />
        </div>
      </div>
    </div>

    {/* 🧩 Board */}
    <div
      className="
        bg-neutral-950 rounded-lg p-3
        flex flex-col justify-center items-center
        border border-neutral-800
        w-full
      "
    >
      {/* Tile Grid */}
      <div
        className="
          grid grid-cols-8
          gap-[2px] sm:gap-[4px] md:gap-[6px]
          justify-center
        "
      >
        {grid.map((row, r) =>
          row.map((tile, c) => {
            const sel = isSelected(r, c);
            const isNew = newTiles.some((p) => p.row === r && p.col === c);
            const glow = sel
              ? isWordValid
                ? 'ring-2 ring-green-400 shadow-green-500/30'
                : 'ring-2 ring-white shadow-white/20'
              : '';
            const anim = isNew ? 'tile-drop' : '';
            const fire = tile?.isFire
              ? 'animate-fire-tile bg-orange-700 text-white shadow-lg shadow-orange-500/30 fire-particles'
              : '';
            const cursed = tile?.isCursed
              ? 'tile cursed-tile border-2 border-red-700 shadow-red-500/40 cursed-particles'
              : '';

            return (
              <div
                key={`${r}-${c}`}
                onClick={() => handleTileClick(r, c)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  handleRightClick(r, c);
                }}
                className={`
                  relative
                  w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14
                  rounded-[6px] cursor-pointer
                  bg-gradient-to-br from-[#fdf5e6] to-[#f5e1b9]
                  text-black text-sm sm:text-lg md:text-xl font-serif
                  flex items-center justify-center
                  border border-[#d6c6a1] shadow-md shadow-black/10
                  transition duration-150 ease-in-out
                  ${glow} ${anim} ${tile?.gem ? getGemGlow(tile.gem) : ''} ${fire} ${cursed}
                `}
              >
                {tile?.gem && (
                  <div
                    className={`absolute inset-0 z-0 rounded-[6px] animate-pulse ${getGemBackground(tile.gem)}`}
                  />
                )}
                <span className="z-10 font-bold">{tile?.letter}</span>

                {tile?.isCursed ? (
                  <div className="absolute bottom-1 right-1 w-2 h-2 sm:w-5 sm:h-5 rounded-full bg-red-600 text-white text-[10px] sm:text-xs font-bold flex items-center justify-center z-1">
                    {tile.curseTurns}
                  </div>
                ) : (
                  <div
                    className={`absolute bottom-1 right-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full z-10 ${getRarityColor(tile?.rarity)}`}
                  />
                )}
              </div>
            );
          })
        )}
      </div>

      {/*  Current Word for Mobile */}
      <div className="block md:hidden w-full mt-4 text-center">
        <WordDisplay word={getSelectedWord()} />
      </div>
    </div>
  </div>
   {/* Objective Popup (shown at start and reopened with "i" icon) */}
      {showObjectivePopup ? (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 w-11/12 max-w-md text-center space-y-4 shadow-xl animate-fade-in">
            <h2 className="text-xl font-semibold text-white">Objective</h2>
            <p className="text-gray-300 text-sm leading-snug">{objective}</p>
            <button
              onClick={() => setShowObjectivePopup(false)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition"
            >
              Ok
            </button>
          </div>
        </div>
      ) : null}
</div>




  );
}

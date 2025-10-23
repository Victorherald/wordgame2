'use client';
import React, { useEffect, useState } from 'react';
import '../animations/tileAnimations.css';
import { ScoreCounter } from '../components/ScoreCounter';
import { WordDisplay } from '../components/WordDisp';
import { wordList } from '../dictionary/wordlist';
import { baseLevels, LevelData } from '../data/levels';
import { Info } from 'lucide-react';
import { MovesDisplay } from './MoveCount';
import { useRouter } from 'next/navigation';
import { basename } from 'node:path';

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
  isDull?: boolean;
  isChanging?: boolean;
  isRemoved?: boolean;
   dullTurns?: number;
};

type Position = { row: number; col: number };

type LetterBoardProps = {
  level?: LevelData;
  layout?: ("normal" | "cursed" | "warped" | "fire" | "removed" | "dull")[][];
  objective?: {
  type: 'score' | 'words' | 'destroy';
  objGoal: number;
  tileType?: 'cursed' | 'fire' | 'warped' | "dull";
  minLength?: number;

};

  moves: number;
    onNextLevel?: () => void;
   levelName: string;
};



const specialTileSettings = {
  allowRandomFireTiles: false,
  allowRandomCursedTiles: false,
  allowRandomWarpedTiles: true,
  allowWarpedTiles: true,
  allowPresetTiles: true,
  allowFireTiles: true,
  allowCursedTiles: true,
  allowDullTiles: true,
  allowRandomSpecialTiles: true,

   cursedTurns: 5 ,
  warpedTurns: 6,
  fireTurns: 5,

};

export function LetterBoard({ level,   objective,  levelName, layout, moves = 15, onNextLevel}: LetterBoardProps) {
  const [grid, setGrid] = useState<Tile[][]>([]);
  const [selected, setSelected] = useState<Position[]>([]);
  const [newTiles, setNewTiles] = useState<Position[]>([]);
  const [score, setScore] = useState(0);
  const [isWordValid, setIsWordValid] = useState(false);
  const [showObjectivePopup, setShowObjectivePopup] = useState(true);
  const [objMet, setObjMet] = useState(0);
 const [movesLeft, setMovesLeft] = useState(moves);
const [isGameOver, setIsGameOver] = useState(false);
const [gameResult, setGameResult] = useState<'win' | 'fail' | null>(null);

// Progress helpers (keep near the top; safe-guard for SSR)
function loadProgress(): { unlockedLevel: number } {
  if (typeof window === 'undefined') return { unlockedLevel: 1 };
  const raw = localStorage.getItem('wordgame_progress');
  return raw ? JSON.parse(raw) : { unlockedLevel: 1 };
}

function saveProgress(data: { unlockedLevel: number }) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('wordgame_progress', JSON.stringify(data));
  } catch {
    // ignore storage errors
  }
}



  const router = useRouter();
  const levelId = level?.id ?? 1;


 useEffect(() => {
    setMovesLeft(moves); // reset moves when level changes
  }, [moves]);

 // Objective setup

const goal = objective?.objGoal ?? 5;


 useEffect(() => {


  if (objMet >= goal && !isGameOver) {
    setIsGameOver(true);
    setGameResult('win');
    setScore((prev) => prev + movesLeft * 10);
    


  

    // Unlock next level only on wjn
    const progress = loadProgress();
    const unlocked = progress.unlockedLevel ?? 1;
    const nextToUnlock = (levelId ?? 1) + 1;

    if (nextToUnlock > unlocked) {
      saveProgress({ unlockedLevel: nextToUnlock });
    }

    //  Trigger next level callback ONCE — only when win happens
    if (onNextLevel) onNextLevel();
  }

    // when move runs out without reaching the goal
   if (movesLeft <= 0 && !isGameOver) {
    setIsGameOver(true);
    setGameResult('fail');
    return;
  }   
}, [movesLeft, objMet, goal, isGameOver]);


// Automatically hide the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowObjectivePopup(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


   //  Layout from data otherwise fallback
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

   const shouldBeDull =
  specialTileSettings.allowDullTiles &&
  specialTileSettings.allowRandomSpecialTiles &&
  Math.random() < 0.0;

  if (shouldBeWarped) {
    return {
      letter,
      isWarped: true,
      warpTurns: specialTileSettings.warpedTurns,
      rarity: 'bronze',
    };
  }

  if (shouldBeFire) {
    return {
      letter,
      isFire: true,
      rarity,
    };
  }

  if (shouldBeCursed) {
    return {
      letter,
      isCursed: true,
      rarity: 'bronze',
    };
  }

  if (shouldBeDull) {
  return {
    letter,
    isDull: true,
    rarity: "none", // default 3 turns
  };
}

  return { letter, rarity };
}


  // board setup
  const initializeBoard = (rows: number, cols: number): Tile[][] => {
    const newGrid: Tile[][] = [];

    for (let row = 0; row < rows; row++) {
      const rowTiles: Tile[] = [];
      for (let col = 0; col < cols; col++) {
        const presetType = presetTileMap[row]?.[col] ?? "normal";
if (specialTileSettings.allowPresetTiles) {
  if (presetType === "fire" && specialTileSettings.allowFireTiles) {
    rowTiles.push({
      ...generateRandomTile(),
      isFire: true,
      presets: true,
    });
  } else if (presetType === "removed") {
    rowTiles.push({ isRemoved: true } as Tile);
  } else if (presetType === "cursed" && specialTileSettings.allowCursedTiles) {
    rowTiles.push({
      ...generateRandomTile(),
      isCursed: true,
      curseTurns: level?.cursedTurns ?? 3, //  use custom setting
      presets: true,
    });
  } else if (presetType === "warped" && specialTileSettings.allowWarpedTiles) {
    rowTiles.push({
      ...generateRandomTile(),
      isWarped: true,
      warpTurns: level?.warpTurns ?? 3, //  use custom setting
      presets: true,
    });
  }
  else if (presetType === "dull" && specialTileSettings.allowDullTiles) {
    rowTiles.push({
      ...generateRandomTile(),
      isDull: true,
      dullTurns: level?.dullTurns ?? 3, //  use custom setting
      presets: true,
    });
  } else {
    rowTiles.push(generateRandomTile());
  }
} else {
  rowTiles.push(generateRandomTile());
}


        
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
  const handleRightClick = (r: number, c: number) => {
     const tile = grid[r][c];
  if (!tile || tile.isRemoved) return;
    setSelected((p) => p.filter((pos) => !(pos.row === r && pos.col === c)));
  };

  const getSelectedWord = () => selected.map(({ row, col }) => grid[row]?.[col]?.letter ?? '').join('');
  const isSelected = (r: number, c: number) => selected.some((p) => p.row === r && p.col === c);
  const isAdjacent = (a: Position, b: Position) => Math.abs(a.row - b.row) <= 1 && Math.abs(a.col - b.col) <= 1 && !(a.row === b.row && a.col === b.col);

  const handleTileClick = (row: number, col: number) => {
    const tile = grid[row][col];
     if (!tile || tile.isRemoved) return;
    const last = selected[selected.length - 1];
    const current = { row, col };
    if (selected.length === 0 || isAdjacent(last, current))
      if (!isSelected(row, col)) setSelected([...selected, current]);
  
  };


  useEffect(() => setIsWordValid(selected.length >= 3), [selected]);

  //  warped effect helper
  function getNewWarpedLetter(current: string) {
    const available = letters.filter((l) => l !== current);
    return available[Math.floor(Math.random() * available.length)];
  }

  function applyWarpedEffect(grid: Tile[][]) {
  const warpedGrid = grid.map((row) => [...row]);

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const t = grid[r][c];


//reduce turns by 1 after each moves
      if (t?.isWarped) {
        const newTurns = (t.warpTurns ?? 1) - 1;

        if (newTurns <= 0) {
          //  Turns expired and revert to normal tile
          warpedGrid[r][c] = {
            letter: getNewWarpedLetter(t.letter),
            rarity: getRarityByLetter(t.letter),
          };
        } else {
          // if still warped it changes every turn
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







  //  main logic
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


 // gem color logic
    function getGemByLength(l: number): GemColor | null {
      if (l === 5) return 'purple';
      if (l === 6) return 'green';
      if (l === 7) return 'orange';
      if (l === 8) return 'blue';
      if (l === 9) return 'red';
      if (l === 10) return 'pink';
      if (l >= 11) return 'whiteDiamond';
      return null;
    }




    // score system
    
    let points = selected.length * 10;
    selected.forEach(({ row, col }) => {
      const t = grid[row][col];
      if (t?.isCursed && t.curseTurns && t.curseTurns > 0) points -= 15;
      if (t.isDull && t.dullTurns && t.dullTurns > 0) points += 0;

      
    });
    setScore((p) => p + points);

    
let label = "Progress";

if (objective?.type === "words") label = "Words Found";
else if (objective?.type === "score") label = "Score";
else if (objective?.type === "destroy")
  label = `Destroy ${objective.tileType} tiles`;

    
if (objective) {
  let updatedObjMet = objMet;
  setMovesLeft(prev => prev- 1);

  // Word-based objective (e.g., make 5 words of 3+ letters)
  if (objective.type === 'words') {
    if (selected.length >= (objective.minLength ?? 3)) {
      updatedObjMet += 1;
    }
  }

  // Score-based objective (e.g., reach 500 points)
  else if (objective.type === 'score') {
    updatedObjMet += points;
  }

  // Destroy-based objective (e.g., destroy fire or cursed tiles)
  else if (objective.type === 'destroy') {
    const destroyed = selected.filter(({ row, col }) => {
      const t = grid[row][col];
      if (!t) return false;

      if (objective.tileType === 'fire') return t.isFire;
      if (objective.tileType === 'cursed') return t.isCursed;
      if (objective.tileType === 'warped') return t.isWarped;

      return false;
    }).length;

    updatedObjMet += destroyed;
  }

  setObjMet(updatedObjMet);


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

     //Negate gem if the last tile involves a negative one
    if (gem){
       const last = selected[selected.length - 1];
       updatedGrid[last.row][last.col].isCursed || updatedGrid[last.row][last.col].isFire ||
       updatedGrid[last.row][last.col].isWarped
       skipLast = false;
    }

   // gravity + regen
const cols = updatedGrid[0].length;
const rows = updatedGrid.length;

for (let c = 0; c < cols; c++) {
  const colTiles: Tile[] = [];

  // Collect all valid tiles in this column (ignore removed ones)
  for (let r = rows - 1; r >= 0; r--) {
    const t = updatedGrid[r][c];

    if (t && !t.isRemoved) {
      // Handle cursed tiles
      if (t.isCursed) {
        const remaining = (t.curseTurns ?? 0) - 1;
        if (remaining > 0) {
          t.curseTurns = remaining;
        } else {
          // Remove curse completely
          delete t.isCursed;
          delete t.curseTurns;
        }
      }

      if (t.isDull) {
        const dullremaining = (t.dullTurns ?? 0) - 1;
        if (dullremaining > 0){
          t.curseTurns = dullremaining;
        }  else {
          //remove dull completely
          delete t.isDull;
          delete t.dullTurns;
        }
      }

     
      // Push valid tiles into the column collector
      colTiles.push(t);
    }
  }

  // Refill each column while preserving removed spaces
  for (let r = rows - 1; r >= 0; r--) {
    const current = updatedGrid[r][c];

    if (current?.isRemoved) {
      // Keep removed tiles unchanged
      updatedGrid[r][c] = { ...current };
    } else if (colTiles.length > 0) {
      // Drop existing tiles downward
      updatedGrid[r][c] = colTiles.shift()!;
    } else {
      // Generate new tiles for remaining empty spaces
      updatedGrid[r][c] = generateRandomTile();
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
    {/*  Sidebar */}
    <div
      className="
        flex flex-col justify-between
        bg-neutral-950 p-4 rounded-lg border border-neutral-800
        h-[900px] md:h-auto
        overflow-y-auto space-y-3"
      
    >
      <div className="flex flex-col items-start p-1">
  {levelName && (
    <h2 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">
      {levelName}
    </h2>
  )}
  </div>
     {/* Words Left Counter + Info Icon */}
          <div className="flex items-center justify-between bg-neutral-800/70 border border-neutral-700 rounded-lg p-3 mb-2">
            <p className="text-white text-sm font-semibold">
            {objective
      ? `${objective.type === 'words'
          ? 'Words Found'
          : objective.type === 'score'
          ? 'Score'
          : `Destroy ${objective.tileType} tiles`
        }: ${objMet}/${objective.objGoal}`
      : 'No objective'}
            </p>
            
            <button
              onClick={() => setShowObjectivePopup(true)}
              className="text-gray-300 hover:text-white transition"
              title="Show Objective"
            >
              <Info size={18} />
            </button>
          </div>
<MovesDisplay movesLeft={movesLeft} />


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
  disabled={!isWordValid || movesLeft <= 0 || isGameOver}
  onClick={applyWordMatch}
  className={`px-4 py-2 rounded transition ${
    isWordValid && movesLeft > 0 && !isGameOver
      ? 'bg-green-600 text-white shadow-lg shadow-green-400 animate-pulse z-20'
      : 'bg-gray-700 text-white z-20 cursor-not-allowed opacity-60'
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

    {/*  Board */}
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
      const anim = isNew ? 'tile-drop' : '';

      // effects
      const fire = tile?.isFire
        ? 'animate-fire-tile bg-orange-700 text-white shadow-lg shadow-orange-500/30 fire-particles'
        : '';
      const cursed = tile?.isCursed
        ? 'tile cursed-tile shadow-red-500/40 cursed-particles'
        : '';
      const warped = tile?.isWarped
        ? 'tile warped-tile animate-warped'
        : '';
        const dull = tile?.isDull 
        ? 'bg-gradient-to-br from-neutral-700 to-neutral-700 text-gray-100 border border-neutral-500  brightness-85'
        : '';
      if (tile?.isRemoved) {
      return (
        <div
          key={`${r}-${c}`}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-transparent pointer-events-none"
        />
      );
    }

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
            ${anim} ${tile?.gem ? getGemGlow(tile.gem) : ''} ${fire} ${cursed} ${warped} ${dull}
          `}
        >
          {tile?.gem && (
            <div
              className={`absolute inset-0 z-0 rounded-[6px] animate-pulse ${getGemBackground(tile.gem)}`}
            />
          )}

          {/* Letter */}
          <span className="z-10 font-bold">{tile?.letter}</span>

          {/* Status dots */}
          {tile?.isCursed ? (
            <div className="absolute bottom-1 right-1 w-2 h-2 sm:w-5 sm:h-5 rounded-full bg-red-600 text-white text-[10px] sm:text-xs font-bold flex items-center justify-center z-10">
              {tile.curseTurns}
            </div>
          ) : tile?.isDull ? (
              <div className="absolute bottom-1 right-1 w-2 h-2 sm:w-5 sm:h-5 rounded-full bg-gray-600 text-white text-[10px] sm:text-xs font-bold flex items-center justify-center z-10">
              {tile.dullTurns}
            </div>
                    
          ) : tile?.isWarped ? (
            <div className="absolute bottom-1 right-1 w-2 h-2 sm:w-5 sm:h-5 rounded-full bg-yellow-400 text-black text-[10px] sm:text-xs font-bold flex items-center justify-center z-10 shadow-md shadow-yellow-300/50 animate-pulse">
              {tile.warpTurns}
            </div>
          ) : 
           (
            <div
              className={`absolute bottom-1 right-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full z-10 ${getRarityColor(tile?.rarity)}`}
            />
          )}

          {/*Selection glow (no border, full glow layer) */}
          {sel && (
            <div
              className={`
                absolute inset-0 rounded-[6px]
                ${isWordValid
                  ? 'shadow-[0_0_16px_4px_rgba(34,197,94,0.8)]'
                  : 'shadow-[0_0_12px_2px_rgba(255,255,255,0.5)]'}
                z-20 pointer-events-none
              `}
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
          {objective ? (
  <p className="text-gray-300 text-sm leading-snug">
  {objective?.type === "score" && `Reach ${objective.objGoal} points`}
  {objective?.type === "words" && `Find ${objective.objGoal} words`}
  {objective?.type === "destroy" && `Destroy ${objective.objGoal} ${objective.tileType} tiles`}
  </p>
) : (
  <p className="text-gray-500 text-sm italic">No objective</p>
)}

            <button
              onClick={() => setShowObjectivePopup(false)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition"
            >
              Ok
            </button>
          </div>
        </div>
      ) : null}


      {/* End results after mov */}

      {isGameOver && (
  <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
    <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 w-11/12 max-w-md text-center space-y-4 shadow-xl">
      <h2 className="text-xl font-semibold text-white">
        {gameResult === 'win' ? 'Level Complete!' : 'Game Over'}
      </h2>
      <p className="text-gray-300 text-sm">
        {gameResult === 'win'
          ? 'You successfully completed the objective!'
          : 'You ran out of moves.'}
      </p>

      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={() => window.location.reload()}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition"
        >
          Retry
        </button>

        {gameResult === 'win' && (
          <button
             onClick={() => {
      const nextLevel = levelId + 1;
      localStorage.setItem("currentLevel", nextLevel.toString());
window.location.href = "/play"; // reload same /play route with new level data
    }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
          >
            Next Level
          </button>
        )}
      </div>
    </div>
  </div>
)}

</div>




  );
}

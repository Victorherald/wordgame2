'use client';
import React, { useEffect, useState } from 'react';
import '../animations/tileAnimations.css';
import { ScoreCounter } from '../components/ScoreCounter';
import { WordDisplay } from '../components/WordDisp';

import { LevelData } from '../data/levels';
import { Info } from 'lucide-react';
import { MovesDisplay } from './MoveCount';
import { useRouter } from 'next/navigation';


type Rarity = 'bronze' | 'silver' | 'gold' | 'none';
type GemColor = 'purple' | 'green' | 'orange' | 'blue' | 'red' | 'pink' | 'whiteDiamond' | 'bone';

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
  isBurnt?: boolean;
  isChanging?: boolean;
  isRemoved?: boolean;
   dullTurns?: number;
   isLocked?: boolean;
lockTurns?: number;
isBone?: boolean;        // identifies it's a bone tile
isRipe?: boolean;        // true if glowing, usable in words
boneTurns?: number;    
isStationary?: boolean;  // true if it cannot move (unripe)
isLightBulb?: boolean;
isBulbOn?: boolean
};

type Position = { row: number; col: number };

type LetterBoardProps = {
  level?: LevelData;
  layout?: ("normal" | "locked" | "cursed" | "warped" | "fire" | "removed" | "dull" | "bone" | "bulb")[][];
  objective?: {
  type: 'score' | 'words' | 'destroy' | 'lightsUp';
  objGoal: number;
  tileType?: 'cursed' | 'fire' | 'warped' | "dull" | "locked" | "bone" | "bulb";
  minLength?: number;

};

  moves: number;
    onNextLevel?: () => void;
   levelName: string;
};



const specialTileSettings = {
  allowRandomFireTiles: false,
  allowRandomCursedTiles: false,
  allowRandomWarpedTiles: false,
  allowRandomBulbTiles: false,
  allowWarpedTiles: true,
  allowPresetTiles: true,
  allowFireTiles: true,
  allowCursedTiles: true,
  allowDullTiles: true,
  allowRandomSpecialTiles: false,
   allowLockedTiles: true,
   allowBoneTiles: true,
   allowBulbTiles: true,
  allowRandomLockedTiles: false, // you can toggle this
  lockedTurns: 4,

   cursedTurns: 5 ,
  warpedTurns: 6,
  fireTurns: 5,
  dullTurns: 3
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
const [gameResult, setGameResult] = useState<'win' | 'fire' | 'fail' | null>(null);

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
 // const EASY_LETTERS = ['A','E','I','O','U','T','N','S','R','L'];


  // rarity logic
  function getRarityByLetter(letter: string): Rarity {
    const bronze = ['A', 'D', 'E', 'G', 'I', 'L', 'N', 'S', 'O', 'R', 'T', 'U'];
    const silver = ['B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y'];
    const gold = ["J" , "K", "Qu", "X", "Z"];
    return bronze.includes(letter) ? 'bronze' : silver.includes(letter) ? 'silver' : gold.includes(letter) ? 'gold' : 'none' ;
  }

  

function generateRandomTile(includeHardLetters = true): Tile {

  // pick allowed letters based on toggle
  const allowedLetters = includeHardLetters
    ? letters
    : letters.filter((l) => !HARD_LETTERS.includes(l.replace("QU", "Q"))); // QU check
const letter = allowedLetters[Math.floor(Math.random() * allowedLetters.length)];

  const rarity = getRarityByLetter(letter);

   // probabilities when allowed
  const pFire = 0.02;
  const pWarp = 0.02;
  const pCursed = 0.03;
  const pDull = 0.02;
  const pLocked = 0.02;
  const pBone = 0.02;
  const pBulb = 0.03;

  const shouldBeFire =
    specialTileSettings.allowFireTiles &&
    specialTileSettings.allowRandomSpecialTiles &&
    Math.random() < pFire;

    const shouldBeBulb = 
    specialTileSettings.allowBulbTiles &&
    specialTileSettings.allowRandomSpecialTiles &&
    Math.random() < pBulb;

  const shouldBeBone = 
  specialTileSettings.allowBoneTiles &&
  specialTileSettings.allowRandomSpecialTiles &&
  Math.random() < pBone;

  const shouldBeWarped =
    specialTileSettings.allowWarpedTiles &&
    specialTileSettings.allowRandomSpecialTiles &&
    Math.random() < pWarp;

  const shouldBeCursed =
    specialTileSettings.allowCursedTiles &&
    specialTileSettings.allowRandomSpecialTiles &&
    Math.random() < pCursed;

   const shouldBeDull =
  specialTileSettings.allowDullTiles &&
  specialTileSettings.allowRandomSpecialTiles &&
  Math.random() < pDull;

const shouldBeLocked =
  specialTileSettings.allowLockedTiles &&
  specialTileSettings.allowRandomSpecialTiles &&
  Math.random() < pLocked;


if (shouldBeBone) {
  return {  isBone: true,
    isRipe: false,
    isStationary: true,
    boneTurns: level?.boneTurns ?? 3,
    letter: "", 
    rarity: "none" //when its unripe
} 
}

  
if (shouldBeLocked) {
  return { letter, isLocked: true, lockTurns: specialTileSettings.lockedTurns, rarity };
}

if (shouldBeBulb){
  return {
    isLightBulb: true,
    isStationary: true,
    isBulbOn: false,
    letter: letter,
    rarity: rarity
  }
}


   if (shouldBeWarped) {
    return { letter, isWarped: true, warpTurns: specialTileSettings.warpedTurns, rarity: 'bronze' };
  }
  if (shouldBeFire) {
    return { letter, isFire: true, rarity };
  }
  if (shouldBeCursed) {
    return { letter, isCursed: true, curseTurns: specialTileSettings.cursedTurns, rarity: 'bronze' };
  }
  if (shouldBeDull) {
    return { letter, isDull: true, dullTurns: specialTileSettings.dullTurns ?? 3, rarity: 'none' };
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
            presets: false,
          });
        } else if (presetType === "removed") {
          rowTiles.push({ isRemoved: true } as Tile);
        } else if (presetType === "cursed" && specialTileSettings.allowCursedTiles) {
          rowTiles.push({
            ...generateRandomTile(level?.allowHardLetters ?? true),
            isCursed: true,
            curseTurns: level?.cursedTurns ?? 3,
            presets: true,
          });
        } else if (presetType === "locked" && specialTileSettings.allowLockedTiles) {
          rowTiles.push({
            ...generateRandomTile(level?.allowHardLetters ?? true),
            isLocked: true,
            lockTurns: level?.lockTurns ?? 3,
            presets: true,
          });
        } else if (presetType === "warped" && specialTileSettings.allowWarpedTiles) {
          rowTiles.push({
            ...generateRandomTile(level?.allowHardLetters ?? true),
            isWarped: true,
            warpTurns: level?.warpTurns ?? 3,
            presets: true,
          });
        } else if (presetType === "dull" && specialTileSettings.allowDullTiles) {
          rowTiles.push({
            ...generateRandomTile(level?.allowHardLetters ?? true),
            isDull: true,
            dullTurns: level?.dullTurns ?? 3,
            presets: true,
          }); }
          
          else if (presetType === "bulb" && specialTileSettings.allowBulbTiles) {
          rowTiles.push({
            ...generateRandomTile(level?.allowHardLetters ?? true),
            isLightBulb: true,
            isBulbOn: false,
            presets: true,
          });

        // 🦴 Bone tile (unripe by default)
        } else if (presetType === "bone" && specialTileSettings.allowBoneTiles) {
          rowTiles.push({
            isBone: true,
            isRipe: false,
            isStationary: true,
            boneTurns: level?.boneTurns ?? 3, // default to 3 turns to ripen
            letter: "",
            rarity: "none",
            presets: true,
          });

        } else {
          rowTiles.push(generateRandomTile(level?.allowHardLetters ?? true));
        }
      } else {
        rowTiles.push(generateRandomTile(level?.allowHardLetters ?? true));
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
  if (!tile || tile.isRemoved || tile.isLocked) return;
    setSelected((p) => p.filter((pos) => !(pos.row === r && pos.col === c)));
    
  };

  const getSelectedWord = () => selected.map(({ row, col }) => grid[row]?.[col]?.letter ?? '').join('');
  const isSelected = (r: number, c: number) => selected.some((p) => p.row === r && p.col === c);
  const isAdjacent = (a: Position, b: Position) => Math.abs(a.row - b.row) <= 1 && Math.abs(a.col - b.col) <= 1 && !(a.row === b.row && a.col === b.col);

  const handleTileClick = (row: number, col: number) => {
    const tile = grid[row][col];
     if (!tile || tile.isRemoved || tile.isLocked ||  tile.isBone && tile.isStationary) return;
    const last = selected[selected.length - 1];
    const current = { row, col };
    if (selected.length === 0 || isAdjacent(last, current))
      if (!isSelected(row, col)) setSelected([...selected, current]);
    
  };

async function validateWord(word: string): Promise<boolean> {
  try {
    const res = await fetch("/api/validate", {
      method: "POST",
      body: JSON.stringify({ word }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    return data.valid;
  } catch (err) {
    return false;
  }
}

useEffect(() => {
  const word = getSelectedWord(); // already uppercase or lowercase?
  if (word.length < 3) {
    setIsWordValid(false);
    return;
  }

  validateWord(word).then((isValid) => {
    setIsWordValid(isValid);
  });
}, [selected]);




  //  warped effect helper
  function getNewWarpedLetter(current: string) {
    const available = HARD_LETTERS.filter((l) => l !== current);
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


// Bone Tile mechanics








  //  main logic
  const applyWordMatch = () => {



    if (selected.length < 3) return;

    let updatedGrid = grid.map((r) => [...r]);
    updatedGrid = applyWarpedEffect(updatedGrid);



   


   // burn tiles downward (respecting removed tiles)
for (let r = 0; r < grid.length; r++) {
  for (let c = 0; c < grid[r].length; c++) {
    const tile = grid[r][c];
    if (tile?.isFire) {
      const nextRow = r + 1;

      // Stop fire if it’s at the bottom edge
      if (nextRow >= grid.length) continue;

      // If the next cell is removed, stop the fire from moving further down
      const below = grid[nextRow][c];
      if (below?.isRemoved) continue;

      // Burn the tile below
      updatedGrid[nextRow][c] = null as any;
    }
  }
}

// Check if any fire reached the last *playable* row (not removed)
const lastPlayableRowIndex = [...updatedGrid]
  .reverse()
  .findIndex((row) => row.some((tile) => !tile?.isRemoved));

const lastPlayableRow =
  lastPlayableRowIndex !== -1
    ? updatedGrid[updatedGrid.length - 1 - lastPlayableRowIndex]
    : updatedGrid[updatedGrid.length - 1];

const fireReachedBottom = lastPlayableRow.some(
  (tile) => tile?.isFire && !tile.isRemoved
);

if (fireReachedBottom && !isGameOver) {
  // Create a burnt version of the grid
  const burntGrid: Tile[][] = updatedGrid.map((row) =>
    row.map((tile) =>
      !tile || tile.isRemoved
        ? tile // skip removed tiles
        : {
            ...tile,
            isFire: false,
            isBurnt: true,
          }
    )
  );

  // Add a short animation delay before game over
  setGrid(burntGrid);
  setTimeout(() => {
    setIsGameOver(true);
    setGameResult("fire");
  }, 1000);

  return;
}




//  BULB TOGGLING
let usedBulbThisMatch = false;

selected.forEach(({ row, col }) => {
  const tile = updatedGrid[row][col];
  if (!tile?.isLightBulb) return;

  const wasOn = tile.isBulbOn;
  const isNowOn = !wasOn;

  // Toggle the bulb
  updatedGrid[row][col] = {
    ...tile,
    isBulbOn: isNowOn
  };

  if (objective?.type === "lightsUp" && isNowOn){
      setObjMet(prev => prev + 1);
  }
});


// Check if all bulbs are lit
function allBulbsLit(grid: Tile[][]) {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const t = grid[r][c];
      if (t?.isLightBulb && !t.isBulbOn) return false;
    }
  }
  return true;
}

const allBulbsAreLit = allBulbsLit(updatedGrid);

// CLEAR bulbs ONLY if:
// 1. all bulbs are ON
// 2. a bulb was used in the matched word
if (usedBulbThisMatch && allBulbsAreLit) {
  let bulbsCleared = 0;

  for (let r = 0; r < updatedGrid.length; r++) {
    for (let c = 0; c < updatedGrid[r].length; c++) {
      const t = updatedGrid[r][c];
      if (t?.isLightBulb) {
       updatedGrid[r][c] = generateRandomTile(level?.allowHardLetters ?? true);
 // remove bulb
        bulbsCleared++;
      }
    }
  }

  // objective updates
  if (objective?.type === 'destroy' && objective.tileType === 'bulb') {
    setObjMet((prev) => prev + bulbsCleared);
  }

  // reward points
  setScore(prev => prev + bulbsCleared * 50);
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

function NegativeTile(tile: Tile) {
  return (
    tile.isCursed ||
    tile.isWarped ||
    tile.isFire ||
    tile.isDull ||
    tile.isLocked
  );
}



    // score system

    const validTiles = selected.filter(({ row, col }) => !grid[row][col]?.isDull);


    
    
    let points = validTiles.length * 10;


    
    selected.forEach(({ row, col }) => {
      const tile = grid[row][col];
if (tile.isDull) return;

      if (tile?.isCursed && tile.curseTurns && tile.curseTurns > 0) points -= 15;

      if(tile.letter.includes("QU")) points += 20;
      
      if (tile.gem?.includes("purple")) points += 30;
      if (tile.gem?.includes("green")) points += 45;
      if (tile.gem?.includes("blue")) points += 60;
      
    });
    setScore((p) => p + points);

    
let label = "Progress";

if (objective?.type === "words") label = "Words Found";
else if (objective?.type === "score") label = "Score";
else if (objective?.type === "destroy")
  label = `Destroy ${objective.tileType} tiles!`;
else if (objective?.type === "lightsUp")
  label = "Lights turned on"
    
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

  else if (objective?.type === "lightsUp") {
  selected.forEach(({ row, col }) => {
    const tile = grid[row][col];
    if (!tile?.isLightBulb) return;

    const wasOn = tile.isBulbOn;
    const isNowOn = !wasOn; // because toggle happens this turn

    // If turning ON  +1
    // If turning OFF  -1
    updatedObjMet += isNowOn ? +1 : -1;
  });
}

  // Destroy-based objective (e.g., destroy fire or cursed tiles)
  else if (objective.type === 'destroy') {
    const destroyed = selected.filter(({ row, col }) => {
      const t = grid[row][col];
      if (!t) return false;

      if (objective.tileType === 'fire') return t.isFire;
       if (objective.tileType === 'dull') return t.isDull;
      if (objective.tileType === 'cursed') return t.isCursed;
      if (objective.tileType === 'warped') return t.isWarped;
      if (objective.tileType === 'bone') return t.isBone;
      if (objective.tileType === 'bulb') return t.isLightBulb;
      return false;
    }).length;

    updatedObjMet += destroyed;
  }

  setObjMet(updatedObjMet);


}

   
  

  const gem = getGemByLength(selected.length);
const newGenerated: Position[] = [];

if (gem) {
  const last = selected[selected.length - 1];
  const lastTile = updatedGrid[last.row][last.col];

 

  // If the last tile is a negative tile, replace it fully with a gem
  if (NegativeTile(lastTile)) {
    updatedGrid[last.row][last.col] = {
      letter: lastTile.letter,
      gem,
      rarity: "bronze",
    };

  } else {
    // Normal gem creation
    updatedGrid[last.row][last.col] = {
      ...lastTile,
      gem,
    };
  }

  // Mark new gem tile for regeneration (so effects can play)
  newGenerated.push({ row: last.row, col: last.col });

  // Clear other selected tiles
 selected.slice(0, -1).forEach(({ row, col }) => {
  const t = updatedGrid[row][col];
  if (!t?.isLightBulb) {
    updatedGrid[row][col] = null as any;
  }
});

} else {
  // Normal clearing if no gem created
  selected.forEach(({ row, col }) => {
  const t = updatedGrid[row][col];
  if (!t?.isLightBulb) {       // ⬅️ Do NOT clear bulbs
    updatedGrid[row][col] = null as any;
    newGenerated.push({ row, col });
  }
});
}





// Find if the word used a ripe bone
const boneUsed = selected.find(({ row, col }) => grid[row][col]?.isBone && grid[row][col]?.isRipe);

if (boneUsed) {
  const { row, col } = boneUsed;

  // Pick a random adjacent tile to infect
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const validNeighbors = directions
    .map(([dr, dc]) => ({ r: row + dr, c: col + dc }))
    .filter(({ r, c }) => grid[r]?.[c] && !grid[r][c].isRemoved);

  if (validNeighbors.length > 0) {
    const chosen = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
    const target = grid[chosen.r][chosen.c];

    updatedGrid[chosen.r][chosen.c] = {
      ...target,
      isBone: true,
      isStationary: true,
      isRipe: false,
      boneTurns: level?.boneUnripeTurns ?? 2,
      letter: "",
      rarity: "bronze",
    };
  }
}



     
//  Gravity + Regeneration (fixed, supports stationary bone tiles)
const cols = updatedGrid[0].length;
 const rows = updatedGrid.length;


 // Handle bone tile ripening before gravity/refill
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const t = updatedGrid[r][c];
    if (!t?.isBone) continue;

    const remaining = (t.boneTurns ?? 0) - 1;
    if (remaining <= 0) {
      if (t.isRipe) {
        // Ripe → Unripe
        updatedGrid[r][c] = {
          ...t,
          isRipe: false,
          isStationary: true,
          boneTurns: level?.boneUnripeTurns ?? 2,
          letter: "",
          rarity: "none",
        };
      } else {
        // Unripe → Ripe
        updatedGrid[r][c] = {
          ...t,
          isRipe: true,
          isStationary: false,
          boneTurns: level?.boneRipeTurns ?? 3,
          letter: "B",
          rarity: "gold",
        };
      }
    } else {
      updatedGrid[r][c] = { ...t, boneTurns: remaining };
    }
  }
}




for (let c = 0; c < cols; c++) {
  const newCol: (Tile | null)[] = Array(rows).fill(null);
  let insertRow = rows - 1;

  // Go upward to collect movable tiles
  for (let r = rows - 1; r >= 0; r--) {
    const t = updatedGrid[r][c];
    if (!t) continue;

    // 🔥 Skip removed tiles but keep them in place visually
    if (t.isRemoved) {
      newCol[r] = { ...t };
      continue;
    }

    // 🦴 Stationary bone tiles stay fixed — nothing can fall past them
    if (t.isBone && t.isStationary) {
      newCol[r] = { ...t };
      insertRow = r - 1; // everything above falls only to just above this tile
      continue;
    }

    // Handle timed effects before moving
    if (t.isCursed) {
      const remaining = (t.curseTurns ?? 0) - 1;
      if (remaining > 0) t.curseTurns = remaining;
      else {
        delete t.isCursed;
        delete t.curseTurns;
      }
    }

    if (t.isDull) {
      const remaining = (t.dullTurns ?? 0) - 1;
      if (remaining > 0) t.dullTurns = remaining;
      else {
        delete t.isDull;
        delete t.dullTurns;
      }
    }

    if (t.isLocked) {
      const remaining = (t.lockTurns ?? 0) - 1;
      if (remaining > 0) t.lockTurns = remaining;
      else {
        delete t.isLocked;
        delete t.lockTurns;
      }
    }

    // Find the nearest empty cell above any stationary blockers
    while (insertRow >= 0 && newCol[insertRow] !== null) insertRow--;

    if (insertRow >= 0) {
      newCol[insertRow] = { ...t };
      insertRow--;
    }
  }

  // Fill top with new tiles
  for (let r = 0; r < rows; r++) {
    if (!newCol[r]) {
      newCol[r] = generateRandomTile(level?.allowHardLetters ?? true);
      newGenerated.push({ row: r, col: c });
    }
  }

  // Write back this column   New tiles dropping
  for (let r = 0; r < rows; r++) {
    updatedGrid[r][c] = newCol[r]!;
  }
}

// ✅ Apply updates
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

    
    

   

   <div className="min-h-screen w-full bg-neutral-950 flex justify-center items-start py-1 sm:py-3 px-1 sm:px-5">
  <div
    className="
      w-full max-w-6xl
      flex flex-col md:grid md:grid-cols-[280px_1fr]
      gap-4
      bg-neutral-900
      rounded-xl
      shadow-inner shadow-black/30
      overflow-hidden
      p-2 sm:p-3
    "
  >
{/* --- Top Bar (Mobile only) --- */}
    <div className="flex md:hidden justify-between items-center bg-neutral-950 border border-neutral-800 rounded-lg p-2 mb-2">
      <div className="text-xs sm:text-sm font-semibold text-white">
        {levelName ? levelName : "Level"}
      </div>
      <div className="text-xs sm:text-sm text-white font-semibold">
        Moves: {movesLeft}
      </div>
      <div   onClick={() => setShowObjectivePopup(true)} className="text-xs sm:text-sm text-yellow-400 font-semibold flex items-center gap-1">
         {objective
      ? `${objective.type === 'words'
          ? 'Words Found'
          : objective.type === 'lightsUp' 
          ? `Lights Up`
          : objective.type === 'score'
          ? 'Score'
          : `Destroy ${objective.tileType} tiles`
        }: ${objMet}/${objective.objGoal}`
      : 'No objective'}
      
      </div>
      
    </div>
<div className='flex md:hidden '>
        <ScoreCounter score={score} />
      </div>


    {/*  Sidebar */}
    <div
      className="
        hidden md:flex flex-col justify-between
        bg-neutral-950 p-4 rounded-lg border border-neutral-800
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
          ? `${objective.minLength}-letter words found`
          : objective.type === 'score'
          ? 'Score'
           : objective.type === 'lightsUp' 
          ? `Lights turned on `
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
          className="px-4 py-2 bg-red-900 text-white rounded hover:bg-red-700 transition"
        >
          Clear Selection
        </button>

       <button
  disabled={!isWordValid || movesLeft <= 0 || isGameOver}
  onClick={applyWordMatch}
  className={`px-4 py-2 rounded transition ${
    isWordValid && movesLeft > 0 && !isGameOver
      ? 'bg-green-600 text-white shadow-lg shadow-green-400 animate-pulse z-20'
      : 'bg-gray-200 text-white z-20 cursor-not-allowed opacity-60'
  }`}
>
  Submit Word
</button>
   


        {/* Current word (desktop only) */}
        <div className="hidden md:block flex-1 overflow-auto mt-2">
          <WordDisplay word={getSelectedWord()} />
        </div>


        <div className="hidden md:block flex-1 overflow-auto mt-2">
          <button onClick={() => router.push("/levels")} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-red-700 transition">Back</button>
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
        ? 'tile animate-warped warped-tile'
        : '';
        const dull = tile?.isDull 
        ? 'bg-gradient-to-br from-neutral-700 to-neutral-700 text-gray-100 border border-neutral-500  brightness-85'
        : '';
        const locked = tile?.isLocked
  ? 'bg-gray-800 text-gray-400 border-2 border-gray-500 relative overflow-hidden locked-chain'
  : '';
  const bone = tile?.isBone
  ? tile.isRipe
    ? 'tile-bone-ripe'
    : 'tile-bone-unripe'
  : '';
   const bulb = tile?.isLightBulb ? tile.isBulbOn ? "bulb bulb-on"
   : "bulb bulb-off" : "";

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
            ${anim} ${tile?.gem ? getGemGlow(tile.gem) : ''} ${bulb} ${bone} ${tile.isBurnt ? 'bg-[#fff000] opacity-80 w-8 h-8 rounded-[6px]' : ''}  ${locked} ${fire} ${cursed} ${warped} ${dull}
          `}
        >
          {tile?.gem && (
            <div
              className={`absolute inset-0 z-0 rounded-[6px] animate-pulse ${getGemBackground(tile.gem)}`}
            />
          )}

          {tile?.isLocked && (
  <div className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none">
    <div className="w-3/4 h-3/4 border-4 border-gray-600 rounded-lg rotate-45 opacity-70" />
  </div>
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
            ): tile.isLocked ? (
            <div className="absolute bottom-1 right-1 w-2 h-2 sm:w-5 sm:h-5 rounded-full bg-gray-700 text-white text-[10px] sm:text-xs font-bold flex items-center justify-center z-10">
            {tile.lockTurns}
            </div>       
          ) : tile?.isWarped ? (
            <div className="absolute bottom-1 right-1 w-2 h-2 sm:w-5 sm:h-5 rounded-full bg-yellow-400 text-black text-[10px] sm:text-xs font-bold flex items-center justify-center z-10 shadow-md shadow-yellow-300/50 animate-pulse">
              {tile.warpTurns}
            </div>
          )  : tile?.isBone ? (
  <div
    className={`absolute bottom-1 right-1 w-2 h-2 sm:w-5 sm:h-5 rounded-full text-white text-[10px] sm:text-xs font-bold flex items-center justify-center z-10 shadow-md transition-all ${
      tile.isRipe
        ? "bg-teal-400/80 shadow-teal-300/50 animate-pulse"
        : "bg-[#0f3b3a]/80 text-teal-200"
    }`}
  >
    {tile.boneTurns}
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
      <div className="block md:hidden w-full mt-2 text-center absolute top-105">
        <WordDisplay word={getSelectedWord()} />
      </div>

 {/* --- Bottom Bar (Mobile only) --- */}
      <div className="flex md:hidden justify-around items-center w-full mt-10 bg-neutral-900 border border-neutral-800 rounded-lg p-2">
        <button
          onClick={clearSelection}
          className="px-3 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition"
        >
          Clear
        </button>
        <button
          disabled={!isWordValid || movesLeft <= 0 || isGameOver}
          onClick={applyWordMatch}
          className={`px-3 py-2 text-sm rounded transition ${
            isWordValid && movesLeft > 0 && !isGameOver
              ? "bg-green-600 text-white shadow-md shadow-green-400 animate-pulse"
              : "bg-gray-700 text-white cursor-not-allowed opacity-60"
          }`}
        >
          Submit
        </button>
        <div className="bg-orange-700 rounded text-white cursor-not-allowed opacity-60">
          <button onClick={() => router.push("/levels")} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">Back</button>
      </div>
      </div>
    </div>
  </div>

{/* --- Objective Popup (Fixed & Responsive) --- */}
{showObjectivePopup && (
  <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 overflow-hidden">
    <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-4 sm:p-6 w-full max-w-xs sm:max-w-md text-center space-y-3 sm:space-y-4 shadow-xl animate-fade-in">
      <h2 className="text-lg sm:text-xl font-semibold text-white">Objective</h2>

      {objective ? (
        <p className="text-gray-300 text-xs sm:text-sm leading-snug">
          {objective.type === "score" && `Reach ${objective.objGoal} points`}
          {objective.type === "words" && `Find ${objective.objGoal} words of ${objective.minLength} letters`}
          {objective.type === "destroy" &&
            `Destroy ${objective.objGoal} ${objective.tileType} tiles`}
            {objective.type === "lightsUp" && `Turn up the lights!`}
        </p>
      ) : (
        <p className="text-gray-500 text-xs sm:text-sm italic">No objective</p>
      )}

      <button
        onClick={() => setShowObjectivePopup(false)}
        className="mt-3 sm:mt-4 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded transition text-sm sm:text-base"
      >
        Ok
      </button>
    </div>
  </div>
)}

{/* --- End Results Popup --- */}
{isGameOver && (
  <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
    <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-4 sm:p-6 w-11/12 max-w-xs sm:max-w-md text-center space-y-3 sm:space-y-4 shadow-xl animate-fade-in mb-32 sm:mb-16">
      <h2 className="text-lg sm:text-xl font-semibold text-white">
        {gameResult === "win"
          ? "Level Complete!"
          : gameResult === "fail" || gameResult === "fire"
          ? "Game Over"
          : ""}
      </h2>

      <p className="text-gray-300 text-xs sm:text-sm">
        {gameResult === "win"
          ? "You successfully completed the objective!"
          : gameResult === "fire"
          ? "Tiles are ignited!"
          : "You ran out of moves."}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
        <button
          onClick={() => window.location.reload()}
          className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded transition text-sm sm:text-base"
        >
          Retry
        </button>

        {gameResult === "win" && (
          <button
            onClick={() => {
              const nextLevel = levelId + 1;
              localStorage.setItem("currentLevel", nextLevel.toString());
              window.location.href = "/play";
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded transition text-sm sm:text-base"
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

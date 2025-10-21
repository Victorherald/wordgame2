"use client";
import { useState, useEffect, useRef } from "react";
import { baseLevels } from "../data/levels";
import { LetterBoard } from "../components/GameBoard";

export default function PlayPage() {
  // Keep baseLevels() stable using useRef so it doesn’t regenerate
  const initialLevels = useRef(baseLevels());
  const [levels, setLevels] = useState(initialLevels.current);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);



  useEffect(() => {
    const saved = localStorage.getItem("savedLevels");
    const storedLevels = saved ? JSON.parse(saved) : initialLevels.current;

    const selectedId = Number(localStorage.getItem("selectedLevel")) || 1;
    const foundIndex = storedLevels.findIndex((lvl: any) => lvl.id === selectedId);

    setLevels(storedLevels);
    setCurrentLevelIndex(foundIndex !== -1 ? foundIndex : 0);
  }, []);

  const level = levels[currentLevelIndex];
  const layout = level.layout || level.board;

  const handleNextLevel = () => {
    const nextIndex = currentLevelIndex + 1;
    if (nextIndex >= levels.length) return;

    const unlocked = JSON.parse(localStorage.getItem("unlockedLevels") || "[1]");
    const nextId = levels[nextIndex].id;
    const updated = Array.from(new Set([...unlocked, nextId]));
    localStorage.setItem("unlockedLevels", JSON.stringify(updated));

    setCurrentLevelIndex(nextIndex);
    localStorage.setItem("selectedLevel", nextId.toString());
  };

  const handleRestartProgress = () => {
    localStorage.clear();
    setLevels(initialLevels.current);
    setCurrentLevelIndex(0);
    alert("Progress restarted!");
  };

  console.log("Rendering PlayPage for level:", level.id, "-", level.name);


  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6">
      <LetterBoard
        key={level.id}
        layout={layout as ("normal" | "cursed" | "warped" | "fire" | "removed")[][]}
        objective={level.objective}
        moves={level.moves ?? 15}
        levelName={level.name}
        onNextLevel={handleNextLevel}
      />

      <div className="mt-4 flex flex-col items-center gap-3 text-sm text-gray-400">
        <div>
          Level {level.id} of {levels.length} — <strong>{level.name}</strong>
        </div>
        <button
          onClick={handleRestartProgress}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white text-sm"
        >
          Restart Progress
        </button>
      </div>
    </main>
  );
}

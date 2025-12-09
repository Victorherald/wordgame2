"use client";
import { useState, useEffect } from "react";
import { LetterBoard } from "../components/GameBoard";
import { loadProgress, unlockNextLevel } from "@/utils/storage";
import { LevelData } from "@/lib/server/levels";

export default function PlayPage() {
  const [levels, setLevels] = useState<LevelData[]>([]);
  const [level, setLevel] = useState<LevelData | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Always read localStorage freshly when this page mounts
  useEffect(() => {
    const storedId = localStorage.getItem("selectedLevel");
    const levelId = storedId ? Number(storedId) : 1;
    setSelectedId(levelId);

    const savedProgress = loadProgress();
    if (savedProgress) setLevels(savedProgress);
  }, []);

  // ✅ Fetch the actual level data every time selectedId changes
  useEffect(() => {
    if (!selectedId) return;
    async function loadLevel() {
      try {
        setLoading(true);
        const res = await fetch(`/api/levels/${selectedId}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Level not found");
        const data: LevelData = await res.json();
        setLevel(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadLevel();
  }, [selectedId]);

  // ✅ Unlock next level & save progress
  const handleNextLevel = () => {
    if (!levels || !selectedId) return;
    const updated = unlockNextLevel(levels, selectedId);
    setLevels(updated);
    const nextId = selectedId + 1;
    localStorage.setItem("selectedLevel", String(nextId));
    setSelectedId(nextId);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-neutral-950">
        <div className="animate-pulse text-lg">Loading level...</div>
      </main>
    );
  }

  if (error || !level) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-neutral-950">
        <p>⚠️ {error ?? "Unable to load level"}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6">
      <LetterBoard
        key={level.id}
        layout={level.board}
        objective={level.objective}
        moves={level.moves ?? 15}
        levelName={level.name}
        onNextLevel={handleNextLevel}
        level={level}
      />
    </main>
  );
}

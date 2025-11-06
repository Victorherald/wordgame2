"use client";
import { useState, useEffect } from "react";
import { LetterBoard } from "../components/GameBoard";

export default function PlayPage() {
  const [level, setLevel] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number>(1);


  useEffect(() => {
  const saved = localStorage.getItem("selectedLevel");
  setSelectedId(saved ? Number(saved) : 1);
}, []);

  useEffect(() => {
    async function loadLevel() {
      try {
        const res = await fetch(`/api/levels/${selectedId}`);
        if (!res.ok) throw new Error("Level not found");
        const data = await res.json();
        setLevel(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadLevel();
  }, [selectedId]);

  const handleNextLevel = () => {
    const nextId = selectedId + 1;
    localStorage.setItem("selectedLevel", String(nextId));
    window.location.reload(); // reload to fetch next level
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-neutral-950">
        Loading level...
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

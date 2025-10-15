"use client";
import { useParams } from "next/navigation";
import { baseLevels } from "../data/levels";
import { LetterBoard } from "../components/GameBoard";

export default function PlayPage() {
  const params = useParams();
  const levelId = params?.id ? parseInt(params.id as string) : 1; // Default to level 1

  const levels = baseLevels();
  const level = levels.find((l) => l.id === levelId) || levels[0];

  const layout = level.layout || level.board; // fallback to board if layout missing

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6">
      <LetterBoard
        layout={layout as ("normal" | "cursed" | "warped" | "fire")[][]}
        objective={level.objective}
      />
    </main>
  );
}
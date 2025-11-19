"use client";
import { useEffect, useState } from "react";
import { loadProgress, saveProgress } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { Lock, Play } from "lucide-react";
import { LevelData } from "@/app/data/levels";

export default function LevelList() {
  const [levels, setLevels] = useState<LevelData[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchLevels() {
      try {
        const res = await fetch("/api/levels", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to fetch levels (${res.status})`);
        const data: LevelData[] = await res.json();

        // Try to load local progress
        const progress = loadProgress();

        if (progress && progress.length === data.length) {
          setLevels(progress);
        } else {
          // initialize localStorage with fresh levels (lock all but 1)
          const initialized = data.map((lvl) => ({
            ...lvl,
            locked: lvl.id !== 1,
          }));
          setLevels(initialized);
          saveProgress(initialized);
        }
      } catch (err) {
        console.error("Error loading levels:", err);
        setLevels([]);
      } finally {
        setLoading(false);
      }
    }

    fetchLevels();
  }, []);

  const handlePlay = (lvlId: number) => {
    const level = levels.find((l) => l.id === lvlId);
    if (!level || level.locked) return;
    localStorage.setItem("selectedLevel", lvlId.toString());
    router.push("/play");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-6">
        <div className="text-lg animate-pulse">Loading levels...</div>
      </main>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {levels.map((lvl) => (
          <div
            key={lvl.id}
            className={`rounded-lg border p-4 flex flex-col items-center justify-between text-center transition ${
              lvl.locked
                ? "bg-neutral-800 text-gray-500 border-neutral-700"
                : "bg-neutral-900 text-white border-green-700 hover:border-green-500 hover:scale-105"
            }`}
          >
            <h2 className="text-xl font-bold">{lvl.name}</h2>
            {lvl.locked ? (
              <div className="mt-2 flex items-center gap-1 text-gray-400">
                <Lock className="w-5 h-5" /> Locked
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-400">
                  {lvl.objective?.type === "score" &&
                    `Reach ${lvl.objective.objGoal} points`}
                  {lvl.objective?.type === "words" &&
                    `Find ${lvl.objective.objGoal} words`}
                  {lvl.objective?.type === "destroy" &&
                    `Destroy ${lvl.objective.objGoal} ${lvl.objective.tileType} tiles`}
                </p>
                <button
                  onClick={() => handlePlay(lvl.id)}
                  className="mt-3 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                >
                  <Play className="w-4 h-4" /> Play
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

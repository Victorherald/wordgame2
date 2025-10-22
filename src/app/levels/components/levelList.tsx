"use client";
import { useEffect, useState } from "react";
import { baseLevels } from "../../data/levels";
import { loadProgress, saveProgress } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { Lock, Unlock, Play} from "lucide-react";

type LevelListProps = {
  overrideLevels?: ReturnType<typeof baseLevels>;
};

export default function LevelList({ overrideLevels }: LevelListProps) {
  const [levels, setLevels] = useState(baseLevels());
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
  const router = useRouter();

    // Load unlocked progress
  useEffect(() => {
    const savedUnlocked = localStorage.getItem("unlockedLevels");
    if (savedUnlocked) {
      try {
        const parsed = JSON.parse(savedUnlocked);
        if (Array.isArray(parsed)) setUnlockedLevels(parsed);
      } catch {}
    }
  }, []);

  

 const handlePlay = (lvlId: number) => {
    localStorage.setItem("selectedLevel", lvlId.toString());
    router.push("/play");
  };

  return (
     <div className="w-full flex flex-col gap-6 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {levels.map((lvl) => {
          const isUnlocked = unlockedLevels.includes(lvl.id);

          return (
            <div
              key={lvl.id}
              className={`rounded-lg border p-4 flex flex-col items-center justify-between text-center transition ${
                isUnlocked
                  ? "bg-neutral-900 text-white border-green-700 hover:border-green-500 hover:scale-105"
                  : "bg-neutral-800 text-gray-500 border-neutral-700"
              }`}
            >
              <h2 className="text-xl font-bold">{lvl.name}</h2>
              <p className="text-sm text-gray-400">{lvl.objective?.type === "score" && `Reach ${lvl.objective.objGoal} points`}
  {lvl.objective?.type === "words" && `Find ${lvl.objective.objGoal} words`}
  {lvl.objective?.type === "destroy" && `Destroy ${lvl.objective.objGoal} ${lvl.objective.tileType} tiles`}</p>

              {isUnlocked ? (
                <button
                  onClick={() => handlePlay(lvl.id)}
                  className="mt-3 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                >
                  <Play className="w-4 h-4" /> Play
                </button>
              ) : (
                <span className="mt-2 flex items-center gap-1 text-gray-400">
                  <Lock className="w-5 h-5" /> Locked
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

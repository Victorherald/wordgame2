"use client";
import { useEffect, useState } from "react";
import { loadProgress, saveProgress } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { Lock, Unlock, Play} from "lucide-react";

type Level = {
  id: number;
  name: string;
  objective?: {
    type: string;
    objGoal: number;
    tileType?: string;
  };
};


type Props = {
  overrideLevels?: Level[]; // optional -- used by LevelList if provided
};


export default function LevelList({ overrideLevels }: Props) {
  const [levels, setLevels] = useState<Level[]>([]);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
  const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
  const router = useRouter();

  
  const levelsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(levels.length / levelsPerPage));

    // If overrideLevels changes (or exists on first render), use it and skip fetch
  useEffect(() => {
    if (overrideLevels && overrideLevels.length > 0) {
      setLevels(overrideLevels);
      setLoading(false);
      setPage(0);
      return;
    }

    // otherwise fetch from backend
    let mounted = true;
    const fetchLevels = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/levels", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to fetch levels (${res.status})`);
        const data = await res.json();
        if (mounted) {
          setLevels(Array.isArray(data) ? data : []);
          setPage(0);
        }
      } catch (err) {
        console.error("Failed to fetch levels:", err);
        if (mounted) setLevels([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchLevels();
    return () => {
      mounted = false;
    };
  }, [overrideLevels]);

   
const goNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };
  const goPrev = () => {
    if (page > 0) setPage(page - 1);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-6">
        <div className="text-lg animate-pulse">Loading levels...</div>
      </main>
    );
  }

  const startIndex = page * levelsPerPage;
  const visibleLevels = levels.slice(startIndex, startIndex + levelsPerPage);
  

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
           

              {isUnlocked ? (
                <>
                   <p className="text-sm text-gray-400">{lvl.objective?.type === "score" && `Reach ${lvl.objective.objGoal} points`}
  {lvl.objective?.type === "words" && `Find ${lvl.objective.objGoal} words`}
  {lvl.objective?.type === "destroy" && `Destroy ${lvl.objective.objGoal} ${lvl.objective.tileType} tiles`}</p>
                <button
                  onClick={() => handlePlay(lvl.id)}
                  className="mt-3 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                >
                  <Play className="w-4 h-4" /> Play
                </button>
                </>
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

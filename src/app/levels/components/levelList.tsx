"use client";
import { useEffect, useState } from "react";
import { loadProgress, saveProgress } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { Lock, Play } from "lucide-react";
import { LevelData } from "@/lib/server/levels";
import { motion } from "framer-motion";
import { Search } from "lucide-react";


export default function LevelList() {
  const [levels, setLevels] = useState<LevelData[]>([]);
  const [loading, setLoading] = useState(true);
  const [levelFilter, setLevelFilter] = useState<number | "">("");

  const router = useRouter();

  useEffect(() => {
    async function fetchLevels() {
      try {
        const res = await fetch("/api/levels", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to fetch levels (${res.status})`);
        const data: LevelData[] = await res.json();

        const progress = loadProgress();

        if (progress && progress.length === data.length) {
          setLevels(progress);
        } else {
          const initialized = data.map((lvl) => ({
            ...lvl,
            locked: false,
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

  const filteredLevels =
  levelFilter === ""
    ? levels
    : levels.filter((lvl) => lvl.id === levelFilter);


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

{/* Sticky Level Filter */}
<div
  className="
    sticky top-0 z-30
    w-full
    bg-neutral-950/90 backdrop-blur
    border-b border-neutral-800
    px-4 py-3
    flex justify-center
  "
>
  <div className="w-full max-w-sm flex items-center gap-3">
    <label className="text-sm text-gray-400 whitespace-nowrap">
      Type a level number:
    </label>

    <input
      type="number"
      min={1}
      placeholder=""
      value={levelFilter}
      onChange={(e) => {
        const val = e.target.value;
        setLevelFilter(val === "" ? "" : Number(val));
      }}
      className="
        w-24 rounded-md
        bg-neutral-900 border border-neutral-700
        px-2 py-1 text-sm text-white
        focus:outline-none focus:border-green-500
      "
    />
  </div>
</div>

{filteredLevels.length === 0 && (
  <p className="text-sm text-gray-500 text-center mt-4">
    No level found.
  </p>
)}


<div className="h-4" />


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredLevels.map((lvl) => (
          <div
            key={lvl.id}
            className={`
              rounded-lg border p-4 flex flex-col items-center justify-between text-center transition

              ${lvl.locked ? "bg-neutral-800 text-gray-500 border-neutral-700" : ""}
         
             
              ${lvl.difficulty === "Hard Level" ? "bg-orange-900/40 text-white border-orange-600 hover:border-orange-500" : ""}
             ${lvl.difficulty === "demon"
  ? `
    bg-gradient-to-br from-red-950 via-red-900 to-orange-900
    text-red-100
    border border-red-700
    shadow-lg shadow-red-900/50
    hover:shadow-red-700/70
    hover:border-red-500
    hover:scale-[1.06]
    relative
    overflow-hidden
  `
  : ""
}


              ${!lvl.locked ? "hover:scale-105" : ""}
            `}
          >
            <h2
              className={`
                text-xl font-bold
                ${lvl.difficulty === "Hard Level" ? "text-orange-300" : ""}
                ${lvl.difficulty === "demon" ? "text-red-400" : ""}
              `}
            >
              {lvl.name}
            </h2>

            {/* Difficulty Tag */}
            {!lvl.locked && lvl.difficulty && (
              <span
                className={`
                  text-xs font-bold uppercase mt-1 px-2 py-1 rounded
                  ${lvl.difficulty === "Hard Level" ? "text-orange-400" : ""}
                  ${lvl.difficulty === "demon" ? "text-red-500" : ""}
                `}
              >
                {lvl.difficulty}
              </span>
            )}

            {lvl.locked ? (
              <div className="mt-2 flex items-center gap-1 text-gray-400">
                <Lock className="w-5 h-5" /> Locked
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-400">
                  {lvl.objective?.type === "score" &&
                    `Reach ${lvl.objective.objGoal} points`}
                    {lvl.objective?.type === "defrost" &&
                    `Clear ${lvl.objective.objGoal} ice`}
                     {lvl.objective?.type === "lightsUp" &&
                    `Turn on the lights!`}
                  {lvl.objective?.type === "words" &&
                    `Find ${lvl.objective.objGoal} words`}
                  {lvl.objective?.type === "destroy" &&
                    `Destroy ${lvl.objective.objGoal} ${lvl.objective.tileType} tiles`}
                </p>

                <button
                  onClick={() => handlePlay(lvl.id)}
                  className={`${lvl.difficulty === 'Hard Level' ? 'mt-3 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition' : 'mt-3 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition' } ${lvl.difficulty === 'demon' ? 'mt-3 flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition' : 'mt-3 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition'}`}
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

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

  // World Cup theme ends after July 20, 2026
const today = new Date();
const worldCupEnd = new Date("2026-07-20T23:59:59");

const isWorldCupTheme = today <= worldCupEnd;

  if (loading) {
    return (
     <main
  className={`min-h-screen text-white flex items-center justify-center p-6 ${
    isWorldCupTheme ? "soccer-pitch-bg" : "bg-black"
  }`}
>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-lg font-bold"
        >
         {` ${isWorldCupTheme ? "⚽ Loading levels..." : "Loading levels..." }`} 
        </motion.div>
      </main>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6 items-center">

{/* Sticky Level Filter */}
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  className={`
    sticky top-0 z-30
    w-full
  
     ${  isWorldCupTheme
    ? "bg-gradient-to-r from-green-900/80 to-green-800/80 border-yellow-400/50"
    : "bg-black/90 border-gray-700" }
    px-4 py-4
    flex justify-center
    rounded-lg shadow-lg`}
  
>
  <div className="w-full max-w-sm flex items-center gap-3">
    <label className="text-sm text-white font-semibold whitespace-nowrap">
      🔍 Level #:
    </label>

    <input
      type="number"
      min={1}
      placeholder="Search..."
      value={levelFilter}
      onChange={(e) => {
        const val = e.target.value;
        setLevelFilter(val === "" ? "" : Number(val));
      }}
      className="
        w-24 rounded-md
        bg-white/10 border-2 border-yellow-400/50
        px-3 py-2 text-sm text-white font-semibold
        focus:outline-none focus:border-yellow-300 focus:bg-white/20
        placeholder-white/50
      "
    />
  </div>
</motion.div>

{filteredLevels.length === 0 && (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-lg text-yellow-300 text-center mt-4 font-semibold"
  >
    ⚠️ No level found.
  </motion.p>
)}


<div className="h-4" />


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {filteredLevels.map((lvl, idx) => (
          <motion.div
            key={lvl.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`
              rounded-xl border-2 p-6 flex flex-col items-center justify-between text-center transition-all transform
              ${lvl.locked 
                ? "bg-gray-800/50 text-gray-400 border-gray-600 cursor-not-allowed" 
                : lvl.difficulty === "demon"
                ? "bg-gradient-to-br from-red-950 via-orange-900 to-red-900 text-red-100 border-red-600 shadow-lg shadow-red-900/50 hover:shadow-red-700/70 hover:border-red-500 hover:scale-105"
                : lvl.difficulty === "Hard Level"
                ? "bg-gradient-to-br from-orange-950 to-orange-900 text-orange-100 border-orange-600 hover:border-orange-500 hover:scale-105 shadow-lg shadow-orange-900/30"
                : isWorldCupTheme
  ? "soccer-level-card border-green-600/50"
  : "bg-gray-900 text-white border-gray-700 hover:border-gray-500 hover:scale-105"
              }
            `}
          >
            <h2
              className={`
                text-2xl font-bold mb-2
                ${lvl.difficulty === "Hard Level" ? "text-orange-300" : ""}
                ${lvl.difficulty === "demon" ? "text-red-300 animate-pulse" : ""}
                ${!lvl.locked && lvl.difficulty !== "demon" && lvl.difficulty !== "Hard Level" ? "text-yellow-300" : ""}
              `}
            >
               {lvl.name}
            </h2>

            {/* Difficulty Tag */}
            {!lvl.locked && lvl.difficulty && (
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`
                  text-xs font-bold uppercase mt-2 px-3 py-1 rounded-full
                  ${lvl.difficulty === "Hard Level" ? "bg-orange-600 text-white" : ""}
                  ${lvl.difficulty === "demon" ? "bg-red-600 text-white animate-pulse" : ""}
                  ${!lvl.difficulty || (lvl.difficulty !== "Hard Level" && lvl.difficulty !== "demon") ? "bg-green-600 text-white" : ""}
                `}
              >
                {lvl.difficulty === "demon" ? "🔥 DEMON" : lvl.difficulty === "Hard Level" ? "⚠️ HARD" : "✅ NORMAL"}
              </motion.span>
            )}

            {lvl.locked ? (
              <div className="mt-4 flex items-center gap-2 text-gray-400 font-semibold">
                <Lock className="w-5 h-5" /> Locked
              </div>
            ) : (
              <>
                <p className="text-sm text-white/80 mt-3 font-semibold">
                  {lvl.objective?.type === "score" &&
                    `🎯 Reach ${lvl.objective.objGoal} points`}
                      {lvl.objective?.type === "spreadInk" &&
                    `🖤 Spread the ink around`}
                    {lvl.objective?.type === "defrost" &&
                    `❄️ Clear ${lvl.objective.objGoal} ice`}
                     {lvl.objective?.type === "lightsUp" &&
                    `💡 Turn on the lights!`}
                  {lvl.objective?.type === "words" &&
                    `📝 Find ${lvl.objective.objGoal} words`}
                  {lvl.objective?.type === "destroy" &&
                    `💥 Destroy ${lvl.objective.objGoal} ${lvl.objective.tileType} tiles`}
                     {lvl.objective?.type === "collectVelvet" &&
                    `✨ Squash ${lvl.objective.objGoal} velvets!`}
                     {lvl.objective?.type === "boss" &&
                    `👹 Defeat the boss!`}
                      {lvl.objective?.type === "chamberDrain" &&
                    `Drain the chambers!`}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePlay(lvl.id)}
                  className={`
                    mt-4 flex items-center gap-2 font-bold px-6 py-3 rounded-lg transition-all transform
                    ${lvl.difficulty === 'demon' 
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-lg shadow-red-600/50' 
                      : lvl.difficulty === 'Hard Level'
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white shadow-lg shadow-orange-600/50'
                      : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-lg shadow-green-600/50'
                    }
                  `}
                >
                  <Play className="w-4 h-4" /> Play
                </motion.button>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-sm text-yellow-300 whitespace-nowrap font-bold mt-6"
      >
        ⭐ NEW LEVELS ARE COMING SOON! ⭐
      </motion.p>
    </div>
  );
}

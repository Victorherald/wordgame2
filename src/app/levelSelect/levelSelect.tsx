"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LevelList from "../levels/components/levelList";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Level = {
  id: number;
  name: string;
  objective?: {
    type: string;
    objGoal: number;
    tileType?: string;
  };
};

export default function LevelSelect() {
  const [levels, setLevels] = useState<Level[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // World Cup theme ends after July 20, 2026
  const today = new Date();
  const worldCupEnd = new Date("2026-07-20T23:59:59");
  const isWorldCupTheme = today <= worldCupEnd;

  const thanksgivingStart = new Date("2026-11-01T00:00:00");
const thanksgivingEnd = new Date("2026-11-30T23:59:59");


  const levelsPerPage = 6;
  const totalPages = Math.ceil(levels.length / levelsPerPage);



const isThanksgivingTheme =
  today >= thanksgivingStart && today <= thanksgivingEnd;

  useEffect(() => {
    async function fetchLevels() {
      try {
        const res = await fetch("/api/levels", { cache: "no-store" });

        if (!res.ok) {
          throw new Error(`Failed to fetch levels (${res.status})`);
        }

        const data = await res.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid data from server");
        }

        setLevels(data);
      } catch (err: any) {
        console.error("Failed to fetch levels:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLevels();
  }, []);

  const goNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const goPrev = () => {
    if (page > 0) setPage(page - 1);
  };

  // Loading
  if (loading) {
    return (
      <main
       className={`min-h-screen flex items-center justify-center text-white ${
  isThanksgivingTheme
    ? "thanksgiving-bg"
    : isWorldCupTheme
    ? "soccer-pitch-bg"
    : "bg-black"
}`}
      >
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-lg font-bold text-white/80"
        >
         {isThanksgivingTheme
  ? "🍂 Preparing the Thanksgiving feast..."
  : isWorldCupTheme
  ? "⚽ Loading levels..."
  : "Loading levels..."}
        </motion.div>
      </main>
    );
  }

  // Error
  if (error) {
    return (
      <main
        className={`min-h-screen flex items-center justify-center ${
          isWorldCupTheme ? "soccer-pitch-bg" : "bg-black"
        }`}
      >
        <p className="text-xl font-bold text-red-300">⚠️ {error}</p>
      </main>
    );
  }

  return (
    <main
  className={`min-h-screen text-white flex flex-col items-center justify-center p-6 relative overflow-hidden ${
  isThanksgivingTheme
    ? "thanksgiving-bg"
    : isWorldCupTheme
    ? "soccer-pitch-bg"
    : "bg-black"
}`}
    >
      {/* World Cup background decoration */}
  {isThanksgivingTheme && (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-10 left-10 text-5xl opacity-70 animate-pulse">
      🍂
    </div>

    <div className="absolute top-24 right-16 text-6xl opacity-80">
      🍁
    </div>

    <div className="absolute bottom-20 left-16 text-5xl opacity-70">
      🍂
    </div>

    <div className="absolute bottom-10 right-12 text-6xl opacity-80">
      🦃
    </div>

    <div className="absolute top-1/2 left-6 text-4xl opacity-50">
      🍁
    </div>

    <div className="absolute top-1/3 right-8 text-4xl opacity-50">
      🍂
    </div>
  </div>
)}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center mb-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-2">
        {isThanksgivingTheme ? (
  <>
    🍂{" "}
    <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
      Select Your Level
    </span>{" "}
    🦃
  </>
) : isWorldCupTheme ? (
  <>
    ⚽{" "}
    <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
      Select Your Level
    </span>{" "}
    ⚽
  </>
) : (
  <span className="text-white">Select Your Level</span>
)}
        </h1>

    <p className="text-lg text-white/70 font-semibold">
  {isThanksgivingTheme
    ? "Gather around, give thanks, and solve your way through the feast!"
    : isWorldCupTheme
    ? "Choose a challenge and score big on the soccer pitch!"
    : "Choose a challenge and begin your word puzzle adventure!"}
</p>
      </motion.div>

      {/* Level List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-4xl relative z-10"
      >
        <LevelList />
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-6 mt-10 relative z-10"
        >
          <button
            onClick={goPrev}
            disabled={page === 0}
            className={`p-3 rounded-full transition transform ${
              page === 0
                ? "bg-white/10 text-gray-400 cursor-not-allowed"
                : isWorldCupTheme
                ? "bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-500 hover:to-green-400 hover:scale-110 shadow-lg"
                : "bg-neutral-800 border border-neutral-700 text-white hover:bg-neutral-700 hover:scale-110 shadow-lg"
            }`}
          >
            <ChevronLeft size={28} />
          </button>

          <span className="text-white/80 text-lg font-bold min-w-[200px]">
            Page{" "}
            <span
              className={
                isWorldCupTheme
                  ? "text-yellow-300 font-bold"
                  : "text-green-400 font-bold"
              }
            >
              {page + 1}
            </span>{" "}
            of{" "}
            <span
              className={
                isWorldCupTheme
                  ? "text-yellow-300 font-bold"
                  : "text-green-400 font-bold"
              }
            >
              {totalPages}
            </span>
          </span>

          <button
            onClick={goNext}
            disabled={page === totalPages - 1}
            className={`p-3 rounded-full transition transform ${
              page === totalPages - 1
                ? "bg-white/10 text-gray-400 cursor-not-allowed"
                : isWorldCupTheme
                ? "bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-500 hover:to-green-400 hover:scale-110 shadow-lg"
                : "bg-neutral-800 border border-neutral-700 text-white hover:bg-neutral-700 hover:scale-110 shadow-lg"
            }`}
          >
            <ChevronRight size={28} />
          </button>
        </motion.div>
      )}
    </main>
  );
}
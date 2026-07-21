"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LetterBoard } from "../components/GameBoard";
import { loadProgress, unlockNextLevel } from "@/utils/storage";
import { LevelData } from "@/lib/server/levels";

const loadingTips = [
  "Longer words award significantly more points.",
  "Focus on the level objective before chasing a high score.",
  "Plan several moves ahead whenever possible.",
  "Special tiles can completely change your strategy.",
  "Clearing obstacles early often opens more words.",
  "Save your remaining moves for difficult situations.",
  "Beware of Fire Tiles!",
  "Some levels are easier if you work from the edges inward.",
  "Don't ignore short words—they can unlock larger opportunities.",
  "Take your time. A better word is often hiding nearby.",
];

export default function PlayPage() {
  const [levels, setLevels] = useState<LevelData[]>([]);
  const [level, setLevel] = useState<LevelData | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tip, setTip] = useState("");

  useEffect(() => {
    const storedId = localStorage.getItem("selectedLevel");
    const levelId = storedId ? Number(storedId) : 1;

    setSelectedId(levelId);

    const savedProgress = loadProgress();
    if (savedProgress) setLevels(savedProgress);
  }, []);

   // World Cup theme ends after July 20, 2026
const today = new Date();
const worldCupEnd = new Date("2026-07-20T23:59:59");

const isWorldCupTheme = today <= worldCupEnd;


  useEffect(() => {
    if (!loading) return;

    const changeTip = () => {
      setTip(
        loadingTips[Math.floor(Math.random() * loadingTips.length)]
      );
    };

    changeTip();

    const interval = setInterval(changeTip, 3500);

    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    if (!selectedId) return;

    async function loadLevel() {
      try {
        setLoading(true);

        const res = await fetch(`/api/levels/${selectedId}`, {
          cache: "no-store",
        });

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
        <main  className={` min-h-screen  flex items-center justify-center px-6 overflow-hidden ${
    isWorldCupTheme ? "soccer-pitch-bg" : "bg-black"
  }`}>
    
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-lg text-center"
        >
          {/* Animated Letter Tile */}
          <motion.div
            initial={{
              scale: 0,
              rotate: -180,
              y: -80,
            }}
            animate={{
              scale: 1,
              rotate: 360,
              y: 0,
            }}
            transition={{
              scale: {
                type: "spring",
                stiffness: 200,
                damping: 10,
              },
              y: {
                type: "spring",
                stiffness: 200,
                damping: 12,
              },
              rotate: {
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="mx-auto mb-8 w-24 h-24 rounded-lg bg-gradient-to-b from-[#F8E9BB] via-[#F1D99A] to-[#DFC06A] border-2 border-[#B58B39] shadow-2xl flex items-center justify-center"
          >
            <span className="text-5xl font-black text-black">W</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{
              opacity: 0,
              y: -50,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 10,
            }}
            className="text-4xl font-extrabold text-purple-300"
          >
            Loading Level
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 180,
            }}
            className="mt-3 text-white/80 font-semibold"
          >
            Preparing Level {selectedId ?? 1}
          </motion.p>

          {/* Loading Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-purple-300"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Animated Progress Bar */}
          <div className="mt-8 h-3 rounded-full bg-black/30 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-blue-300 to-pink-500"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Tip Card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
            }}
            className="mt-8 rounded-xl border border-yellow-400/40 bg-black/30 backdrop-blur-md p-6"
          >
            <h2 className="text-lg font-bold text-yellow-300 mb-3">
              Gameplay Tip
            </h2>

            <motion.p
              key={tip}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/80 leading-relaxed"
            >
              {tip}
            </motion.p>
          </motion.div>
        </motion.div>
      </main>
    );
  }

  if (error || !level) {
    return (
      <main className="min-h-screen  flex items-center justify-center text-white">
        <motion.p
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-xl font-bold text-red-300"
        >
          {error ?? "Unable to load level"}
        </motion.p>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center p-6">
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
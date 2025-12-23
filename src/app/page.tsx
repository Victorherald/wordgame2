"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SnowEffect } from "./particles/snowParticles";

export default function Home() {
  const router = useRouter();
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (name: string) => setActivePopup(name);
  const closePopup = () => setActivePopup(null);

  // 🎄 Christmas season check (Dec 1 → Jan 5)
  const isChristmasSeason = () => {
    const now = new Date();
    const month = now.getMonth(); // 0 = Jan, 11 = Dec
    const day = now.getDate();
    return month === 11 || (month === 0 && day <= 5);

  };

  
  const christmas = isChristmasSeason();


  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      
      {/* ❄️ Snow Particles */}
      {christmas && <SnowEffect />}

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-6">
        
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            textShadow: christmas
              ? [
                  "0 0 6px rgba(255,255,255,0.6)",
                  "0 0 14px rgba(180,220,255,0.9)",
                  "0 0 6px rgba(255,255,255,0.6)",
                ]
              : "0 0 15px rgba(255,255,255,0.4)",
          }}
          transition={{
            duration: 0.6,
            textShadow: christmas
              ? { repeat: Infinity, duration: 2, ease: "easeInOut" }
              : undefined,
          }}
          className={`
            text-5xl md:text-7xl font-bold mb-12
            ${
              christmas
                ? "text-sky-200 drop-shadow-[0_0_20px_rgba(200,230,255,0.9)]"
                : "text-amber-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            }
          `}
        >
          Worzzle
        </motion.h1>

        {/* Menu Buttons */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <button
            onClick={() => router.push("/levels")}
            className="w-48 py-3 text-lg font-semibold bg-green-600 rounded-lg hover:bg-green-700 transition shadow-lg shadow-green-500/30"
          >
            Play
          </button>

          <button
            onClick={() => openPopup("help")}
            className="w-48 py-3 text-lg font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
          >
            Help
          </button>

          <button
            onClick={() => openPopup("options")}
            className="w-48 py-3 text-lg font-semibold bg-purple-600 rounded-lg hover:bg-purple-700 transition shadow-lg shadow-purple-500/30"
          >
            Options
          </button>

          <button
            onClick={() => openPopup("about")}
            className="w-48 py-3 text-lg font-semibold bg-amber-600 rounded-lg hover:bg-amber-700 transition shadow-lg shadow-amber-500/30"
          >
            About
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {activePopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-neutral-900 p-6 rounded-2xl shadow-xl max-w-md w-full text-center"
            >
              <h2 className="text-2xl font-bold mb-4 capitalize">
                {activePopup}
              </h2>

              <p className="text-gray-300 mb-6">
                {activePopup === "help" &&
                  "Form words by selecting adjacent tiles. Match longer words to earn more points!"}

                {activePopup === "options" &&
                  "Options menu will allow sound, theme, and difficulty adjustments soon."}

                {activePopup === "about" &&
                  "Worzzle is a word-forming puzzle game inspired by Bookworm Adventures and Scrabble."}
              </p>

              <button
                onClick={closePopup}
                className="px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

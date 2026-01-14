"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SnowEffect } from "./particles/snowParticles";
import { Snowflake } from "lucide-react";



export default function Home() {

const SantaHat = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Hat body */}
    <path
      d="M10 38C10 20 48 10 54 32L10 38Z"
      fill="#dc2626"
      stroke="#991b1b"
      strokeWidth="2"
    />

    {/* White trim */}
    <rect
      x="8"
      y="36"
      width="48"
      height="8"
      rx="4"
      fill="#f8fafc"
    />

    {/* Pom */}
    <circle cx="54" cy="32" r="6" fill="#f8fafc" />
  </svg>
);




  const router = useRouter();
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [christmasGreeting , setChristmasGreeting] = useState(true);

  const openPopup = (name: string) => setActivePopup(name);
  const closePopup = () => setActivePopup(null);


  function closeGreeting() {
    setChristmasGreeting(false)
  }

  // 🎄 Christmas season check (Dec 1 → Jan 5)
  const isChristmasSeason = () => {
    const now = new Date();
    const month = now.getMonth(); // 0 = Jan, 11 = Dec
    const day = now.getDate();
    return month === 11 || (month === 0 && day <= 1);
  };

  // 🎆 New Year check (Dec 31 → Jan 3)
const isNewYearSeason = () => {
  const now = new Date();
  const month = now.getMonth(); // 0 = Jan
  const day = now.getDate();

  return (
   
    (month === 0 && day <= 3)       // Jan 1–3
  );
};

  const christmas = isChristmasSeason();
  const newYear = isNewYearSeason();
const currentYear = new Date().getFullYear();

  return (
    
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">

     <span className="absolute top-5 ">v 1.1.0.2</span>
      
      {/* ❄️ Snow Particles */}
      {christmas && <SnowEffect />}

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-6">
        
        {/* Title */}
        <motion.h1
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className={`
  relative flex items-center text-5xl md:text-7xl font-bold mb-4
  ${
    christmas
      ? "text-sky-200 drop-shadow-[0_0_20px_rgba(200,230,255,0.9)]"
      : newYear
      ? "bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,215,0,0.9)] animate-pulse"
      : "text-amber-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
  }
`}

>
  {/* W + Santa Hat */}
  <span className="relative inline-block">
    
    {/*isChristmasSeason() && (
      <SantaHat className="absolute -top-6 -left-4 w-10 rotate-[-20deg]" />
    ) */}
  </span>

  Worzzle

  {/* Snowflakes */}
  {isChristmasSeason() && (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/80"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0, 1, 0], y: [0, 30] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          style={{
            left: `${15 + i * 12}%`,
          }}
        >
          <Snowflake size={16 + i * 2} />
        </motion.div>
      ))}
    </div>
  )}
</motion.h1>

{newYear ? (
  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="
      text-lg md:text-2xl font-semibold
      text-amber-300
      drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]
      mb-10
    "
  >
     Happy New Year {currentYear}!
  </motion.p>
) : ""}



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

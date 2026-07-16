"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {BookOpen,  Info,Trophy,Gamepad2, Users, MessageCircle, Send} from "lucide-react";
  

  
  

import Image from "next/image";

export default function Home() {
  const SoccerBall = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="32" cy="32" r="30" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
      
      {/* Pentagon pattern - center */}
      <polygon points="32,12 42,20 38,32 26,32 22,20" fill="#000000" />
      
      {/* Hexagon pattern - top right */}
      <polygon points="45,18 52,22 52,32 45,36 38,32 38,22" fill="#000000" />
      
      {/* Hexagon pattern - bottom right */}
      <polygon points="45,46 52,42 52,32 45,28 38,32 38,42" fill="#000000" />
      
      {/* Pentagon pattern - bottom */}
      <polygon points="32,52 42,44 38,32 26,32 22,44" fill="#000000" />
      
      {/* Hexagon pattern - bottom left */}
      <polygon points="19,46 12,42 12,32 19,28 26,32 26,42" fill="#000000" />
      
      {/* Hexagon pattern - top left */}
      <polygon points="19,18 12,22 12,32 19,36 26,32 26,22" fill="#000000" />
    </svg>
  );

  const router = useRouter();
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (name: string) => setActivePopup(name);
  const closePopup = () => setActivePopup(null);

  // World Cup theme ends after July 20, 2026
const today = new Date();
const worldCupEnd = new Date("2026-07-20T23:59:59");

const isWorldCupTheme = today <= worldCupEnd;

  return (
  <div
  className={`relative min-h-screen overflow-hidden ${
    isWorldCupTheme
      ? "soccer-pitch-bg"
      : "bg-black"
  }`}
>
      {/* Soccer Ball Background Pattern */}
     {isWorldCupTheme && (
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div>
  
      <Image   className="absolute top-10 right-10 w-32 h-32 soccer-spin"
  src="/images/soccer-ball.png"
  alt="Tile"
  width={60}
  height={64}
/>
    </div>

    <div className="absolute bottom-20 left-10 w-24 h-24 soccer-bounce">
     <Image  
  src="/images/soccer-ball.png"
  alt="Tile"
  width={60}
  height={64}
/>
    </div>
  </div>
)}

      {/* Version Badge */}
      <span className="absolute top-5 left-5 text-white/60 text-xs font-semibold">v 1.0.8</span>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-6">
        
        {/* Title with Soccer Theme */}
    <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-8"
>
  <div className="flex items-center justify-center gap-3 mb-2">
    {isWorldCupTheme && (
      <Trophy className="w-8 h-8 text-yellow-300" />
    )}

    <h1
      className={
        isWorldCupTheme
          ? "soccer-title"
          : "text-5xl md:text-6xl font-extrabold text-white"
      }
    >
      Worzzle
    </h1>

    {isWorldCupTheme && (
      <Trophy className="w-8 h-8 text-yellow-300" />
    )}
  </div>

  <p
    className={
      isWorldCupTheme
        ? "soccer-subtitle"
        : "text-xl text-gray-400 font-semibold"
    }
  >
    The Ultimate Word Puzzle Game
  </p>
</motion.div>

       

        {/* Menu Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
        <button
  onClick={() => router.push("/levels")}
  className={`${
    isWorldCupTheme
      ? "soccer-btn"
      : "bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white"
  } w-48 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all`}
>
  <div className="flex items-center justify-center gap-2">
    <Gamepad2 className="w-5 h-5" />
    <span>Play Game</span>
  </div>
</button>

         <button
  onClick={() => openPopup("help")}
  className={`${
    isWorldCupTheme
      ? "soccer-btn"
      : "bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white"
  } w-48 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all`}
>
  <div className="flex items-center justify-center gap-2">
    <BookOpen className="w-5 h-5" />
    <span>How to Play</span>
  </div>
</button>

        <button
  onClick={() => openPopup("about")}
  className={`${
    isWorldCupTheme
      ? "soccer-btn"
      : "bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white"
  } w-48 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all`}
>
  <div className="flex items-center justify-center gap-2">
    <Info className="w-5 h-5" />
    <span>About</span>
  </div>
</button>

<button
  onClick={() => openPopup("community")}
  className={`${
    isWorldCupTheme
      ? "soccer-btn"
      : "bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white"
  } w-48 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all`}
>
  <div className="flex items-center justify-center gap-2">
    <Users className="w-5 h-5" />
    <span>Community</span>
  </div>
</button>
        </motion.div>

        {/* Footer */}
      <motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="absolute bottom-10 text-white/50 text-sm font-semibold"
>
  <span className="flex items-center justify-center gap-2">
    <Gamepad2 className="w-4 h-4" />
    <span>Made by Yakazuba Games</span>
  </span>
</motion.h1>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {activePopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
             className={`${
  isWorldCupTheme && activePopup !== "community"
    ? "soccer-container"
    : "bg-gray-900 border border-gray-700"
} p-8 rounded-2xl shadow-2xl max-w-md w-full text-center`}
            >
           <h2 className="flex items-center justify-center gap-2 text-3xl font-bold mb-4 capitalize text-white">
  {activePopup === "help" && (
    <>
      <BookOpen className="w-8 h-8" />
      <span>How to Play</span>
    </>
  )}

  {activePopup === "about" && (
    <>
      <Info className="w-8 h-8" />
      <span>About Worzzle</span>
    </>
  )}

    {activePopup === "community" && (
    <>
      <Users className="w-8 h-8" />
      <span>Community</span>
    </>
  )}
</h2>

              <p className="text-white/80 mb-6 leading-relaxed">
                {activePopup === "help" &&
                  "Form words by selecting adjacent tiles on the soccer pitch. Match longer words to earn more points and advance through the levels. The longer the word, the bigger your score!"}

                {activePopup === "about" &&
                  "Worzzle is a word-forming puzzle game inspired by Bookworm Adventures and Scrabble. This special World Cup edition brings the excitement of soccer to your word game experience!"}
              </p>

               {activePopup === "community" && (
  <div className="space-y-4 mb-6">
    <p className="text-white/80">
      Join the Worzzle community to report bugs, suggest ideas,
      compete with other players and stay updated!
    </p>

    <button
      onClick={() =>
        window.open("https://discord.gg/mUmkBqpTF", "_blank")
      }
     className={`${
  isWorldCupTheme && activePopup !== "community"
    ? "soccer-container"
    : "bg-gray-900 border border-gray-700"
} p-8 rounded-2xl shadow-2xl max-w-md w-full text-center`}
    >
      <MessageCircle className="w-5 h-5" />
      Join Discord
    </button>

    
  </div>
)}

              <button
                onClick={closePopup}
               className="bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
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

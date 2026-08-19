"use client";

import { useState, useEffect } from "react";
import { useAudio } from "./components/AudioProvider";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {BookOpen,  Info,Trophy,Gamepad2, Users, MessageCircle, Settings} from "lucide-react";
  import '../app/animations/interface.css';
  import { BoulevardBackground } from "../app/components/button/boulevardHouses";

import { NeonButton } from "../app/components/button/neonButton";

import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});
  
  


export default function Home() {
 const { playMusic } = useAudio();

useEffect(() => {
    playMusic("/audio/worzzlemenu (1).mp3");
}, []);

  

  const router = useRouter();
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [neonPhase, setNeonPhase] =
  useState<"purple" | "green" | "yellow">("yellow");

  const openPopup = (name: string) => setActivePopup(name);
  const closePopup = () => setActivePopup(null);


  

  const {
  musicVolume,
  setMusicVolume,
} = useAudio();

  // World Cup theme ends after July 20, 2026
const today = new Date();

const worldCupEnd = new Date("2026-07-20T23:59:59");
const blvdEnd = new Date("2026-09-30T23:59:59");

const isWorldCupTheme = today <= worldCupEnd;

const BlvdTheme =
  !isWorldCupTheme &&
  today <= blvdEnd;

  useEffect(() => {
  if (!BlvdTheme) return;

  const interval = setInterval(() => {
    setNeonPhase((prev) =>
      prev === "purple" ? "green" : "purple" 
    );
  }, 900);

  return () => clearInterval(interval);
}, [BlvdTheme]);

  return (
  <div
  className={`relative min-h-screen overflow-hidden ${
   isWorldCupTheme
      ? "soccer-pitch-bg"
      : BlvdTheme
      ? "bg-[#030306]"
      : "bg-black"
  }`}
>

  {BlvdTheme && <BoulevardBackground />}

{BlvdTheme && (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    {/* Purple street glow */}
    <div
      className="
        absolute
        top-[15%]
        left-[10%]
        w-[320px]
        h-[320px]
        rounded-full
        bg-purple-700/10
        blur-[120px]
      "
    />

    {/* Green street glow */}
    <div
      className="
        absolute
        bottom-[10%]
        right-[10%]
        w-[320px]
        h-[320px]
        rounded-full
        bg-green-500/10
        blur-[120px]
      "
    />

  

  </div>
)}


      {/* Soccer Ball Background Pattern */}
    {/* Puzzlevard ambient neon background */}
{BlvdTheme && (
  <>
    {/* Very subtle purple glow */}
    <div
      className="
        absolute
        -top-40
        -left-40
        w-[500px]
        h-[500px]
        rounded-full
        bg-purple-900/10
        blur-[140px]
        pointer-events-none
      "
    />

    {/* Very subtle green glow */}
    <div
      className="
        absolute
        -bottom-40
        -right-40
        w-[500px]
        h-[500px]
        rounded-full
        bg-green-900/10
        blur-[140px]
        pointer-events-none
      "
    />

    {/* Dim boulevard light strip */}
    <div
      className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        w-[2px]
        h-full
        bg-gradient-to-b
        from-transparent
        via-fuchsia-900/20
        to-transparent
        blur-[2px]
        pointer-events-none
      "
    />

    {/* Horizontal street glow */}
    <div
      className="
        absolute
        left-0
        right-0
        bottom-[18%]
        h-[2px]
        bg-gradient-to-r
        from-transparent
        via-red-900/25
        to-transparent
        blur-[3px]
        pointer-events-none
      "
    />
  </>
)}



      {/* Version Badge */}
      <span className="absolute top-5 left-5 text-white/60 text-xs font-semibold">v 1.2.0</span>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-6">
        
        {/* Title with Soccer Theme */}
    <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="relative text-center mb-8"
>
 {BlvdTheme ? (
  /* BOULEVARD SIGN */
  <div className="mb-4">

    <div className="neon-sign">

      <motion.div
        animate={{
          opacity: neonPhase === "purple" ? 1 : 0.15,
        }}
        transition={{ duration: 0.15 }}
        className="neon-word purple"
      >
        {"WOR".split("").map((letter, index) => (
          <span
            key={index}
            className="led-letter"
          >
            {letter}
          </span>
        ))}
      </motion.div>

      <motion.div
        animate={{
          opacity: neonPhase === "green" ? 1 : 0.15,
        }}
        transition={{ duration: 0.15 }}
        className="neon-word green"
      >
        {"ZZLE".split("").map((letter, index) => (
          <span
            key={index}
            className="led-letter"
          >
            {letter}
          </span>
        ))}
        
      </motion.div>

      {BlvdTheme && (
  <motion.div
    initial={{ opacity: 0, x: 10, y: 5 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className={`
      ${lobster.className}
      absolute
      right-[-18px]
 
      top-[-20px]
      rotate-[-8deg]
      text-3xl
      md:text-4xl
      text-red-300
      pointer-events-none
      select-none
      whitespace-nowrap
    `}
    style={{
      textShadow: `
        0 0 4px rgba(252, 0, 0, 0.9),
        0 0 10px rgba(243, 6, 6, 0.8),
        0 0 22px rgba(209, 0, 0, 0.55)
      `,
    }}
  >
    Puzzlevard
  </motion.div>
)}

    </div>

    


    <p className="mt-5 text-white/45 text-sm tracking-[0.35em] uppercase">
      The Ultimate Word Puzzle Game
    </p>

  </div>
) : (
  /* YOUR EXISTING TITLE */
  <>
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
  </>
)}
</motion.div>

       

        {/* Menu Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >


       <NeonButton
  onClick={() => openPopup("help")}
  color="purple"
  seasonal={BlvdTheme}
>
  <div className="flex items-center justify-center gap-2">
    <BookOpen className="w-5 h-5" />
    <span>How to Play</span>
  </div>
</NeonButton>





<NeonButton
  onClick={() => openPopup("options")}
  color="green"
  seasonal={BlvdTheme}
>
  <div className="flex items-center justify-center gap-2">
    <Settings className="w-5 h-5" />
    <span>Options</span>
  </div>
</NeonButton>

  <NeonButton
  onClick={() => router.push("/levels")}
  color="yellow"
  seasonal={BlvdTheme}
  featured
>
  <div className="flex items-center justify-center gap-2">
    <Gamepad2 className="w-5 h-5" />
    <span>Play Game</span>
  </div>
</NeonButton>

      <NeonButton
  onClick={() => openPopup("about")}
  color="purple"
  seasonal={BlvdTheme}
>
  <div className="flex items-center justify-center gap-2">
    <Info className="w-5 h-5" />
    <span>About</span>
  </div>
</NeonButton>
 

<NeonButton
  onClick={() => openPopup("community")}
  color="green"
  seasonal={BlvdTheme}
>
  <div className="flex items-center justify-center gap-2">
    <Settings className="w-5 h-5" />
    <span>Community</span>
  </div>
</NeonButton>
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

  {activePopup === "options" && (
  <>
    <Settings className="w-8 h-8" />
    <span>Options</span>
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

{activePopup === "options" && (
  <div className="space-y-6 text-left">

    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white font-semibold">
          Music Volume
        </span>

        <span className="text-cyan-300">
          {Math.round((musicVolume ?? 0) * 100)}%
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={musicVolume}
        onChange={(e) =>
          setMusicVolume?.(Number(e.target.value))
        }
        className="w-full accent-cyan-500"
      />
    </div>

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

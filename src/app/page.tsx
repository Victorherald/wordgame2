"use client";
import React from 'react';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";




export default function Home() {
  const router = useRouter();
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (name: string) => setActivePopup(name);
  const closePopup = () => setActivePopup(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white p-6">
      {/* Game Title */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold text-amber-400 mb-12"
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

      {/* Popup Modal */}
      <AnimatePresence>
        {activePopup && (
          <motion.div
            key="popup"
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-900 p-6 rounded-2xl shadow-lg max-w-md w-full text-center"
            >
              <h2 className="text-2xl font-bold mb-4 capitalize">
                {activePopup}
              </h2>
              <p className="text-gray-300 mb-6">
                {activePopup === "help" && "Form words by selecting adjacent tiles. Match longer words to earn more points!"}
                {activePopup === "options" && "Options menu will allow sound, theme, and difficulty adjustments soon."}
                {activePopup === "about" && "Worzzle is a word-forming puzzle game inspired by Bookworm Adventures and Scrabble. Built with Next.js."}
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

// components/MovesDisplay.tsx
'use client';

import React from 'react';

type MovesDisplayProps = {
  movesLeft: number;
};

export function MovesDisplay({ movesLeft }: MovesDisplayProps) {
  const isLow = movesLeft <= 5;

  // World Cup theme ends after July 20, 2026
  const today = new Date();
  const worldCupEnd = new Date("2026-07-20T23:59:59");
  const isWorldCupTheme = today <= worldCupEnd;

  return (
    <div
      className={`
        text-center font-bold px-4 py-3 rounded-lg border-2 transition-all duration-300
        ${
          isWorldCupTheme
            ? `soccer-moves ${
                isLow
                  ? "bg-red-900/60 border-red-500 text-red-300 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                  : "border-yellow-400/50 text-white"
              }`
            : `bg-neutral-900 border-neutral-700 text-white ${
                isLow
                  ? "animate-pulse border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                  : ""
              }`
        }
      `}
    >
      <div className="text-xs uppercase tracking-widest text-white/70 mb-1">
        Moves Left
      </div>

      <div
        className={`text-2xl ${
          isWorldCupTheme
            ? "text-yellow-400 soccer-glow-text"
            : isLow
            ? "text-red-400"
            : "text-green-400"
        }`}
      >
        {movesLeft}
      </div>
    </div>
  );
}
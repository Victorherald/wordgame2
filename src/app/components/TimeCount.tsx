// components/TimeDisplay.tsx

"use client";

import React from "react";

type TimeDisplayProps = {
  timeLeft: number;
};

export function TimeDisplay({ timeLeft }: TimeDisplayProps) {
  const isLow = timeLeft <= 10;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // World Cup theme
  const today = new Date();
  const worldCupEnd = new Date("2026-07-20T23:59:59");
  const isWorldCupTheme = today <= worldCupEnd;

  return (
    <div
      className={`
        text-center font-bold px-4 py-3 lg:rounded-lg
        lg:border-2 transition-all duration-300

        ${
          isWorldCupTheme
            ? `
              soccer-moves
              ${
                isLow
                  ? "sm:bg-red-900/60 sm:border-red-500 text-red-300 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                  : "border-yellow-400/50 text-white"
              }
            `
            : `
              lg:bg-neutral-900 lg:border-neutral-700 text-white
              ${
                isLow
                  ? "animate-pulse lg:border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                  : ""
              }
            `
        }
      `}
    >
      <div className="text-xs uppercase tracking-widest text-white/70 mb-1">
      </div>

      <div
        className={`
          text-2xl  sm:text-
          ${
            isWorldCupTheme
              ? "text-yellow-400 soccer-glow-text"
              : isLow
              ? "text-red-400"
              : "text-cyan-400"
          }
        `}
      >
        {formattedTime}
      </div>
    </div>
  );
}
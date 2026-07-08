'use client';

import React from 'react';

type ScoreCounterProps = {
  score: number;
  highScore?: number;
};

export function ScoreCounter({ score, highScore }: ScoreCounterProps) {
  // World Cup theme ends after July 20, 2026
  const today = new Date();
  const worldCupEnd = new Date("2026-07-20T23:59:59");
  const isWorldCupTheme = today <= worldCupEnd;

  return (
    <div
      className={`
        font-bold flex flex-col gap-2
        text-base sm:text-lg
        items-center justify-center
        w-full
        ${
          isWorldCupTheme
            ? "soccer-score text-white"
            : "bg-neutral-900 border border-neutral-700 rounded-xl p-4 text-white"
        }
      `}
    >
      <div className="flex items-center gap-2">
        <span className="text-white/70 uppercase text-xs tracking-wider">
          Score
        </span>

        <span
          className={`text-2xl ${
            isWorldCupTheme
              ? "text-yellow-400 soccer-glow-text"
              : "text-green-400"
          }`}
        >
          {score}
        </span>
      </div>

      {highScore !== undefined && (
        <div className="flex items-center gap-2 border-t border-white/10 pt-1 w-full justify-center">
          <span className="text-white/70 uppercase text-xs tracking-wider">
            High Score
          </span>

          <span
            className={
              isWorldCupTheme
                ? "text-yellow-300"
                : "text-green-300"
            }
          >
            {highScore}
          </span>
        </div>
      )}
    </div>
  );
}
'use client';

import React from 'react';

type ScoreCounterProps = {
  score: number;
  highScore?: number;
};

export function ScoreCounter({ score, highScore }: ScoreCounterProps) {
  return (
    <div
      className="
        mb-3 text-white font-bold flex flex-col sm:flex-row sm:gap-2
        text-base sm:text-xl md:text-2xl
        items-center justify-between sm:justify-start
      "
    >
      <div>
        Score:{' '}
        <span className="text-green-400">
          {score}
        </span>
      </div>
      {highScore !== undefined && (
        <div className="mt-1 sm:mt-0">
          High Score:{' '}
          <span className="text-yellow-400">
            {highScore}
          </span>
        </div>
      )}
    </div>
  );
}


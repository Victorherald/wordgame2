'use client';

import React from 'react';

type ScoreCounterProps = {
  score: number;
  highScore?: number;
};

export function ScoreCounter({ score, highScore }: ScoreCounterProps) {
  return (
    <div className="mb-4 text-white text-2xl font-bold flex gap-6">
      <div>
        Score: <span className="text-green-400">{score}</span>
      </div>
      {highScore !== undefined && (
        <div>
          High Score: <span className="text-yellow-400">{highScore}</span>
        </div>
      )}
    </div>
  );
}

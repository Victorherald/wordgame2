'use client';

import React from 'react';

type ScoreCounterProps = {
  moves: number;
  
};

export function MovesCounter({ moves }: ScoreCounterProps) {
  return (
    <div className="mb-4 text-white text-2xl font-bold flex gap-6">
      <div>
        Moves: <span className="text-green-400">{moves}</span>
      </div>
    </div>
  );
}

// components/MovesDisplay.tsx
import React from 'react';

type MovesDisplayProps = { movesLeft: number };

export function MovesDisplay({ movesLeft }: MovesDisplayProps) {
  const isLow = movesLeft <= 5;

  return (
    <div
      className={`text-center font-bold px-3 py-2 rounded-md border ${
        isLow
          ? 'bg-red-900/50 border-red-700 text-red-300 animate-pulse'
          : 'bg-neutral-800/70 border-neutral-700 text-white'
      }`}
    >
      Moves Left: {movesLeft}
    </div>
  );
}

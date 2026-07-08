'use client';

import React from 'react';

type WordDisplayProps = {
  word: string;
};



export function WordDisplay({ word }: WordDisplayProps) {
 // World Cup theme ends after July 20, 2026
  const today = new Date();
  const worldCupEnd = new Date("2026-07-20T23:59:59");
  const isWorldCupTheme = today <= worldCupEnd;

  if (!word) return <span className="text-white/30 italic text-sm">Waiting for word...</span>;

  return (
    <div className="text-white text-xl font-bold flex items-center gap-2">
      <span className={`${isWorldCupTheme ?  "text-yellow-400 tracking-widest uppercase soccer-glow-text"  : "text-yellow-400 tracking-widest uppercase" }`}>{word}</span>
    </div>
  );
}

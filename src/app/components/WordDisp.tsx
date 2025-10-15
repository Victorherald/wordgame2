'use client';

import React from 'react';

type WordDisplayProps = {
  word: string;
};

export function WordDisplay({ word }: WordDisplayProps) {
  if (!word) return null;

  if (word.includes("Qu"))
    word.toUpperCase;

  return (
    <div className="text-white mb-2 text-xl font-bold">
      Current Word: <span className="text-green-400">{word}</span>
    </div>
  );
}

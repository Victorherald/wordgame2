'use client';

import React from 'react';

type WordDisplayProps = {
  word: string;
};

export function WordDisplay({ word }: WordDisplayProps) {
  if (!word) return null;



  return (
    <div className="text-white text-xl font-bold">
    <span className="text-green-400">{word}</span>
    </div>
  );
}

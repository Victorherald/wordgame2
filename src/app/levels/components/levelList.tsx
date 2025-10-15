"use client";
import { useEffect, useState } from "react";
import { baseLevels } from "../../data/levels";
import { loadProgress, saveProgress } from "@/utils/storage";
import Link from "next/link";

export default function LevelList() {
  const [levels, setLevels] = useState(baseLevels);

  useEffect(() => {
    const saved = loadProgress();
    if (saved) setLevels(saved);
    else saveProgress(baseLevels());
  }, []);

  return (
    <div className="w-full flex flex-col gap-6 items-center">
      <h1 className="text-3xl font-bold text-white">Select Level</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl">
        {levels.map((lvl) => (
          <div
            key={lvl.id}
            className={`rounded-lg border p-4 flex flex-col items-center justify-between text-center transition ${
              lvl.locked
                ? "bg-neutral-800 text-gray-500 border-neutral-700"
                : "bg-neutral-900 text-white border-green-700 hover:border-green-500 hover:scale-105"
            }`}
          >
            <h2 className="text-xl font-bold">{lvl.name}</h2>
            <p className="text-sm text-gray-400">{lvl.objective}</p>
            {lvl.locked ? (
              <span className="text-red-500 mt-2">Locked 🔒</span>
            ) : (
              <Link
                href={`/play/${lvl.id}`}
                className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
              >
                Play
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

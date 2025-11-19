"use client";
import { useEffect, useState } from "react";
import LevelList from "./levelList";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Level = {
  id: number;
  name: string;
  objective?: {
    type: string;
    objGoal: number;
    tileType?: string;
  };
};

export default function LevelSelect() {
  const [levels, setLevels] = useState<Level[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const levelsPerPage = 6;
  const totalPages = Math.ceil(levels.length / levelsPerPage);

  useEffect(() => {
    async function fetchLevels() {
      try {
        const res = await fetch("/api/levels", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to fetch levels (${res.status})`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Invalid data from server");
        setLevels(data);
      } catch (err: any) {
        console.error("Failed to fetch levels:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLevels();
  }, []);

  const goNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const goPrev = () => {
    if (page > 0) setPage(page - 1);
  };

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <div className="text-lg animate-pulse">Loading levels...</div>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="min-h-screen bg-neutral-950 text-red-400 flex items-center justify-center">
        <p>⚠️ {error}</p>
      </main>
    );
  }

  // Compute visible levels for the current page
  const startIndex = page * levelsPerPage;
  const visibleLevels = levels.slice(startIndex, startIndex + levelsPerPage);

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Select a Level</h1>

      {/* Level grid */}
      <div className="w-full max-w-3xl">
        <LevelList/>
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={goPrev}
            disabled={page === 0}
            className={`p-3 rounded-full transition ${
              page === 0
                ? "bg-neutral-800 text-gray-500"
                : "bg-neutral-700 hover:bg-neutral-600"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <span className="text-gray-400 text-sm">
            Page {page + 1} of {totalPages}
          </span>

          <button
            onClick={goNext}
            disabled={page === totalPages - 1}
            className={`p-3 rounded-full transition ${
              page === totalPages - 1
                ? "bg-neutral-800 text-gray-500"
                : "bg-neutral-700 hover:bg-neutral-600"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </main>
  );
}

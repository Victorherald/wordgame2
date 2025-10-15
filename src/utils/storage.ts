// utils/storage.ts

import { LevelData } from "../app/data/levels";

const STORAGE_KEY = "worzzle_progress";

export function loadProgress(): LevelData[] | null {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

export function saveProgress(levels: LevelData[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(levels));
}

export function unlockNextLevel(levels: LevelData[], currentId: number): LevelData[] {
  const updated = [...levels];
  const next = updated.find((l) => l.id === currentId + 1);
  if (next) next.locked = false;
  saveProgress(updated);
  return updated;
}

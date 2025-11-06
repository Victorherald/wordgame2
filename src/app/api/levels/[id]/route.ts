// src/app/api/levels/[id]/route.ts
import { NextResponse } from "next/server";
import { levels } from "@/lib/server/levels";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const levelId = parseInt(params.id);
  const level = levels.find(l => l.id === levelId);

  if (!level) {
    return NextResponse.json({ error: "Level not found" }, { status: 404 });
  }

  return NextResponse.json(level);
}


// src/app/api/levels/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { levels } from "@/lib/server/levels";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;  // ..just to keep the validator.ts shut

  const levelId = parseInt(id);
  const level = levels.find(l => l.id === levelId);

  if (!level) {
    return NextResponse.json({ error: "Level not found" }, { status: 404 });
  }

  return NextResponse.json(level);
}




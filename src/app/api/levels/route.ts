import { NextResponse } from "next/server";
import { levels } from "@/lib/server/levels";

export async function GET() {
  return NextResponse.json(levels, { status: 200 });
}


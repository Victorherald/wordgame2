import { NextResponse } from "next/server";
import { wordSet } from "@/lib/server/wordList";

export async function POST(req: Request) {
  try {
    const start = Date.now();

    const { word } = await req.json();

    if (!word || typeof word !== "string") {
      return NextResponse.json({
        valid: false,
        error: "No word provided",
      });
    }

    const normalizedWord = word.trim().toLowerCase();

    const valid = wordSet.has(normalizedWord);

    console.log(
      `Word validation for "${normalizedWord}": ${Date.now() - start}ms`
    );

    return NextResponse.json({ valid });
  } catch (error) {
    console.error("Validation error:", error);

    return NextResponse.json({
      valid: false,
      error: "Server error",
    });
  }
}
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { word } = await req.json();

    if (!word) {
      return NextResponse.json({ valid: false, error: "No word provided" });
    }

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`;

    const res = await fetch(url, { cache: "no-store" });

    // If it returns 404 → word does NOT exist
    if (res.status === 404) {
      return NextResponse.json({ valid: false });
    }

    // If any other error, also invalid
    if (!res.ok) {
      return NextResponse.json({ valid: false });
    }

    const data = await res.json();

    // Valid if results exist
    const valid = Array.isArray(data) && data.length > 0;

    return NextResponse.json({ valid });

  } catch (error) {
    console.error("Validation error:", error);
    return NextResponse.json({ valid: false, error: "Server error" });
  }
}

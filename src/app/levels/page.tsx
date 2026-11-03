"use client"

import LevelList from "./components/levelList";
import { useState, useEffect } from "react";
import { useAudio } from "../components/AudioProvider";

export default function LevelsPage() {

   // World Cup theme ends after July 20, 2026


 

  const today = new Date();

  // =========================
  // Seasonal events
  // =========================

  const worldCupEnd = new Date("2026-07-20T23:59:59");

  const halloweenStart = new Date("2026-10-01T00:00:00");
  const halloweenEnd = new Date("2026-11-01T00:00:00");

  const thanksgivingStart = new Date("2026-11-01T00:00:00");
  const thanksgivingEnd = new Date("2026-12-01T00:00:00");

  const christmasStart = new Date("2026-12-01T00:00:00");
  const christmasEnd = new Date("2027-01-01T00:00:00");

  const isWorldCupTheme = today <= worldCupEnd;

  const isHalloweenTheme =
    today >= halloweenStart && today < halloweenEnd;

  const isThanksgivingTheme =
    today >= thanksgivingStart && today < thanksgivingEnd;

  const isChristmasTheme =
    today >= christmasStart && today < christmasEnd;

  const { playMusic } = useAudio();

  // =========================
  // Theme music
  // =========================

  useEffect(() => {
    if (isHalloweenTheme) {
      playMusic("/audio/wordigonHalloween.mp3");
    } else if (isThanksgivingTheme) {
      playMusic("/audio/wordigonThanksgiving.mp3");
    } else if (isChristmasTheme) {
      playMusic("/audio/wordigonChristmas.mp3");
    } else if (isWorldCupTheme) {
      playMusic("/audio/wordigonWorldCup.mp3");
    } else {
      playMusic("/audio/wordigonmenu.mp3");
    }
  }, [
    isWorldCupTheme,
    isHalloweenTheme,
    isThanksgivingTheme,
    isChristmasTheme,
    playMusic,
  ]);


  return (
      <main  className={`min-h-screen text-white flex flex-col items-center justify-center p-6 ${
    isWorldCupTheme ? "soccer-pitch-bg" : "bg-black"
  }`}>
     
      <LevelList />
    </main>
  );
}

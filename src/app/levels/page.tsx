import LevelList from "./components/levelList";


export default function LevelsPage() {

   // World Cup theme ends after July 20, 2026
const today = new Date();
const worldCupEnd = new Date("2026-07-20T23:59:59");

const isWorldCupTheme = today <= worldCupEnd;
  return (
      <main  className={`min-h-screen text-white flex flex-col items-center justify-center p-6 ${
    isWorldCupTheme ? "soccer-pitch-bg" : "bg-black"
  }`}>
     
      <LevelList />
    </main>
  );
}

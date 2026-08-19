"use client";

import { useEffect, useState } from "react";

import { loadProgress, saveProgress } from "@/utils/storage";
import { useRouter } from "next/navigation";
import {
  Lock,
  Play,
  Search,
  ChevronLeft,
  ArrowLeft,
  ChevronRight,
  X,
  Target,
  Skull,
  Flame,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { LevelData } from "@/lib/server/levels";
import { motion, AnimatePresence } from "framer-motion";

export default function LevelList() {
  const [levels, setLevels] = useState<LevelData[]>([]);
  const [loading, setLoading] = useState(true);

  const [levelFilter, setLevelFilter] = useState<number | "">("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);



  // Selected level for popup
  const [selectedLevel, setSelectedLevel] = useState<LevelData | null>(null);

  const router = useRouter();

  const LEVELS_PER_PAGE = 10;



  const today = new Date();

const blvdEnd = new Date("2026-09-30T23:59:59");

const isBlvdTheme = today <= blvdEnd;

  // --------------------------------------------------
  // Load levels
  // --------------------------------------------------

  useEffect(() => {
    async function fetchLevels() {
      try {
        const res = await fetch("/api/levels", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch levels (${res.status})`);
        }

        const data: LevelData[] = await res.json();

        const progress = loadProgress();

        if (progress && progress.length === data.length) {
          setLevels(progress);
        } else {
          const initialized = data.map((lvl) => ({
            ...lvl,
            locked: false,
          }));

          setLevels(initialized);
          saveProgress(initialized);
        }
      } catch (err) {
        console.error("Error loading levels:", err);
        setLevels([]);
      } finally {
        setLoading(false);
      }
    }

    fetchLevels();
  }, []);

  // --------------------------------------------------
  // World Cup theme
  // --------------------------------------------------

  const worldCupEnd = new Date("2026-07-20T23:59:59");

  const isWorldCupTheme = today <= worldCupEnd;

  // --------------------------------------------------
  // Filtering
  // --------------------------------------------------

  const filteredLevels =
    levelFilter === ""
      ? levels
      : levels.filter((lvl) => lvl.id === levelFilter);

  // --------------------------------------------------
  // Pagination
  // --------------------------------------------------

  const totalPages = Math.max(
    1,
    Math.ceil(filteredLevels.length / LEVELS_PER_PAGE)
  );

  const startIndex = (currentPage - 1) * LEVELS_PER_PAGE;

  const displayedLevels = filteredLevels.slice(
    startIndex,
    startIndex + LEVELS_PER_PAGE
  );

  // --------------------------------------------------
  // Reset page when searching
  // --------------------------------------------------

  useEffect(() => {
    setCurrentPage(1);
  }, [levelFilter]);

  // --------------------------------------------------
  // Play level
  // --------------------------------------------------

  const handlePlay = (lvlId: number) => {
    const level = levels.find((l) => l.id === lvlId);

    if (!level || level.locked) return;

    localStorage.setItem("selectedLevel", lvlId.toString());

    router.push("/play");
  };

  // --------------------------------------------------
  // Difficulty helpers
  // --------------------------------------------------

  const getDifficultyLabel = (difficulty?: string) => {
    switch (difficulty) {
      case "SuperDemon":
        return "SUPER DEMON";

      case "demon":
        return "DEMON";

      case "Hard Level":
        return "HARD";

      default:
        return "CLASSIC";
    }
  };

  const getDifficultyIcon = (difficulty?: string) => {
    switch (difficulty) {
      case "SuperDemon":
        return <Skull className="w-5 h-5" />;

      case "demon":
        return <Flame className="w-5 h-5" />;

      case "Hard Level":
        return <AlertTriangle className="w-5 h-5" />;

      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  // --------------------------------------------------
  // Circle styling
  // --------------------------------------------------

  const getCircleStyle = (lvl: LevelData) => {
    if (lvl.locked) {
      return `
        bg-gray-800
        border-gray-600
        text-gray-500
        shadow-none
      `;
    }

    switch (lvl.difficulty) {
      case "SuperDemon":
        return `
          bg-gradient-to-br
          from-black
          via-fuchsia-950
          to-purple-950
          border-fuchsia-500
          text-fuchsia-200
          shadow-[0_0_25px_rgba(217,70,239,0.55)]
          hover:shadow-[0_0_40px_rgba(217,70,239,0.8)]
          hover:border-fuchsia-300
        `;

      case "demon":
        return `
          bg-gradient-to-br
          from-red-950
          via-orange-900
          to-red-950
          border-red-500
          text-red-200
          shadow-[0_0_20px_rgba(239,68,68,0.45)]
          hover:shadow-[0_0_35px_rgba(239,68,68,0.7)]
          hover:border-red-300
        `;

      case "Hard Level":
        return `
          bg-gradient-to-br
          from-orange-950
          to-orange-900
          border-orange-500
          text-orange-200
          shadow-[0_0_15px_rgba(249,115,22,0.35)]
          hover:shadow-[0_0_25px_rgba(249,115,22,0.55)]
          hover:border-orange-300
        `;

      default:
        return isWorldCupTheme
          ? `
            soccer-level-circle
            border-green-500/70
            text-white
          `
          : `
            bg-gradient-to-br
            from-gray-900
            to-gray-800
            border-gray-600
            text-yellow-300
            hover:border-yellow-400
            hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]
          `;
    }
  };

  // --------------------------------------------------
  // Popup styling
  // --------------------------------------------------

  const getPopupStyle = (difficulty?: string) => {
    switch (difficulty) {
      case "SuperDemon":
        return `
          bg-gradient-to-br
          from-black
          via-fuchsia-950/90
          to-purple-950/90
          border-fuchsia-500
          shadow-[0_0_50px_rgba(217,70,239,0.35)]
        `;

      case "demon":
        return `
          bg-gradient-to-br
          from-red-950
          via-orange-950
          to-red-950
          border-red-600
          shadow-[0_0_45px_rgba(239,68,68,0.35)]
        `;

      case "Hard Level":
        return `
          bg-gradient-to-br
          from-orange-950
          to-orange-900
          border-orange-600
          shadow-[0_0_35px_rgba(249,115,22,0.3)]
        `;

      default:
        return isWorldCupTheme
          ? `
            soccer-container
            border-green-600/60
          `
          : `
            bg-gray-950
            border-gray-700
            shadow-[0_0_35px_rgba(255,255,255,0.08)]
          `;
    }
  };

  // --------------------------------------------------
  // Objective text
  // --------------------------------------------------

  const getObjectiveText = (lvl: LevelData) => {
    const objective = lvl.objective;

    if (!objective) {
      return "Complete the level.";
    }

    switch (objective.type) {
      case "score":
        return `Reach ${objective.objGoal} points`;

      case "spreadInk":
        return "Spread the ink around";

      case "defrost":
        return `Clear ${objective.objGoal} ice`;

      case "lightsUp":
        return "Turn on the lights";

      case "words":
        return `Find ${objective.objGoal} words`;

      case "destroy":
        return `Interact with ${objective.objGoal} ${objective.tileType} tiles`;

      case "collectVelvet":
        return `Squash ${objective.objGoal} velvets`;

      case "boss":
        return "Defeat the boss";

      case "chamberDrain":
        return "Drain the chambers";

      default:
        return "Complete the objective";
    }
  };

  //blvd design

  const getLevelStyle = (lvl: LevelData) => {
  if (!isBlvdTheme) {
    return {
      border: "border-gray-700",
      text: "text-white",
      glow: "",
      bg: "bg-gray-900",
    };
  }

  if (lvl.locked) {
    return {
      border: "border-gray-700",
      text: "text-gray-500",
      glow: "",
      bg: "bg-gray-950",
    };
  }

  switch (lvl.difficulty) {
    case "SuperDemon":
      return {
        border: "border-fuchsia-400",
        text: "text-fuchsia-200",
        glow: "shadow-[0_0_12px_#d946ef,0_0_30px_#d946ef,0_0_55px_rgba(217,70,239,0.5)]",
        bg: "bg-fuchsia-950/40",
      };

    case "demon":
      return {
        border: "border-red-500",
        text: "text-red-200",
        glow: "shadow-[0_0_12px_#ef4444,0_0_30px_#ef4444,0_0_55px_rgba(239,68,68,0.45)]",
        bg: "bg-red-950/40",
      };

    case "Hard Level":
      return {
        border: "border-orange-400",
        text: "text-orange-200",
        glow: "shadow-[0_0_10px_#f97316,0_0_28px_#f97316,0_0_50px_rgba(249,115,22,0.4)]",
        bg: "bg-orange-950/40",
      };

    default:
      return {
        border: "border-green-400",
        text: "text-green-200",
        glow: "shadow-[0_0_10px_#22c55e,0_0_25px_#22c55e,0_0_45px_rgba(34,197,94,0.35)]",
        bg: "bg-green-950/30",
      };
  }
};

  // --------------------------------------------------
  // Loading
  // --------------------------------------------------

  if (loading) {
    return (
      <main
        className={`min-h-screen text-white flex items-center justify-center p-6 ${
          isWorldCupTheme ? "soccer-pitch-bg" : "bg-black"
        }`}
      >
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-lg font-bold"
        >
          {isWorldCupTheme
            ? "⚽ Loading levels..."
            : "Loading levels..."}
        </motion.div>
      </main>
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  return (


    <main
      className={`relative min-h-screen overflow-hidden text-white ${
        isWorldCupTheme ? "soccer-pitch-bg" : "bg-black"
      }`}
    >


      
      {/* ------------------------------------------------ */}
      {/* Header */}
      {/* ------------------------------------------------ */}

      <div className="relative z-20 px-4 pt-6 pb-4">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-4xl font-black"
        >
          Select Level
        </motion.h1>

        <p className="text-center text-white/50 text-sm mt-2">
          Choose your challenge
        </p>
      </div>

      {/* ------------------------------------------------ */}
      {/* Search */}
      {/* ------------------------------------------------ */}

      <motion.button
  initial={{ opacity: 0, x: -15 }}
  animate={{ opacity: 1, x: 0 }}
  whileHover={{ scale: 1.04, x: -2 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => router.push("/")}
  className={`
    fixed
    top-5
    left-5
    z-40
    flex
    items-center
    gap-2
    px-4
    py-2
    rounded-lg
    font-semibold
    transition-all

    ${
      isBlvdTheme
        ? `
          bg-black/70
          text-green-300
          border
          border-green-500/50
          shadow-[0_0_10px_rgba(34,197,94,0.2)]
          hover:border-green-400
          hover:shadow-[0_0_18px_rgba(34,197,94,0.4)]
        `
        : `
          bg-gray-900
          text-white
          border
          border-gray-700
          hover:bg-gray-800
        `
    }
  `}
>
  <ArrowLeft className="w-4 h-4" />
  Back
</motion.button>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative
          z-30
          flex
          justify-center
          px-4
          mb-6
        "
      >
        <div
          className={`
            flex
            items-center
            gap-2
            rounded-xl
            border
            px-3
            py-2
            backdrop-blur-md
            ${
              isWorldCupTheme
                ? "bg-green-950/70 border-green-700/50"
                : "bg-gray-950/90 border-gray-700"
            }
          `}
        >
          <Search className="w-4 h-4 text-white/50" />

          <input
            type="number"
            min={1}
            placeholder="Level"
            value={levelFilter}
            onChange={(e) => {
              const val = e.target.value;

              setLevelFilter(
                val === "" ? "" : Number(val)
              );
            }}
            className="
              w-24
              bg-transparent
              outline-none
              text-sm
              font-semibold
              text-white
              placeholder-white/30
            "
          />
        </div>
      </motion.div>

      {/* ------------------------------------------------ */}
      {/* No level */}
      {/* ------------------------------------------------ */}

      {filteredLevels.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            text-lg
            text-yellow-300
            text-center
            mt-10
            font-semibold
          "
        >
          ⚠️ No level found.
        </motion.p>
      )}

      {/* ------------------------------------------------ */}
      {/* Level circles */}
      {/* ------------------------------------------------ */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          relative
          z-20
          max-w-3xl
          mx-auto
          px-6
        "
      >
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-5
            gap-x-5
            gap-y-8
            justify-items-center
          "
        >
          {displayedLevels.map((lvl, idx) => (
            <motion.button
              key={lvl.id}
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: idx * 0.05,
              }}
              whileHover={
                lvl.locked
                  ? {}
                  : {
                      scale: 1.08,
                      y: -3,
                    }
              }
              whileTap={
                lvl.locked
                  ? {}
                  : {
                      scale: 0.92,
                      y: 3,
                    }
              }
              disabled={lvl.locked}
              onClick={() => {
                if (!lvl.locked) {
                  setSelectedLevel(lvl);
                }
              }}
              className={`
                relative
                w-20
                h-20
                sm:w-24
                sm:h-24
                rounded-full
                border-4
                flex
                items-center
                justify-center
                transition-all
                ${getCircleStyle(lvl)}
              `}
            >
              {/* Level number */}

              {lvl.locked ? (
                <Lock className="w-7 h-7" />
              ) : (
                <span className="text-2xl sm:text-3xl font-black">
                  {lvl.id}
                </span>
              )}

              {/* Difficulty indicator */}

              {!lvl.locked && lvl.difficulty === "demon" && (
                <span className="
                  absolute
                  -top-2
                  -right-2
                  w-7
                  h-7
                  rounded-full
                  bg-red-600
                  border-2
                  border-red-300
                  flex
                  items-center
                  justify-center
                  shadow-lg
                ">
                  🔥
                </span>
              )}

              {!lvl.locked && lvl.difficulty === "SuperDemon" && (
                <span className="
                  absolute
                  -top-2
                  -right-2
                  w-7
                  h-7
                  rounded-full
                  bg-fuchsia-600
                  border-2
                  border-fuchsia-300
                  flex
                  items-center
                  justify-center
                  shadow-lg
                ">
                  ☠
                </span>
              )}

              {!lvl.locked && lvl.difficulty === "Hard Level" && (
                <span className="
                  absolute
                  -top-2
                  -right-2
                  w-7
                  h-7
                  rounded-full
                  bg-orange-600
                  border-2
                  border-orange-300
                  flex
                  items-center
                  justify-center
                  shadow-lg
                ">
                  !
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* ------------------------------------------------ */}
        {/* Pagination */}
        {/* ------------------------------------------------ */}

        {totalPages > 1 && (
          <div className="
            flex
            items-center
            justify-center
            gap-6
            mt-10
            pb-8
          ">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((page) =>
                  Math.max(page - 1, 1)
                )
              }
              className="
                w-11
                h-11
                rounded-full
                border
                border-gray-700
                bg-gray-900
                flex
                items-center
                justify-center
                disabled:opacity-30
                disabled:cursor-not-allowed
              "
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="text-center">
              <div className="text-sm font-bold">
                WORLD {currentPage}
              </div>

              <div className="text-xs text-white/40 mt-1">
                {startIndex + 1}–
                {Math.min(
                  startIndex + LEVELS_PER_PAGE,
                  filteredLevels.length
                )}{" "}
                of {filteredLevels.length}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(page + 1, totalPages)
                )
              }
              className="
                w-11
                h-11
                rounded-full
                border
                border-gray-700
                bg-gray-900
                flex
                items-center
                justify-center
                disabled:opacity-30
                disabled:cursor-not-allowed
              "
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            text-center
            text-sm
            text-yellow-300
            font-bold
            pb-8
          "
        >
          ⭐ NEW LEVELS ARE COMING SOON! ⭐
        </motion.p>
      </motion.div>

      {/* ================================================= */}
      {/* LEVEL POPUP */}
      {/* ================================================= */}

      <AnimatePresence>
        {selectedLevel && (
          <motion.div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              p-4
              bg-black/75
              backdrop-blur-sm
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLevel(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
              }}
              onClick={(e) => e.stopPropagation()}
              className={`
                relative
                w-full
                max-w-md
                rounded-3xl
                border-2
                p-7
                text-center
                ${getPopupStyle(selectedLevel.difficulty)}
              `}
            >
              {/* Close */}

              <button
                onClick={() => setSelectedLevel(null)}
                className="
                  absolute
                  top-4
                  right-4
                  w-9
                  h-9
                  rounded-full
                  bg-black/30
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-black/50
                  transition
                "
              >
                <X className="w-5 h-5" />
              </button>

              {/* Level number */}

             

              {/* Name */}

              <h2
                className={`
                  text-3xl
                  md:text-4xl
                  font-black
                  mb-4
                  ${
                    selectedLevel.difficulty === "SuperDemon"
                      ? "text-fuchsia-300"
                      : selectedLevel.difficulty === "demon"
                      ? "text-red-300"
                      : selectedLevel.difficulty === "Hard Level"
                      ? "text-orange-300"
                      : "text-yellow-300"
                  }
                `}
              >
                {selectedLevel.name}
              </h2>

              {/* Difficulty */}

              <div className="
                flex
                justify-center
                mb-7
              ">
                <div
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    font-black
                    tracking-wider
                    ${
                      selectedLevel.difficulty === "SuperDemon"
                        ? "bg-fuchsia-600/30 text-fuchsia-200 border border-fuchsia-500"
                        : selectedLevel.difficulty === "demon"
                        ? "bg-red-600/30 text-red-200 border border-red-500"
                        : selectedLevel.difficulty === "Hard Level"
                        ? "bg-orange-600/30 text-orange-200 border border-orange-500"
                        : "bg-green-600/30 text-green-200 border border-green-500"
                    }
                  `}
                >
                  {getDifficultyIcon(selectedLevel.difficulty)}

                  {getDifficultyLabel(
                    selectedLevel.difficulty
                  )}
                </div>
              </div>

              {/* Objective */}

              <div className="
                rounded-2xl
                border
                border-white/10
                bg-black/25
                p-5
                mb-7
              ">
                <div className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-xs
                  uppercase
                  tracking-widest
                  text-white/40
                  font-bold
                  mb-3
                ">
                  <Target className="w-4 h-4" />
                  Objective
                </div>

                <p className="
                  text-lg
                  font-bold
                  text-white
                ">
                  {getObjectiveText(selectedLevel)}
                </p>
              </div>

              {/* Play */}

              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.94,
                  y: 3,
                }}
                onClick={() =>
                  handlePlay(selectedLevel.id)
                }
                className={`
                  w-full
                  py-4
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  gap-3
                  font-black
                  text-lg
                  shadow-xl
                  ${
                    selectedLevel.difficulty === "SuperDemon"
                      ? "bg-gradient-to-r from-fuchsia-700 to-purple-700 hover:from-fuchsia-600 hover:to-purple-600 text-white shadow-fuchsia-900/50"
                      : selectedLevel.difficulty === "demon"
                      ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-red-900/50"
                      : selectedLevel.difficulty === "Hard Level"
                      ? "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white shadow-orange-900/50"
                      : "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-green-900/50"
                  }
                `}
              >
                <Play className="w-5 h-5 fill-current" />
                PLAY LEVEL
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
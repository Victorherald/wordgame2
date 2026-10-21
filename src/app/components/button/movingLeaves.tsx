"use client";

import { motion } from "framer-motion";

const LEAF_EMOJIS = ["🍂", "🍁", "🍃", "🍂", "🍁"];

interface AutumnLeavesProps {
  /** Number of leaves (default 35) */
  count?: number;
  /** How strong the rightward drift is */
  driftStrength?: number;
}

export function AutumnLeaves({
  count = 35,
  driftStrength = 1,
}: AutumnLeavesProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: count }).map((_, i) => {
        const emoji = LEAF_EMOJIS[i % LEAF_EMOJIS.length];
        const size = 14 + (i % 18); // 14px – 32px
        const startLeft = (i * 47) % 110; // start slightly off-screen left
        const duration = 9 + (i % 11); // 9s – 20s
        const delay = (i % 15) * 0.55;
        const opacity = 0.35 + (i % 6) * 0.1;

        // Strong rightward drift
        const horizontalTravel = (80 + (i % 60)) * driftStrength;

        return (
          <motion.div
            key={`leaf-${i}`}
            className="absolute select-none"
            style={{
              left: `${startLeft}%`,
              top: `-${(i * 13) % 40}%`,
              fontSize: `${size}px`,
              opacity,
            }}
            animate={{
              y: ["0vh", "120vh"],
              x: [0, horizontalTravel], // ← sweeping to the right
              rotate: [0, 360 + (i % 180)],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
    </div>
  );
}
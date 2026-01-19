"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type Props = {
  count?: number;
};

export  function CleanseRain({ count = 14 }: Props) {
  return (
    <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const x = Math.random() * 100; // % across tile
        const delay = Math.random() * 0.15;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${x}%`, top: "-20%" }}
            initial={{
              opacity: 0,
              y: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: 40,
              scale: 0.8,
            }}
            transition={{
              duration: 0.5,
              delay,
              ease: "easeOut",
            }}
          >
            <Sparkles
              size={10}
              className="text-blue-800 drop-shadow-[0_0_6px_rgba(56,189,248,0.9)]"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

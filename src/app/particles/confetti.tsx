"use client";

import { motion } from "framer-motion";

const colors = [
  "#22c55e",
  "#d946ef",
  "#facc15",
  "#38bdf8",
  "#f97316",
  "#ef4444",
];

export default function WinConfetti() {
  const pieces = Array.from({ length: 80 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.8;
        const duration = 2.5 + Math.random() * 2;

        return (
          <motion.div
            key={i}
            initial={{
              x: `${left}vw`,
              y: "-10vh",
              rotate: 0,
              opacity: 1,
            }}
            animate={{
              y: "110vh",
              rotate: 360 + Math.random() * 720,
              opacity: [1, 1, 1, 0],
            }}
            transition={{
              duration,
              delay,
              ease: "easeIn",
            }}
            style={{
              backgroundColor:
                colors[i % colors.length],
              width: `${5 + Math.random() * 7}px`,
              height: `${8 + Math.random() * 12}px`,
            }}
            className="absolute rounded-sm"
          />
        );
      })}
    </div>
  );
}
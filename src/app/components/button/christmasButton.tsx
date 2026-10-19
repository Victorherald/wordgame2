"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Mountains_of_Christmas } from "next/font/google";

const christmasFont = Mountains_of_Christmas({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface ChristmasButtonProps {
  children: ReactNode;
  onClick?: () => void;
  featured?: boolean;
}

export function ChristmasButton({
  children,
  onClick,
  featured = false,
}: ChristmasButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`
        ${christmasFont.className}
        relative
        overflow-hidden
        min-w-[180px]
        px-7
        py-3
        rounded-xl
        font-bold
        text-lg
        text-white
        border-2
        transition-all
        duration-200

        ${
          featured
            ? `
              bg-red-700
              border-white/80
              shadow-[0_0_12px_rgba(255,255,255,0.5),0_0_25px_rgba(220,38,38,0.45)]
              hover:bg-red-600
            `
            : `
              bg-green-900/90
              border-green-400/70
              shadow-[0_0_10px_rgba(34,197,94,0.25)]
              hover:bg-green-800
              hover:border-white/80
            `
        }
      `}
    >
      {/* Snow cap */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-[5px]
          bg-white/90
          blur-[1px]
        "
      />

      {/* Snow sparkle */}
      <motion.div
        className="absolute top-1 right-3 text-white/80 text-xs pointer-events-none"
        animate={{
          opacity: [0.3, 1, 0.3],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ❄
      </motion.div>

      {/* Button content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.button>
  );
}
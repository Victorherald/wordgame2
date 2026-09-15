"use client";

import { motion } from "framer-motion";

interface HalloweenButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
}

export function HalloweenButton({
  children,
  onClick,
  featured = false,
}: HalloweenButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={`
        relative
        w-full
        overflow-hidden
        rounded-xl
        border-2
        px-6
        py-4
        text-orange-100
        font-semibold
        transition-all
        duration-200

        ${
          featured
            ? `
              bg-[#4a2815]
              border-orange-500/80
              shadow-[0_0_20px_rgba(249,115,22,0.35)]
            `
            : `
              bg-[#352014]
              border-[#8b5a2b]
              shadow-[0_6px_18px_rgba(0,0,0,0.45)]
            `
        }
      `}
    >
      {/* Wood base */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          bg-[linear-gradient(
            90deg,
            rgba(255,180,80,0.08),
            transparent 18%,
            rgba(0,0,0,0.2) 45%,
            rgba(255,170,70,0.04) 65%,
            transparent 85%
          )]
        "
      />

      {/* Wood grain */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          opacity-80
          bg-[repeating-linear-gradient(
            8deg,
            transparent 0px,
            transparent 6px,
            rgba(255,255,255,0.035) 7px,
            rgba(0,0,0,0.08) 9px,
            transparent 13px
          )]
        "
      />

      {/* Dark wood knots */}
      <div
        className="
          absolute
          top-1/2
          left-[15%]
          w-16
          h-5
          -translate-y-1/2
          rounded-[50%]
          bg-black/15
          blur-[3px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[30%]
          right-[12%]
          w-20
          h-4
          rounded-[50%]
          bg-black/10
          blur-[3px]
          pointer-events-none
        "
      />

      {/* Purple Halloween glow */}
      <div
        className="
          absolute
          -top-10
          -right-10
          w-28
          h-28
          rounded-full
          bg-purple-600/20
          blur-2xl
          pointer-events-none
        "
      />

      {/* Orange Halloween glow */}
      <div
        className="
          absolute
          -bottom-10
          -left-10
          w-28
          h-28
          rounded-full
          bg-orange-500/20
          blur-2xl
          pointer-events-none
        "
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
    </motion.button>
  );
}
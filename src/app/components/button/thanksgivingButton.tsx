"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ThanksgivingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  featured?: boolean;
  className?: string;
}

export function ThanksgivingButton({
  children,
  onClick,
  featured = false,
  className = "",
}: ThanksgivingButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.06, y: -3 }}
      whileTap={{ scale: 0.96 }}
      className={`
        relative
        px-8 py-4
        rounded-2xl
        font-bold
        text-lg
        transition-all
        duration-300
        overflow-hidden
        ${
          featured
            ? "bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 text-white shadow-[0_0_25px_rgba(234,88,12,0.55)]"
            : "bg-gradient-to-br from-amber-800/90 via-orange-900/90 to-red-950/90 text-amber-100 border border-amber-500/40 shadow-[0_0_15px_rgba(180,83,9,0.35)]"
        }
        ${className}
      `}
    >
      {/* Warm autumn glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-amber-400/10 to-transparent opacity-60 pointer-events-none" />
      
      {/* Subtle leaf texture overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(251,191,36,0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 70%, rgba(220,38,38,0.2) 0%, transparent 50%)`,
        }}
      />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Featured shine */}
      {featured && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
        />
      )}
    </motion.button>
  );
}
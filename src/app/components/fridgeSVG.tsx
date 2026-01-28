import { motion } from "framer-motion";

export function FridgeSVG({ overheating }: { overheating?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      {/* 🛡️ Metal casing */}
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        rx="10"
        fill="#cbd5e1"
        stroke="#64748b"
        strokeWidth="4"
      />

      {/* 🔥 Interior heat glow */}
      <motion.rect
        x="15"
        y="15"
        width="70"
        height="70"
        rx="8"
        fill="orange"
        initial={{ opacity: 0 }}
        animate={{
          opacity: overheating ? 0.9 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      />

      {/* 🌀 Fan blades */}
      <motion.g
        animate={{
          rotate: overheating ? 720 : 0,
        }}
        transition={{
          repeat: overheating ? Infinity : 0,
          duration: 1,
          ease: "linear",
        }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <rect x="48" y="20" width="4" height="25" fill="#334155" />
        <rect x="48" y="55" width="4" height="25" fill="#334155" />
        <rect x="20" y="48" width="25" height="4" fill="#334155" />
        <rect x="55" y="48" width="25" height="4" fill="#334155" />
      </motion.g>

      {/* 🌡️ Heat shimmer */}
      {overheating && (
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="orange"
          strokeWidth="3"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}
    </svg>
  );
}

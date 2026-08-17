import { motion } from "framer-motion";

export function NeonButton({
  children,
  onClick,
  color = "green",
  seasonal = false,
  featured = false
}: {
  children: React.ReactNode;
  onClick: () => void;
  color?: "green" | "purple";
  seasonal?: boolean;
  featured?: boolean;
}) {
  const neonColor =
    color === "green"
      ? "#22c55e"
      : "#d946ef";

  const glowClass =
    color === "green"
      ? "shadow-[0_0_12px_#22c55e,0_0_30px_#22c55e]"
      : "shadow-[0_0_12px_#d946ef,0_0_30px_#d946ef]";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96, y: 3 }}
      className="relative w-48 h-14 rounded-xl group"
    >
      {/* Seasonal neon border */}
{seasonal && (
  <svg
    className="
      absolute
      inset-[-3px]
      w-[calc(100%+6px)]
      h-[calc(100%+6px)]
      pointer-events-none
      overflow-visible
      z-10
    "
    viewBox="0 0 198 62"
    fill="none"
  >
    {/* Moving neon segment */}
    <motion.rect
      x="3"
      y="3"
      width="192"
      height="56"
      rx="13"
      pathLength="1"
      stroke={neonColor}
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="0.12 0.88"
      className="
        opacity-0
        group-hover:opacity-100
      "
      animate={{
        strokeDashoffset: [0, -1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        filter: `
          drop-shadow(0 0 4px ${neonColor})
          drop-shadow(0 0 10px ${neonColor})
          drop-shadow(0 0 18px ${neonColor})
        `,
      }}
    />
  </svg>
)}

      {/* Button interior */}
      <div
        className="
          absolute
          inset-[2px]
          rounded-xl
          bg-black/80
          backdrop-blur-xl
          border
          border-white/10
          flex
          items-center
          justify-center
          text-white
          font-bold
          z-20
          transition-all
          duration-200
          group-hover:bg-black/60
        "
      >
        {children}
      </div>

      

      {/* Outside aura */}
      {seasonal && (
        <div
          className={`
            absolute
            -inset-3
            rounded-2xl
            blur-xl
            opacity-0
            group-hover:opacity-30
            transition-opacity
            duration-300
            pointer-events-none
            ${
              color === "green"
                ? "bg-green-500"
                : "bg-fuchsia-500"
            }
          `}
        />
      )}

      {/* Subtle permanent glow */}
{featured && (
  <div
    className={`
      absolute
      -inset-2
      rounded-2xl
      blur-lg
      opacity-30
      pointer-events-none
      ${
        color === "green"
          ? "bg-green-400"
          : "bg-fuchsia-500"
      }
    `}
  />
)}
    </motion.button>
  );
}
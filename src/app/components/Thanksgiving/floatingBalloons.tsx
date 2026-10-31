"use client";

import { motion } from "framer-motion";

// ---------- Normal balloon ----------
function NormalBalloon({ color = "#f97316" }: { color?: string }) {
  return (
    <svg
      width="48"
      height="64"
      viewBox="0 0 48 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Main balloon body */}
      <ellipse
        cx="24"
        cy="28"
        rx="20"
        ry="26"
        fill={color}
      />
      {/* Strong highlight (bulge) */}
      <ellipse
        cx="17"
        cy="18"
        rx="7"
        ry="10"
        fill="white"
        opacity="0.45"
      />
      {/* Softer secondary shine */}
      <ellipse
        cx="15"
        cy="22"
        rx="3.5"
        ry="5"
        fill="white"
        opacity="0.25"
      />
      {/* Knot */}
      <path
        d="M22 52 Q24 56 26 52 Q24 58 22 52"
        fill={color}
      />
      {/* String */}
      <path
        d="M24 54 Q23 62 24 68"
        stroke="#d4d4d4"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ---------- Square balloon with "W" ----------
function SquareBalloon({ color = "#ea580c" }: { color?: string }) {
  return (
    <svg
      width="52"
      height="64"
      viewBox="0 0 52 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Rounded square body with slight inflation */}
      <rect
        x="6"
        y="4"
        width="40"
        height="44"
        rx="12"
        ry="14"
        fill={color}
      />
      {/* Strong top-left highlight (balloon bulge) */}
      <ellipse
        cx="18"
        cy="16"
        rx="9"
        ry="11"
        fill="white"
        opacity="0.42"
      />
      {/* Softer secondary shine */}
      <ellipse
        cx="15"
        cy="20"
        rx="4"
        ry="5.5"
        fill="white"
        opacity="0.22"
      />
      {/* Letter W */}
      <text
        x="26"
        y="34"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill="white"
        fontFamily="Arial, sans-serif"
        style={{ letterSpacing: "-1px" }}
      >
        W
      </text>
      {/* Knot */}
      <path
        d="M24 48 Q26 52 28 48 Q26 54 24 48"
        fill={color}
      />
      {/* String */}
      <path
        d="M26 50 Q25 58 26 66"
        stroke="#d4d4d4"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ---------- Main floating component ----------
interface FloatingBalloonsProps {
  count?: number;
  floatHeight?: number;
}

const COLORS = [
  "#f97316", // orange
  "#ea580c", // deep orange
  "#dc2626", // red
  "#b45309", // amber/brown
  "#c2410c", // burnt orange
  "#f59e0b", // amber
];

export function FloatingBalloons({
  count = 12,
  floatHeight = 115,
}: FloatingBalloonsProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: count }).map((_, i) => {
        const isSquare = i % 3 === 0; // every 3rd balloon is the "W" square one
        const color = COLORS[i % COLORS.length];
        const size = 0.7 + (i % 5) * 0.12; // slight size variation
        const startLeft = (i * 47 + 9) % 95;
        const duration = 15 + (i % 9);
        const delay = (i % 8) * 1.3;
        const sway = 18 + (i % 22);

        return (
          <motion.div
            key={`balloon-${i}`}
            className="absolute select-none"
            style={{
              left: `${startLeft}%`,
              bottom: `-${(i * 9) % 20}%`,
              scale: size,
              opacity: 0.85,
            }}
            animate={{
              y: [`0vh`, `-${floatHeight}vh`],
              x: [0, sway, -sway * 0.7, sway * 0.4, 0],
              rotate: [-5, 7, -4, 5, -5],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            {isSquare ? (
              <SquareBalloon color={color} />
            ) : (
              <NormalBalloon color={color} />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
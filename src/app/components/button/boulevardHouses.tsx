"use client";

import { motion } from "framer-motion";

export  function BoulevardBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Atmospheric glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            circle_at_50%_30%,
            rgba(90,20,100,0.10),
            transparent_55%
          )]
        "
      />

      {/* Distant houses */}
      <div className="absolute inset-x-0 bottom-0 h-[42%]">

        {/* House 1 */}
        <div className="absolute bottom-0 left-[3%] w-28 h-44 bg-[#07080b]">
          <div className="absolute -top-8 left-[-8px] w-32 h-12 bg-[#07080b] rotate-45 scale-x-[1.4]" />

          <div className="absolute top-10 left-5 grid grid-cols-2 gap-4">
            <Window />
            <Window />
            <Window />
            <Window />
          </div>
        </div>

        {/* House 2 */}
        <div className="absolute bottom-0 left-[20%] w-36 h-56 bg-[#08090c]">

          <div className="absolute -top-10 left-[-12px] w-40 h-14 bg-[#08090c] rotate-45 scale-x-[1.35]" />

          <div className="absolute top-14 left-7 grid grid-cols-2 gap-5">
            <Window />
            <Window />
            <Window />
            <Window />
          </div>
        </div>

        {/* House 3 */}
        <div className="absolute bottom-0 right-[22%] w-32 h-48 bg-[#07080b]">

          <div className="absolute -top-9 left-[-10px] w-36 h-12 bg-[#07080b] rotate-45 scale-x-[1.35]" />

          <div className="absolute top-12 left-6 grid grid-cols-2 gap-5">
            <Window />
            <Window />
            <Window />
            <Window />
          </div>
        </div>

        {/* House 4 */}
        <div className="absolute bottom-0 right-[3%] w-40 h-60 bg-[#08090c]">

          <div className="absolute -top-10 left-[-12px] w-44 h-14 bg-[#08090c] rotate-45 scale-x-[1.35]" />

          <div className="absolute top-16 left-8 grid grid-cols-2 gap-6">
            <Window />
            <Window />
            <Window />
            <Window />
          </div>
        </div>

      </div>

      {/* Street */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[18%]
          bg-gradient-to-t
          from-[#020304]
          to-transparent
        "
      />

      {/* Boulevard circles / lights */}
      <div className="absolute left-[12%] bottom-[22%] w-3 h-3 rounded-full bg-red-400/50 blur-[2px]" />

      <div className="absolute left-[32%] bottom-[18%] w-2 h-2 rounded-full bg-purple-400/60 blur-[1px]" />

      <div className="absolute right-[30%] bottom-[24%] w-3 h-3 rounded-full bg-green-400/40 blur-[2px]" />

      <div className="absolute right-[12%] bottom-[19%] w-2 h-2 rounded-full bg-red-400/50 blur-[1px]" />

      {/* Signposts */}
      <SignPost
        left="14%"
        bottom="16%"
        color="red"
      />

      <SignPost
        right="15%"
        bottom="18%"
        color="purple"
      />

      {/* Distant floating lights */}
      <motion.div
        className="absolute left-[42%] top-[25%] w-2 h-2 rounded-full bg-red-400"
        animate={{
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        style={{
          boxShadow: "0 0 12px rgba(248,113,113,0.8)",
        }}
      />

      <motion.div
        className="absolute right-[38%] top-[34%] w-2 h-2 rounded-full bg-purple-400"
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        style={{
          boxShadow: "0 0 12px rgba(192,132,252,0.8)",
        }}
      />

    </div>
  );
}

function Window() {
  return (
    <div
      className="
        w-3
        h-5
        bg-orange-300/40
        border
        border-orange-200/20
      "
      style={{
        boxShadow: `
          0 0 5px rgba(251,191,36,0.35),
          0 0 12px rgba(251,191,36,0.15)
        `,
      }}
    />
  );
}

function SignPost({
  left,
  right,
  bottom,
  color,
}: {
  left?: string;
  right?: string;
  bottom: string;
  color: "red" | "purple";
}) {
  const glow =
    color === "red"
      ? "rgba(248,113,113,0.65)"
      : "rgba(192,132,252,0.65)";

  return (
    <div
      className="absolute"
      style={{
        left,
        right,
        bottom,
      }}
    >
      {/* sign */}
      <div
        className="
          w-12
          h-7
          rounded-sm
          bg-black/80
          border
          border-white/10
        "
        style={{
          boxShadow: `0 0 12px ${glow}`,
        }}
      />

      {/* pole */}
      <div className="mx-auto w-[2px] h-16 bg-white/10" />

      {/* ground light */}
      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full blur-md"
        style={{
          background: glow,
        }}
      />
    </div>
  );
}
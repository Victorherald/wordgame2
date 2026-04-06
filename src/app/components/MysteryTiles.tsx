import { useEffect, useState } from "react";

type MysteryTileProps = {
  letter: string;
  isRevealing?: boolean;
};

export function MysteryTile({ letter, isRevealing }: MysteryTileProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isRevealing) {
      setOpen(true);
    }
  }, [isRevealing]);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-[6px]">
      
      {/* 📦 CARTON BASE */}
      <div
        className={`
          absolute inset-0 rounded-[6px]

          bg-gradient-to-br 
          from-[#c08a4a] 
          via-[#a86e3a] 
          to-[#7a4a22]

          transition-all duration-300
          ${open ? "scale-110 opacity-0" : "opacity-100"}
        `}
      />

      {/* 📦 CARTON TEXTURE LINES */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_2px,transparent_2px,transparent_6px)]" />
      </div>

      {/* 🌑 INNER SHADOW (border fade) */}
      <div
        className={`
          absolute inset-0 rounded-[6px]
          shadow-[inset_0_0_12px_rgba(0,0,0,0.6)]
          ${open ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* ❓ BIG BACKGROUND QUESTION */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          text-black
          font-bold
          text-[48px] sm:text-[60px] md:text-[72px]
          opacity-10
          select-none
          transition-all duration-300
          ${open ? "scale-125 opacity-0" : ""}
        `}
      >
        ?
      </div>

      {/* 🔤 LETTER (TOP LAYER) */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          text-black
          font-bold
          text-sm sm:text-lg md:text-xl
          z-10
          transition-all duration-300
          ${open ? "scale-90 opacity-0" : "opacity-100"}
        `}
      >
        {letter}
      </div>

      {/* 📦 EDGE DARKEN (outer shadow feel) */}
      <div className="absolute inset-0 rounded-[6px] pointer-events-none shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />

      {/* 💥 OPEN FLASH */}
      {open && (
        <div className="absolute inset-0 bg-white/70 animate-ping rounded-[6px]" />
      )}
    </div>
  );
}
import { useEffect, useState } from "react";

type BookTileProps = {
  isOpen: boolean;
  trigger?: number;
};


export function BookTile({ isOpen, trigger }: BookTileProps) {
  const [snap, setSnap] = useState(false);

  useEffect(() => {
    setSnap(true);
    const t = setTimeout(() => setSnap(false), 300);
    return () => clearTimeout(t);
  }, [trigger]);

  return (
    <div className="w-full h-full perspective">
      <div
        className={`
          relative w-full h-full
          transition-transform duration-500
          transform-style
        ${isOpen ? "rotate-y-180" : ""}
          ${snap ? "book-snap" : ""}
        `}
      >
        {/* FRONT COVER */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full backface-hidden"
        >
          <rect x="5" y="5" width="90" height="90" rx="8" fill="#000000" />
          <rect x="10" y="10" width="80" height="80" rx="6" fill="#991b1b" stroke="#fca5a5" strokeWidth="2" />
          <rect x="25" y="25" width="50" height="50" rx="4" fill="#7f1d1d" stroke="#fef2f2" strokeWidth="1.5" />
          <rect x="5" y="5" width="10" height="90" fill="#450a0a" opacity="0.6" />
        </svg>

        {/* INSIDE PAGES */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden"
        >
          <rect x="5" y="5" width="90" height="90" rx="8" fill="#fef3c7" />
          <line x1="20" y1="30" x2="80" y2="30" stroke="#d6d3d1" strokeWidth="2"/>
          <line x1="20" y1="45" x2="80" y2="45" stroke="#d6d3d1" strokeWidth="2"/>
          <line x1="20" y1="60" x2="70" y2="60" stroke="#d6d3d1" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
}
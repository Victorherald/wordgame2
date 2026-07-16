export function SpiralSVG() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full spiral-svg overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Purple aura */}
        <radialGradient id="spiralGlow">
          <stop offset="0%" stopColor="#d946ef" stopOpacity="1" />
          <stop offset="55%" stopColor="#7e22ce" stopOpacity=".75" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Black metal */}
        <linearGradient id="bladeMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5b5565" />
          <stop offset="30%" stopColor="#2a2434" />
          <stop offset="65%" stopColor="#090909" />
          <stop offset="100%" stopColor="#3a2459" />
        </linearGradient>

        {/* Purple energy */}
        <linearGradient id="energy">
          <stop offset="0%" stopColor="#f5d0fe" />
          <stop offset="40%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>

        {/* Glow */}
        <filter id="purpleBlur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground glow */}
      <ellipse
        cx="50"
        cy="82"
        rx="28"
        ry="10"
        fill="url(#spiralGlow)"
        filter="url(#purpleBlur)"
        opacity=".9"
      />

      {/* Aura */}
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="url(#spiralGlow)"
        opacity=".35"
      />

      {/* Blade ring */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="url(#bladeMetal)"
        strokeWidth="7"
      />

      {/* Saw teeth */}
      {Array.from({ length: 20 }).map((_, i) => (
        <polygon
          key={i}
          points="50,3 46,15 54,15"
          fill="url(#bladeMetal)"
          stroke="#c084fc"
          strokeWidth="0.5"
          transform={`rotate(${i * 18} 50 50)`}
        />
      ))}

      {/* Magical spiral */}
      <path
        d="
        M50 50
        C71 36 74 16 55 15
        C32 13 22 31 31 47
        C39 63 63 66 69 49
        C75 34 55 28 45 39
        C38 49 44 60 54 58
      "
        stroke="url(#energy)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        filter="url(#purpleBlur)"
      />

      {/* Core */}
      <circle
        cx="50"
        cy="50"
        r="11"
        fill="#0b0615"
        stroke="#c084fc"
        strokeWidth="2"
      />

      <circle
        cx="50"
        cy="50"
        r="4"
        fill="#f5d0fe"
        filter="url(#purpleBlur)"
      />
    </svg>
  );
}
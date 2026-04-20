type BoulderProps = {
    hp: number; // 1, 2, or 3
  };
  
  export  function Boulder({ hp }: BoulderProps) {
    // darker = stronger
    const baseColor =
      hp === 3 ? "#771900" : // strong
      hp === 2 ? "#C54600" : // medium
                 "#CE7F53";  // weak
  
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        
        {/* Base rock */}
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          rx="12"
          fill={baseColor}
        />
  
        {/* Rough edges */}
        <path
          d="M10 20 L30 10 L60 15 L80 30 L85 60 L70 85 L40 90 L15 70 Z"
          fill="rgba(0,0,0,0.2)"
        />
  
        {/* Cracks based on HP */}
        {hp <= 2 && (
          <path
            d="M30 30 L50 50 L40 70"
            stroke="#1f2937"
            strokeWidth="3"
            fill="none"
          />
        )}
  
        {hp === 1 && (
          <>
            <path
              d="M60 20 L55 40 L70 60"
              stroke="#111827"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M20 60 L35 75"
              stroke="#111827"
              strokeWidth="2"
              fill="none"
            />
          </>
        )}
      </svg>
    );
  }
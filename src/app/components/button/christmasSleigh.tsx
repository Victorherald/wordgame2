
type ChristmasSleighProps = {
  className?: string;
  width?: number;
};

export  function ChristmasSleigh({
  className = "",
  width = 260,
}: ChristmasSleighProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 120"
      width={width}
      height={(width * 120) / 320}
      className={className}
      fill="none"
      role="img"
      aria-label="Christmas sleigh pulled by two reindeer"
    >
      <defs>
        <linearGradient id="sleighRed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff5555" />
          <stop offset="100%" stopColor="#a60020" />
        </linearGradient>
        <linearGradient id="goldTrim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff0a6" />
          <stop offset="100%" stopColor="#d99a24" />
        </linearGradient>
      </defs>

      {/* Reins */}
      <path
        d="M95 75 Q113 62 132 70 T170 65"
        stroke="#d8a84e"
        strokeWidth="2"
      />

      {/* Rear reindeer */}
      <g stroke="#57301c" strokeWidth="2.5" strokeLinecap="round">
        <path
          d="M115 65 L110 81 L106 94 M122 70 L125 84 L122 95"
          strokeWidth="4"
        />
        <path
          d="M112 46 Q104 37 110 28 Q115 38 119 37
             L126 26 Q130 38 124 44"
          fill="#9a6036"
        />
        <path
          d="M111 49 Q99 39 101 31 M112 38 L101 35
             M123 39 L133 30 M127 34 L136 37"
          strokeWidth="2"
        />
        <path
          d="M112 47 Q126 39 135 48 L144 56
             L136 65 L118 67 L110 59 Z"
          fill="#a96b3c"
        />
        <path d="M139 52 L151 49 L148 58 L139 59 Z" fill="#a96b3c" />
        <path d="M118 65 L117 79 M132 63 L137 79" strokeWidth="3" />
        <path d="M115 79 L111 80 M137 79 L141 80" />
        <path d="M114 49 L107 44" />
        <circle cx="143" cy="52" r="1.8" fill="#fff0c7" stroke="none" />
        <path d="M128 47 L130 52 L126 54" stroke="#c52e37" />
      </g>

      {/* Front reindeer */}
      <g stroke="#57301c" strokeWidth="2.5" strokeLinecap="round">
        <path
          d="M170 66 L165 82 L162 94 M180 69 L184 83 L183 95"
          strokeWidth="4"
        />
        <path
          d="M166 46 Q159 35 165 27 Q171 36 174 37
             L182 25 Q186 37 179 44"
          fill="#a96b3c"
        />
        <path
          d="M166 42 L155 32 M161 37 L153 38
             M178 38 L188 30 M184 34 L192 36"
          strokeWidth="2"
        />
        <path
          d="M165 47 Q178 39 190 48 L200 56
             L193 65 L174 68 L164 59 Z"
          fill="#b97943"
        />
        <path d="M195 52 L207 49 L204 58 L195 59 Z" fill="#b97943" />
        <path d="M173 66 L172 80 M188 65 L193 80" strokeWidth="3" />
        <path d="M170 80 L166 81 M193 80 L197 81" />
        <circle cx="200" cy="52" r="2" fill="#d52b32" stroke="none" />
        <circle cx="198" cy="50" r="1.5" fill="#fff0c7" stroke="none" />
        <path d="M181 46 L184 51 L180 53" stroke="#c52e37" />
      </g>

      {/* Golden harness */}
      <path
        d="M120 55 L130 63 L143 57 M172 55 L184 63 L197 56"
        stroke="#eac55e"
        strokeWidth="2"
      />

      {/* Sleigh runners */}
      <path
        d="M13 98 Q23 108 43 105 L83 105 Q95 105 99 96"
        stroke="url(#goldTrim)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M18 94 Q32 100 47 98 L78 98 Q88 98 93 91"
        stroke="#f6d779"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Sleigh body */}
      <path
        d="M20 65 L83 65 L91 83
           Q90 92 78 93 L36 93
           Q23 91 20 79 Z"
        fill="url(#sleighRed)"
        stroke="#8f1324"
        strokeWidth="2"
      />
      <path
        d="M19 65 Q10 59 15 51 Q20 47 25 52
           L34 63"
        stroke="url(#goldTrim)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M22 67 L82 67 L86 76 L26 76 Z"
        fill="#d52c38"
      />
      <path
        d="M24 81 Q53 88 87 81"
        stroke="#f8d36b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M29 69 L31 77 M42 69 L44 78 M55 69 L57 78
           M68 69 L70 78"
        stroke="#ffb3a2"
        strokeWidth="1.5"
      />

      {/* Sleigh seat and back */}
      <path
        d="M27 63 L24 48 Q23 44 28 43
           L34 43 L42 63"
        fill="#a5162b"
        stroke="#f2c75c"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M26 48 L34 48 L38 61"
        stroke="#ffdf83"
        strokeWidth="2"
      />

      {/* Gift sacks */}
      <path
        d="M43 44 Q39 39 44 34 L51 36
           L56 33 L63 39 L65 46 L60 62 L43 62 Z"
        fill="#167747"
        stroke="#0a4f30"
        strokeWidth="2"
      />
      <path
        d="M43 43 Q53 48 64 42"
        stroke="#f1d06a"
        strokeWidth="2"
      />
      <path
        d="M50 38 Q45 32 51 31 Q57 32 53 39
           M53 38 Q58 30 62 34 Q64 39 53 41"
        fill="#e6bb4e"
      />
      <path
        d="M65 51 Q63 46 69 44 L78 47
           L81 54 L76 63 L64 62 Z"
        fill="#f0bd44"
        stroke="#9e6720"
        strokeWidth="1.5"
      />
      <path d="M65 53 L80 54 M72 47 L72 62" stroke="#c12b32" strokeWidth="2" />

      {/* Festive sparkles */}
      <path
        d="M10 32 L12 38 L18 40 L12 42 L10 48 L8 42 L2 40 L8 38 Z"
        fill="#f6d779"
      />
      <path
        d="M220 38 L222 43 L227 45 L222 47 L220 52 L218 47 L213 45 L218 43 Z"
        fill="#f6d779"
      />
      <circle cx="233" cy="67" r="2" fill="#e6bd58" />
      <circle cx="5" cy="77" r="1.8" fill="#e6bd58" />
    </svg>
  );
}

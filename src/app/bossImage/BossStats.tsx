export function BossBar({ hp, maxHp, color }: { hp: number; maxHp: number; color: string }) {
    const percent = (hp / maxHp) * 100;
  
    return (
      <div className="w-full max-w-md mx-auto mt-3">
        {/* 👾 Boss shape */}
        <div
          className={`
            w-16 h-16 mx-auto mb-2 rounded-full
            transition-all duration-300
            bg-${color}-500
            shadow-[0_0_25px_rgba(255,0,0,0.8)]
          `}
        />
  
        {/* ❤️ Health bar */}
        <div className="w-full h-4 bg-neutral-800 rounded overflow-hidden border border-neutral-700">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${percent}%`,
              background: `linear-gradient(to right, ${color}, black)`
            }}
          />
        </div>
  
        {/* 🔢 HP text */}
        <div className="text-center text-white text-xs mt-1">
          {hp} / {maxHp}
        </div>
      </div>
    );
  }
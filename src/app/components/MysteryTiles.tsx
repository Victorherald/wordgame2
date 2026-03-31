import { useEffect, useState } from "react";

type MysteryTileProps = {
  letter: string;
  isRevealing?: boolean;
  children?: React.ReactNode; // final revealed content (gem/blocker)
};

export function MysteryTile({ letter, isRevealing, children }: MysteryTileProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isRevealing) {
      setOpen(true);
    }
  }, [isRevealing]);

  return (
    <div className="w-full h-full perspective">
      <div
        className={`
          mystery-container
          relative w-full h-full
          ${open ? "mystery-open" : ""}
        `}
      >
        {/* FLAPS */}
        <div className="flap flap-top" />
        <div className="flap flap-bottom" />
        <div className="flap flap-left" />
        <div className="flap flap-right" />

        {/* INITIAL CONTENT (before reveal) */}
        {!open && (
          <div className="mystery-content">
            <span className="question">?</span>
            <span className="letter">{letter}</span>
          </div>
        )}

        {/* REVEALED CONTENT */}
        {open && (
          <div className="mystery-reveal">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
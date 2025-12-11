"use client";

import { Particles } from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

export default function IceBreakParticles() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 0 },
          life: { duration: { value: 0.6 }, count: 1 },
          move: {
            enable: true,
            speed: { min: 6, max: 20 },
            direction: "none",
            outModes: { default: "destroy" }
          },
          shape: { type: "square" },
          size: { value: { min: 2, max: 5 } },
          opacity: { value: { min: 0.4, max: 0.9 } },
          color: {
            value: ["#c9f3ff", "#a2e4ff", "#e7faff"]
          }
        },
        emitters: {
          rate: { delay: 0, quantity: 50 },
          life: { duration: 0.15, count: 1 },
          position: { x: 50, y: 50 } // center of tile
        }
      }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    />
  );
}

"use client";

import Particles from "react-tsparticles";

export  function SnowEffect() {
  return (
    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: 9999,
        },
        background: {
          color: "transparent",
        },
        particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          size: { value: 3 },
          move: {
            enable: true,
            direction: "bottom",
            speed: 1,
          },
        },
      }}
    />
  );
}

"use client";

import { createContext, useContext, useEffect, useRef, useState} from "react";

type AudioContextType = {
  music: HTMLAudioElement | null;
  playMusic: (src: string) => void;
  musicVolume: number;
  setMusicVolume: (volume: number) => void;
};

const AudioContext = createContext<AudioContextType>({
  music: null,
  playMusic: () => {},
    musicVolume: 0.4,
  setMusicVolume: () => {},
});

export function AudioProvider({



    
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = useRef("");
const [musicVolume, setMusicVolume] = useState(0.4);
 useEffect(() => {
  if (audioRef.current) return;

  const audio = new Audio();
  audio.loop = true;
  audio.volume = musicVolume;

  audioRef.current = audio;
}, []);

  useEffect(() => {
  if (!audioRef.current) return;

  audioRef.current.volume = musicVolume;
}, [musicVolume]);

  const playMusic = (src: string) => {
    if (!audioRef.current) return;

    // Don't restart the same song
    if (currentTrack.current === src) return;

    currentTrack.current = src;

    audioRef.current.pause();
    audioRef.current.src = src;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(err => {
  console.log(err);
});
  };

  return (
    <AudioContext.Provider
      value={{
        music: audioRef.current,
        playMusic,
          musicVolume,
    setMusicVolume,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
let bgm: HTMLAudioElement | null = null;

export function playMusic(src: string) {
  if (!bgm) {
    bgm = new Audio(src);
    bgm.loop = true;
    bgm.volume = 0.5;
    bgm.play();
    return;
  }

  if (!bgm.src.endsWith(src)) {
    bgm.pause();

    bgm = new Audio(src);
    bgm.loop = true;
    bgm.volume = 0.5;
    bgm.play();
  }
}

export function stopMusic() {
  bgm?.pause();
}

export function setVolume(v: number) {
  if (bgm) bgm.volume = v;
}
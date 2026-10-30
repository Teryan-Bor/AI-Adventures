import random from "./random";

const round = (n) => Math.round(n * 10) / 10;

export const generateParticles = ({
  count = 50,
  x = [0, 97],
  size = [3, 7],
  duration = [8, 20],
  delay = [-20, 0],
  drift = [10, 30],
  driftDuration = [3, 8],
  opacity = [0.3, 0.9],
} = {}) =>
  Array.from({ length: count }, (_, id) => {
    const s = random(size[0], size[1]);
    const t = size[1] === size[0] ? 0 : (s - size[0]) / (size[1] - size[0]);
    const d = round(duration[1] - t * (duration[1] - duration[0]));
    const op = opacity[0] + t * (opacity[1] - opacity[0]);

    return {
      id,
      size: s,
      x: random(x[0], x[1]),
      duration: d,
      delay: random(delay[0], delay[1]),
      drift: random(drift[0], drift[1]),
      driftDuration: random(driftDuration[0], driftDuration[1]),
      opacity: op,
    };
  }); 
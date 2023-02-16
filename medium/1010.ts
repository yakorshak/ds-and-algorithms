// 1010. Pairs of Songs With Total Durations Divisible by 60

function numPairsDivisibleBy60(time: number[]): number {
  let count = 0;
  let map = new Map();

  for (let t of time) {
    const mod = t % 60;
    const possible = mod === 0 ? 0 : 60 - mod;

    count += map.get(possible) || 0;

    // записуємо ключ - остача, значення - кількість разів які зустрічається
    map.set(mod, (map.get(mod) || 0) + 1);

    // key = 40 : 2
  }
  return count;
}

function longestPalindrome(s: string): number {
  if (s.length == 1) return 1;
  let map = {};
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let current: number = s.codePointAt(i) as number;

    if (map[current]) {
      let occurrences = map[current];
      map[current] = occurrences + 1;
      continue;
    }
    map[current] = 1;
  }

  for (let key in map) {
    let current = map[key];
    result += current % 2 == 0 ? current : current - 1;
  }

  return result == s.length ? result : result + 1;
}

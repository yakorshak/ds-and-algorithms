function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  let windowStart = 0;
  let windowEnd = 0;
  let set = new Set();

  if (s.length === 0) {
    return 0;
  }

  if (s.length === 1) {
    return 1;
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    windowEnd = i;

    while (set.has(char)) {
      set.delete(s[windowStart]);
      windowStart++;
    }

    set.add(char);
    longest = Math.max(longest, windowEnd - windowStart + 1);
  }

  return longest;
}

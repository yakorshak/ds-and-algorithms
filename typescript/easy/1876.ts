// 1876. Substrings of Size Three with Distinct Characters

function countGoodSubstrings(s: string): number {
  let pointer1 = 0;
  let pointer2 = 2;
  let numberOfGoodSubstrings = 0;

  if (s.length < 3) {
    return 0;
  }

  for (let i = 0; i < s.length - 2; i++) {
    if (
      s[pointer1] !== s[pointer2] &&
      s[pointer1 + 1] !== s[pointer1] &&
      s[pointer1 + 1] !== s[pointer2]
    ) {
      ++numberOfGoodSubstrings;
      ++pointer1;
      ++pointer2;
    } else {
      ++pointer1;
      ++pointer2;
    }
  }

  return numberOfGoodSubstrings;
}

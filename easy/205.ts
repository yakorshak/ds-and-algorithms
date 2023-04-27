function isIsomorphic(s: string, t: string): boolean {
  let sChars = {};
  let tChars = {};

  for (let i = 0; i < s.length; i++) {
    // @ts-ignore
    let currentS = s.codePointAt(i).toString();
    // @ts-ignore
    let currentT = t.codePointAt(i).toString();

    if (
      (sChars[currentS] && sChars[currentS] != currentT) ||
      (tChars[currentT] && tChars[currentT] != currentS)
    )
      return false;

    sChars[currentS] = currentT;
    tChars[currentT] = currentS;
  }

  return true;
}

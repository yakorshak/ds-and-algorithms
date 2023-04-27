function isSubsequence(s: string, t: string): boolean {
  let pointerS = 0;

  for (let pointerT = 0; pointerT < t.length; pointerT++) {
    if (t.codePointAt(pointerT) == s.codePointAt(pointerS)) {
      pointerS++;
    }
  }

  return pointerS == s.length ? true : false;
}

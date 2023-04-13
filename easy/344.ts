/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let l = 0;
  let f = s.length - 1;

  while (l < f) {
    let temp = s[l];
    s[l] = s[f];
    s[f] = temp;
    l++;
    f--;
  }
}

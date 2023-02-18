// Happy number

function next(n: number): number {
  let sum = 0;
  while (n > 0) {
    let d = n % 10;
    n = Math.trunc(n / 10);
    sum += d * d;
  }
  return sum;
}

function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;

  while (true) {
    slow = next(slow);
    fast = next(next(fast));
    if (fast === 1) {
      return true;
    }
    if (fast === slow) {
      return false;
    }
  }
}

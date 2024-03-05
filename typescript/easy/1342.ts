// 1342. Number of Steps to Reduce a Number to Zero

function numberOfSteps(num: number): number {
  let count = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
      count++;
    } else {
      num -= 1;
      count++;
    }
  }
  return count;
}

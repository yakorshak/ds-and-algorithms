function pivotIndex(nums: number[]): number {
  let sumLeft: number[] = [];
  let sumRight: number[] = [];
  let accum = 0;

  for (let i = 0; i < nums.length; i++) {
    sumLeft.push(accum);
    accum += nums[i];
  }

  accum = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    sumRight.push(accum);
    accum += nums[i];
  }

  sumRight.reverse();

  for (let i = 0; i < nums.length; i++) {
    if (sumLeft[i] == sumRight[i]) {
      return i;
    }
  }

  return -1;
}

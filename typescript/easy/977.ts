function sortedSquares(nums: number[]): number[] {
  let start = 0;
  let end = nums.length - 1;
  let l = start;
  let h = end;
  let result: number[] = [];

  while (l <= h) {
    if (Math.abs(nums[h]) > Math.abs(nums[l])) {
      result.push(Math.pow(nums[h], 2));
      h--;
    } else {
      result.push(Math.pow(nums[l], 2));
      l++;
    }
  }

  return result.reverse();
}

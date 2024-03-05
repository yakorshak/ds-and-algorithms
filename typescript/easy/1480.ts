// 1480. Running Sum of 1d Array

function runningSum(nums: number[]): number[] {
  let newNums: number[] = [];
  let accum = 0;

  for (let i = 0; i < nums.length; i++) {
    accum += nums[i];
    newNums.push(accum);
  }

  return newNums;
}

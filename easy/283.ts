// 283. Move Zeroes

/**
 Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums: number[]): void {
  let slow = 0;
  let fast = 1;

  while (fast < nums.length - 1) {
    if (nums[slow] === 0) {
      if (nums[fast] !== 0) {
        let temp = nums[slow];
        nums[slow] = nums[fast];
        nums[fast] = temp;
        slow++;
        fast++;
        continue;
      } else {
        fast++;
        continue;
      }
    } else {
      slow++;
      fast++;
      continue;
    }
  }
}

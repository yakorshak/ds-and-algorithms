// 26. Remove Duplicates from Sorted Array

function removeDuplicates(nums: number[]): number {
  const length = nums.length;
  let slow = 0;
  let fast = 1;
  while (fast < length) {
    if (nums[fast] != nums[slow]) {
      slow += 1;
      nums[slow] = nums[fast];
    }
    fast += 1;
  }
  return slow + 1;
}

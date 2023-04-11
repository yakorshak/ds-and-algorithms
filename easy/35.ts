// @ts-ignore
function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  if (nums.length == 1) {
    target > nums[0] ? 1 : 0;
  }

  while (high - low >= 0) {
    let mid = Math.floor((high + low) / 2);

    if (target == nums[mid]) {
      return mid;
    }

    if (high - low <= 1) {
      if (nums[high] < target) {
        return high + 1;
      }
      if (nums[low] < target && target < nums[high]) {
        return low + 1;
      }
      if (nums[low] > target) {
        return low;
      }
    }

    if (nums[mid] > target) {
      high = mid - 1;
    }

    if (nums[mid] < target) {
      low = mid + 1;
    }
  }
}

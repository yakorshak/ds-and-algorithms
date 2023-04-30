function searchRange(nums: number[], target: number): number[] {
  let l = 0;
  let r = nums.length - 1;
  let mid;

  if (nums.length < 1) {
    return [-1, -1];
  }

  while (l <= r) {
    mid = Math.floor((l + r) / 2);

    if (nums[mid] == target) {
      break;
    }

    if (nums[mid] < target) {
      l = mid + 1;
    }
    if (nums[mid] > target) {
      r = mid - 1;
    }
  }

  if (mid) {
    let lM = mid;
    let rM = mid;

    while (nums[lM - 1] == target || nums[rM + 1] == target) {
      if (nums[lM - 1] == target) lM--;
      if (nums[rM + 1] == target) rM++;
    }
    return [lM, rM];
  }

  return [-1, -1];
}

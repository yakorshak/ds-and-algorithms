function intersect(nums1: number[], nums2: number[]): number[] {
  let sorted1 = nums1.sort((a, b) => a - b);
  let sorted2 = nums2.sort((a, b) => a - b).reverse();
  let input = sorted1.concat(sorted2);
  let l = 0;
  let r = input.length - 1;
  let result: number[] = [];

  while (l < r && l < sorted1.length && r - sorted1.length >= 0) {
    if (input[l] == input[r]) {
      result.push(input[l]);
      l++;
      r--;
      continue;
    }
    input[l] < input[r] ? l++ : r--;
  }

  return result;
}

function binarySearch(nums: number[], target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      start = mid + 1;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  return -1;
}

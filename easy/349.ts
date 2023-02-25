// 349. Intersection of 2 arrays
// Time complexity O(n^2)
// Memory complexity O(log(n))

export {};

function quickSort(arr: number[]) {
  if (arr.length < 2) {
    return arr;
  }

  let left: number[] = [];
  let right: number[] = [];
  let pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function search(nums: number[], target: number): number {
  let lowI = 0;
  let highI = nums.length - 1;
  let midI;

  while (lowI <= highI) {
    midI = Math.floor((lowI + highI) / 2);

    if (nums[midI] === target) {
      return midI;
    }
    if (nums[midI] < target) {
      lowI = midI + 1;
    }
    if (nums[midI] > target) {
      highI = midI - 1;
    }
  }
  return -1;
}

function intersection(nums1: number[], nums2: number[]): number[] {
  const nums1sorted: number[] = quickSort(nums1);
  const nums2sorted: number[] = quickSort(nums2);
  let result: number[] = [];

  for (let i = 0; i < nums1sorted.length; i++) {
    let current = search(nums2sorted, nums1sorted[i]);
    if (nums1sorted[i] == nums1sorted[i + 1]) continue;
    if (current != -1) {
      result.push(nums1sorted[i]);
    }
  }

  return result;
}

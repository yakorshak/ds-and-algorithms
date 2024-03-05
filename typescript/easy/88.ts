// 88. Merge sorted array

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let last = m + n - 1;

  // merge in reverse order
  while (m > 0 && n > 0) {
    if (nums1[m - 1] < nums2[n - 1]) {
      nums1[last] = nums2[n - 1];
      last--;
      n--;
    } else {
      nums1[last] = nums1[m - 1];
      last--;
      m--;
    }
  }

  // fill nums1 with leftover nums2
  while (n > 0) {
    nums1[last] = nums2[n - 1];
    n--;
    last--;
  }
}

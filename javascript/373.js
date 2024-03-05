/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

function kSmallestPairs(nums1, nums2, k) {
  let heap = new MaxPriorityQueue({ priority: (e) => e.val });
  const result = [];

  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    for (let j = 0; j < Math.min(nums2.length, k); j++) {
      if (heap.size() < k) {
        heap.enqueue({ val: nums1[i] + nums2[j], i, j });
      } else {
        if (nums1[i] + nums2[j] < heap.front().element.val) {
          heap.dequeue();
          heap.enqueue({ val: nums1[i] + nums2[j], i, j });
        } else {
          break;
        }
      }
    }
  }

  while (heap.size() > 0) {
    let current = heap.front().element;
    result.unshift([nums1[current.i], nums2[current.j]]);
    heap.dequeue();
  }

  return result;
}

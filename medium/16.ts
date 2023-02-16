// 16. 3Sum Closest

function threeSumClosest(nums: number[], target: number): number {
  let sorted = nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[nums.length - 1];

  for (let i = 0; i < sorted.length - 2; i++) {
    let j = i + 1;
    let k = sorted.length - 1;

    while (j < k) {
      let currentSum = sorted[i] + sorted[j] + sorted[k];

      if (currentSum === target) {
        return target;
      }
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }
      if (currentSum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return closestSum;
}

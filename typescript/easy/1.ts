// @ts-ignore
function twoSum(nums: number[], target: number): number[] {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let current = target - nums[i];
    if (map.has(current)) return [i, map.get(current)];
    map.set(nums[i], i);
  }
}

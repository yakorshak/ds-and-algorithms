// 704. Binary Search

function search(nums: number[], target: number): number {
  let lowIndex = 0;
  let highIndex = nums.length - 1;
  let middleIndex;

  while (lowIndex <= highIndex) {
    middleIndex = Math.floor((lowIndex + highIndex) / 2);
    if (nums[middleIndex] < target) {
      lowIndex = middleIndex + 1;
    }
    if (nums[middleIndex] > target) {
      highIndex = middleIndex - 1;
    }
    return middleIndex;
  }
  return -1;
}

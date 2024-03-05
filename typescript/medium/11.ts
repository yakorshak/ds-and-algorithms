// Container with the most water

function maxArea(height: number[]): number {
  let start = 0;
  let end = height.length - 1;
  let currentArea = 0;
  let maxArea = 0;

  while (start < end) {
    currentArea = Math.min(height[start], height[end]) * (end - start);
    height[start] < height[end] ? start++ : end--;
    currentArea > maxArea ? (maxArea = currentArea) : "do nothing";
  }

  return maxArea;
}

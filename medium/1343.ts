function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let resCount = 0;
  let currentSum = arr[0];

  // find the initial window sum of the sub-array by the given size
  for (let i = 1; i < k; i++) {
    currentSum += arr[i];
  }

  for (let i = 0; i <= arr.length - k; i++) {
    if (currentSum / k >= threshold) {
      resCount++;
    }
    currentSum = currentSum - arr[i];
    currentSum = currentSum + arr[i + k];
  }

  return resCount;
}

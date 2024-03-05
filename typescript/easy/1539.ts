function findKthPositive(arr: number[], k: number): number {
  let j = 1;
  let missing;
  let i = 0;

  while (k > 0) {
    if (arr[i] != j) {
      missing = j;
      k--;
      j++;
      continue;
    }
    i++;
    j++;
  }

  return missing;
}

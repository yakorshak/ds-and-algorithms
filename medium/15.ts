// 15. 3Sum

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left: number[] = [];
  let right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function threeSum(nums: number[]): number[][] {
  const sorted: number[] = quickSort(nums);
  const target = 0;
  let result: Array<Array<number>> = [];

  for (let i = 0; i < sorted.length - 2; i++) {
    let j = i + 1;
    let k = sorted.length - 1;

    if (sorted.length < 1) {
      break;
    }

    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }

    while (j < k) {
      if (sorted[i] + sorted[j] + sorted[k] === target) {
        result.push([sorted[i], sorted[j], sorted[k]]);

        while (sorted[j] === sorted[j + 1]) j++;
        while (sorted[k] === sorted[k - 1]) k--;

        j++;
        k--;
        continue;
      }
      if (sorted[i] + sorted[j] + sorted[k] < target) {
        j++;
        continue;
      } else {
        k--;
      }
    }
  }

  return result;
}

function searchMatrix(matrix: number[][], target: number): boolean {
  let start = 0;
  let end = matrix.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let first = matrix[mid][0];
    let last = matrix[mid][matrix[mid].length - 1];

    if (target === first || target === last) return true;
    if (target > first && target < last)
      return binarySearch(matrix[mid], target);
    if (target < first) end = mid - 1;
    if (target > last) start = mid + 1;
  }

  return false;
}

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return true;
    if (arr[mid] > target) end = mid - 1;
    if (arr[mid] < target) start = mid + 1;
  }

  return false;
}

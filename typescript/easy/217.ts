// 217. Contains Duplicate

function quickSortMethod(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  let min = 1;
  let max = arr.length - 1;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  let pivot = arr[rand];
  const left: number[] = [];
  const right: number[] = [];
  arr.splice(arr.indexOf(pivot), 1);
  arr = [pivot].concat(arr);

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortMethod(left), pivot, ...quickSortMethod(right)];
}

function containsDuplicate(nums: number[]): boolean {
  const sorted = quickSortMethod(nums);

  if (sorted.length === 1) {
    return false;
  }

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return true;
    }
  }

  return false;
}

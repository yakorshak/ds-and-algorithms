// 1207. Unique Number of Occurrences

function bubbleSortMethod(arr: number[]): number[] {
  for (let j = 0; j < arr.length; j++) {
    let isSwapped = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temporary = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temporary;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }

  return arr;
}

function checkNumberOfOccurrences(arr: number[]): number[] {
  let count = 1;
  let numberOfOccurrences: number[] = [];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
      continue;
    } else {
      numberOfOccurrences.push(count);
    }
    count = 1;
  }

  return numberOfOccurrences;
}

function checkUniqueOccurrences(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }

  return true;
}

function uniqueOccurrences(arr: number[]): boolean {
  let sortedArr = bubbleSortMethod(arr);
  let numberOfOccurrences = checkNumberOfOccurrences(sortedArr);
  let sortedNumberOfOccurrences = bubbleSortMethod(numberOfOccurrences);
  let uniqueOccurrences = checkUniqueOccurrences(sortedNumberOfOccurrences);

  return uniqueOccurrences;
}

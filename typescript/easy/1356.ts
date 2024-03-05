// 1356. Sort Integers by The Number of 1 Bits

interface integerWithSumOfBits {
  sumOfBits: number;
  integer: number;
}

function checkSumOfBits(integer: number, sum = 0): number {
  if (integer === 0) {
    return 0;
  }
  if (integer === 1) {
    return sum + 1;
  }
  if (integer % 2 === 1) {
    integer = (integer - 1) / 2;
    sum++;
    return checkSumOfBits(integer, sum);
  }
  if (integer % 2 === 0) {
    integer /= 2;
    return checkSumOfBits(integer, sum);
  }

  return sum;
}

function addSumOfBitsAsInfo(arr: number[]): integerWithSumOfBits[] {
  let arrWithBitsInfo: Array<integerWithSumOfBits> = [];

  for (let i = 0; i < arr.length; i++) {
    const sumOfBits = checkSumOfBits(arr[i]);
    arrWithBitsInfo.push({ sumOfBits: sumOfBits, integer: arr[i] });
  }

  return arrWithBitsInfo;
}

function bubbleSort(arr: integerWithSumOfBits[]) {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].sumOfBits > arr[j + 1].sumOfBits) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        isSwapped = true;
      }
      if (
        arr[j].sumOfBits === arr[j + 1].sumOfBits &&
        arr[j].integer > arr[j + 1].integer
      ) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }

  return arr;
}

function getOnlyIntegers(arr: integerWithSumOfBits[]): number[] {
  const onlyIntegers: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    onlyIntegers.push(arr[i].integer);
  }

  return onlyIntegers;
}

function sortByBits(arr: number[]): number[] {
  const arrWithBitsInfo = addSumOfBitsAsInfo(arr);
  const sortedIntegersWithBitsInfo = bubbleSort(arrWithBitsInfo);
  const sortedIntegers = getOnlyIntegers(sortedIntegersWithBitsInfo);

  return sortedIntegers;
}

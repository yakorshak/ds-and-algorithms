// 1523. Count Odd Numbers in an Interval Range

function countOdds(low: number, high: number): number {
  let result = 0;

  if (low % 2 == 0 && high % 2 == 0) {
    result = (high - low) / 2;
  }

  if (low % 2 != 0 && high % 2 != 0) {
    result = (high - low) / 2 + 1;
  }

  if ((low % 2 == 0 && high % 2 != 0) || (low % 2 != 0 && high % 2 == 0)) {
    result = Math.floor((high - low) / 2) + 1;
  }

  return result;
}

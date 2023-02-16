// 118. Pascal's Triangle

function generateArray(
  expectedLengthOfGenerated: number,
  prevArray: number[]
): number[] {
  let generatedArray: number[] = [];

  if (expectedLengthOfGenerated > 2) {
    generatedArray[0] = 1;

    for (let i = 0; i < prevArray.length - 1; i++) {
      generatedArray.push(prevArray[i] + prevArray[i + 1]);
    }

    generatedArray[expectedLengthOfGenerated - 1] = 1;
  }

  return generatedArray;
}

function generate(numRows: number): number[][] {
  let generatedArray = [[1], [1, 1]];
  let prevArray = [1, 1];

  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  for (let i = 3; i <= numRows; i++) {
    let result = generateArray(i, prevArray);
    generatedArray.push(result);
    prevArray = result;
  }

  return generatedArray;
}

// @ts-ignore
function twoSum(numbers: number[], target: number): number[] {
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    if (map.has(target - current)) return [map.get(target - current), i + 1];
    map.set(current, i + 1);
  }
}

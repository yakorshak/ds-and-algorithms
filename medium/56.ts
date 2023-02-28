// Merge intervals

function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) {
    return intervals;
  }

  let sorted = intervals.sort((a, b) => a[0] - b[0]);

  let start = sorted[0][0];
  let end = sorted[0][1];
  const result: number[][] = [];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] <= end) {
      end = Math.max(sorted[i][1], end);
    } else {
      result.push([start, end]);
      start = sorted[i][0];
      end = sorted[i][1];
    }
  }

  result.push([start, end]);
  return result;
}

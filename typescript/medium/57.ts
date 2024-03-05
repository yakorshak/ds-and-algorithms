// 57. Insert interval

function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length == 0) {
    return [newInterval];
  }

  let merged: number[][] = [];
  let start = newInterval[0];
  let end = newInterval[1];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    merged.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    start = Math.min(intervals[i][0], start);
    end = Math.max(intervals[i][1], end);
    i++;
  }

  merged.push([start, end]);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
}

class MinHeap378 {
  heap: { val: number; i: number; row: number[] }[];

  constructor() {
    this.heap = [];
  }

  // @ts-ignore
  sortFn(a, b): number {
    if (a.val > b.val) return 1;
    if (a.val === b.val) return 0;
    if (a.val < b.val) return -1;
  }

  add(val, i, row) {
    this.heap.push({ val, i, row });
    this.heap.sort(this.sortFn);
  }

  extract = () => this.heap.shift();
  size = () => this.heap.length;
  peek = () => this.heap[0];
}

function kthSmallest(matrix: number[][], k: number): number {
  let heap = new MinHeap378();

  for (let i = 0; i < Math.min(k, matrix.length); i++) {
    heap.add(matrix[i][0], 0, matrix[i]);
  }

  let numberCount = 0;
  let number;

  while (heap.size() > 0) {
    let { val, i, row } = heap.peek();
    heap.extract();
    numberCount++;
    number = val;

    if (numberCount === k) {
      break;
    }

    if (row.length > i + 1) {
      heap.add(row[i + 1], i + 1, row);
    }
  }

  return number;
}

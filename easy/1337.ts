// 1337. The K Weakest Rows in a Matrix

class Heap {
  compareFn;
  heap;

  constructor(compareFn) {
    this.compareFn = compareFn;
    this.heap = new Array();
  }
  
  insert(val, index) {
    this.heap.push({val, index});
    this.heap.sort(this.compareFn);
  }
  
  extract = () => this.heap.shift();
  peek = () => this.heap[0];
  size = () => this.heap.length;
}

function compareFn(a, b) {
  if (a.val > b.val) return 1;
  if (a.val < b.val) return -1;
  if (a.val === b.val) return 0;
}

function countSoldiers(arr: number[]) {
  return arr.reduce((sum, current) => sum + current, 0);
}

function kWeakestRows(mat: number[][], k: number): number[] {
  const heap = new Heap(compareFn);
  const soldiers = mat.map(i => countSoldiers(i))
  for (let i = 0; i < soldiers.length; i++) {
    heap.insert(soldiers[i], i);
  } 

  let result = new Array();
  for (let i = 0; i < k; i++) {
    result.push(heap.peek().index);
    heap.extract();
  }

  return result;
};
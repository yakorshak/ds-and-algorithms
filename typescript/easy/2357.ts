class MinHeap {
    compareFn;
    heap;
  
    constructor(compareFn) {
      this.compareFn = compareFn;
      this.heap = []
    }
  
    insert(val) {
      this.heap.push(val);
      this.heap.sort(this.compareFn)
    }
  
    extract = () => this.heap.shift()
    peek = () => this.heap[0];
    size = () => this.heap.length;
  }
  
  function compareFn(a, b) {
    if(a > b) return 1;
    if(a < b) return -1;
    if(a === b) return 0;
  }
  
  function subtractMin(arr: number[], subtractor: number) {
    return arr.map(i => i -= subtractor);
  }
  
  function minimumOperations(nums: number[]): number {
    let count = 0;
    let heap = new MinHeap(compareFn);
  
    for (let i of nums) {
      heap.insert(i)
    }
  
    while (heap.size() > 0) {
      if (heap.peek() === 0) {
        heap.extract();
      }
      else {
        heap.heap = subtractMin(heap.heap, heap.peek());
        count++;
      }
    }
  
    return count;
  };
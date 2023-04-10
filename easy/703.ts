class minHeap {
  heap = [];

  constructor() {}

  add(val) {
    // @ts-ignore
    this.heap.push(val);
    // @ts-ignore
    this.heap.sort(this.sortFn);
  }

  peek = () => this.heap[0];
  extract = () => this.heap.shift();
  size = () => this.heap.length;

  sortFn(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
}

class KthLargest {
  k: number;
  nums: number[];
  heap: minHeap;

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums;
    this.heap = new minHeap();

    for (let i = 0; i < nums.length; i++) {
      this.heap.add(nums[i]);
    }
  }

  add(val: number): number {
    this.heap.add(val);
    while (this.heap.size() > this.k) {
      this.heap.extract();
    }

    return this.heap.peek();
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

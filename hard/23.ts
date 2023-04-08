class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class MinHeap {
  compareFn;
  heap;

  constructor(compareFn) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let heap = new MinHeap(compareFn);
  lists.forEach((item) => {
    if (item !== null) heap.insert(item);
  });

  let list = new ListNode();
  let dummyNode = null;

  while (heap.size() > 0) {
    let current = heap.peek();
    if (dummyNode === null) dummyNode = current;
    list.next = current;
    heap.extract();
    if (current.next) heap.insert(current.next);
    list = list.next as ListNode;
  }

  return dummyNode;
}

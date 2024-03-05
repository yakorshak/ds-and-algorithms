class MyCircularQueue {
  queue: number[];
  size: number;

  constructor(k: number) {
    this.queue = [];
    this.size = k;
  }

  enQueue(value: number): boolean {
    if (!this.isFull()) {
      this.queue.push(value);
      return true;
    }
    return false;
  }

  deQueue(): boolean {
    if (!this.isEmpty()) {
      this.queue.shift();
      return true;
    }
    return false;
  }

  Front(): number {
    if (!this.isEmpty()) {
      let element = this.queue[0];
      return element;
    }
    return -1;
  }

  Rear(): number {
    if (!this.isEmpty()) {
      let element = this.queue[this.queue.length - 1];
      return element;
    }
    return -1;
  }

  isEmpty(): boolean {
    if (this.queue.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  isFull(): boolean {
    if (this.queue.length === this.size) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

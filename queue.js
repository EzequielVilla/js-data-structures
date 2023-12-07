class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.last = null;
    this.first = null;
    this.length = 0;
  }
  /**
   * Selecicona el ultimo elemento
   */
  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const holdingPointer = this.first;
      this.first = newNode;
      this.first.next = holdingPointer;
    }
    this.length++;
  }

  dequeue() {
    this.first = this.first.next;
    this.length--;
  }

  get() {
    return this;
  }
}

const myQueue = new MyQueue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
console.log(myQueue.get());

class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  /**
   * Selecicona el ultimo elemento
   */
  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new StackNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  pop() {
    this.top = this.top.next;
    this.length--;
  }

  getPreNode() {
    let count = 0;
    let preNode = this.top;

    while (count < this.length - 1) {
      preNode = preNode.next;
      count++;
    }
    return preNode;
  }
  get() {
    return this;
  }
}

const myStack = new MyStack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
console.log(myStack.get());

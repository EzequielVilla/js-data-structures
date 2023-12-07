class MyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new MyNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index > this.length) throw new Error("Index out of range");
    const newNode = new MyNode(value);
    const preNode = this.getPreNode(index);
    const postsNode = preNode.next;
    preNode.next = newNode;
    newNode.next = postsNode;
    this.length++;
  }

  delete(index) {
    if (index > this.length) throw new Error("Index out of range");

    let preNode = this.getPreNode(index);
    const postsNode = preNode.next;
    preNode.value = postsNode.value;
    preNode.next = postsNode.next;

    this.length--;
  }
  getPreNode(index) {
    let count = 0;
    let preNode = this.head;
    while (count < index) {
      preNode = preNode.next;
      count++;
    }
    return preNode;
  }
  get() {
    return this.head;
  }
}
const linked = new SinglyLinkList(1);
linked.append(2);
linked.append(3);
linked.append(4);
linked.append(5);
linked.append(6);
linked.insert(0, 25);
console.log(JSON.stringify(linked.get()), "-Before delete");

linked.delete(1);
console.log(JSON.stringify(linked.get()), "-After delete");

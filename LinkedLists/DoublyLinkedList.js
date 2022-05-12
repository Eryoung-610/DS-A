class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedTail.prev;
      this.tail.next = null;
      poppedTail.prev = null;
    }

    this.length--;

    return poppedTail;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    if (idx <= this.length / 2) {
      let count = 0;
      let current = this.head;

      while (count != idx) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;

      while (count != idx) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  set(idx, val) {
    let foundNode = this.get(idx);

    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }

    return false;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) {
      return this.unshift(val);
    }

    if (idx === this.length) {
      return this.push(val);
    }

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;

    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length - 1) {
      return this.pop();
    }

    let removedNode = this.get(idx);

    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
  reverse() {
    let currentNode = this.head;

    this.head = this.tail;

    this.tail = currentNode;

    let nextNode = null;

    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;

      currentNode.next = prevNode;

      currentNode.prev = nextNode;

      prevNode = currentNode;

      currentNode = nextNode;
    }

    return this;
  }
}

let list = new DoublyLinkedList();

list.push(15);
list.push(20);
list.push(25);
list.push(30);
list.push(35);
list.push(40);

console.log(list.remove(3));
// console.log(list.get(0));

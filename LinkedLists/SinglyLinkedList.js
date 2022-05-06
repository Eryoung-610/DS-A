// Piece of data - val
// Reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Push node to end of list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  // traverse(){
  //     let current = this.head;
  //     while(current){
  //         console.log(current.val);
  //         current = current.next;
  //     }
  // }
  // Remove node from end of list
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  //   Removes the head of the list
  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }
  //   Adds a new node to the beginning of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }
  //   Get the index and it's node value
  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== idx) {
      current = current.next;
      counter++;
    }

    return current;
  }
  set(val, idx) {
    let foundNode = this.get(idx);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(val, idx) {
    if (idx < 0 || idx > this.length) {
      return false;
    }

    if (idx === this.length) {
      return !!this.push(val);
    }

    if (idx === 0) {
      return !!this.unshift(val);
    }

    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    let temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;

    this.length++;

    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    if (idx === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    let prev = this.get(idx - 1);
    let removed = prev.next;

    prev.next = removed.next;
    this.length--;

    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push("Hi");
list.push("Goodbye");
list.push("!");

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

console.log(list.reverse());

console.log(list.print());

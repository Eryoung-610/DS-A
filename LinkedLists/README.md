# Linked Lists

## Singly Linked List

__Objectives__

- Define what a Singly Linked List is
- Compare and contrast Linked Lists with Arrays
- Implement insertion, removal and traversal methods on Singly Linked List.

__What is a Linked List__

- a data structure that contains a head, tail and length property.
- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
- __Singly Linked Lists__ are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
- __Doubly Linked List__ are almost identical to Singly Linked Lists, except every node has another pointer, to the previous node. Has more memory, which means more flexibility.
- Arrays contain a built in index whereas Linked Lists do not
- The idea of a list data structure that consists of nodes is the foundation for other data structures like stacks and queues

```
// Singly Linked List
H                 T
4 --> 6 --> 8 --> 2 --> 
 nxt   nxt   nxt     null

Length = 4
```

__Comparisons with Arrays__

Lists

- Do not have indexes
- Connected via nodes with a __next__ pointer
- Random access is not allowed

Arrays

- Indexed in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

__Node__

An element in a linked list is called a node. A single node contains data and a pointer to the next node which helps maintain the structure of the list.

```
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
```

__Creation of Singly Linked List__

```
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  .
  .
  .
```

__Push Pseudocode  O(1)__

1. Accepts a value
2. Create a new node using the value passed to the function
3. If there is no head property on the list, set the head and tail to be the newly created node
4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
5. Increment the length by one
6. Return linked list

```

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

```

__Pop Pseudocode O(1) or O(N)__

1. If there are no nodes in the list, return undefined
2. Loop through the list until you reach the tail
3. Set the next property of the 2nd to last node to be null
4. Set the tail to be the 2nd to last node
5. Decrement the length of the list by 1
6. Return the value of the node removed

```
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
```

__Shift Pseudocode O(1) or O(N)__

1. If there are no nodes, return undefined
2. Store the current head property in a variable
3. Set the head property to be the current head's next property
4. Decrement the length by 1.
5. Return the value of the node removed.

```
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
```

__Unshift Pseudocode O(1)__

1. This function should accept a value
2. Create a new node using the value passed to the function
3. If there is no head property on the list, set the head and tail to be the newly created node
4. Otherwise set the newly created node's next property to be the current head property on the list
5. Set the head property on the list to be that newly created node
6. Increment the length of the list by 1
7. Return the linked list.

```
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
```

__Get Pseudocode O(N)__

1. Should accept an index
2. If the index is less than 0 or greater than or equal to the length of the list, return null
3. Loop through the list until you reach the index and return the node at that specific index.

```
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
```

__Set Pseudocode O(N)__

1. Accepts a value and an index
2. Use the __get__ function to find the specific node.
3. If node is not found, return false
4. If node is found, set the value of that node to be the value passed to the function and return true

```
  set(val, idx) {
    let foundNode = this.get(idx);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
```

__Insert Pseudocode O(1)__

1. If the index is less than 0 or greater than the length, return false
2. If the index is the same as the length, push a new node to the end of the list
3. If the index is 0, unshift a new node to the start of the list
4. Otherwise, using the __get__ method, access the node at the index - 1
5. Set the next property on that node to be the new node
6. Set the next property on the new node to be the previous next
7. Increment the length;
8. Return true

```

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

  ```

__Remove Pseudocode O(1) or O(N)__

1. If the index is less than 0 or greater than the length, return undefined
2. If the index is the same as the length - 1, pop
3. If the index is 0, shift
4. Otherwise, using the __get__ method, access the node at the index - 1
5. Set the next property on that node to be the next of the next node
6. Decrement the length
7. Return the value of the node removed

```
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
```

__Reverse Pseudocode O(N)__

1. Swap the head and tail
2. Create a variable called next
3. Create a variable called prev
4. Create a variable called node and initialize it to the head property
5. Loop through the list
6. Set next to be the next property on whatever node is
7. Set the next property on the node to be whatever prev is
8. Set prev to be the value of the node variable
9. Set the node variable to be the value of the next variable

```
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
```

**

## Doubly Linked List

__Push Pseudocode O(1)__

1. Create a new node with the value passed to the function
2. If the head property is null, set the head and tail to be the newly created node
3. If not, set the next property on the tail to be that node
4. Set the previous property of the newly created node to be the tail
5. Set the tail to be the newly created node
6. Increment the length
7. Return doubly linked list

```
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
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
```

__Pop Pseudocode O(1)__

1. If there is no head, return undefined
2. Store the current tail in a variable to return later
3. If the length is 1, set the head and tail to be null
4. Update the tail to be the previous Node
5. Set the newTail's next to null
6. Decrement the length
7. Return the value removed

__Shift Pseudocode O(1)__

1. If length is 0, return undefined
2. Store the current head property in a variable
3. If the length is 1
  1. Set the head to be null
  2. Set the tail to be null
4. Update the head to be the next of the old head
5. Set the head's prev property to null
6. Set the old head's next to null
7. Decrement the length
8. Return old head

__Unshift Pseudocode O(1)__

1. Create a new node with the value passed to the function
2. If the length is 0
  1. Set the head to be the new node
  2. Set the tail to be the new node
3. Otherwise,
  1. Set the prev prop on the head of the list to be the new node
  2. Set the next property on the new node to be the head property
  3. Update the head to be the new node
4. Increment the length
5. Return the list

__Get Pseudocode O(N)__

1. If the index is less than 0 or greater or equal to the length, return null
2. If the index is less than or equal to half the length of the list
  1. Loop through the list starting from the head and loop towards the middle
  2. Return the node once it is found
3. If the index is greater than half the length of the list
  1. Loop through the list starting from the tail and loop towards the middle
  2. Return the node once it is found

__Set Pseudocode O(N)__

1. Create a variable which is the result of the get method at the index passed to the function
  1. If the get method returns a valid node, set the value of that node to be the value passed to the function
  2. Return true
  3. Otherwise, return false;

__Insert Pseudocode O(1)__

1. If the index is less than zero or greater than the length return false
2. If the index is 0, unshift
3. If the index is the same as the length, push
4. Use the get method to access the index - 1
5. Set the next and prev properties on the correct nodes to link everything together
6. Increment length
7. Return true

__Remove Pseudocode O(1)__

1. If the index is less than zero or greater than or equal to the length return undefined
2. If the index is 0, shift
3. If the index is the same as the length-1, pop
4. Use the get method to retrieve the item to be removed
5. Update the next and prev properties to remove the found node from the list
6. Set next and prev to null on the found node
7. Decrement the length
8. Return the removed node
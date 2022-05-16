# Binary Search Tree (BST)

## Terminology

__Root__ - The top node in a tree
__Child__ - A node directly connected to another node when moving away from the root
__Parent__ - The converse nothing of a child
__Siblings__ - A group of nodes with the same parent
__Leaf__ - A node with no children
__Edge__ - The connection between one node and another.

**

## Big O

Insertion - __O(log n)__
Searching - __O(log n)__


**

A data structure that consists of nodes in a parent / child relationship. Connection to nodes are called branches

Lists - Linear. Is only one path.
Trees - nonlinear. Can have more than one path

Applications 
- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operating Systems
- Computer File Systems

**

## Kinds of Trees

- Trees
- Binary Trees
- Binary Search Trees

BSTs are used to store data that can be compared, that it is sortable.

## How BSTs Work

- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is lways greater than the parent

**

__Inserting a node__

Steps - Iteratively or Recursively

- Create a new node
- Starting at the root
    - Check if there is a root, if not - the root now becomes that new node
    - If there is a root, check if the value of the new node is greater than or less than the value of the root
    - If it is greater
        - Check to see if there is a node to the right
            - If there is, move to that node and repeat these steps
            - If there is not, add that node as the right property

    - If it is less
        - Check to see if there is a node to the left
            - If there is, move to that node and repeat these steps
            - If there is not, add that node as the left property

__Finding a node__

Steps - Iteratively or Recursively

- Starting at the root
    - Check if there is a root, if not - we're done searching
    - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done.
    - If not, check to see if the value is greater than or less than the value of the root
    - If it is greater,
        - Check to see if there is a node to the right
            - If there is, move to that node and repeat these steps
            - If there is not, we're done searching!
    - If there is less
        - Check to see if there is a node to the left
            - If there is, move to that node and repeat these steps
            - If there is not, we're done searching

**

## Tree Traversal

2 ways 
 - __Breadth-First Search__ 
    - Start from beginning, work ACROSS the tree. Same level.
 - __Depth-First Search__
    - Start from the beginning, work DOWN the tree.

__Breadth-First Search__

Steps - Iteratively

- Create a queue(this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - If there is a left property on the node dequeued - add it to the queue
    - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

```
        15
    5           25
        10    20    30

  BFS() {
    let node = this.root,
      data = [],
      queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

// OUTPUT : [15,5,25,10,20,30]
```

__Depth-First Search PreOrder__

Steps - Recursively

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
    - Push the value of the node to the variable that stores the values
    - If the node has a left property, call the helper function with the left property on the node
    - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values

```
        15
    5           25
        10    20    30

  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

// OUTPUT : [15,5,10,25,20,30]
```

__Depth-First Search PostOrder__

Steps - Recursively

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
    - If the node has a left, call the helper function with the left property on the node
    - If the node has a right property, call the helper funciton with the right property on the node
    - Push the value of the node to the variable that stores the values
    - Invoke the helper function with the current variable
- Return the array of values


```
        15
    5           25
        10    20    30

  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

// OUTPUT : [10,5,20,30,25,15]
```

__Depth-First Search InOrder__

Steps - Recursively

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- WRite a helper function wich accepts a node
    - If the node has a left property, call the helper function
    - Push the value of the node to the variable that stores the values
    - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values

```

        15
    5           25
        10    20    30

  DFSInOrder(){
    let data = [];
    let current = this.root;
    function traverse(node){
      if(node.left) traverse(node.left);
      data.push(node);
      if(node.right) traverse(node.right);
    }

    traverse(current);

    return data;
  }

  // OUTPUT : [5,10,15,20,25,30]
```

**

## Recap

- Trees are non-linear data structures that contain a root and child nodes
- Binary Trees can have values of any type, but at most two children for each parent
- Binary Search Trees (BSTs) are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
- Can search through Trees using BFS and DFS
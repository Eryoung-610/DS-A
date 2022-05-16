# Binary Heaps

Very similar to a binary search tree, but with different rules

In a MaxBinaryHeap, parent nodes are always larger than child nodes.
In a MinBinaryHeap, parent nodes are always smaller than child nodes.
There's no order, for ex, left nodes can be greater than the right node, or vice versa.

Binary Heaps are used to implement Priority Queues, which are very commonly used data structures. They are also used quite a bit with graph traversal algorithms

## Max Binary Heap

- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max Binary Heap, the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.
- No implied ordering between siblings

```
                              100
                19                             36
        17              12               25             5
    9      15       6       11        13     8       1       4        


In Array Form : [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4] 

Parent : 100
Children : 19,36

Parent : 19
Children: 17,12

Parent : 36
Children : 25, 5

For any index of an array n...
The left child is stored at 2n + 1
The right child is stored at 2n + 2

For any child node at index n...
Its parent is at index Math.floor((n-1)/2)

```

__Insert__

```
            41
        39      33
    18    27  12

// Inserting 55

            41
        39      33
    18    27  12   55

[41,39,33,18,27,12,55]


We compare 55 to 33, 55 is greater, we "Bubble up".

            41
        39      55
    18    27  12   33

[41,39,55,18,27,12,33]

We compare 55 to 41, 55 is greater, we "Bubble up".

            55
        39      41
    18    27  12   33

[55,39,41,18,27,12,33]

```

__Insert Pseudocode O(log n)__

- Push the value into the values property on the heap
- Bubble Up:
  - Create a variable called index which is the length of the values property - 1
  - Create a variable called parentIndex which is the floor of (index-1) / 2
  - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - Swap the value of the values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over

```
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;

      // Swaps the values
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
```

### Removing from Heap  / Extract / Sink Down

- Remove the root
- Replace with the most recently added
- Adjust(Sink down)

__Sink Down__

- The procedure for deleting the root from the heap(effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (aka, bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max)

__Remove Pseudocode O(log n)__

- Swap the first value in the values property with the last one
- Pop from the values property, so you can return the value at the end.
- Have the new root "sink down" to the correct spot...
  - Your parent index starts at 0 (the root)
  - Find the index of the left child : 2 * index + 1 (make sure its not out of bounds)
  - Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
  - If the left or right child is greaterthan the element... swap. If the both left and right children are larger, swap with the largest child.
  - The child index you swapped to now becomes the new parent index.
  - Keep looping and swapping until neither child is larger than the element.
  - Return the old root

## Priority Queue

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

- Write a MinBinaryHeap - lower number means higher priority
- Each node has a val and a priority. Use the priority to build the heap.
- __Enqueue__ method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
- __Dequeue__ method removes root element, returns it, and rearranges heap using priority.

### Recap

- Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues
- Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
- With just a little bit of math, we can represent heaps using arrays
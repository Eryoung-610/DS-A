# Stack

Can use from a linked list or an array. Array has the built in implementations of ```push()``` and ```pop()```. Push/pop should be in constant time, but in a linked list, it runs in N time.

- Stacks are a LIFO data structure. Last In First Out.
- Stacks are used to handle function invocations (The call stack), for operations like undo/redo, and for routing(remember 
pages you have visited and go back/forward) and much more.
- Not a built in data structure in js, but relatively simple to implement.


__Push Pseudocode O(1)__

1. Should accept a value
2. Create a new node with that value
3. If there are no nodes in the stack, set the first and last property to be the newly created node
4. If there is at least one node, create a variable that stores the current first property on the stack
5. Reset the first property to be the newly created node
6. Set the next property on the node to be the previously created variable
7. Increment the size of the stack by 1.

__Pop Pseudocode O(1)__

1. If there are no nodes in the stack, return null
2. Create a temporary variable to store the first property on the stack
3. If there is only 1 node, set the first and last property to be null
4. If there is more than one node, set the first property to be the next property on the current first
5. Decrement the size by 1
6. Return the value of the node removed

**

# Queue

Data structure that follows FIFO. First In First Out.

__How do we use them in programming?__

- Background tasks
- Uploading resources
- Printing / Task processing

__Enqueue Psuedocode O(1)__

1. This function should accept some value
2. Create a new node using that value passed to the function
3. If there are no nodes in the queue, set this node to be the first and last property of the queue.
4. Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node

__Dequeue Psuedocode O(1)__

1. If there is no first property, return null
2. Store the first property in a variable
3. See if the first is the same as the last(check if there is only 1 node). If so, set the first property to be the next property of first
4. Decrement the size by 1
5. Return the value of the node dequeued.
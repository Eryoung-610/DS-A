# Linked Lists

## Singly Linked List

__Objectives__

- Define what a Singly Linked List is
- Compare and contrast Linked Lists with Arrays
- Implement insertion, removal and traversal methods on Singly Linked List.

__What is a Linked List__

- a data structure that contains a head, tail and length property.
- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

``` 
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

__Push Pseudocode__

1. Accepts a value
2. Create a new node using the value passed to the function
3. If there is no head property on the list, set the head and tail to be the newly created node
4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
5. Increment the length by one
6. Return linked list

__Pop Pseudocode__

1. If there are no nodes in the list, return undefined
2. Loop through the list until you reach the tail
3. Set the next property of the 2nd to last node to be null
4. Set the tail to be the 2nd to last node
5. Decrement the length of the list by 1
6. Return the value of the node removed

__Shift Pseudocode__

1. If there are no nodes, return undefined
2. Store the current head property in a variable
3. Set the head property to be the current head's next property
4. Decrement the length by 1.
5. Return the value of the node removed.

__Unshift Pseudocode__

1. This function should accept a value
2. Create a new node using the value passed to the function
3. If there is no head property on the list, set the head and tail to be the newly created node
4. Otherwise set the newly created node's next property to be the current head property on the list
5. Set the head property on the list to be that newly created node
6. Increment the length of the list by 1
7. Return the linked list.

__Get Pseudocode__

1. Should accept an index
2. If the index is less than 0 or greater than or equal to the length of the list, return null
3. Loop through the list until you reach the index and return the node at that specific index.

__Set Pseudocode__

1. Accepts a value and an index
2. Use the __get__ function to find the specific node.
3. If node is not found, return false
4. If node is found, set the value of that node to be the value passed to the function and return true

__Insert Pseudocode__

1. If the index is less than 0 or greater than the length, return false
2. If the index is the same as the length, push a new node to the end of the list
3. If the index is 0, unshift a new node to the start of the list
4. Otherwise, using the __get__ method, access the node at the index - 1
5. Set the next property on that node to be the new node
6. Set the next property on the new node to be the previous next
7. Increment the length;
8. Return true

__Remove Pseudocode__

1. If the index is less than 0 or greater than the length, return undefined
2. If the index is the same as the length - 1, pop
3. If the index is 0, shift
4. Otherwise, using the __get__ method, access the node at the index - 1
5. Set the next property on that node to be the next of the next node
6. Decrement the length
7. Return the value of the node removed

__Reverse Pseudocode__

1. Swap the head and tail
2. Create a variable called next
3. Create a variable called prev
4. Create a variable called node and initialize it to the head property
5. Loop through the list
6. Set next to be the next property on whatever node is
7. Set the next property on the node to be whatever prev is
8. Set prev to be the value of the node variable
9. Set the node variable to be the value of the next variable
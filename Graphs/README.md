# Graphs

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

### Uses for graphs

- Social networks
- Location/Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations

### Vocab

- Vertex : A node
- Edge : connection between nodes
- Weighted/Unweighted : values assigned to distances between vertices
- Directed/Undirected - directions assigned to distances between vertices

```

F---A---B
|       |
|       |
E---D---C

```

Creating an adj matrix from an Undirected/Unweighted (U/U) graph

| 0  | 1  | 0  | 0  | 0  | 1  |
|--- |--- |--- |--- |--- |--- |
| 1  | 0  | 1  | 0  | 0  | 0  |
| 0  | 1  | 0  | 1  | 0  | 0  |
| 0  | 0  | 0  | 1  | 0  | 1  |
| 1  | 0  | 0  | 0  | 1  | 0  |

***

Creating an adj list from an U/U graph

```

5---0---1
|       |
|       |
4---3---2


[
    [1,5],
    [0,2],
    [1,3],
    [2,4],
    [3,5],
    [4,0]
]
```

```

F---A---B
|       |
|       |
E---D---C

```

Creating an adj list from an U/U graph with hashtable

```
{
    A: ["B", "F"],
    B: ["A", "C"],
    C: ["B", "D"],
    D: ["C", "E"],
    E: ["D", "F"],
    F: ["E", "A"],
}

```

### Differences & Big O

|V| - Number of Vertices
|E| - Number of edges

| Operation | Adj List | Adj Matrix |
| --- | --- | --- | --- | --- | --- |
| Add Vertex | O(1) | O(|V^2|) |
| Add Edge | O(1) | O(1) |
| Remove Vertex | O(|V| + |E|) | O(|V^2|) |
| Remove Edge | O(E|) | O(1) |
| Query | O(|V| + |E|) | O(1) |
| Storage | O(|V| + |E|) | O(|V^2|) |

### Adj List vs Adj Matrix

List
- Can take up less space (in sparse graphs)
- Faster to iterate over all edges
- CAN BE SLOWER TO LOOKUP SPECIFIC EDGE

Matrix 
- TAKES UP MORE SPACES(In sparse graphs)
- SLOWER TO ITERATE OVER ALL EDGES
- Faster to lookup specific edge

### Adding a vertex

- Create the method, accepts a name of a vertex
- It should add a key to the adj list with the name of the vertex and set its value to be an empty array

### Adding an edge

- Method should accept 2 vertices, vertex1 and vertex2
- Function should find in the adj list the key of v1 and push v2 to the array
- The function should find in the adj list the key of v2 and push v1 to the array
- Don't worry about handling errors/invalid vertices

### Removing an edge

- This function should accept 2 vertices, v1 and v2
- Function should reassign the key of v1 to be an array that does not contain v2
- The function should reassign the key of v2 to be an array that does not contain v1
- Don't worry about handling errors/invalid vertices

### Removing a vertex

- Function should accept a vertex to remove
- Function should loop as long as there are any other vertices in the adjacency list for that vertex
- Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adj list for that vertex
- Delete the key in the adj list for that vertex

***

# Graph Traversal

- Peer to peer networking
- Web crawlers
- Finding "Closest" matches/recommendations
- Shortest Path Problems
    - GPS Navigation
    - Solving mazes
    - AI

## DFS Graph Traversal

```
        A
    /      \ 
  /          \
B             E
| \          /  |
|  \        /   |
C   \      /    F
  \  \    /    /
    \-  D -  /
```

Starting from "A"

- Keeping it consistent, we can visit either B or E. But for consistency, we'll go alphabetically.

1. From A, A --> B. (If this was BFS, we would go back to A, then E)
2. B --> C. B has two neighbors of C and D. We've already visited B, so therefore we go to C --> D
3. D's neighbors are E and F. But we go from D --> E, then E --> F

### DFS Recursively Psuedocode

```
DFS(vertex):
    // Base case
    if vertex is empty
        return 

    add vertex to results list
    mark vertex as visited
    for each neighbor in vertex's neighbors:
        if neighbor is not visited:
            recursively call DFS on neighbor
```

- Function should accept a starting node
- Create a list to store the end result, to be returned at the very end
- Create an object to store visited vertices
- Create a helper function which accepts a vertex
    - The helper function should return early if the vertex is empty
    - THe helper function should place the vertex it accepts into the visited object and push that vertex into the result array
    - Loop over all of the values in the adjList for that vertex
    - If any of those values have not been visited, recursively invoke the helper function with that vertex
- Invoke the helper function with the starting vertex
- Return the result array


### DFS Iterative Pseudocode

```
DFSIterative(vertex):
    let S be a stack
    S.push(start)
    while S is not empty
        vertex = S.pop()
        if vertex is not labeled as seen :
            visit vertex(add to result list)
            label vertex as seen
            for each of vertex's neighbors, N do S.push(N)
```

- Function should accept a starting node
- Create a stack to help use keep track of vertices(use a list/array)
- Create a list to store the end result, to be returned at the very end
- Create an object to store visited vertices
- Add the starting vertex to the stack, and mark it as visited
- While the stack has something in it:
    - Pop the next vertex from the stack
    - If that vertex hasn't been visited yet
        - Mark it as visited
        - Add it to result list
        - Push all of its neighbors into the stack


### BFS

Visit neighbors at current depth first

- Should accept a starting vertex
- Create a queue (Can use array) and place the starting vertex in it
- Create an array to store the nodes visited
- Create an object to store nodes visited
- Mark the starting vertex as visited
- Loop as long as there is anything in the queue
- Remove the first vertex from the queue and push it into the array that stores nodes visited
- Loop over each vertex in the adjacency list for the vertex you are visiting.
- If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
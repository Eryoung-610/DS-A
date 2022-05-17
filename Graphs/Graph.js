class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2);
    this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    while (this.adjList[vertex].length) {
      let adjVertex = this.adjList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }
    delete this.adjList[vertex];
  }
  DFSRecursive(start) {
    let result = [];
    let visited = {};
    let adjList = this.adjList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);
      adjList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
  DFSIterative(start) {
    let result = [];
    let stack = [start];
    let visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
        currentVertex = stack.pop();

        result.push(currentVertex);

        this.adjList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor]  = true;
                stack.push(neighbor);
            }
        });
    }

    return result;
  }
  BFS(start) {
      let queue = [start];
      let result = [];
      let visited = {};
      let currentVertex;
      visited[start] = true;

      while(queue.length) {
          currentVertex = queue.shift();
          result.push(currentVertex);

          this.adjList[currentVertex].forEach(neighbor => {
              if(!visited[neighbor]){
                  visited[neighbor] = true;
                  queue.push(neighbor);
              }
          })
      }
  }
}

class WeightedGraph {
    constructor(){
        this.adjList = {};
    }
    addVertex(vertex){
        if(!this.adjList[vertex]) this.adjList[vertex] = [];
    }
    addEdge(v1,v2,weight){
        this.adjList[v1].push({node:v2, weight})
        this.adjList[v2].push({node:v1, weight})
    }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//     A
//   /   \
// B       C
// |       |
// D------ E
//     F

console.log(graph.DFSRecursive("A")); // [A,B,D,E,C,F]
// console.log(graph.DFSRecursive("B")); // [B,A,C,E,D,F]
// console.log(graph.DFSRecursive("C")); // [C,A,B,D,E,F]
// console.log(graph.DFSRecursive("D")); // [D,B,A,C,E,F]
// console.log(graph.DFSRecursive("E")); // [E,C,A,B,D,F]
// console.log(graph.DFSRecursive("F")); // [F,D,B,A,C,E]
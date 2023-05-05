class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  
    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
      this.adjacencyList.set(
        vertex1,
        this.adjacencyList.get(vertex1).filter((vertex) => vertex !== vertex2)
      );
      this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2).filter((vertex) => vertex !== vertex1)
      );
    }
  
    // Remove a vertex and its edges from the graph
    removeVertex(vertex) {
      const edges = this.adjacencyList.get(vertex);
      for (const edge of edges) {
        this.removeEdge(vertex, edge);
      }
      this.adjacencyList.delete(vertex);
    }
  
    // Other graph operations (traversal, search, etc.) can be added here
  }
  
  // Example usage:
  const graph = new Graph();
  
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'D');
  

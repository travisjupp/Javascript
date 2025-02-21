import Edge from './Edge.js';
import Vertex from './Vertex.js';
import Queue from '../queue/Queue.js';

class Graph {
  constructor(isWeighted = false, isDirected = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
    this.isDirected = isDirected;
  }

  addVertex(data) {
    const v = new Vertex(data);
    this.vertices.push(v);
    return v;
  }

  removeVertex(vtx) {
    this.vertices = this.vertices.filter(v => v !== vtx);
  }

  addEdge(vtx1, vtx2, weight) {
    const edgeWeight = this.isWeighted ? weight : null;
    if (vtx1 instanceof Vertex && vtx2 instanceof Vertex) {
      vtx1.addEdge(vtx2, edgeWeight);
      if (!this.isDirected) {
        vtx2.addEdge(vtx1, edgeWeight);
      }
    } else {
      throw Error('Expected Vertex arguments.');
    }
  }

  removeEdge(vtx1, vtx2) {
    if (vtx1 instanceof Vertex && vtx2 instanceof Vertex) {
      vtx1.removeEdge(vtx2);
      if (!this.isDirected) {
        vtx2.removeEdge(vtx1);
      }
    } else {
      throw Error('Expected Vertex arguments.');
    }
  }

  depthFirstTraversal(startVtx, cb, visited=[startVtx]) {
    cb(startVtx);
    startVtx.edges.forEach(edge => {
      const neighbor = edge.end;
      if (!visited.includes(neighbor)) {
        visited.push(neighbor);
        this.depthFirstTraversal(neighbor, cb, visited);
      }
    });
  }

  breadthFirstTraversal(startVtx, cb) {
    const visitedVertices = [startVtx];
    const visitQueue = new Queue();
    visitQueue.enqueue(startVtx);
    while (!visitQueue.isEmpty()) {
      const current = visitQueue.dequeue();
      cb(current);
      current.edges.forEach(edge => {
        const neighbor = edge.end;
        if (!visitedVertices.includes(neighbor)) {
          visitedVertices.push(neighbor);
          visitQueue.enqueue(neighbor);
        }
      });
    }
  }

  print() {
    this.vertices.forEach(v => v.print());
  }

}

export default Graph;


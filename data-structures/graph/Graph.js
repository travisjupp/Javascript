import Edge from './Edge.js';
import Vertex from './Vertex.js';

class Graph {
  constructor(isWeighted = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
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
      vtx2.addEdge(vtx1, edgeWeight);
    } else {
      throw Error('Expected Vertex arguments.');
    }
  }

  removeEdge(vtx1, vtx2) {
    if (vtx1 instanceof Vertex && vtx2 instanceof Vertex) {
      vtx1.removeEdge(vtx2);
      vtx2.removeEdge(vtx1);
    } else {
      throw Error('Expected Vertex arguments.');
    }
  }

  print() {
    this.vertices.forEach(v => v.print());
  }

}

export default Graph;


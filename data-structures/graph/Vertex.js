import Edge from './Edge';

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  addEdge(vtx, weight) {
    if (vtx instanceof Vertex) {
      this.edges.push(new Edge(this, vtx, weight));
    } else {
      throw Error('Edge start and end must both be Vertex');
    }
  }

  removeEdge(vtx) {
    this.edges = this.edges.filter(e => e.end !== vtx);
  }

  print() {
    const edgeList = this.edges.map(edge => edge.weight !== null ?
      `${edge.end.data} (${edge.weight})` : edge.end.data);

    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

export default Vertex;


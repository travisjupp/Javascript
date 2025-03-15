import PriorityQueue from '../priority-queue/PriorityQueue.js';

const Dijkstras = (graph, startingVertex) => {
  const distances = {}; // track distance from startVertex
  const previous = {}; // for path reconstruction
  const queue = new PriorityQueue(); // for graph traversal
  queue.add({vertex: startingVertex, priority: 0});

  // initialize placeholder vals for each vertex
  graph.vertices.forEach(vertex => {
    distances[vertex.data] = Infinity;
    previous[vertex.data] = null;
  });

  distances[startingVertex.data] = 0;

  // traverse graph
  while (!queue.isEmpty()) {
    const {vertex} = queue.popMin();
    // iterate neighbors
    vertex.edges.forEach(edge => {
      // distance from start point to current
      const alternate = edge.weight + distances[vertex.data];
      const neighborValue = edge.end.data;
      // if alternate path is shorter than current, overwrite
      // and queue neighbor
      if (alternate < distances[neighborValue]) {
        // replace neighbors distance with alternate
        distances[neighborValue] = alternate;
        // replace neighbors previous vertex to vertex
        previous[neighborValue] = vertex;
        // other vertices may have shorter paths, explore
        // neighbors of this neighbor
        queue.add({vertex: edge.end, priority: distances[neighborValue]});
      }
    });
  }

  return {distances, previous};
};

export default Dijkstras;

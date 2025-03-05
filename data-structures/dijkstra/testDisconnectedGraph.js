import Graph from '../graph/Graph.js';

const testDisconnectedGraph = new Graph(true, true);
const a = testDisconnectedGraph.addVertex('A');
const b = testDisconnectedGraph.addVertex('B');
const c = testDisconnectedGraph.addVertex('C');
const d = testDisconnectedGraph.addVertex('D');
const e = testDisconnectedGraph.addVertex('E');
const f = testDisconnectedGraph.addVertex('F');
const g = testDisconnectedGraph.addVertex('G');

testDisconnectedGraph.addEdge(a, b, 1);
testDisconnectedGraph.addEdge(b, c, 1);

testDisconnectedGraph.addEdge(d, e, 1);
testDisconnectedGraph.addEdge(e, f, 1);

export default testDisconnectedGraph;


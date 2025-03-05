import Graph from '../graph/Graph.js';

const testSimpleGraph = new Graph(true, true);
const a = testSimpleGraph.addVertex('A');
const b = testSimpleGraph.addVertex('B');
const c = testSimpleGraph.addVertex('C');

testSimpleGraph.addEdge(a, b, 1);
testSimpleGraph.addEdge(b, c, 1);

export default testSimpleGraph;


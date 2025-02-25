// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '../../styles.js';
// util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
util.inspect.defaultOptions.depth = 6; // show truncated objects
util.inspect.defaultOptions.breakLength = 130;
util.inspect.defaultOptions.compact = true; // dont break objects to new lines
// util.inspect.defaultOptions.compact = false; // break objects to new lines
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;

beforeEach(() => {
  global.console = console;
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
  global.console = jestConsole;
  console.log(style.color(99), style.hr.double, style.reset);
});

import Graph from './Graph.js';
import Edge from './Edge.js';
import Vertex from './Vertex.js';

describe('Graph', () => {
  it('should render a Graph', () => {
    const g = new Graph();
    expect(g).toBeTruthy();
    expect(g).toBeInstanceOf(Graph);
    expect(g.vertices).toBeInstanceOf(Array);
    console.log(g);
  });

  it('should add a Vertex', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    console.log(g);
    expect(g.vertices[0]).toBeInstanceOf(Vertex);
  });

  it('should remove a Vertex', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    console.log(g);
    expect(g.vertices[0]).toBeInstanceOf(Vertex);
    g.removeVertex(vtx1);
    console.log(g);
    expect(g.vertices[0]).toBeUndefined();
  });

  it('should add an Edge', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    vtx1.print();
    g.addEdge(vtx1, vtx2);
    vtx1.print();
    expect(vtx1.edges[0]).toBeInstanceOf(Edge);
    expect(vtx2.edges[0]).toBeInstanceOf(Edge);
  });

  it('should remove an Edge', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2);
    expect(vtx1.edges[0]).toBeInstanceOf(Edge);
    expect(vtx2.edges[0]).toBeInstanceOf(Edge);
    vtx1.print();
    g.removeEdge(vtx1, vtx2);
    vtx1.print();
    expect(vtx1.edges[0]).toBeUndefined();
    expect(vtx2.edges[0]).toBeUndefined();
  });

  it('should add a weighted Edge', () => {
    const g = new Graph(true);
    expect(g.isWeighted).toBeTruthy();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2, 200);
    vtx1.print();
    expect(vtx1.edges[0].weight).toBe(200);
    expect(vtx2.edges[0].weight).toBe(200);
  });

  it('should create a directed Graph', () => {
    const g = new Graph(false, true);
    expect(g.isDirected).toBeTruthy();
    console.log(g);
  });

  it('should add edge to a directed Graph', () => {
    const g = new Graph(false, true);
    expect(g.isDirected).toBeTruthy();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    vtx1.print();
    g.addEdge(vtx1, vtx2);
    vtx1.print();
    expect(vtx1.edges[0]).toBeTruthy();
    expect(vtx2.edges[0]).toBeFalsy();
  });

  it('should remove edge from a directed Graph', () => {
    const g = new Graph(false, true);
    expect(g.isDirected).toBeTruthy();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2);
    expect(vtx1.edges[0]).toBeTruthy();
    expect(vtx2.edges[0]).toBeFalsy();
    vtx1.print();
    g.removeEdge(vtx1, vtx2);
    vtx1.print();
    expect(vtx1.edges[0]).toBeFalsy();
  });

  it('should complete depth first traversal', () => {

    console.log("      A---1        ");
    console.log("         / \\      ");
    console.log("    B---2---3---C  ");

    const g = new Graph(false, false); // graph is undirected, unweighted
    // NOTE: the order of adding vertices will not affect the result,
    // however, the order of adding edges will
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    const vtx3 = g.addVertex('vtx3');
    const vtxA = g.addVertex('vtxA');
    const vtxB = g.addVertex('vtxB');
    const vtxC = g.addVertex('vtxC');

    // How does DFT choose which path to follow when there's a fork in the road?
    //
    // vtx1 has three neighbors: 2, 3, and A; which means traversal starting at
    // vtx1 *could* follow any of the three, but it won't, because the
    // traversal algorithm will follow the first neighbor it encounters in a
    // vertices' edges array which is determined by the order of calls to the
    // graphs .addEdge method. So, when we do a depth traversal starting at
    // vtx1, whether the path taken starts with A or 2 or 3 is determined by
    // the method calls below.

    g.addEdge(vtx1, vtx2); // <-- if we swap this with g.addEdge(vtx1, vtxA)...
    g.addEdge(vtx2, vtx3);
    g.addEdge(vtx3, vtx1);
    g.addEdge(vtx1, vtxA); // ...the order of edges in edges array changes...
    g.addEdge(vtx2, vtxB);
    g.addEdge(vtx3, vtxC);
    // ...and the test will fail. But, the structure will not have changed!

    g.print();
    const dftResult = [];

    g.depthFirstTraversal(vtx1,
      (vtx) => {
        dftResult.push(vtx.data);
      });

    console.log(dftResult);
    expect(dftResult)
      .toStrictEqual(['vtx1', 'vtx2', 'vtx3', 'vtxC', 'vtxB', 'vtxA']);
  });


  it('should complete breadth first traversal', () => {

    console.log("      A---1        ");
    console.log("         / \\      ");
    console.log("    B---2---3---C  ");

    const g = new Graph(false, false); // graph is undirected, unweighted
    // NOTE: the order of adding vertices will not affect the result,
    // however, the order of adding edges will
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    const vtx3 = g.addVertex('vtx3');
    const vtxA = g.addVertex('vtxA');
    const vtxB = g.addVertex('vtxB');
    const vtxC = g.addVertex('vtxC');

    // How does BFT choose which path to follow when there's a fork in the road?
    //
    // vtx1 has three neighbors: 2, 3, and A; which means traversal starting at
    // vtx1 *could* follow any of the three, but it won't, because the
    // traversal algorithm will follow the first neighbor it encounters in a
    // vertices' edges array which is determined by the order of calls to the
    // graphs .addEdge method. So, when we do a depth traversal starting at
    // vtx1, whether the path taken starts with A or 2 or 3 is determined by
    // the method calls below.

    g.addEdge(vtx1, vtx2); // <-- if we swap this with g.addEdge(vtx1, vtxA)...
    g.addEdge(vtx2, vtx3);
    g.addEdge(vtx3, vtx1);
    g.addEdge(vtx1, vtxA); // ...the order of edges in edges array changes...
    g.addEdge(vtx2, vtxB);
    g.addEdge(vtx3, vtxC);
    // ...and the test will fail. But, the structure will not have changed!

    g.print();
    const bftResult = [];

    g.breadthFirstTraversal(vtx1,
      (vtx) => {
        bftResult.push(vtx.data);
      });
    console.log(bftResult);
    expect(bftResult)
      .toStrictEqual(['vtx1', 'vtx2', 'vtx3', 'vtxA', 'vtxB', 'vtxC']);
  });

});


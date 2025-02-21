// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '/users/travisjupp/Javascript/styles.js';
// util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// util.inspect.defaultOptions.depth = 1; // show truncated objects
// util.inspect.defaultOptions.breakLength = 30;
// util.inspect.defaultOptions.compact = true; // dont break objects to new lines
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
  it.skip('should render a Graph', () => {
    const g = new Graph();
    expect(g).toBeTruthy();
    expect(g).toBeInstanceOf(Graph);
    expect(g.vertices).toBeInstanceOf(Array);
  });

  it.skip('should add a Vertex', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    expect(g.vertices[0]).toBeInstanceOf(Vertex);
  });

  it.skip('should remove a Vertex', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    expect(g.vertices[0]).toBeInstanceOf(Vertex);
    g.removeVertex(vtx1);
    expect(g.vertices[0]).toBeUndefined();
  });

  it.skip('should add an Edge', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2);
    expect(vtx1.edges[0]).toBeInstanceOf(Edge);
    expect(vtx2.edges[0]).toBeInstanceOf(Edge);
  });

  it.skip('should remove an Edge', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2);
    expect(vtx1.edges[0]).toBeInstanceOf(Edge);
    expect(vtx2.edges[0]).toBeInstanceOf(Edge);
    g.removeEdge(vtx1, vtx2);
    expect(vtx1.edges[0]).toBeUndefined();
    expect(vtx2.edges[0]).toBeUndefined();
  });

  it.skip('should add a weighted Edge', () => {
    const g = new Graph(true);
    expect(g.isWeighted).toBeTruthy();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2, 200);
    expect(vtx1.edges[0].weight).toBe(200);
    expect(vtx2.edges[0].weight).toBe(200);
  });

  it.skip('should create a directed Graph', () => {
    const g = new Graph(false, true);
    expect(g.isDirected).toBeTruthy();
  });

  it.skip('should add edge to a directed Graph', () => {
    const g = new Graph(false, true);
    expect(g.isDirected).toBeTruthy();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2);
    expect(vtx1.edges[0]).toBeTruthy();
    expect(vtx2.edges[0]).toBeFalsy();
  });

  it.skip('should remove edge from a directed Graph', () => {
    const g = new Graph(false, true);
    expect(g.isDirected).toBeTruthy();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2);
    expect(vtx1.edges[0]).toBeTruthy();
    expect(vtx2.edges[0]).toBeFalsy();
    g.removeEdge(vtx1, vtx2);
    expect(vtx1.edges[0]).toBeFalsy();
  });

  it('should complete depth first traversal', () => {
    const g = new Graph(true, false);
    const vtxStart = g.addVertex('vtxStart');
    const vtxA = g.addVertex('vtxA');
    const vtxB = g.addVertex('vtxB');
    const vtxC = g.addVertex('vtxC');
    g.addEdge(vtxStart, vtxA);
    g.addEdge(vtxStart, vtxB);
    g.addEdge(vtxStart, vtxC);
    g.addEdge(vtxA, vtxC);
    g.addEdge(vtxB, vtxC);
    g.addEdge(vtxC, vtxB);
    g.print();
    const dftResult = [];
    g.depthFirstTraversal(vtxStart, (vtx) => dftResult.push(vtx.data));
    expect(dftResult).toStrictEqual(['vtxStart', 'vtxA', 'vtxC', 'vtxB']);
  });

  it('should complete breadth first traversal', () => {
    const g = new Graph(true, false);
    const vtxStart = g.addVertex('vtxStart');
    const vtxA = g.addVertex('vtxA');
    const vtxB = g.addVertex('vtxB');
    const vtxC = g.addVertex('vtxC');
    g.addEdge(vtxStart, vtxA);
    g.addEdge(vtxStart, vtxB);
    g.addEdge(vtxStart, vtxC);
    g.addEdge(vtxA, vtxC);
    g.addEdge(vtxB, vtxC);
    g.addEdge(vtxC, vtxB);
    g.print();
    const dftResult = [];
    g.breadthFirstTraversal(vtxStart, (vtx) => dftResult.push(vtx.data));
    expect(dftResult).toStrictEqual(['vtxStart', 'vtxA', 'vtxB', 'vtxC']);
  });

});



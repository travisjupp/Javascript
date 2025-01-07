// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
beforeEach(() => { global.console = console; });
afterEach(() => { global.console = jestConsole; });

import Graph from './Graph.js';
import Edge from './Edge.js';
import Vertex from './Vertex.js';

describe('Graph', () => {
  it('should render a Graph', () => {
    const g = new Graph();
    expect(g).toBeTruthy();
    expect(g).toBeInstanceOf(Graph);
    expect(g.vertices).toBeInstanceOf(Array);
  });

  it('should add a Vertex', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    expect(g.vertices[0]).toBeInstanceOf(Vertex);
  });

  it('should remove a Vertex', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    expect(g.vertices[0]).toBeInstanceOf(Vertex);
    g.removeVertex(vtx1);
    expect(g.vertices[0]).toBeUndefined();
  });

  it('should add an Edge', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2);
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
    g.removeEdge(vtx1, vtx2);
    expect(vtx1.edges[0]).toBeUndefined();
    expect(vtx2.edges[0]).toBeUndefined();
  });

  it('should add a weighted Edge', () => {
    const g = new Graph(true);
    expect(g.isWeighted).toBeTruthy();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2, 200);
    expect(vtx1.edges[0].weight).toBe(200);
    expect(vtx2.edges[0].weight).toBe(200);
  });

  it('should create a directed Graph', () => {
    const g = new Graph(false, true);
    expect(g.isDirected).toBeTruthy();
  });

  it('should add edge to a directed Graph', () => {
    const g = new Graph(false, true);
    expect(g.isDirected).toBeTruthy();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2);
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
    g.removeEdge(vtx1, vtx2);
    expect(vtx1.edges[0]).toBeFalsy();
  });

});


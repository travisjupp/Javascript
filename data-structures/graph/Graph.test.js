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

  it('should add an Edge', () => {
    const g = new Graph();
    const vtx1 = g.addVertex('vtx1');
    const vtx2 = g.addVertex('vtx2');
    g.addEdge(vtx1, vtx2);
    expect(vtx1.edges[0]).toBeInstanceOf(Edge);
    expect(vtx2.edges[0]).toBeInstanceOf(Edge);
  });

});


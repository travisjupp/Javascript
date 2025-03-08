// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '../../styles.js';
// util.inspect.defaultOptions.depth = null; // show full objects
util.inspect.defaultOptions.depth = 0; // show truncated objects
util.inspect.defaultOptions.compact = true; // dont break objects to new lines
// util.inspect.defaultOptions.compact = false; // break objects to new lines

// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;

import Dijkstras from './Dijkstras.js';
import testSingleVertexGraph from './testSingleVertexGraph.js';
import testSimpleGraph from './testSimpleGraph.js';
import testDisconnectedGraph from './testDisconnectedGraph.js';
import testGraph from './testGraph.js';

beforeEach(() => {
  global.console = console;
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
  global.console = jestConsole;
  console.log(style.color(99), style.hr.double, style.reset);
});

describe('Dijkstras', () => {
  it('should find shortest path in graph with 3 vertices', () => {
    console.log('A ─1─▶ B ─1─▶ C');

    const results = Dijkstras(testSimpleGraph, testSimpleGraph.vertices[0]);
    console.log(results.distances);
    expect(results.distances)
      .toStrictEqual({ A: 0, B: 1, C: 2 });
  });

  it('should find shortest path in graph with 1 vertex', () => {
    const results = Dijkstras(testSingleVertexGraph, testSingleVertexGraph.vertices[0]);
    console.log(results.distances);
    expect(results.distances)
      .toStrictEqual({ A: 0 });
  });

  it('should find shortest path in a disconnected graph', () => {
    const results = Dijkstras(testDisconnectedGraph, testDisconnectedGraph.vertices[0]);
    console.log('A ─1─▶ B ─1─▶ C');
    console.log('D ─1─▶ E ─1─▶ F');
    console.log(results.distances);
    expect(results.distances)
      .toStrictEqual(
        {
          A: 0,
          B: 1,
          C: 2,
          D: Infinity,
          E: Infinity,
          F: Infinity,
          G: Infinity
        }
      );
  });

  it('should find shortest path in a graph', () => {
    const results = Dijkstras(testGraph, testGraph.vertices[0]);
    console.log(' ┌─▶ B ◀────3──── A ──100──▶ C ◀─┐');
    console.log(' │   │            │              │');
    console.log(' │   └9─▶ G ◀─┐   4              3');
    console.log('-2            │   │              │');
    console.log(' │           -50  └─────▶ D ─────┘');
    console.log(' │            │           │       ');
    console.log(' └─────────── E ◀────8────┘       ');
    console.log('              │                   ');
    console.log('              └──10──▶ F          ');
    console.log(results.distances);

    /* show shortest path for each vtx */
    for (const vtx in results.previous) {
      const path = [];
      let startVtx = vtx;
      let sv = startVtx;
      while (startVtx) {
        const prev = results.previous[startVtx];
        if (prev) path.unshift(prev.data);
        if (results.previous[startVtx]) {
          startVtx = results.previous[startVtx].data;
        } else {
          break;
        }
      }
      console.log(`Shortest path from ${startVtx} to ${sv}: ${path.length ?
          path.join('─▶')+'─▶'+sv : sv} weight: ${results.distances[sv]}`); }
    /* /show shortest path for each vtx */

    expect(results.distances)
      .toStrictEqual(
        { A: 0, B: 3, C: 7, D: 4, E: 12, F: 22, G: -38 }
      );
  });
});



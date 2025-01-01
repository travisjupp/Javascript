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

import MaxHeap from './MaxHeap.js';

describe('MaxHeap', () => {

  it('should create a maxheap', () => {
    const maxheap = new MaxHeap();
    maxheap.add(1);
    assert.ok(maxheap);
  });

  it('should remove and return the max value', () => {
    const maxheap = new MaxHeap();
    for (let n = 1; n < 5; n++) {
      maxheap.add(n);
    }
    console.log(maxheap);
    const max = maxheap.popMax();
    expect(maxheap.heap).not.toContain(4);
    expect(max).toEqual(4);
  });

  it('should have parents > children', () => {
    const maxheap = new MaxHeap();
    for (let n = 1; n < 11; n++) {
      maxheap.add(Math.floor(Math.random() * 99));
    };
    for (let i = maxheap.size-1; i > 0; i--) {
      // console.log('=>', maxheap.heap[i]);
      let child = maxheap.heap[i];
      let parent = maxheap.heap[Math.floor(i/2)];
      if (parent) assert.ok(parent > child);
    };
  });

});


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

import MinHeap from './MinHeap.js';

const createMinHeap = size => {
  const minheap = new MinHeap();
  for (let i = 0; i < size; i++) {
    minheap.add(Math.floor(Math.random() * 99));
  }
  return minheap;
}

describe('MinHeap', () => {

  it('should create a minheap', () => {
    const minheap = createMinHeap();
    minheap.add(1);
    assert.ok(minheap);
  });

  it('should remove and return the min value', () => {
    const minheap = new MinHeap();
    for (let n = 1; n < 5; n++) {
      minheap.add(n);
    }
    console.log(minheap);
    const min = minheap.popMin();
    expect(minheap.heap).not.toContain(1);
    expect(min).toEqual(1);
  });

  it('should have parents < children', () => {
    const minheap = createMinHeap(11);
    for (let i = minheap.size-1; i > 0; i--) {
      let child = minheap.heap[i];
      let parent = minheap.heap[Math.floor(i/2)];
      if (parent > child) {
        console.log('p: ', parent, '>', 'c: ', child);
      }
    };
    if (typeof parent === 'number') assert.ok(parent < child);
  });

  it('should return the first item', () => {
    const minheap = createMinHeap(4);
    const firstItem = minheap.peek();
    expect(minheap.heap[1]).toEqual(firstItem);
  });

});


// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '../../styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
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

import MaxHeap from './MaxHeap.js';

const createMaxHeap = size => {
  const maxheap = new MaxHeap();
  for (let i = 0; i < size; i++) {
    maxheap.add(Math.floor(Math.random() * 99));
  }
  return maxheap;
}

describe('MaxHeap', () => {

  it('should create a maxheap', () => {
    const maxheap = createMaxHeap();
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
    const maxheap = createMaxHeap(11);
    console.log(maxheap);
    for (let i = maxheap.size-1; i > 0; i--) {
      let child = maxheap.heap[i];
      let parent = maxheap.heap[Math.floor(i/2)];
      if (parent < child) {
        console.log('p: ', parent, '<', 'c: ', child);
      };
    };
    if (typeof parent === 'number') assert.ok(parent > child);
  });

  it('should return the first item', () => {
    const maxheap = createMaxHeap(4);
    const firstItem = maxheap.peek();
    expect(maxheap.heap[1]).toEqual(firstItem);
  });

});


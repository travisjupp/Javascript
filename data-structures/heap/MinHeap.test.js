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

import MinHeap from './MinHeap.js';

const createMinHeap = size => {
  const minheap = new MinHeap();
  for (let i = 0; i < size; i++) {
    minheap.add(Math.floor(Math.random() * 99));
  }
  return minheap;
}

describe('MinHeap', () => {

  it.skip('should create a minheap', () => {
    const minheap = createMinHeap();
    minheap.add(1);
    console.log(minheap);
    assert.ok(minheap);
  });

  it.skip('should remove and return the min value', () => {
    const minheap = new MinHeap();
    for (let n = 1; n < 5; n++) {
      minheap.add(n);
    }
    console.log(minheap);
    const min = minheap.popMin();
    console.log(minheap);
    console.log('=>', min);
    expect(minheap.heap).not.toContain(1);
    expect(min).toEqual(1);
  });

  it.skip('should have parents < children', () => {
    const minheap = createMinHeap(11);
    for (let i = minheap.size-1; i > 0; i--) {
      let child = minheap.heap[i];
      let parent = minheap.heap[Math.floor(i/2)];
      console.log('p: ', parent, 'c: ', child);
      if (parent > child) {
        console.log('p: ', parent, '>', 'c: ', child);
      }
    };
    if (typeof parent === 'number') assert.ok(parent < child);
  });

  it.skip('should return the first item', () => {
    const minheap = createMinHeap(4);
    console.log(minheap);
    const firstItem = minheap.peek();
    console.log('=>', firstItem);
    expect(minheap.heap[1]).toEqual(firstItem);
  });

  it('should print the heap', () => {
    const minheap = new MinHeap();
    minheap.add(22);
    minheap.add(30);
    minheap.add(77);
    minheap.add(100);
    minheap.add(133);

    console.log(minheap);
    const firstItem = minheap.peek();
    console.log('peek =>', firstItem);
    minheap.print();
    // expect(minheap.heap[1]).toEqual(firstItem);
  });
});


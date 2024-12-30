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

describe('MinHeap', () => {
  it('should create a minheap', () => {
    const minheap = new MinHeap();
    minheap.add(1);
    console.log(minheap);
    assert.ok(minheap);
  });
});


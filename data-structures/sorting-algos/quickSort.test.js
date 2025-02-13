// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '/users/travisjupp/Javascript/styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// dont wrap long arrays
util.inspect.defaultOptions.compact = true;

// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
import quickSort from './quickSort.js';

beforeEach(() => {
    global.console = console;
    console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
    global.console = jestConsole;
    console.log(style.color(99), style.hr.double, style.reset);
});

describe('quickSort', () => {
  it('should sort an array incrementally', () => {
    // console.log(quickSort([3, 2, 7, 9], 0, 3));
    // console.log(quickSort([3, 1, 4, 2, 8, 9], 0, 5));
    // console.log(util.inspect(quickSort([12, 92, 45, 3, 92, 72, 89], 0, 6), {}));
    console.log(quickSort([1]));

  });
});



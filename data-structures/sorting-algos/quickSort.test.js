// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '../../styles.js';
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
    const arr = [3, 2, 7, 9];
    console.log(arr);
    expect(quickSort(arr, 0, 3)).toStrictEqual([2, 3, 7, 9]);
    console.log(arr);
  });

  it('should sort a sub-array incrementally', () => {
    const arr = [3, 1, 4, 2, 8, 9];
    console.log(arr);
    expect(quickSort(arr, 0, 2)).toStrictEqual([1, 3, 4, 2, 8, 9]);
    console.log(arr);
  });

  it('should sort a one-item-array incrementally', () => {
    const arr = [1];
    console.log(arr);
    expect(quickSort(arr)).toStrictEqual([1]);
    console.log(arr);
  });

});



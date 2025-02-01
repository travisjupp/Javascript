// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '/users/travisjupp/Javascript/styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
import mergeSort from './mergeSort';

beforeEach(() => {
    global.console = console;
    console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
    global.console = jestConsole;
    console.log(style.color(99), style.hr.double, style.reset);
});

describe('mergeSort', () => {
  it('should sort incrementally', () => {
    console.log(mergeSort([5, 10, -3, -3, 7, 9]));
    expect(mergeSort([5, 10, -3, -3, 7, 9]))
      .toStrictEqual([-3, -3, 5, 7, 9, 10])
  });

});



// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from './styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
util.inspect.defaultOptions.compact = true; // dont break objects to new lines
// util.inspect.defaultOptions.compact = false; // break objects to new lines
util.inspect.defaultOptions.maxArrayLength = 11;
// util.inspect.defaultOptions.breakLength = 155;

// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
import knapsack from './dynamicKnapsack.js';

beforeEach(() => {
  global.console = console;
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
  global.console = jestConsole;
  console.log(style.color(99), style.hr.double, style.reset);
});

describe('dynamicKnapsack', () => {
  it('should return optimal value (7 items)', () => {
    const weightCap = 50;
    const weights = [31, 10, 20, 19, 4, 3, 6];
    const values = [70, 20, 39, 37, 7, 5, 10];
    console.log('weightCap', weightCap, '\nweights', weights, '\nvalues', values);
    expect(knapsack(weightCap, weights, values))
      .toBe(107);
  });

  it('should return optimal value (3 items)', () => {
    const weightCap = 5;
    const weights = [1, 3, 5];
    const values = [250, 300, 500];
    console.log('weightCap', weightCap, '\nweights', weights, '\nvalues', values);
    expect(knapsack(weightCap, weights, values))
      .toBe(550);
  });

});


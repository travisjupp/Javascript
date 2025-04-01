// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from './styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// util.inspect.defaultOptions.compact = true; // dont break objects to new lines
// util.inspect.defaultOptions.compact = false; // break objects to new lines

// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
import knapsack from './recursiveKnapsack.js';

beforeEach(() => {
    global.console = console;
    console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
    global.console = jestConsole;
    console.log(style.color(99), style.hr.double, style.reset);
});

describe('recursiveKnapsack', () => {
  it('should return optimal value', () => {
    let weightCap = 5;
    const weights = [1, 3, 5];
    const values = [250, 300, 500];
    const i = weights.length;
    console.log('first recursiveKnapsack called with wcap:', weightCap, 'i:', i, 'val:', values[i-1]);
    expect(knapsack(weightCap, weights, values, i))
      .toBe(550);
  });

});



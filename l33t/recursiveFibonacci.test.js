// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '../styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// util.inspect.defaultOptions.compact = true; // dont break objects to new lines
// util.inspect.defaultOptions.compact = false; // break objects to new lines

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

import fib from './recursiveFibonacci.js';

describe('fibonacci (recursive)', () => {
  it('should return the fib num 0 when 0 is input', () => {
    expect(fib(0))
      .toBe(0);
  });

  it('should return the fib num 1 when 1 is input', () => {
    expect(fib(1))
      .toBe(1);
  });

  it('should return the fib num 1 when 2 is input', () => {
    expect(fib(2))
      .toBe(1);
  });

  it('should return the fib num 2 when 3 is input', () => {
    expect(fib(3))
      .toBe(2);
  });

  it('should return the fib num 3 when 4 is input', () => {
    expect(fib(4))
      .toBe(3);
  });

  it('should return the fib num 5 when 5 is input', () => {
    expect(fib(5))
      .toBe(5);
  });
});


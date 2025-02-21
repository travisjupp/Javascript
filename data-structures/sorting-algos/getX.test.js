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

import getX from './getX.js';

beforeEach(() => {
  global.console = console;
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
  global.console = jestConsole;
  console.log(style.color(99), style.hr.double, style.reset);
});

describe('getX', () => {
  it('should return Xth number in order', () => {
    console.log(getX(2, [5, -3, -3, 17, 9]));
    expect(getX(2, [4, 3, 2, 1])).toBe(2);
  });

  it('should return 0 from an x value of 0', () => {
    console.log(getX(0, [3, 0]));
    expect(getX(0, [3, 0])).toBe(0);
  });

  it('should return 0 from an x value of 1', () => {
    console.log(getX(1, [0, -3]));
    expect(getX(1, [0, -3])).toBe(-3);
  });

  it('should return 0 from an x value larger than array', () => {
    console.log(getX(2, [1]));
    expect(getX(2, [1])).toBe(0);
  });

  it('should return undefined from an empty array arg', () => {
    console.log(getX(0, []));
    expect(getX(3, [])).toBeUndefined();
  });

});



// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '/users/travisjupp/Javascript/styles.js';
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

import findCenter from './findCenterOfStarGraph';

describe('starGraph', () => {
  it('should find center from 3 edges', () => {
   const edges = [[1,2],[2,3],[4,2]];
    expect(findCenter(edges)).toBe(2);
  });

  it('should find center from 4 edges', () => {
   const edges = [[1,2],[5,1],[1,3],[1,4]];
    expect(findCenter(edges)).toBe(1);
  });

});



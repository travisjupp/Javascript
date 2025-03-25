// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from './styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
util.inspect.defaultOptions.compact = true; // dont break objects to new lines
// util.inspect.defaultOptions.compact = false; // break objects to new lines

// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;

import eswc from './explicitSortWithComparator.js';

beforeEach(() => {
    global.console = console;
    console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
    global.console = jestConsole;
    console.log(style.color(99), style.hr.double, style.reset);
});

describe('explicitSortWithComparator', () => {
  it('should return an explicitly sorted array', () => {
    const inputArray = ['a', 'b', 'c', 'd', 'e', 'f', 'n', 'y', 'g'];
    const order = ['a', 'n', 'd', 'y'];
    const expected = ['a', 'n', 'd', 'y', 'b', 'c', 'e', 'f', 'g'];
    expect(eswc(inputArray, order))
      .toStrictEqual(expected);

  // compares
  // a, b, c, d, e, f, n, y, g 
  // B  A
  // |  B  A
  // |  |  B  A -swap
  // |  B  |  A -swap
  // B  |  |  A
  // |  B  |  |  A
  // |  |  B  |  A
  // |  B  |  |  |  A
  // |  |  |  |  B  A
  // |  |  B  |  |  |  A -swap
  // |  |  |  B  |  |  A -swap
  // B  |  |  |  |  |  A
  // |  B  |  |  |  |  |  A -swap
  // |  |  |  |  |  |  B  A
  // |  |  |  B  |  |  |  A -swap
  // |  B  |  |  |  |  |  |  A
  // |  |  |  |  B  |  |  |  A
  // |  |  |  |  |  B  |  |  A
  // a, b, c, d, e, f, n, y, g 


  // swaps                      A  B
  // a, b, c, d, e, f, n, y, g (b, a)
  // a, b, c, d, e, f, n, y, g (c, b)
  // a, b, d, c, e, f, n, y, g (d, c) -swap
  // a, d, b, c, e, f, n, y, g (d, b) -swap
  // a, d, b, c, e, f, n, y, g (d, a)
  // a, d, b, c, e, f, n, y, g (e, b)
  // a, d, b, c, e, f, n, y, g (e, c)
  // a, d, b, c, e, f, n, y, g (f, b)
  // a, d, b, c, e, f, n, y, g (f, e)
  // a, d, b, n, e, f, c, y, g (n, c) -swap
  // a, n, b, d, e, f, c, y, g (n, d) -swap
  // a, n, b, d, e, f, c, y, g (n, a)
  // a, n, y, d, e, f, c, b, g (y, b) -swap
  // a, n, y, d, e, f, c, b, g (y, n) 
  // a, n, d, y, e, f, c, b, g (y, d) -swap
  // a, n, d, y, e, f, c, b, g (g, b)
  // a, n, d, y, e, f, c, b, g (g, e)
  // a, n, d, y, e, f, c, b, g (g, f)

  });

});


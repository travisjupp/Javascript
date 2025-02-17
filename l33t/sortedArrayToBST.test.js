// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '/users/travisjupp/Javascript/styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
util.inspect.defaultOptions.compact = true; // dont break objects to new lines
// util.inspect.defaultOptions.compact = false; // break objects to new lines
// util.inspect.defaultOptions.breakLength = 10;
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
import {sortedArrayToBST} from './sortedArrayToBST.js';
import BSTToArray from '../BSTToArray.js';

beforeEach(() => {
  global.console = console;
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
  global.console = jestConsole;
  console.log(style.color(99), style.hr.double, style.reset);
});
describe('sortedArrayToBST', () => {
  it('should convert array to height-balanced BST', () => {
    const bt = sortedArrayToBST([-10, -3, 0, 5, 9]);
    expect(BSTToArray(bt)).toStrictEqual([0, -3, 9, -10, null, 5])
  });

  it('should convert two-item array to height-balanced BST', () => {
    const bt = sortedArrayToBST([1, 3]);
    expect(BSTToArray(bt)).toStrictEqual([3, 1])
  });

  it('should convert three-item array to height-balanced BST', () => {
    const bt = sortedArrayToBST([2, 3, 4]);
    expect(BSTToArray(bt)).toStrictEqual([3, 2, 4])
  });

  it('should convert five-item array to height-balanced BST', () => {
    const bt = sortedArrayToBST([-12, -1, 0, 4, 998]);
    expect(BSTToArray(bt)).toStrictEqual([0,-1,998,-12,null,4])
  });
});



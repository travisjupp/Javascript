// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '/users/travisjupp/Javascript/styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects

// dont break objects to new lines
// util.inspect.defaultOptions.compact = true;
// break objects to new lines
// util.inspect.defaultOptions.compact = false;

// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
import binaryTree from './binaryTree.js';

const createBinaryTree = (size) => {
  const bt = new binaryTree(0);
  for (let node = 1; node <= size; node++) {
    bt.insert(node);
  }
  return bt;
}

beforeEach(() => {
    global.console = console;
    console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
    global.console = jestConsole;
    console.log(style.color(99), style.hr.double, style.reset);
});

describe('binaryTree', () => {
  it('should create a binary tree', () => {
    console.log(createBinaryTree(3));
  });

});



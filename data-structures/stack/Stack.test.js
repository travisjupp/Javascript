import util from 'node:util';
import assert from 'node:assert/strict';
// import {describe, it} from 'node:test';
import Stack from './Stack.js';
import d from '../linked-lists/printNode.js';
import LinkedList from '../linked-lists/singly-linked-list/LinkedList.js';
import {jest} from '@jest/globals';
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
beforeEach(() => { global.console = console; });
afterEach(() => { global.console = jestConsole; });

util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects

describe('Creates stack', () => {
  it('should create a 4 item stack', () => {
    const stack = new Stack();
    stack.push('D'); stack.push('C'); stack.push('B'); stack.push('A');
    d(stack.stack.head);
    const list = new LinkedList(); 
    list.addToTail('A'); list.addToTail('B'); list.addToTail('C'); list.addToTail('D');
    assert.deepStrictEqual(stack.stack, list);
  });
});


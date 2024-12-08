const util = require('node:util');
const {describe, it} = require('node:test');
const Stack = require('./Stack.js');
const assert = require('node:assert');
const d = require('../printNode.js');
const LinkedList = require('../singly-linked-list/LinkedList');

util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects

describe.only('Creates stack', () => {
  it.only('should create a 4 item stack', () => {
    const stack = new Stack();
    stack.push('D'); stack.push('C'); stack.push('B'); stack.push('A');
    d(stack.stack.head);
    const list = new LinkedList(); 
    list.addToTail('A'); list.addToTail('B'); list.addToTail('C'); list.addToTail('D');
    assert.deepStrictEqual(stack.stack, list);
  });
});


const util = require('node:util');
const {describe, it} = require('node:test');
const Queue = require('./Queue.js');
const assert = require('node:assert');
const d = require('../linked-lists/printNode.js');
const LinkedList = require('../linked-lists/singly-linked-list/LinkedList.js');

util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects

describe.only('Creates queue', () => {
  it.only('should create a 4 item queue', () => {
    const queue = new Queue();
    queue.enqueue('A'); queue.enqueue('B'); queue.enqueue('C'); queue.enqueue('D');
    d(queue.queue.head);
    const list = new LinkedList(); 
    list.addToTail('A'); list.addToTail('B'); list.addToTail('C'); list.addToTail('D');
    assert.deepStrictEqual(queue.queue, list);
  });
});




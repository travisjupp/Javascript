import util from 'node:util';
import assert from 'node:assert/strict';
import {describe, it} from 'node:test';
import Queue from './Queue.js';
import d from '../linked-lists/printNode.js';
import LinkedList from '../linked-lists/singly-linked-list/LinkedList.js';

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

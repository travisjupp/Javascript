import util from 'node:util';
import assert from 'node:assert/strict';
// import {describe, it} from 'node:test';
const {default: Queue} = await import('./Queue.js');
const {default: pn} = await import('../linked-lists/printNode.js');
const {default: LinkedList} = await import(
  '../linked-lists/singly-linked-list/LinkedList.js'
);
import {style} from '../../styles.js';
const {default: jest} = await import('@jest/globals');
// suppress jests tracing console logs
const {default: console} = await import('console');
const jestConsole = console;

beforeEach(() => {
  global.console = console;
  console.log( style.color(255, 0, 255), '▷', style.reset, style.color(39), expect.getState().currentTestName, style.reset, '\n',);
});

afterEach(() => {
  global.console = jestConsole;
  console.log(style.color(99), style.hr.double, style.reset);
});

util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects

describe('Queue:', () => {
  it('should create a 4 item queue', () => {
    const queue = new Queue();
    queue.enqueue('A');
    pn("queue.enqueue('A') ☞", queue.queue.head, 'c');
    queue.enqueue('B');
    pn("queue.enqueue('B') ☞", queue.queue.head, 'c');
    queue.enqueue('C');
    pn("queue.enqueue('C') ☞", queue.queue.head, 'c');
    queue.enqueue('D');
    pn("queue.enqueue('D') ☞", queue.queue.head, 'c');
    queue.print();
    const list = new LinkedList();
    list.addToTail('A');
    list.addToTail('B');
    list.addToTail('C');
    list.addToTail('D');
    assert.deepStrictEqual(queue.queue, list);
  });

  it('should dequeue head of queue', () => {
    const queue = new Queue();
    queue.enqueue('A');
    pn("queue.enqueue('A') ☞", queue.queue.head, 'c');
    queue.enqueue('B');
    pn("queue.enqueue('B') ☞", queue.queue.head, 'c');
    queue.enqueue('C');
    pn("queue.enqueue('C') ☞", queue.queue.head, 'c');
    queue.enqueue('D');
    pn("queue.enqueue('D') ☞", queue.queue.head, 'c');
    queue.print();
    queue.dequeue();
    pn("queue.dequeue() ☞", queue.queue.head, 'c');
    queue.print();
    const list = new LinkedList();
    // list.addToTail('A');
    list.addToTail('B');
    list.addToTail('C');
    list.addToTail('D');
    assert.deepStrictEqual(queue.queue, list);
  });

  it('should enqueue an array', () => {
    const queue = new Queue();
    queue.enqueue([1, 2, 3]);
    pn("queue.enqueue('[1, 2, 3]') ☞", queue.queue.head, 'c');
    queue.print();
    const list = new LinkedList();
    list.addToTail([1, 2, 3]);
    assert.deepStrictEqual(queue.queue, list);
  });

  it('should enqueue a queue', () => {
    const queue = new Queue();
    queue.enqueue(new Queue());
    pn("queue.enqueue(new Queue()) ☞", queue.queue.head, 'c');
    queue.print();
    const list = new LinkedList();
    list.addToTail(new Queue());
    assert.deepStrictEqual(queue.queue, list);
  });
});

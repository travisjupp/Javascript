import assert from 'node:assert/strict';
// import {describe, it} from 'node:test';
import {jest} from '@jest/globals';
import LinkedList from './LinkedList.js';
import removeNthFromEnd from './removeNthFromEnd.js';
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
beforeEach(() => { global.console = console; });
afterEach(() => { global.console = jestConsole; });

// list generator
const createList = (arr = [1, 2, 3, 4]) => {
  const list = new LinkedList();
  for (const el of arr) {
    list.addToTail(el);
  }
  return list;
}

// test removeNthFromEnd result
describe('Remove head', () => {

  it('should remove head from one item list', () => {
    const testRemoveHeadFromEnd = removeNthFromEnd(createList([1]).head, 1);
    assert.strictEqual(testRemoveHeadFromEnd, '');
  });

  it('should remove head from two item list', () => {
    const testRemoveHeadFromEnd = removeNthFromEnd(createList([1, 2]).head, 2);
    assert.strictEqual(testRemoveHeadFromEnd, '2');
  });

  it('should remove head from four item list', () => {
    const testRemoveHeadFromEnd = removeNthFromEnd(createList().head, 4);
    assert.strictEqual(testRemoveHeadFromEnd, '234');
  });

});

describe('Remove middle', () => {

  it('should remove middle item from six item list', () => {
    const testRemoveMiddleFromEnd = removeNthFromEnd(createList([1, 2, 3, 4, 5, 6]).head, 4);
    assert.strictEqual(testRemoveMiddleFromEnd, '12456');
  });

});

describe('Remove tail', () => {

  it('should remove tail from two item list', () => {
    const testRemoveTailFromEnd = removeNthFromEnd(createList([1, 2]).head, 1);
    assert.strictEqual(testRemoveTailFromEnd, '1');
  });

});


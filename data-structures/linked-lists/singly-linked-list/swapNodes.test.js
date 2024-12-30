import assert from 'node:assert/strict';
// import {describe, it} from 'node:test';
import swapNodes from './swapNodes.js';
import LinkedList from './LinkedList.js';
import {jest} from '@jest/globals';
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
beforeEach(() => { global.console = console; });
afterEach(() => { global.console = jestConsole; });

// list generator
const createList = (arr = ['A', 'B', 'C', 'D']) => {
  const list = new LinkedList();
  for (const el of arr) {
    list.addToTail(el);
  }
  return list;
}

// return list node data as a string
const ltos = (list) => {
  let result = '';
  let item = list.head;
  while (item) {
    result += item.data;
    item = item.next;
  }
  if (!result) return list;
  return result;
}

// test swapNodes result
describe('Swap first with last', () => {
  it('should swap first node with last node of list', () => {
    const testSwapFirstLast = swapNodes(createList(), 'A', 'D');
    assert.strictEqual(ltos(testSwapFirstLast), 'DBCA');
  });
});

describe('Swap first with second', () => {
  it('should swap first node with second of list', () => {
    const testSwapFirstSecond = swapNodes(createList(), 'A', 'B');
    assert.strictEqual(ltos(testSwapFirstSecond), 'BACD');
  });
});

describe('Swap data equal', () => {
  it('should return "Data is equal"', () => {
    const testSwapDataEqual = swapNodes(createList(), 'A', 'A');
    assert.strictEqual(ltos(testSwapDataEqual), 'Data is equal');
  });
});

describe('Swap node missing', () => {
  it('should return "Missing data: element(s) do not exist"', () => {
    const testSwapNodeMissing = swapNodes(createList(), 'A', 'X');
    assert.strictEqual(ltos(testSwapNodeMissing), 'Missing data: element(s) do not exist');
  });
});


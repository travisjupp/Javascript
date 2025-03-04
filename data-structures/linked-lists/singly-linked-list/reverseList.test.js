import assert from 'node:assert/strict';
// import {describe, it} from 'node:test';
import reverseList from './reverseList.js';
import LinkedList from './LinkedList.js';
import util from 'node:util';
import {style} from '../../../styles.js';
import {jest} from '@jest/globals';
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;

beforeEach(() => {
  global.console = console;
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
  global.console = jestConsole;
  console.log(style.color(99), style.hr.double, style.reset);
});


// list generator
const createList = (arr = ['A', 'B', 'C', 'D']) => {
  const list = new LinkedList();
  for (const el of arr) {
    list.addToTail(el);
  }
  return list;
}

// test reverseList result
describe.only('Linked List: ', () => {
  it.only('should reverse all nodes in the list', () => {
    const list = createList();
    list.printList();
    const reversed = reverseList(createList());
    reversed.printList();
    assert.deepStrictEqual(reversed, createList(['D','C','B','A']));
  });
});

describe.only('Linked List: ', () => {
  it.only('should return reference-equal list', () => {
    const list = createList();
    list.printList();
    const reversed = reverseList(list);
    console.log("list === reversed ?", list === reversed);
    assert.strictEqual(reversed, list);
  });
});


import assert from 'node:assert/strict';
// import {describe, it} from 'node:test';
import LinkedList from './LinkedList.js';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '../../../styles.js';

util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;

beforeEach(() => {
    global.console = console;
    console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
    global.console = jestConsole;
    // console.log(style.color(135, 95, 255), style.hr.double, style.reset);
    console.log(style.color(0, 255, 0), style.hr.double, style.reset);
});

// list generator
const createList = (arr = ['A', 'B', 'C', 'D']) => {
  const list = new LinkedList();
  for (const el of arr) {
    list.addToTail(el);
  }
  return list;
}

// test findMiddle result
describe('Find middle', () => {

  it('should find middle item in four item list', () => {
    const list = createList();
    list.printList();
    const mid = list.findMiddle().data;
    console.log(mid);
    expect(mid).toBe('C');
  });

  it('should find middle item in three item list', () => {
    const list = createList(['A', 'B', 'C']);
    list.printList();
    const mid = list.findMiddle().data;
    console.log(mid);
    expect(list.findMiddle().data).toBe('B');
  });

  it('should find middle item in two item list', () => {
    const list = createList(['A', 'B']);
    list.printList();
    const mid = list.findMiddle().data;
    console.log(mid);
    expect(list.findMiddle().data).toBe('B');
  });

  it('should find middle item in one item list', () => {
    const list = createList(['A']);
    list.printList();
    const mid = list.findMiddle().data;
    console.log(mid);
    expect(list.findMiddle().data).toBe('A');
  });

});

describe('Find node', () => {
  describe('iteratively', () => {

    it('should find the specified node', () => {
      const list = createList();
      list.printList();
      const expected = list.findNodeIteratively('C');
      console.log(expected);
      expect(list.head.next.next)
        .toStrictEqual(expected);
    });

    it('should return null', () => {
      const list = createList();
      const expected = list.findNodeIteratively('X');
      console.log(expected);
      expect(expected)
        .toBeNull();
    });

  });

  describe('recursively', () => {

    it('should find the specified node', () => {
      const list = createList();
      const expected = list.findNodeRecursively('C');
      console.log(expected);
      expect(list.head.next.next)
        .toStrictEqual(expected);
    });

    it('should return null', () => {
      const list = createList();
      const expected = list.findNodeRecursively('X');
      console.log(expected);
      expect(expected)
        .toBeNull();
    });

  });
});

describe('Print node', () => {
  it('should print list using `printNode` method', () => {
    const linkedList = createList();
    linkedList.printNode('^', 'i', '$',);
    linkedList.printNode(linkedList.head);
    linkedList.printNode(linkedList.head, 'c');
    linkedList.printNode(linkedList.head, 'h');
    linkedList.printNode(linkedList.head, 'hc');
    linkedList.printNode(linkedList.head, 'd');
    linkedList.printList();
  });
});

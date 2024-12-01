const assert = require('node:assert/strict');
const {describe, it} = require('node:test');
const reverseListDummy = require('./reverseListDummy');
const LinkedList = require('./LinkedList');

// list generator
const createList = (arr = ['A', 'B', 'C', 'D']) => {
  const list = new LinkedList();
  for (const el of arr) {
    list.addToTail(el);
  }
  return list;
}

// test reverseList result
describe.only('Reverse nodes in list (dummy node)', () => {
  it.only('should reverse all nodes in the list (dummy node)', () => {
    const testReverseListDummy = reverseListDummy(createList());
    assert.deepStrictEqual(testReverseListDummy, createList(['D','C','B','A']));
  });
});

describe.only('Linked list reference value', () => {
  it.only('should return reference-equal list (dummy node)', () => {
    const list = createList();
    const testReverseListDummyRef = reverseListDummy(list);
    assert.strictEqual(testReverseListDummyRef, list);
  });
});


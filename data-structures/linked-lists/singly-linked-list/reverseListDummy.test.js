const assert = require('node:assert/strict');
const {describe, it} = require('node:test');
const reverseListDummy = require('./reverseListDummy');
const reverseListDummyII = require('./reverseListDummyII');
const LinkedList = require('./LinkedList');

// list generator
const createList = (arr = ['A', 'B', 'C', 'D']) => {
  const list = new LinkedList();
  for (const el of arr) {
    list.addToTail(el);
  }
  return list;
}

// test reverse list result (dummy node II method)
describe('Reverse nodes in 4 item list (dummy node)', () => {
  it('should reverse all nodes in the list (dummy node)', () => {
    const testReverseListDummy = reverseListDummy(createList());
    assert.deepStrictEqual(testReverseListDummy, createList(['D','C','B','A']));
  });
});

describe.only('Reverse nodes in 2 item list (dummy node)', () => {
  it.only('should reverse all nodes in the list (dummy node)', () => {
    const testReverseListDummy = reverseListDummy(createList(['A','B']));
    assert.deepStrictEqual(testReverseListDummy, createList(['B','A']));
  });
});

describe('Linked list reference value', () => {
  it('should return reference-equal list (dummy node)', () => {
    const list = createList();
    const testReverseListDummyRef = reverseListDummy(list);
    assert.strictEqual(testReverseListDummyRef, list);
  });
});

// test reverse list result (dummy node method)
describe('Reverse nodes in 4 item list (dummy node II)', () => {
  it('should reverse all nodes in the list (dummy node II)', () => {
    const testReverseListDummyII = reverseListDummyII(createList());
    assert.deepStrictEqual(testReverseListDummyII, createList(['D','C','B','A']));
  });
});

describe('Reverse nodes in 2 item list (dummy node II)', () => {
  it('should reverse all nodes in the list (dummy node II)', () => {
    const testReverseListDummyII = reverseListDummyII(createList(['A','B']));
    assert.deepStrictEqual(testReverseListDummyII, createList(['B','A']));
  });
});


const assert = require('node:assert/strict');
const {describe, it} = require('node:test');
const LinkedList = require('./LinkedList');

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
    const testFindMiddle = createList().findMiddle().data;
    assert.strictEqual(testFindMiddle, 'C');
  });

  it('should find middle item in three item list', () => {
    const testFindMiddle = createList(['A', 'B', 'C']).findMiddle().data;
    assert.strictEqual(testFindMiddle, 'B');
  });

  it('should find middle item in two item list', () => {
    const testFindMiddle = createList(['A', 'B']).findMiddle().data;
    assert.strictEqual(testFindMiddle, 'B');
  });

  it('should find middle item in one item list', () => {
    const testFindMiddle = createList(['A']).findMiddle().data;
    assert.strictEqual(testFindMiddle, 'A');
  });

});

// describe('Remove node', () => {
//   it('should remove specified node', () => {
//     const testRemoveNode = createList(['fish']);
//     console.log(testRemoveNode);
//   });
// });

describe.only('Print node', () => {
  it.only('should print list using `printNode` method', () => {
    const linkedList = createList();
    linkedList.printNode('^', 'i', '$', linkedList.head, 'hc');
  });
});

const assert = require('node:assert/strict');
const {describe, it} = require('node:test');
const LinkedList = require('./LinkedList');
const removeNthFromEnd = require('./removeNthFromEnd');

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


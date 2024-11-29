const assert = require('node:assert/strict');
const {describe, it} = require('node:test');
const reverseList = require('./reverseList');
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
describe.only('Reverse nodes in list', () => {
	it.only('should reverse all nodes in the list', () => {
		const testReverseList = reverseList(createList());
		assert.deepStrictEqual(testReverseList, createList(['D','C','B','A']));
	});
});

describe.only('Linked list reference value', () => {
	it.only('should return reference-equal list', () => {
		const list = createList();
		const testReverseListRef = reverseList(list);
		assert.strictEqual(testReverseListRef, list);
	});
});


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
describe('Reverse nodes in list', () => {
	it('should reverse all nodes in the list', () => {
		const testReverseList = reverseList(createList());
		assert.strictEqual(testReverseList, 'DCBA');
	})
})

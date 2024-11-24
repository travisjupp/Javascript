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
	it('should remove first item from list', () => {
		const testRemoveFourthFromEnd = removeNthFromEnd(createList().head, 4);
		assert.strictEqual(testRemoveFourthFromEnd, '234');
	});
});


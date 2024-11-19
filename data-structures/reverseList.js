// Reverse a Singly-Linked List 
const LinkedList = require('./LinkedList');

const reverseList = (list) => {
	let prev = null;
	let curr = list.head;
	let next = curr.next;

	while (curr) {
		let nextTemp = next; // save next
		if (next) {
			next = next.next; // next is next next
		}
		curr.next = prev; // point current to previous
		if (!nextTemp) {
			// return result list as a string
			let result = '';
			while (curr) {
				result += curr.data;
				curr = curr.next;
			}
			return result;
		}
		prev = curr;
		curr = nextTemp;
	}
}

module.exports = reverseList;


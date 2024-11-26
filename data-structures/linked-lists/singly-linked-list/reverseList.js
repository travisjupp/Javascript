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
			list.head = curr;
			return list;
		}
		prev = curr;
		curr = nextTemp;
	}
}


const list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);

reverseList(list);

module.exports = reverseList;

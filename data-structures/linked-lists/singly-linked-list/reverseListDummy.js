// Reverse a Singly-Linked List (dummy node)

const util = require('util');
const d = require('../printNode');
util.inspect.defaultOptions.depth = null; // Set default to unlimited depth

const Node = require('./Node');
const LinkedList = require('./LinkedList');

const reverseListDummy = (list) => {

	const dummy = new Node('X');
	dummy.next = list.head;
	// console.log('d', dummy)
	prev = dummy;
	curr = list.head;

console.log('-----------^-----------');

	while (curr && curr.next) {
console.log('DUMM ', d(dummy));
console.log('CURR ', d(curr));

		let nextTemp = curr.next; // B->C->D->n

console.log('\nPOINT', curr.data, '-> ', d(nextTemp.next));

		curr.next = nextTemp.next; // point  A -> C

console.log('\nPOINT', nextTemp.data, '->', prev.next.data);

		nextTemp.next = prev.next; // point B -> A

console.log('\nPOINT', prev.data, '->', d(nextTemp))

		prev.next = nextTemp; // point 0 -> B

console.log('-----------------------');
	}

console.log('DUMM ', d(dummy));
console.log('CURR ', d(curr));
console.log('-----------$-----------');

	// const newList = new LinkedList();
	// newList.head = dummy.next;
	// return newList;

	list.head = dummy.next;
	return list;
}

//     (    start of loop     )    ( swap nodes )    ( setup next iter )
// i   prev         curr            curr -> prev      prev            curr
// -----------------------------------------------------------------------------
// 1: 
// 2: 
// 3:
// 4: 

const list = new LinkedList();
list.addToTail('A');
list.addToTail('B');
list.addToTail('C');
list.addToTail('D');

reverseListDummy(list);

module.exports = reverseListDummy;


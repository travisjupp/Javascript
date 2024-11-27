// Reverse a Singly-Linked List

const LinkedList = require('./LinkedList');

const reverseList = (list) => {
	let prev = null;
	let curr = list.head;
	let next = curr.next;

	while (curr) {
		let nextTemp = next;  // save next for iterating *
		if (next) {
			next = next.next;   // setup next for next iteration **
		}
		curr.next = prev;     // point current to previous (swap) ***
		if (!nextTemp) {      // end ******
			list.head = curr;
			return list;
		}
		prev = curr;          // setup prev for next iteration ****
		curr = nextTemp;      // iterate *****
	}
}

//     (    start of loop     )    ( swap nodes )    ( setup next iter )
// i   prev         curr            curr -> prev      prev            curr
// -----------------------------------------------------------------------------
// 1:  n            A->B->C->D->n   A -> n            A->n            B->C->D->n
// 2:  A->n         B->C->D->n      B -> A->n         B->A->n         C->D->n
// 3:  B->A->n      C->D->n         C -> B->A->n      C->B->A->n      D->n
// 4:  C->B->A->n   D->n            D -> C->B->A->n   D->C->B->A->n

// * used to iterate with `curr = nextTemp`
// ** assigned to `nextTemp` on next iteration
// *** reverse the pointer for the current node (swap nodes)
// **** point to this when reversing the pointers
// ***** move to next node in the sequence

// visualize the (swap nodes) process:
// A->B->C->D->n
// [[[[n<-A]<-B]<-C]<-D]
// or
// [n<-A]
// [n<-A]<-B
// [n<-A<-B]<-C
// [n<-A<-B<-C]<-D
// which ultimately results in: D->C->B->A->n

const list = new LinkedList();
list.addToTail('A');
list.addToTail('B');
list.addToTail('C');
list.addToTail('D');

reverseList(list);

module.exports = reverseList;


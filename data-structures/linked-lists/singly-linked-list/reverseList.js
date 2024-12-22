// Reverse a Singly-Linked List

import util from 'util';
util.inspect.defaultOptions.depth = null; // show complete objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
import d from '../printNode.js';
import LinkedList from './LinkedList.js';

const reverseList = (list) => {
  let prev = null;
  let curr = list.head;
  let next = curr.next;

  d('^', 'p5');
  while (curr && next) {
    d('PREV', prev, 'CURR', curr, 'NEXT', next, 'd');
    let nextTemp = next;  // save next for iterating *
    next = next.next;     // setup next for next iteration **
    curr.next = prev;     // point current to previous (swap) ***
    prev = curr;          // setup prev for next iteration ****
    curr = nextTemp;      // iterate *****
    d('i', 'p5');
  }
  curr.next = prev;       // point last current to previous (swap) ******
  list.head = curr;       // update list head with final node
  d('$', 'p5');
  return list;            // end
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
// ****** exited the loop before final node swap, swap now

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

export default reverseList;


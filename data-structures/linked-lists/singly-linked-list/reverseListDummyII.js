
// Reverse a Singly-Linked List (dummy node II)

const util = require('util');
util.inspect.defaultOptions.depth = null; // show complete objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
const d = require('../printNode');
const Node = require('./Node');
const LinkedList = require('./LinkedList');

const reverseListDummyII = (list) => {

  const dummy = new Node(0);
  dummy.next = list.head;
  prev = dummy;
  curr = list.head;
  let next = null;

  d('^');

    d('DUMMY', dummy);
    d('PREV', prev);

  while (curr) {
    d('store next', 'd');
    next = curr.next; d('NEXT',next, 'c');  // next: B->C->D->n
    
    d('point curr -> prev (dummy)', 'd');
    curr.next = prev; d('CURR', curr, 'c'); // curr: A->0->[C]A

    d('setup prev for next iter', 'd');
    prev = curr; d('PREV', prev, 'c'); // prev: A->0->[C]A

    d('iterate', 'd');
    curr = next; d('CURR', curr); // curr: B->C->D->n 

    d('i', 'p5');
  }

  d('DUMMY', dummy);
  dummy.next.next = null;
  d('DUMMY', dummy);

  d('=> ', prev);
  d('$', 'p5');
  list.head = prev;
  return list;
}

const list = new LinkedList();
list.addToTail('A');
list.addToTail('B');
list.addToTail('C');
list.addToTail('D');

// reverseListDummyII(list);

module.exports = reverseListDummyII;


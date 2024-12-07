// Reverse a Singly-Linked List (dummy node)

const util = require('util');
// util.inspect.defaultOptions.depth = null; // show complete objects
util.inspect.defaultOptions.depth = 0; // show truncated objects
const d = require('../printNode');
const Node = require('./Node');
const LinkedList = require('./LinkedList');

const reverseListDummy = (list) => {

  const dummy = new Node(0);
  dummy.next = list.head;
  let curr = list.head;
  let prev = dummy;
  let next = null;

  d('^');
// The head is stationary
  while (curr && curr.next) {
  d('DUMMY', dummy, 'CURR', curr);
  d('PREV', prev, 'NEXT', next);
    d('\nstore next', 'd');
    next = curr.next; // B->C->D->n
    // d('DUMMY', dummy, 'd');
    // d('CURR', curr, 'd');
    // d('PREV', prev, 'd');
    d('NEXT', next, 'c');

    d('\norphan next (point curr -> next.next)', 'd');
    curr.next = next.next; // point  A -> C
    d('DUMMY', dummy, 'c');
    d('CURR', curr, 'c');
    d('PREV', prev, 'c');
    // d('NEXT', next, 'd');

    d('\npoint orphan -> curr (prev.next)', 'd');
    next.next = prev.next; // point B -> A
    // d('DUMMY', dummy, 'd');
    // d('CURR', curr, 'd');
    // d('PREV', prev, 'd');
    d('NEXT', next, 'c');

    d('\npoint prev -> next', 'd');
    prev.next = next; // point 0 -> B
    d('DUMMY', dummy, 'c');
    // d('CURR', curr, 'd');
    d('PREV', prev, 'c');
    // d('NEXT', next, 'd');

    d('i');
  }

  d('DUMMY', dummy, 'CURR', curr, 'd');
  d('PREV', prev, 'NEXT', next, 'd');
  list.head = dummy.next;
  d('=>', list.head);
  d('$');
  return list;
}

// -----------^-----------
// DUMMY 0→A→B→C→D→n CURR A→B→C→D→n
// POINT A -> C, POINT B -> A, POINT 0 -> B
// DUMMY 0→B→A→C→D→n CURR A→C→D→n
// -----------------------
// DUMMY 0→B→A→C→D→n CURR A→C→D→n
// POINT A -> D, POINT C -> B, POINT 0 -> C
// DUMMY 0→C→B→A→D→n CURR A→D→n
// -----------------------
// DUMMY 0→C→B→A→D→n CURR A→D→n
// POINT A -> n, POINT D -> C, POINT 0 -> D
// DUMMY 0→D→C→B→A→n CURR A→n
// -----------------------
// -----------$-----------
const list = new LinkedList();
list.addToTail('A');
list.addToTail('B');
list.addToTail('C');
list.addToTail('D');

// reverseListDummy(list);

module.exports = reverseListDummy;


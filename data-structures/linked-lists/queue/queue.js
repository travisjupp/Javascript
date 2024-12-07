// Queue
const Node = require('../singly-linked-list/Node.js');
const LinkedList = require('../singly-linked-list/LinkedList');

class Queue {

  constructor(maxLength = 4) {
    this.list = new LinkedList();
    this.length = 0;
  }
  
  enqueue(data) {
    this.list.addToTail(data);
  }
}

module.exports = Queue;

const Node = require('./Node');

class LinkedList {
	constructor() {
		this.head = null;
	}

	addToHead(data) {
		const newHead = new Node(data); // new node from data
		const currentHead = this.head; // cache current head node
		this.head = newHead; // new node overwrites old head node
		if (currentHead) { // if old head wasnt null
			this.head.setNextNode(currentHead); // point new node to old
		}
	}
}

const list = new LinkedList();
list.addToHead('a');
console.log(list);

module.exports = LinkedList;

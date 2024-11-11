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

	addToTail(data) {
		let tail = this.head;
		if (!tail) { // if list was empty
			this.head = new Node(data); // create new head node
		} else { // if tail has a value (head had a value)
			while (tail.getNextNode()) { // while tail has next node
				tail = tail.getNextNode(); // set tail to next node
			}
			tail.setNextNode(new Node(data)); // create new tail node
		}
	}

	removeHead() {
		const removedHead = this.head; // keep track of og head
		if (!removedHead) { // if head was empty
			return; // early return
		}
		this.head = removedHead.getNextNode(); // set head to next node
		return removedHead.data;
	}

	printList() {
		let currentNode = this.head;
		let output = '<head> ';
		while (currentNode) {
			output += currentNode.data + ' ';
			currentNode = currentNode.getNextNode();
		}
		output += '<tail> ';
		console.log(output);
	}
}

module.exports = LinkedList;

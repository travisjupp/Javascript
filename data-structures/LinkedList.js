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
}

const list = new LinkedList();
// list.addToHead('a');
// list.addToHead('b');
list.addToTail('td');
console.log(list);

module.exports = LinkedList;

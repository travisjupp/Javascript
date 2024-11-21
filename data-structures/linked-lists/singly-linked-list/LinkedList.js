// Singly Linked List

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
		const removedHead = this.head; // keep track of original head
		if (!removedHead) { // if head was empty
			return; // early return
		}
		this.head = removedHead.getNextNode(); // set head to next node
		return removedHead.data;
	}

	removeNode(data) {
		let node = this.head;
		let nodePrev = null;
		// find matching node, save previous node
		while (node !== null) {
			if (node.data === data) {
				break;
			}
			nodePrev = node;
			node = node.getNextNode();
		}
		if (node === null) {
			console.log('Node not found: ', data);
			return;
		}
		// if target node is head, remove head
		if (nodePrev === null) {
			this.removeHead();
			this.printList();
			this.removeNode(data);
		}
		// if target node is not head nor tail, remove link
		if (nodePrev !== null && node.getNextNode() !== null) {
			nodePrev.setNextNode(node.getNextNode());
			this.printList();
			this.removeNode(data);
		}
		// if target node is tail, remove tail
		if (node.getNextNode() === null) {
			nodePrev.setNextNode(null);
		}

	}

	nthLastNode(n) {
		let current = null;
		let tailSeeker = this.head;
		let count = 0;
		while (tailSeeker) {
			tailSeeker = tailSeeker.getNextNode();
			if (count >= n) {
				if (!current) {
					current = this.head;
				}
				current = current.getNextNode();
			}
			count++;
		}
		console.log(`nthLastNode(${n}) =>`, current.data);
		return current;
	}

	findMiddle() {
		let fast = this.head;
		let slow = this.head;
		let count = 0;	
		while (fast) {
			fast = fast.getNextNode();
			if (fast) {
				fast = fast.getNextNode();
			  slow = slow.getNextNode();
			}
			count++;
		}
		console.log(slow);
		return slow;
	}

	printList() {
		let currentNode = this.head; // node references
		let output = '<head> ';
		while (currentNode) { // if node not null
			output += currentNode.data + ' '; // append data
			currentNode = currentNode.getNextNode(); // next node ref
		}
		output += '<tail>';
		console.log('\x1b[1m%s\x1b[0m',output);
	}
}

module.exports = LinkedList;


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

	removeNodeWithData(data) {
		// iterate nodes
		let currentNode = this.head;
		while (currentNode) {
			// use current node get next node to find node with matching data
			
			// check next node while on current, when found, current nodes next value will point to current nodes next nodes next value
			if (currentNode.getNextNode()?.data !== undefined && currentNode.getNextNode()?.data === data) {
				console.log('data found for:', data,'\n', currentNode,'\n');
				currentNode.setNextNode(new Node(currentNode.getNextNode()?.getNextNode()?.data));
				return;


			}

			if (currentNode.data === data) {

			}
			// when match found, point current node to match node next
			//
			console.log('=>',currentNode.data);
			console.log('=>=>',currentNode.getNextNode()?.data);
			console.log('=>=>=>',currentNode.getNextNode()?.getNextNode()?.data);
			currentNode = currentNode.getNextNode();
		}
	}

	printList() {
		let currentNode = this.head; // node references
		let output = '<head> ';
		while (currentNode) { // if node not null
			output += currentNode.data + ' '; // append data
			currentNode = currentNode.getNextNode(); // next node ref
		}
		output += '<tail> ';
		console.log('\x1b[1m%s\x1b[0m',output);
	}
}

const colors = new LinkedList();
colors.addToHead('red');
colors.addToTail('green');
colors.addToTail('violet');
colors.addToTail('orange');
// colors.printList();
// colors.removeHead();
colors.printList();
colors.removeNodeWithData('violet');
colors.printList();


// const seasons = new LinkedList();
// seasons.printList();
// seasons.addToHead('summer');
// seasons.addToHead('spring');
// seasons.printList();
// seasons.addToTail('fall');
// seasons.addToTail('winter');
// seasons.printList();
// seasons.removeHead();
// seasons.printList();
// console.log('\x1b[36m%s\x1b[0m', seasons);

// console.log('\x1b[36m%s\x1b[0m', colors);
module.exports = LinkedList;


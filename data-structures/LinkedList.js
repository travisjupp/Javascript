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
		let currentNode = this.head;
		while (currentNode) {
			// if target-node is head, remove head
			if (this.head.data === data) {
				console.log('\n','\x1b[7m',
					'found node is head, removing head: ', data, '\x1b[0m');
				this.removeHead();
				this.printList();
				this.removeNode(data);
			}
			// target-node from current
			const targetNode = currentNode.getNextNode()?.data !== undefined &&
				currentNode.getNextNode()?.data === data;

			if (targetNode) {
				// if target-node is neither head nor tail, remove link
				if (currentNode.getNextNode() !== this.head &&
					currentNode.getNextNode()?.next !== null) {
					console.log('\n','\x1b[7m',
						'found node not head or tail, removing link: ',
						currentNode.next.data, '\x1b[0m');
					// from current node, find/remove target-node
					currentNode.setNextNode(currentNode.getNextNode()?.getNextNode());
					this.printList();
					this.removeNode(data);
				}
				// if target-node is tail, remove link
				if (currentNode.getNextNode()?.next === null) {
					console.log('\n','\x1b[7m',
						'found node is tail, removing tail: ',
						currentNode.next.data,'\x1b[0m');
					currentNode.next = null;
					this.printList();
					this.removeNode(data);
				}
					return;
			}
			currentNode = currentNode.getNextNode(); // iterator
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
colors.addToHead('red');
colors.addToHead('brown');
colors.addToHead('red');
colors.addToTail('green');
colors.addToTail('violet');
colors.addToTail('orange');
colors.addToTail('red');
// colors.printList();
// colors.removeHead();
console.log('\x1b[36m%s\x1b[0m', JSON.stringify(colors));
colors.printList();
colors.removeNode('red');
colors.printList();

console.log('\x1b[36m%s\x1b[0m', JSON.stringify(colors));

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

module.exports = LinkedList;


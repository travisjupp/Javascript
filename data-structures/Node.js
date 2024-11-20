// Node data structure

class Node {

	constructor(data) {
		this.data = data;
		this.next = null;
	}

	setNextNode(node) {
		// Set next Node validation
		if (node === null || node instanceof Node) {
			this.next = node;
		} else {
			throw new Error('node not instance of node 💀');
		}
	}

	getNextNode() {
		return this.next;
	}
}

module.exports = Node;


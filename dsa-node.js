// Node data structures
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

// create nodes
const strawberryNode = new Node('Berry Tasty');
const coconutNode = new Node('Coconuts for Coconut');
const vanillaNode = new Node('Vanilla');

// set next nodes
vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

// set current node
let currentNode = vanillaNode;

while (currentNode) {
	console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}

module.exports = Node;

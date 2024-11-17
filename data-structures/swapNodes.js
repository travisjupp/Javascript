const LinkedList = require('./LinkedList');

const list = new LinkedList();

list.addToHead('D');
list.addToHead('C');
list.addToHead('B');
list.addToHead('A');

list.printList();


const swapNodes = (list, data1, data2) => {
	let node1 = list.head;
	let node2 = list.head;
	let node1Prev = null;
	let node2Prev = null;

	// edge case: equal data
	if (data1 === data2) {
		console.log('Data is equal');
		return;
	}

	// find matching and preceding nodes
	while (node1 !== null) {
		if (node1.data === data1) {
			break;
		}
		node1Prev = node1;
		node1 = node1.getNextNode();
	}

	while (node2 !== null) {
		if (node2.data === data2) {
			break;
		}
		node2Prev = node2;
		node2 = node2.getNextNode();
	}

	// Edge case: missing element(s)
	if (node1 === null || node2 === null) {
		console.log('Missing data: element(s) do not exist');
		return;
	}

	// update preceding nodes' pointers
	if (node1Prev === null) {
		list.head = node2;
	} else {
		node1Prev.setNextNode(node2);
	}
	
	if (node2Prev === null) {
		list.head = node1;	
	} else {
		node2Prev.setNextNode(node1);
	}

	// update the nodes' next pointers
	let temp = node1.getNextNode();
	node1.setNextNode(node2.getNextNode());
	node2.setNextNode(temp);

	list.printList();

}


swapNodes(list, 'C', 'D');

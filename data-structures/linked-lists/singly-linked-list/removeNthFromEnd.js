const removeNthFromEnd = (head, n) => {
	let nodeToRemovePrev = null;
	let nodeToRemove = head;
	let current = head;
	let count = 0;
	let tail = current;

	while (current) {
		if (count === n) nodeToRemovePrev = head;
		if (count >= n && current.next) {
			nodeToRemovePrev = nodeToRemovePrev.next;
		}
		if (count >= n) {
			nodeToRemove = nodeToRemove.next;
		}
		if (current.next) tail = current.next;
		current = current.next;
		count++;
	}

	// ntr is head only (not tail)
	if (nodeToRemove === head && head !== tail) {
		console.log('ntr is head');
		head = nodeToRemove.next
	};

	// ntr is tail only (not head)
	if (nodeToRemove === tail && head !== tail) {
		console.log('ntr is tail');
		nodeToRemovePrev.next = null;
	}

	// ntr is between head and tail
	if (nodeToRemovePrev && nodeToRemove.next) {
		console.log('ntr between head/tail');
		nodeToRemovePrev.next = nodeToRemove.next;
	}

	// one item
	if (nodeToRemove === head && nodeToRemove === tail) {
		console.log('ntr is only item');
		head = null;
	};

	// return result data as a string
	let result = '';
	while (head) {
		result += head.data;
		head = head.getNextNode();
	}
	return result;
}

module.exports = removeNthFromEnd;

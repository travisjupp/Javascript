// Print node data to console

function printNode (node) {
	let res = 'n';
	if (node) res = '';
	while (node) {
		res += node.data + '->';
		if (!node.next) res += 'n';
		node = node.next;
	}
	return res;
}

module.exports = printNode;

// Print node data to console
// Usage: printNode('some ornery node' node, 'c') => A→B→C→D→n

const Node = require('./singly-linked-list/Node.js');

function printNode () {
	let opts;
	let res = '';

	// get options
	for (arg in arguments) {
		if (arguments[arg] === 'c') opts = 'c';
		if (arguments[arg] === 'h') opts = 'h';
		if (arguments[arg] === 'hc') opts = 'hc';
		if (arguments[arg] === 'd') opts = 'd';
	}

	// find node and print
	for (arg in arguments) {
		if (typeof arguments[arg] === 'string' &&
		arguments[arg] !== opts) {
			res += arguments[arg] + ' ';
		};
		if (arguments[arg] instanceof Node) {
			let node = arguments[arg];

			// style first item (head)
			let nodeData = '\x1b[1m'+node.data+'\x1b[0m';
			let firstItemFlag = true;

			while (node) {

				switch (opts) {
					case 'h': // option: show head only
						res += node.data + ' ';
						node = false; // break loop
						break;

					case 'hc': // option: show head only color
						res += nodeData + ' ';
						node = false; // break loop
						break;
					
					case 'c': // option: color
						if (firstItemFlag) { // style first item
							res += '\x1b[1m'+node.data+'\x1b[0m' + '\x1b[2m→\x1b[0m';
						} else { // style following items
							res += '\x1b[2m'+node.data+'\x1b[0m' + '\x1b[2m→\x1b[0m';
						}
						if (!node.next) res += '\x1b[31mn \x1b[0m'; // append null
						break;

					case 'd':  // option: dim
						res += '\x1b[2m'+node.data+'\x1b[2m' + '\x1b[2m→\x1b[0m';
						if (!node.next) res += '\x1b[2mn \x1b[0m'; // append null
						break;

          default:
						// option: none (default)
						res += node.data + '→';
						if (!node.next) res += 'n ';
				}
					firstItemFlag = false;
					node = node.next;
			}
		}
		if (arguments[arg] === null) res += 'n ';
	}
	console.log(res);
}

module.exports = printNode;

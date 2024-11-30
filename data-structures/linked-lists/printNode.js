// Print node data to console

// Usage: 
// const node = new Node(...);
// printNode('MY NODE', node, 'c') => MY NODE A→B→C→D→n
// printNode('POINT', curr, '☞', prev, 'h') => POINT C ☞ B

const Node = require('./singly-linked-list/Node.js');

function printNode () {
	let opts = '';
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

					case 'd': // option: dim
						res += '\x1b[2m'+node.data+'\x1b[2m' + '\x1b[2m→\x1b[0m';
						if (!node.next) res += '\x1b[2mn \x1b[0m'; // append null
						break;

					default: // option: none (default)
						res += node.data + '→';
						if (!node.next) res += 'n ';
				}
					firstItemFlag = false;
					node = node.next;
			}
		}
		if (arguments[arg] === null) res += 'n ';
	}
	// console.log(res);
	// console.log('res.length - 300', 300 - res.length);
	// padding: padding - res.length / num nulls.  add result after n
	console.log('========^=======');
	let pcount = 0;
let newRes = res;
	while (JSON.stringify(newRes).replace(/\s*\\u001b\[\d*m/g, '').length < 50) {
		// console.log(newRes);
	newRes = res.replaceAll('\x1b[31mn \x1b[0m', '\x1b[31mn'.padEnd(pcount, '.')+' \x1b[0m');
		pcount++
	}
	// console.log(res);
	// console.log(JSON.stringify(res));
	// console.log(JSON.stringify(res).replace(/\s*\\u001b\[\d*m/g, ''));
	console.log(newRes);
	// console.log(JSON.stringify(newRes));
	// console.log('res.length', res.length, 'newRes.length', newRes.length);
	console.log('========$=======');


}

module.exports = printNode;

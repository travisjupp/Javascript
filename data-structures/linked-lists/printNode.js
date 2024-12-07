// Print node data to console

// Usage:
// const node = new Node(...);
// printNode('MY NODE', node, 'c') => MY NODE A→B→C→D→n
// printNode('POINT', curr, '☞', prev, 'h') => POINT C ☞ B
//
// h-rules (add padding to stretch):
// start:     printNode('^'); => _________^
// iteration: printNode('i'); => _________N
// end:       printNode('$'); => _________$
const process = require('node:process');
const Node = require('./singly-linked-list/Node.js');

let count = 0;

function printNode () {

  const SGR = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    italic: '\x1b[3m',
    underline: '\x1b[4m',
    dblUnderline: '\x1b[21m',
    dim: '\x1b[2m',
    invert: '\x1b[7m',
    red: '\x1b[31m',
    primaryFont: '\x1b[10m',
  }

  const optsArr = ['c', 'h', 'hc', 'd', '^', 'i', '$'];
  const optsOb = {};
  let nodesArr = [];

  // is arg an option?
  function isOpt(checkArg) {
    for (let opts of optsArr) {
      if (checkArg === opts || /p\d+/.test(checkArg)) return true;
    }
      return false;
  }

  let res = '';
  let padAmnt = 1;

  // get options
  for (arg in arguments) {

    // store string args
    if (isOpt(arguments[arg])) optsOb[arguments[arg]] = true;

    // padding (add padding: printNode('MY NODE', someNode, 'p3'))
    if (/p\d+/.test(arguments[arg])) {
      padAmnt = Number(arguments[arg].slice(1));
    }
  }

  let padding = ''.padEnd(padAmnt, '\t');
  let hrPadding = '─'.repeat(process.stdout.columns - 1);

  for (arg in arguments) {

    // handle strings
    if (typeof arguments[arg] === 'string' &&
      !isOpt(arguments[arg])) {
      if (optsOb.d) {
        res += `${SGR.dim}${arguments[arg]}${SGR.reset}` + padding;
      } else {
        res += arguments[arg] + padding;
      }
    };

    // find node and print
    if (arguments[arg] instanceof Node) {
      let node = arguments[arg];

      // style first item (head)
      let nodeData = `${SGR.bold}${node.data}${SGR.reset}`;
      let firstItemFlag = true;

      while (node) {

        // check circular
        if (nodesArr.includes(node)) {
          res += '[Circular]' + node.data + padding;
          break;
        };

        // store node in array for next circular check
        nodesArr.push(node);

        // options
        switch (true) {

            // option: show head only
          case optsOb.h:
            res += node.data + padding;
            node = false; // break loop
            break;

            // option: show head only color
          case optsOb.hc:
            res += nodeData + padding;
            node = false; // break loop
            break;

            // option: color
          case optsOb.c:
            if (firstItemFlag) { // style first item
              res += `${SGR.bold}${node.data}${SGR.reset}${SGR.dim}→${SGR.reset}`;
            } else { // style following items
              res += `${SGR.dim}${node.data}→${SGR.reset}`
            }
            if (!node.next) res += `${SGR.red}n${padding}${SGR.reset}`; // append null
            break;

            // option: dim
          case optsOb.d:
            res += `${SGR.dim}${node.data}→${SGR.reset}`
            if (!node.next) res += `${SGR.dim}n${padding}${SGR.reset}` // append null
            break;

            // option: none (default)
          default:
            res += node.data + '→';
            if (!node.next) res += `n${padding}`;
        }
        firstItemFlag = false;
        node = node.next;
      }
      nodesArr = []; // clear nodes array
      // console.log(JSON.stringify(res).replace(/\s*\\u001b\[\d*m/g, ''));
    }

    // handle null
    if (arguments[arg] === null && !optsOb['c'] && !optsOb['hc'] && !optsOb['h'] && !optsOb['d']) res += `n${padding}`;

    if (arguments[arg] === null && optsOb['c']) res += `${SGR.red}n${padding}${SGR.reset}`;

    if (arguments[arg] === null && optsOb['hc']) res += `${SGR.bold}${SGR.red}n${padding}${SGR.reset}`;

    if (arguments[arg] === null && optsOb['h']) res += `${SGR.bold}n${padding}${SGR.reset}`;

    if (arguments[arg] === null && optsOb['d']) res += `${SGR.dim}n${padding}${SGR.reset}`;

    // handle h-rules: start, iteration, end
    if (arguments[arg] === '^') res +=
      `${'═'.repeat(process.stdout.columns - 1)}${SGR.dim}^${SGR.reset}`;
      // `${SGR.dblUnderline}${hrPadding}${SGR.reset}${SGR.invert}^${SGR.reset}\n`;

    if (arguments[arg] === 'i') {res +=
      `${'─'.repeat(process.stdout.columns - 2)}${SGR.dim}↑${count}${SGR.reset}`
        // `${SGR.underline}${hrPadding}${SGR.reset}${SGR.dim}${count}↑${SGR.reset}\n`;
      count++;}

    if (arguments[arg] === '$') res +=
      `${'═'.repeat(process.stdout.columns - 1)}${SGR.dim}$${SGR.reset}`

      // `${SGR.dblUnderline}${hrPadding}${SGR.reset}${SGR.invert}$${SGR.reset}\n`;
  }

  let newRes = res;
  // console.log('\x1bP2$t18/35/52/69/86/103/120/137/154\x1b\\'); // set tab stops
  // console.log('0\t1\t2\t3\t4\t5\t6');
  console.log(newRes);
  // console.log(JSON.stringify(newRes));
  // console.log('\x1bP2$t9/17/25/33/41/49/57/65/73\x1b\\'); // restore tab stops
  // console.log('0\t1\t2\t3\t4\t5\t6');
}

module.exports = printNode;


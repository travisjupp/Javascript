// Print node data to console

// Usage:
// const node = new Node(...);
// printNode('MY NODE', node, 'c') => MY NODE A→B→C→D→n
// printNode('POINT', curr, '☞', prev, 'h') => POINT C ☞ B

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
    red: '\x1b[31m'
  }

  const optsArr = ['c', 'h', 'hc', 'd', '^', 'i', '$'];
  const optsOb = {};

  function isOpt(checkArg) {
    for (let opts of optsArr) {
      if (checkArg === opts || /p\d+/.test(checkArg)) return true;
    }
      return false;
  }

  let res = '';
  let padAmnt = 10;

  // get options
  for (arg in arguments) {

    // store string args
    if (isOpt(arguments[arg])) optsOb[arguments[arg]] = true;

    // padding
    if (/p\d+/.test(arguments[arg])) {
      padAmnt = Number(arguments[arg].slice(1));
    }
  }

  let padding = `\t`.padEnd(padAmnt, '\t');

  for (arg in arguments) {

    // handle strings
    if (typeof arguments[arg] === 'string' &&
      !isOpt(arguments[arg])) {
      res += arguments[arg] + ' ';
    };

    // find node and print
    if (arguments[arg] instanceof Node) {
      let node = arguments[arg];

      // style first item (head)
      // let nodeData = '\x1b[1m'+node.data+'\x1b[0m';
      let nodeData = `${SGR.bold}${node.data}${SGR.reset}`;
      let firstItemFlag = true;

      while (node) {

        // options
        switch (true) {

            // option: show head only
          case optsOb.h:
            res += node.data + ' ';
            node = false; // break loop
            break;

            // option: show head only color
          case optsOb.hc:
            res += nodeData + ' ';
            node = false; // break loop
            break;

            //option: color
          case optsOb.c:
            if (firstItemFlag) { // style first item
              res += `${SGR.bold}${node.data}${SGR.reset}${SGR.dim}→${SGR.reset}`;
            } else { // style following items
              res += `${SGR.dim}${node.data}→${SGR.reset}`
            }
            if (!node.next) res += `${SGR.red}n ${SGR.reset}`; // append null
            break;

            // option: dim
          case optsOb.d:
            res += `${SGR.dim}${node.data}→${SGR.reset}`
            if (!node.next) res += `${SGR.dim}n ${SGR.reset}` // append null
            break;

            // option: none (default)
          default:
            res += node.data + '→';
            if (!node.next) res += 'n ';
        }
        firstItemFlag = false;
        node = node.next;
      }
    }

    // handle null
    if (arguments[arg] === null && !optsOb['c'] && !optsOb['hc'] && !optsOb['h'] && !optsOb['d']) res += 'n ';
    if (arguments[arg] === null && optsOb['c']) res += `${SGR.red}n ${SGR.reset}`;
    if (arguments[arg] === null && optsOb['hc']) res += `${SGR.bold}${SGR.red}n ${SGR.reset}`;
    if (arguments[arg] === null && optsOb['h']) res += `${SGR.bold}n ${SGR.reset}`;
    if (arguments[arg] === null && optsOb['d']) res += `${SGR.dim}n ${SGR.reset}`;

    // handle h-rules: start, iteration, end
    if (arguments[arg] === '^') res += `\x1b[21m${padding}\x1b[0m^\n`;
    if (arguments[arg] === 'i') {res += `\x1b[4m${padding}\x1b[0m${count}\n`; count++;}
    if (arguments[arg] === '$') res += `\x1b[21m${padding}\x1b[0m$\n`;
  }

  // let pcount = 0;
  let newRes = res;
  // let l = JSON.stringify(newRes).replace(/\s*\\u001b\[\d*m/g, '').length;
  // let pad = Math.floor(l*1.2);

  // while (l < pad) {
  // while (false) {
    // newRes = res.replaceAll(' ', '#'.padEnd(pcount, '#'));
    // newRes = res.replaceAll(' ', ' '.padEnd(pcount, '\t'));
    // console.log('pad', ' '.padEnd(6, ' '), 'afterpad');
    // console.log(newRes);
    // console.log(JSON.stringify(newRes));
    // update length
    // l = JSON.stringify(newRes).replace(/\s*\\u001b\[\d*m/g, '').length;
    // pcount++
  // }
  console.log(newRes);
  // console.log(optsOb);
}

module.exports = printNode;


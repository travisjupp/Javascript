// Closure

// Private variables

function outer() {
  let someOuterVar = 0; // I'm destined to be private!
  console.log('New scope created..');
  return function() {
    someOuterVar++;
    console.log(someOuterVar);
  }
}

// reference anon func, create closure
// new inc function closes over outer scope (someOuterVar)
const inc = outer();
console.log(inc.toString()); // inc is the returned anon func
inc(); // => 1
inc(); // => 2

// changes to var in one closure won't affect another
const inc2 = outer();
inc2(); // => 1 (not 3)


// Partial functions

function ballType(type) {
  return function(color) {
    return color + ' ' + type;
  }
}

let dodge = ballType('dodgeball'); // partially apply ballType
console.log(dodge('red')); // => red dodgeball
console.log(dodge('black')); // => black dodgeball
let base = ballType('baseball');
console.log(base('white')); // => white baseball


// https://www.freecodecamp.org/news/how-to-use-partial-application-to-improve-your-javascript-code-5af9ad877833/
const list = (lastJoin, ...items) => {
  const commaSeparated = items.slice(0,-1).join(", ");
  const lastItem = items.pop();
  return `${commaSeparated} ${lastJoin} ${lastItem}`;
}

const partial = (fn, firstArg) => {
  return (...lastArgs) => {
    return fn(firstArg, ...lastArgs);
  }
}

const listAnd = partial(list, "and");

console.log(listAnd("red", "green", "blue"));
// => red, green, and blue
const listOr = partial(list, "or");

console.log(listOr("red", "green", "blue"));
// => red, green, or blue


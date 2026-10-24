// Iterators .reduce() Method

// Returns a single value after iterating through the els of an array, thereby
// reducing the array.  Executes a user-supplied "reducer" callback function on
// each element of the array (from left to right), to reduce it to a single
// value.

const newNumbers = [1, 3, 5, 7];

// .reduce() arrow function method:
const newSum1 = newNumbers.reduce((accumulator, currentValue) => {
    console.log('accumulator: ', accumulator);
    console.log('current val: ', currentValue);
    return accumulator + currentValue;
  }
);

console.log(newSum1); // => 16

// .reduce() refactored anonymous function expression method:
const newSum2 = newNumbers.reduce(function (accumulator, currentValue) {
    console.log('accumulator: ', accumulator);
    console.log('current val: ', currentValue);
    return accumulator + currentValue;
}, 10 // second argument for .reduce()
);

console.log(newSum2); // => 26

// .reduce() strings
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver',
'Eskisehir', 'Medellin', 'Yokohama'];

const word = cities.reduce((acc, currVal) => {
    console.log('accumulator: ', acc);
    console.log('current val: ', currVal);
    return acc + currVal[0];
}, "C");

console.log(word)

// .reduce() avoid overflowing stack when parsing large array with Math.max()
const largeArray = [];
for (let i = 0; i < 1000000; i++){
  largeArray[i] = i;
}
// This loads 1,000,000 Math.max(..) args into a single stack frame causing overflow
// Math.max(...largeArray); // => Uncaught RangeError: Maximum call stack size exceeded

// Reduce loops single function calls that pop off the stack avoiding overflow
const result = largeArray.reduce((currMax, value) => Math.max(currMax, value), -Infinity);
console.log(result); // => 999999


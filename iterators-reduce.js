// Iterators .reduce() Method

// Returns a single value after iterating through the els of an array, thereby reducing the array.
// Executes a user-supplied "reducer" callback function on each element of the array (from left to right), to reduce it to a single value.
const newNumbers = [1, 3, 5, 7];

// .reduce() arrow function method:

const newSum1 = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
  }
);

console.log(newSum1); // 16

// .reduce() refactored anonymous function expression method:

const newSum2 = newNumbers.reduce(function (accumulator, currentValue) {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
}, 10 // second argument for .reduce()
);

console.log(newSum2); // 26

/* -------------------------- */

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

// Choose a method that will return a single value
// const word = cities.reduce((acc, currVal) => {
//     return acc + currVal[0]
//   }, "C");


const word = cities.reduce((acc, currVal) => {
    console.log('accumulator: ', acc);
    console.log('current val: ', currVal);
    return acc + currVal[0];
}, "C");

console.log(word)
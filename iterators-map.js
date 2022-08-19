// Iterators: .map() Method

// creates a new array populated with the results of calling a provided function on every element in the calling array.


// Ex 1
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(el => {return el[0]});

console.log('======= Ex 1 =======')
console.log(secretMessage.join('')); // HelloWorld


/////////////////////////////////////////////////////
// Ex 2
const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(num => {return num / 100}); 
// arrow func with curly brackets and return keyword

const smallNumbersConcise = bigNumbers.map(num => num / 100); 
// concise body without the return keyword

const smallNumbersAnon = bigNumbers.map(function (num) { return num / 100; })
// anonymous function

// all 3 map methods above produce the same result:
console.log('======= Ex 2 =======')
console.log(smallNumbers) // [ 1, 2, 3, 4, 5 ]
console.log(smallNumbersConcise) // [ 1, 2, 3, 4, 5 ]
console.log(smallNumbersAnon) // [ 1, 2, 3, 4, 5 ]

/////////////////////////////////////////////////////
// Ex 3
// function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare);

const squareNumsObject = numbers.map(num => num * num);

console.log('======= Ex 3 =======')
console.log(squareNums(numbers))
console.log('squareNums typeof?', typeof squareNums) // function
console.log('squareNums isArray?', Array.isArray(squareNums)) // false

console.log('squareNumsObject typeof?', typeof squareNumsObject) // object
console.log('squareNumsObject isArray?', Array.isArray(squareNumsObject)) // true

// use Array.isArray or Object.prototype.toString.call
// Array.isArray(value)
// to differentiate regular objects from arrays

/////////////////////////////////////////////////////
// Ex 4
// Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

let upperBang = (el) => el.toUpperCase() + "!";

// const shoutGreetings = arr => arr.map(upperBang);

// const shoutGreetings = arr => arr.map(el => el.toUpperCase() + '!')

// const shoutGreetings = arr => {
//   return arr.map(el => el.toUpperCase() + '!');
// }

// function shoutGreetings(arr){
//   return arr.map(upperBang)
// }

// function shoutGreetings(arr){
//   return arr.map(el => el.toUpperCase() + '!')
// }

const shoutGreetings = (arr) => {
    let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase() + "!");
  }
  return newArr;
};

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log('======= Ex 4 =======')
console.log(shoutGreetings(greetings));
console.log('shoutGreetings isArray?', Array.isArray(shoutGreetings), '\ntypeof?', typeof shoutGreetings)
console.log('newArr typeof?', typeof newArr)
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
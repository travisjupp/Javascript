// Note that the while and do...while loop are different! 
// Unlike the while loop, do...while will run at least once 
// whether or not the condition evaluates to true.

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

// Comparing do while and while loops

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

// Another do while example:

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
cupsAdded += 1;
console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);
// prints 1, 2, 3


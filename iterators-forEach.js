// Iterators: .forEach() Method

// The forEach() method executes a provided function once for each array element.
// .forEach() takes an argument of callback function.

// .forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.

// The return value for .forEach() will always be UNDEFINED

// Ex 1
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
// Method 1: Arrow function syntax
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));

// Method 2: Writing the callback function separately
function printFruit(fruit) {
  console.log(`I want to eat a ${fruit}`);
}
fruits.forEach(printFruit);
// Both methods return: 
// I want to eat a mango
// I want to eat a papaya
// I want to eat a pineapple
// I want to eat a apple

// fruits.forEach() calls the forEach method on the fruits array.


// Ex 2
const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

// Write your code here:
const declineEverything = veg => {
  veg.forEach(politelyDecline);
};

const acceptEverything = arr => {
  arr.forEach(el => {
    console.log("Ok, I guess I will eat some " + el + ".");
  });
};

acceptEverything(veggies)
declineEverything(veggies)

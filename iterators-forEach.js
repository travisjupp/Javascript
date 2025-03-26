// Iterators: .forEach() Method

// The forEach() method executes a provided function once for each array
// element.  .forEach() takes an argument of callback function.

// .forEach() loops through the array and executes the callback function for
// each element. During each execution, the current element is passed as an
// argument to the callback function.

// The return value for .forEach() will always be UNDEFINED

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));

function printFruit(fruit) {
  console.log(`I want to eat a ${fruit}`);
}

fruits.forEach(printFruit);

const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

const declineEverything = veg => {
  veg.forEach(politelyDecline);
};

const acceptEverything = arr => {
  arr.forEach(el => {
    console.log("Ok, I guess I will eat some " + el + ".");
  });
};

acceptEverything(veggies);
declineEverything(veggies);

function capAllElements(arr){
  try {
    arr.forEach((el, index, array) => {
      array[index] = el.toUpperCase();
      console.log(el, index, array);
    });
  } catch(e) {
    console.log(e);
  }
}

capAllElements(veggies);


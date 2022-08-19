// Higher-Order Functions
// Functions as Parameters

// Callback Function
const addTwo = num => {
    return num + 2;
  }
// Higher-order Function to check the work of addTwo()
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB) {
      return checkB;
    } else {
      return 'inconsistent results';
    }
  }
// When calling the callback func in the higher-order func 
// we do not invoke the func with parens eg. addTwo()
  console.log(checkConsistentOutput(addTwo, 2), addTwo(2)); // logs 4 4

/* --------------------------------------------------- */

// As you know, a parameter is a placeholder for the data that gets passed into a function. Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that functions can accept other functions as parameters. A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call functions that get passed in as parameters callback functions. Callback functions get invoked during the execution of the higher-order function.

// When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. Invoking it would evaluate to passing in the return value of that function call. With callback functions, we pass in the function itself by typing the function name without the parentheses:

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}
 
higherOrderFunc(anotherFunc);
// We wrote a higher-order function higherOrderFunc that accepts a single parameter, param. Inside the body, param gets invoked using parentheses. And finally, a string is returned, telling us the name of the callback function that was passed in.

// Below the higher-order function, we have another function aptly named anotherFunc. This function aspires to be called inside the higher-order function.

// Lastly, we invoke higherOrderFunc(), passing in anotherFunc as its argument, thus fulfilling its dreams of being called by the higher-order function.

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});
// In this example, we invoked higherOrderFunc() with an anonymous function (a function without a name) that counts to 10. Anonymous functions can be arguments too!
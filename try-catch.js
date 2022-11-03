// javascript try catch
// A JavaScript try…catch statement can anticipate and handle thrown errors (both built-in errors as well as those constructed with Error()) while allowing a program to continue running. Code that may throw an error(s) when executed is written within the try block, and actions for handling these errors are written within the catch block.


// A try...catch statement that throws a constructed Error()
try {
    throw Error('This constructed error will be caught');
    console.log('post throw content') // not printed, post throw
} catch (e) {
    console.error(e); // Prints the thrown Error object
}

// A try...catch statement that throws a built-in error
const fixedString = 'Cannot be reassigned';
try {
  fixedString = 'A new string'; // A TypeError will be thrown  
} catch (e) {
  console.error('An error occurred!'); // Prints 'An error occurred!'
}

console.log('Prints after error'); // Program continues running after the error is handled and prints 'Prints after error'

// Notes:

// When a runtime error is thrown and not caught, the code after that error will not run.

// Error handling is the anticipation of errors and addressing them accordingly.

// Inside the try block, code is evaluated and if an error is thrown, the error is passed into the catch block.

// The code in a catch block executes when an error is thrown in the accompanying try block.

// The throw keyword can be used to throw an error and halt the program from running.

console.log('Haiku in progress.');
throw Error('But wait there is an error.');
console.log('Fate of this haiku?'); // will not run

/*
DEBUGGING JAVASCRIPT CODE

Here are three common error types:

SyntaxError: Typo
ReferenceError: Variable
TypeError: Data-type

* SyntaxError: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.

* ReferenceError: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.

* TypeError: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.

There are seven types of built-in JavaScript errors in total. You can find more information about all of them at the MDN JavaScript Error documentation. Whenever you are confronted with an error you can’t comprehend, consulting this documentation is a great place to start.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
*/
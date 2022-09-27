// Create a new variable called _ that is initialized to an empty object.
const _ = {
    clamp(number, lower, upper) {
        console.group(`clamp(${number}, ${lower}, ${upper})`);
        // summary of the method: // _.clamp(number, [lower], upper)
        // .clamp() takes three arguments: a number, a lower bound, and an upper bound.
        // .clamp() modifies the provided number to be within the two provided bounds.
        // If the provided number is smaller than the lower bound, it will return the lower bound as the final number.
        // If the number is larger than the upper bound, it will return the upper bound as the final number.
        // If the number is already within the two bounds, it will return the number as the final number.
        // Add the .clamp() method to the lodash object including the appropriate parameters.

        // _.clamp(-10, -5, 5);// => -5
        // _.clamp(10, -5, 5);// => 5

        // Use Math.max() to clamp the number by the lower bound. The return value of Math.max() called with the number and the lower bound will be the larger of the two values, meaning it will be clamped by the lower bound.

        // lowerClamp = Math.max(number, lower); // Math.max(5, 6) returns 6 which is lower bound. Math.max(6, 5) returns 6 which is number. By always returning the highest number input, clamp conditions for lower bound and number are always satisfied.

        // Use Math.min() to clamp the number by the upper bound. The return value of Math.min() is called with the value from the step above` and the upper bound will be the smaller of the two.
        // clampValue = Math.min(lowerClamp, upper);

        // Return the final value of these two operations, which will be the clamped number.
        // return clampValue;
        console.groupEnd();
        return Math.min(Math.max(number, lower), upper); // test with: node test/clamp.js
    },
    inRange(number, start, end) {
        console.group(`inRange(${number}, ${start}, ${end})`);
        // _.inRange(number, [start=0], end)
        // Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.
        // Arguments
        // number (number): The number to check.
        // [start=0] (number): The start of the range.
        // end (number): The end of the range.
        // Returns
        // (boolean): Returns true if number is in the range, else false.

        // If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value.
        if (end === undefined) {
            end = start;
            start = 0;
        };

        // If the provided start value is larger than the provided end value, the two values should be swapped.
        if (start > end) {
            ////// Note that we will need to use a temporary variable to do this. To understand why, imagine if we tried to swap values without one. We might start by setting the end value equal to the start value. When we then go to set the start value equal to the end value, the end value will have already been overwritten and the swap can’t be completed. To solve this, we create a variable that will temporarily store the end value to access when we need to set the new start value and complete the swap.
            ////// let a = 1;
            ////// let b = 2;
            ////// let temp;
            ////// temp = a;
            ////// a = b;
            ////// b = temp;
            ////// a; // => 2
            ////// b; // => 1
            let temp = end;
            end = start;
            start = temp;
        };

        // create a variable called isInRange and set it equal to a boolean expression that checks if start is smaller than or equal to number and if number is smaller than end
        const isInRange = start <= number && number < end;
        console.groupEnd();
        return isInRange;
    },
    words(string) {
        console.group(`words(${string})`);
        // .words() takes one argument: a string.
        // .words() splits the string into an array of words.
        // A word is defined by a space-separated string of characters, so each space character, ' ', indicates the end of one word and the start of the next.
        console.groupEnd();
        return array = string.split(' ');
    },
    pad(string, length) {
        console.group(`pad(${string}, ${length})`);
        // .pad() adds spaces evenly to both sides of the string to make it reach the desired length.
        // Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length

        // check target length is longer than string length, if not return unpadded version of string
        if (length <= string.length) {
            return string;
        }
        // Find the amount of padding to add to the start of the string by finding the difference between the target length and the string length, dividing by two, and rounding down the resulting number. We round down so that any uneven padding gets added to the end of the string, not the beginning, as specified in the instructions.
        let paddingStart = Math.floor((length - string.length) / 2);
        // console.log('paddingStart:',paddingStart);

        // Find the amount of padding to add to the end of the string by subtracting the string length and the starting padding length (calculated above) from the target length.
        let paddingEnd = length - (string.length + paddingStart);
        // console.log('paddingEnd:',paddingEnd);

        // Generate the padded string by adding the amount of starting padding and ending padding calculated above to each side of the current string.
        let paddedString = ' '.repeat(paddingStart) + string + ' '.repeat(paddingEnd);
        // console.log('paddedString:',paddedString);

        console.groupEnd();
        return paddedString;
    },
    has(object, key) {
        console.group(`has(${object},${key})`);
        // .has() takes two arguments: an object and a key.
        // .has() checks to see if the provided object contains a value at the specified key.
        // .has() will return true if the object contains a value at the key and will return false if not.
        // Your method does not need to accept the additional path parameter; we will only check for unnested values.

        console.groupEnd();
        const hasValue = object[key] !== undefined; // boolean expression

        // boolean expression is more elegant than using this mess below
        // if (object[key] !== undefined) {
        //     return true;
        // } else {
        //     return false;
        // }
        return hasValue;
    },
    invert(object) {
        console.group(`invert(${object})`);
        // .invert() takes one argument, and object
        // .invert() iterates through each key / value pair and swaps the key and value

        // Codecademy solution:
        let invertedObject = {};
        // for (const key in object) {
        //     // Within the loop, create a variable called originalValue and set it equal to the value at the current key in object.
        //     let originalValue = object[key];
        //     // console.log('key:',key,'originalValue:',originalValue);
        //     // Still within the loop, set the value at originalValue on invertedObject to be the current key.
        //     invertedObject[originalValue] = key;

        // }
        // return invertedObject;

        // My solution:
        for (let key in object) {
            let temp = key; // save key to temp
            let value = object[key];
            console.log('value:', object[key], 'key:', key); // value defined
            key = object[key]; // key assigned to value
            console.log('value:', object[key], 'key:', key); // value undefined since key gets reassigned to object[key] and object[key] becomes object[object[key]]
            invertedObject[key] = temp // set inverted property (value: key)
        }
        console.groupEnd();
        return invertedObject;
        // In the case of duplicate values in the object, subsequent values will overwrite property assignments of previous values.
    },
    findKey(object, predicate) {
        console.group(`findKey(${object},${predicate})`);
        // .findKey() takes two arguments: an object and a predicate function — a function that returns a boolean value.
        // .findKey() iterates through each key / value pair in the provided object and calls the predicate function with the value.
        // .findKey() returns the first key that has a value that returns a truthy value from the predicate function.
        // .findKey() returns undefined if no values return truthy values from the predicate function.

        // iterate each key
        for (const key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            // if the predicate condition on the object value is true return the key
            if (predicateReturnValue) {
                return key;
            }
        }
        console.groupEnd();
        return undefined;
    },
    drop(array, number) {
        console.group(`drop(${array},${number})`);
        // .drop() takes two arguments: an array and a number representing the number of items to drop from the beginning of the array.
        // .drop() returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array.
        // If the number of elements to drop is unspecified, your method should drop one element.
        console.groupEnd();
        return array.slice(number);


    },
};
// run test suite to check lodash object initialized correctly run: node _.js
// To run the test suite for this task, type node test/lodash.js in your terminal and then press enter

console.log(['a', 'b', 'c'].slice(-2, 2)) // => [2]

console.log(['a', 'b', 'c'].slice(1, -1)) // => [2]
console.log(_.drop(['a', 'b', 'c'], 1, -1)); // => [2, 3] slice end not responsive/included in drop()

console.log(_.drop(['a', 'b', 'c'], 1)); // => [2, 3]
console.log(_.drop(['a', 'b', 'c'], -2)); // => [2, 3]
console.log(_.drop(['a', 'b', 'c'], 2)); // => [3]
// console.log(_.findKey({cat:'black',mouse:'white'},function(val){return val === 'black'})); // => cat
// console.log(_.invert({cat:'black',mouse:'white'})); // => {black: 'cat', white: 'mouse'}
// console.log(_.has({cat:'black',mouse:'white'},'cat')); // => true
// console.log(_.pad('cat', 25)); // =>           cat           
// console.log(_.words("hi there")); // => ['hi', 'there']
// console.log(_.inRange(1, 2)); // => true
// console.log(_.inRange(3, 4, 2)); // => true
// console.log(_.inRange(3, 2, 4)); // => true
// console.log(_.inRange(4, 8)); // => true
// console.log(_.inRange(4, 2)); // => false
// console.log(_.inRange(2, 2)); // => false
// console.log(_.inRange(1.2, 2)); // => true
// console.log(_.inRange(5.2, 4)); // => false
// console.log(_.inRange(-3, -2, -6)); // => true
// console.log(_.clamp(-10, -5, 5)) // => -5
// console.log(_.clamp(10, -5, 5)) // => 5











// Do not write or modify code below this line.
module.exports = _;
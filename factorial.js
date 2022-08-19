// Write a function factorial() that takes a number as an argument and returns the factorial of the number.

// factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
// Assume only positive numbers will be given as an argument for the factorial() function.

const factorial = num => {
    factor = num;
    do {
        console.log(num *= factor) // 6*5 = 30 // 30*4 = 120 // 120*3 = 360 // 360*2 = 720 // 720*1 = 720   // 720*0 = 0
        factor--                   // 5        // 4          // 3           // 2           // 1             // 0
    } while (factor > 0);          // 5        // 4          // 3           // 2           // 1             // 0 <end>
} // no joy
factorial(6)

const factorial2 = num => {
    factor = num;
    while (factor > 0){
        // console.log(factor);
        console.log(num *= factor); // 30   // 120  // 360  // 720  // 720  // 0
        factor--;                   // 5    // 4    // 3    // 2    // 1    // 0 
    }
    return num;
} // no joy


const factorial3 = num => {
    for (f = num; f > 0; f--){
       console.log(num *= f); 
    }
} // no joy

// Proper method works with 1
const factorial4 = n => {
    let result = 1;
    for(let i = n; i > 0; i--){
        console.log('i: ', i);
      result *= i;
    }
    return result;
  }
//   console.log(factorial4(6))
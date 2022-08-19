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
  
// https://leetcode.com/problems/fibonacci-number/
// The algorithms growth rate doubles every time the input data set is added. 
// This means the time complexity is exponential with an order O(2^n).
// https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/

// Fib.  0    1    1    2    3    5    8
//       |    |    |    |    |    |    |
// Pos. F_0  F_1  F_2  F_3  F_4  F_5  F_6

const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + 
    recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(4));


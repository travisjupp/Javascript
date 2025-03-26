// https://leetcode.com/problems/fibonacci-number/
// The algorithms growth rate doubles every time the input data set is added. 
// This means the time complexity is exponential with an order O(2^n).
// https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/

// Fib.  0    1    1    2    3    5    8
//       |    |    |    |    |    |    |
// Pos. F_0  F_1  F_2  F_3  F_4  F_5  F_6


const memo = {};

const recursiveFibonacci = (n) => {
  if (memo[n]) return memo[n];
  if (n < 2) return n;
  const result = recursiveFibonacci(n - 1) + 
    recursiveFibonacci(n - 2);
  memo[n] = result;
  console.log(memo);
  return result;
};

export default recursiveFibonacci;


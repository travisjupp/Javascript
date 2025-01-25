// https://leetcode.com/u/ein3108/
// https://leetcode.com/problems/power-of-three/solutions/77937/javascript-one-liner-without-any-hard-coded-numbers-is-generalizable-beats-89-39/
// https://leetcode.com/problems/power-of-three/
// Given an integer n, return true if it is a power of three. Otherwise, return false.
// 
// An integer n is a power of three, if there exists an integer x such that n == 3x.
// 
//  
// 
// Example 1:
// 
// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:
// 
// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:
// 
// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).
//  
// 
// Constraints:
// 
// -231 <= n <= 231 - 1
//  
// 
// Follow up: Could you solve it without loops/recursion?

// Solution by ein3108

var isPowerOfThree = function(n) {
    return n.toString(3).split("").reduce((prev,curr)=>parseInt(prev)+parseInt(curr))==1;
};

    // Explanation by coder_cat
    // https://leetcode.com/u/coder_cat/
    // 工程獅🦁

    // n.toString(3) uses the concept of radix and makes number n into a string with a base of 3, a ternary number
    // So if n was a power of 3, n.toString(3) would be 1, 10, 100, or 10...0 .
    // use split() to make the string into an array
    // use reduce() to count the total of each digit
    // if the total is equal to 1, the number n is a power of 3


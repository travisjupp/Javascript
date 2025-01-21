// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// 
// An input string is valid if:
// 
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
//  
// 
// Example 1:
// 
// Input: s = "()"
// 
// Output: true
// 
// Example 2:
// 
// Input: s = "()[]{}"
// 
// Output: true
// 
// Example 3:
// 
// Input: s = "(]"
// 
// Output: false
// 
// Example 4:
// 
// Input: s = "([])"
// 
// Output: true
// 
//  
// 
// Constraints:
// 
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  // loop over string
  for (const char of s) {
    switch (true) {

        // if string contains opening char, make char head
      case char === '(' || char === '[' || char === '{':
        stack.push(char);
        break;

        // check head of stack for opening char
      case char === ')' || char === ']' || char === '}':

        // if opening char is head, remove head
        let head = stack[stack.length - 1];
        switch (true) {

          case head === '(' && char === ')':
            stack.pop();
            break;

          case head === '[' && char === ']':
            stack.pop();
            break;

          case head === '{' && char === '}':
            stack.pop();
            break;

          default:
            return false;
        }
        break;
    }
  }
  return !stack.length;
};


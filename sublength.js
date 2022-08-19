// Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

// get the char index number from the string
const subLength = (str, char) => {
    let indexChar1 = str.indexOf(char);
    let offset = indexChar1 + 1;
    let indexChar2 = str.indexOf(char, offset);
    let offset2 = indexChar2 + 1;
    let indexChar3 = str.indexOf(char, offset2);
    // find indexes of both chars
    // console.log(indexChar1, indexChar2) // 1   3
    // return the length between the two plus 1
    // console.log(indexChar2 - indexChar1 + 1) // 3
    // if indexChar3 exists (not equal to -1) return 0
    // if indexChar2 does not exist (equals -1) return 0
    if(indexChar3 !== -1 || indexChar2 === -1){
        console.log(0);
    } else {
        console.log(indexChar2 - indexChar1 + 1);
    }
}
subLength('katana', 'a') // 0

// examples and what they should return
subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

console.log('=indexOf review=')
console.log('katan'.indexOf('a')); // 1
console.log('katana'.indexOf('a', 2)); // start searching at position 2. Finds second 'a' at index 3
console.log('katana'.indexOf('a', 4)); // 5 the index of the last 'a' in 'katana'
console.log('katana'.indexOf('a', 'katana'.length -1))
console.log('katana'.indexOf('a', 'katana'.length -4))

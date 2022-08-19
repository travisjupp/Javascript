// Nested Arrays

// Arrays can store other arrays creating a nested array
// To access the nested arrays we can use bracket notation with the index value
// To access the elements within the nested array we can chain, or add on, more bracket 
// notation with index values.

const nestedArr = [[1], [2, 3]];

//console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
// In the second console.log() statement, we have two bracket notations chained to nestedArr.
// We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array, 
// we use nestedArr[1][0] and we get the value of 2.

const numberClusters = [[1, 2], [3, 4], [5, 6]]; // nested array
const target = numberClusters[2][1]; // returns 6
console.log(target);

let arr = [1, 2, 3];
// console.log(arr.length);
const slicedItems = arr.slice(0, 2); // [1, 2]
let sliced = slicedItems.toString(); // 1, 2
let string = arr.toString(); // stringification
console.log(string + ' now a string ' + slicedItems);
// console.log(arr.pop(), arr.toString(), arr.slice(0, 1), arr.push('pushedItem'), arr);


let nestedArr2 = [[1, 2, ["1a", "1b"]], [3, 4]];

console.log(nestedArr2[0][2]); // 1a 1b
console.log(nestedArr2[1][1]); // 4
console.log(nestedArr2[0][2][1]); // 1b
console.log(nestedArr2[0][2][0]); // 1a
console.log(nestedArr2[0][1]); // 2
console.log(nestedArr2[1][0]); // 3
console.log(slicedItems, sliced, string);
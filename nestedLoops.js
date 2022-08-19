// Nested loops are good for comparing array items
// Ex 1: Compare and file example:

const bobsFollowers = ['Sid', 'Nancy', 'Johnny', 'DeeDee'];
const tinasFollowers = ['Joey', 'Johnny', 'DeeDee'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
       mutualFollowers.push(tinasFollowers[j]);
    }
}
}

console.log(mutualFollowers); // ['Johnny', 'DeeDee']


// Ex 2: We wrote a function, smallestPowerOfTwo(), which takes in an array.

// Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than or equal to the current element before using .push() to add it to results

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
              console.log(`DEBUG TOOL %d \n number:${number} i:${i} j:${j} results:${results}`, i+1)
              j = j * 2;
              console.count(j)
            }
            results.push(j);
          }
          return results
        }
        
console.log(smallestPowerOfTwo(numbers)) // [ 8, 4, 16, 32 ]
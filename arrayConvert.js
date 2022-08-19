// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

const convertToBaby = arr => {
    let babyArray = [];
    for (let i = 0; i < arr.length; i++) {
        babyArray.push(`baby ${arr[i]}`);
    }
    return babyArray;
}

// When you're ready to test your code, uncomment the below and run:
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))
// ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human']
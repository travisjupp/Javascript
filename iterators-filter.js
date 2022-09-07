// Iterators .filter() Method 

// creates a new array with all elements that pass the test implemented by the provided function.

//////////////////////////////////////////////////
// Ex 1a

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
});

// Ex 1b
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords
const longFavoriteWords = favoriteWords.filter(word => word.length > 7);

console.log('randomNumbers, favoriteWords')
console.log(smallNumbers) // [200, 3.14, 7, 13]
console.log(longFavoriteWords) // ['nostalgia', 'hyperbole', 'esoteric']

//////////////////////////////////////////////////
// Ex 2

// justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

const justCoolStuff = (arr1, arr2) => {
  let coolArr = [];
  arr1.filter(el => {
    if(arr2.includes(el)){
      coolArr.push(el);
    }
  })
    return coolArr;
}


const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log('justCoolStuff')
console.log(justCoolStuff(myStuff, coolStuff))

// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

//////////////////////////////////////////////////
// Ex 3
// isPrime() finds all prime numbers in an array using .filter()

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log('isPrime')
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

/*
-3, -2, -1, 0, 1 
loop condition false: num > i 
return condition false: num > 1

2 also gets rejected by the for loop condition but passes return num > 1

3 loop condition true and doesn't get eliminated by passing the if condition

4 and all other non-primes are accepted by the loop and eliminated by the if
*/
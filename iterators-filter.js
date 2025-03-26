// Iterators .filter() Method 

// creates a new array with all elements that pass the test implemented by the
// provided function.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => word.length > 7);

console.log('smallNumbers', smallNumbers) // [200, 3.14, 7, 13]
console.log('longFavoriteWords', longFavoriteWords) // ['nostalgia', 'hyperbole', 'esoteric']


// justCoolStuff() that takes in two arrays of strings, and, using the built-in
// .filter() method, returns an array with the items that are present in both
// arrays.

const justCoolStuff = (arr1, arr2) => {
  let coolArr = [];
  arr1.filter(el => {
    if(arr2.includes(el)){
      coolArr.push(el);
    }
  })
  return coolArr;
}


const coolStuff = ['gameboys', 'skateboards', 'backwards hats',
'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters',
'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

console.log('justCoolStuff');
console.log(justCoolStuff(myStuff, coolStuff));

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

console.log('isPrime', array.filter(isPrime)); // => [2, 3, 5, 7, 11, 13]


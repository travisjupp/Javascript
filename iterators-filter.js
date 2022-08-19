// Iterators .filter() Method 

// creates a new array with all elements that pass the test implemented by the provided function.

//////////////////////////////////////////////////
// Ex 1a

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
});

// Ex 1b
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => word.length > 7);

console.log('======= Ex 1a 1b =======')
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

console.log('======= Ex 2 =======')
console.log(justCoolStuff(myStuff, coolStuff))

// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
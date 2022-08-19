// Iterators .every() Method

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

/////////////////////////////////////////
// Ex 1
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log('======= ex 1 =======');
console.log(words.every((word) => {
    return word.length > 5;
  } )); // false



/////////////////////////////////////////
// Ex 2

function sourcePlant (food) {
  if(food.source === 'plant') {
    return true;
  }
  return false;
}

const isTheDinnerVegan = arr => {
  if(arr.every(sourcePlant)) {
    return true;
  } else {
    return false;
  }
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

// veganDinner returns true
const veganDinner = [{name: 'hamburger', source: 'plant'}, {name: 'cheese', source: 'plant'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'plant'}];

console.log('======= ex 2 =======');
console.log(isTheDinnerVegan(dinner)) // false
console.log(isTheDinnerVegan(veganDinner)) // true

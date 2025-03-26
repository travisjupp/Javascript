// Iterators .findIndex() Method

// returns index of first el that evals to true in the callback func
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey',
'salamander', 'elephant'];

// find the index of el with value: 'elephant'
// save returned value to variable named foundAnimal

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

// find the index of the first animal that starts with 's'

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
});

console.log(foundAnimal, startsWithS); // => 7 3

console.log(animals[7]); // => elephant
console.log(animals[3]); // => seal

// Define a callback function before using it in an iterator

const cats = ['calico', 'siamese', 'tabby'];

function startsWithT (cat) {
    return cat[0] === 't';
}
const indexT = cats.findIndex(startsWithT);
console.log(cats[indexT]); // => tabby

function endsWithE (cat) {
    return cat[cat.length -1] === 'e';
}

const indexE = cats.findIndex(endsWithE);

console.log(cats[indexE]); // => siamese

// Chain two iterator methods on same array

const iteratorChain = cats.filter(endsWithE).filter(cat => cat[0] === "s")
console.log('iteratorChain: ', iteratorChain);


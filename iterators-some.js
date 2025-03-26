// Iterators: .some() Method

// The some() method tests whether at least one element in the array passes the
// test implemented by the provided function. It returns true if, in the array,
// it finds an element for which the provided function returns true; otherwise
// it returns false. It doesn't modify the array.

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Check if some els are less than 6 chars long
console.log(words.some((word) => {
  return word.length < 6;
})); // => true

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
});
console.log(interestingWords); // ['unique', 'uncanny', 'oxymoron']

// The every() method tests whether all elements in the array pass the test
// implemented by the provided function. It returns a Boolean value.

console.log(interestingWords.every((word) => {
  return word.length > 5;
} )); // => true


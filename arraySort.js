// Ex 1

// Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

const sortYears = arr => arr.sort((a, b) => {
    // console.log('b',arr.indexOf(b),b)

    // console.log('a',arr.indexOf(a),a)
    return b - a;
});


// Feel free to uncomment the below code to test your function:
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log('====== Ex 1 =======')
console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

/////////////////////////////////////////
// Ex 2: sortSpecies.js

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:
function sortProp(a, b) {
 return a.numTeeth - b.numTeeth;
}
// console.log(speciesArray.sort(sortProp))

const sortSpeciesByTeeth = arr => {
  return arr.sort((a,b) => a.numTeeth - b.numTeeth)
}

// console.log(speciesArray[0].numTeeth) // 50 
console.log('====== Ex 2 =======')
console.table(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]
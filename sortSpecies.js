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

console.table(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]
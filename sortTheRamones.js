// js .sort() method

// What?! Joey's not first?
const ramonesArray = [ 
  {ramone: 'Dee Dee', height:5.9},
  {ramone: 'Johnny', height:6.0},
  {ramone: 'Tommy', height:5.5},
  {ramone: 'Joey', height:6.7},
];

// without a custom comparator function
// the .sort() will convert vals to strings
// and sort lexically, i.e., 10 < 2

// a comparator func compares two array 
// elements at a time. 
// It iterates one step, assigns the element to a 
// and the previous element to b:
//
// [1, 2, 3, 4, 5].sort((a,b) => {console.log('a', a, 'b', b)})
// a 2 b 1
// a 3 b 2
// a 4 b 3
// a 5 b 4

// using a and b, the comparator func instructs .sort()
// if comparator returns a value:
// <0 sort a before b
// >0 sort b before a
// 0 do not sort

// create comparator func for the sort method
function putJoeyFirst(a, b) {
  // a.height is 6, b.height is 5.9
  // b - a is <0
  // sort 6.0 before 5.9
  return b.height - a.height;
}

function putTommyFirst(a, b) { return a.height - b.height };

console.log('Put Joey first!', ramonesArray.sort(putJoeyFirst));

// const ramonesArray = [ 
//   {ramone: 'Joey', height:6.7},
//   {ramone: 'Johnny', height:6.0},
//   {ramone: 'Dee Dee', height:5.9},
//   {ramone: 'Tommy', height:5.5}
// ];

console.log('Put Tommy first?!', ramonesArray.sort(putTommyFirst));

// Put Tommy first?! [
//   { ramone: 'Tommy', height: 5.5 },
//   { ramone: 'Dee Dee', height: 5.9 },
//   { ramone: 'Johnny', height: 6 },
//   { ramone: 'Joey', height: 6.7 }
// ]


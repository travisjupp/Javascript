// To copy an object in JavaScript, you have three options:

// Use the spread (...) syntax
// Use the Object.assign() method
// Use the JSON.stringify() and JSON.parse() methods

const person = {
    firstName: 'John',
    lastName: 'Doe'
};


// using spread ...
let p1 = {
    ...person
};

// using  Object.assign() method
let p2 = Object.assign({}, person);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));

// Both spread (...) and Object.assign() perform a shallow copy while the JSON methods carry a deep copy.
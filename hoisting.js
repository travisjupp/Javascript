// Hoisting is when javascript gives higher precedence to declarations

// var and function *declarations* are hoisted to the top of the scope

// var newVar; // declaring var newVar = 'newVar'; is doing this
console.log('newVar', newVar); // undefined (hoisted, declared not init'd)
var newVar = 'newVar'; 

// varVariableFunc(); // TypeError: varVariableFunc is not a function
// console.log(undefined()); // above is trying to call undefined (TypeError)
console.log('varVariableFunc', varVariableFunc); // undefined (hoisted, declared not init'd)
var varVariableFunc = function() {console.log('varVariableFunc')};



// Temporal Dead Zone let/const (variable exists but can't be accessed)

// console.log('constVar: ', constVar); // ReferenceError: Can't access before initialization
// TDZ
const constVar = 'constVar'; // end TDZ

// console.log('letVar: ', letVar); // ReferenceError: Can't access before initialization
// TDZ
let letVar = 'letVar'; // end TDZ

globalFunc(); // => globalFunc called
// functions declared using function keyword are fully hoisted
function globalFunc() {console.log('globalFunc called')};

// functions declared using variables are not fully hoisted
// constVariableFunc(); // ReferenceError: Can't access before initialization
const constVariableFunc = function() {console.log('constVariableFunc called')};


// constArrowFunc(); // ReferenceError: Can't access before initialization
const constArrowFunc = () => console.log('constArrowFunc called');



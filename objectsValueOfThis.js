// Find the value of 'this' in a function inside a method
const person = {
  name: 'Julie',
  age: 49,
  userAge() {
    const newName = 'Ellie';
    console.log(`${this.name} is ${this.age} years old.`);
    console.log('this: ', this);
    function thisVal () {
      console.log(`Value of this in a function inside a method: ${this}`);
    }
    thisVal();
    const thisValArrow = () => {
      console.log(`Value of this in a arrow function inside a method: ${JSON.stringify(this)}`);
      console.log(`newName's value inside thisValArrow: ${newName}`);
    }
    thisValArrow();
    return;
  },
  userAgeArrow: () => {
    console.log(`${this?.name} is ${this?.age} years old (userAgeArrow).`);
    console.log('this (userAgeArrow): ', this);
  },
};

// person.userAge();
// const newPerson = { name: 'Bob', age: 100 }
// newPerson.userAge = person.userAge;
// newPerson.userAge(); // => Bob is 100 years old.
// newPerson.userAgeArrow = person.userAgeArrow;
// newPerson.userAgeArrow(); // => undefined is undefined years old.

const newObj ={
  newObjProperty: 'NOPVal',
  arrowMethod: () => {
    console.log(`arrowMethod value of this: ${JSON.stringify(this)}`);
  },
  nonArrowMethod() {
    console.log(`nonArrowMethod value of this: ${JSON.stringify(this)}`);
    const arrowFuncInNonArrowMethod = () => {
      // Arrow func, lexical binding will inherit parents `this` val (newObj)
      console.log(`arrowFuncInNonArrowMethod value of this: ${JSON.stringify(this)}`);
    }
    arrowFuncInNonArrowMethod();
  },
}

// newObj.arrowMethod(); // => arrowMethod value of this: undefined
// newObj.nonArrowMethod(); // => nonArrowMethod value of this: {"newObjProperty":"NOPVal"}
                         // => arrowFuncInNonArrowMethod value of this: {"newObjProperty":"NO PVal"}

/* Object Curly Braces {}: Do not create a scope. 
 * Arrow functions defined directly as object properties will
 * always capture the global/outer scope.
 *
 * Function Curly Braces {}: Do create a scope.
 * Arrow functions defined inside regular functions will
 * successfully capture that function's current `this`. */


/* When an arrow function is created as a class property it looks like its
 * written inside an obect block, which usually makes `this` bubble all the way
 * out to the global scope: */

// class Counter {
//   count = 0;
//   increment = () => {
//       console.log(this.count);
//   };
// }

/* But when class properties are compiled JS moved the arrow function inside
 * the constructor function: */

// class Counter {
//   constructor() {
//     this.count = 0;
//
//     // JavaScript moves the AF here, its `this` context is the new instance
//     this.increment = () => {
//       console.log(this.count);
//     };
//   }
// }

class Counter {
  constructor() {
    this.count = 0;
  };
  increment = () => {
    console.log(++this.count);
  };
}

const counter = new Counter();
counter.increment(); // => 1
counter.increment(); // => 2
counter.increment(); // => 3

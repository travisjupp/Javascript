// Keyword: this

// Without the 'this' keyword the object is not referenced when calling 
// properties from within the object. In other words:
// inside the scope of provideInfo() method we dont have access to other
// properties of the robot object so we use the 'this' keyword to gain access

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }
  };
  
  console.log(robot.provideInfo())
  // I am 1E78V2 and my current energy level is 100

// for a method, the calling object is the object the method belongs to. 
// If we use the this keyword in a method then the value of this is the calling object.

/* ------------------------------------ */

// ARROW FUNCTIONS AND THIS DO NOT WORK
// Arrow functions inherently bind, or tie, an already defined this value to the function itself
// that is NOT the calling object. The value of this is the global object, or an object that exists 
// in the global scope, which doesn’t have a energyLevel property and therefore returns undefined.
// Avoid using arrow functions when using this in a method!

// Below, the arrow function is rewritten using a function expression

const robot2 = {
    energyLevel: 100,
    // checkEnergy: () => {
    //   console.log(`Energy is currently at ${this.energyLevel}%.`)
    // }
    checkEnergy: function () {
      console.log(`Energy is currently at ${this.energyLevel}%`);
    }
  }
  
  robot.checkEnergy();
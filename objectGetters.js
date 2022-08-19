// Getters are methods that get and return the internal properties of an object.
// properties cannot share the same name as the getter/setter function. If we do so, 
// then calling the method will result in an infinite call stack error. One workaround
// is to add an underscore before the property name like we did in the example.

// JS does not have privacy built-in for objects so developers use the _ (prepended underscore)
// naming convention to show other devs that the property should not be altered

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
   
  // To call the getter method: 
  person.fullName; // 'John Doe'

/* ------------------------ */
// 
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  
  console.log(robot.energyLevel); // getter methods do not need to be called with parens()
  
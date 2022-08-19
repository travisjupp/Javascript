// Find the value of 'this' in a function inside a method
const person = {
  name: 'Julie',
  age: 49,
  userAge() {
    console.log(`${this.name} is ${this.age} years old.`);
    console.log(this);
    function thisVal () {
      console.log(`Value of this in a function inside a method: ${this}`);
    }
    thisVal();
  }
};

person.userAge();
console.log(Object.entries(person));
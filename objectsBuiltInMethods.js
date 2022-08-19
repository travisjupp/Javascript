// Built-in Object Methods
// For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more!

// There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few.

const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Object.keys() method returns an array of a given object's own enumerable property names
const robotKeys = Object.keys(robot);

console.log(`robot object keys: ${robotKeys}`);

// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs
const robotEntries = Object.entries(robot);

console.log(`robot object entries: ${robotEntries}`);

// Object.assign(target, source)
// method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot ); // copies props from robot to new object with props in curly braces included

console.log(newRobot); 
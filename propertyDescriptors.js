/* 
A "Property Descriptor" is a configuration record for an object property
There are two types: Data Descriptors and Accessor Descriptors
Data Descriptor: {value:<value>,writable:<bool>,enumerable:<bool>,configurable:<bool>} 
Accessor Descriptor: {get(){},set(){},enumerable:<bool>,configurable:<bool>} 
*/

const obj1 = {};

// define a property with a configuration
Object.defineProperty(obj1, "user", {value: "John", writable: true, configurable: true}); // unset keys default to false

// read the property descriptor
console.log(Object.getOwnPropertyDescriptor(obj1, "user")); // {value: 'John', writable: true, enumerable: false, configurable: true}

// change an attribute
Object.defineProperty(obj1, "user", {value: "Jane"});
console.log(obj1.user) // Jane

// reconfigure property
Object.defineProperty(obj1, "user", {writable: false});
obj1.user = "Ghost";
console.log(obj1.user) // Jane (writable is false so assignment has no effect)

// even if writable is false you can still use defineProperty to change the value
Object.defineProperty(obj1, "user", {value: "God"});
console.log(obj1.user) // God

// reconfigure property
Object.defineProperty(obj1, "user", {writable: true});
obj1.user = "Mary";
console.log(obj1.user) // Mary


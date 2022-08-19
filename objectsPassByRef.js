// OBJECTS: Pass By Reference
// Objects are passed by reference. This means when we pass a variable assigned to 
// an object into a function as an argument, the computer interprets the parameter 
// name as pointing to the space in memory holding that object. 
// As a result, functions which change object properties actually mutate the object permanently
// (even when the object is assigned to a const variable).

const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);
 
spaceship.color // Returns 'glorious gold'
 
// Our function paintIt() permanently changed the color of our spaceship object. 
// However, reassignment of the spaceship variable wouldn’t work in the same way:

let spaceship2 = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
 
};
tryReassignment(spaceship2) // The attempt at reassignment does not work.
spaceship2 // Still returns {homePlanet : 'Earth', color : 'red'};
 
spaceship2 = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.
// Let’s look at what happened in the code example:

// We declared this spaceship object with let. This allowed us to reassign it 
// to a new object with identified and 'transport type' properties with no problems.
// When we tried the same thing using a function designed to reassign the object 
// passed into it, the reassignment didn’t stick (even though calling console.log() 
// on the object produced the expected result).
// When we passed spaceship into that function, obj became a reference to the memory 
// location of the spaceship object, but not to the spaceship variable. This is because 
// the obj parameter of the tryReassignment() function is a variable in its own right. 
// The body of tryReassignment() has no knowledge of the spaceship variable at all!
// When we did the reassignment in the body of tryReassignment(), 
// the obj variable came to refer to the memory location of the object {'identified' : false, 'transport type' : 'flying'}, 
// while the spaceship variable was completely unchanged from its earlier value.


let spaceship3 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Func setting objects 'Fuel Type' to 'avocado oil'
  // using concise form arrow functions
  let greenEnergy = obj =>
    obj['Fuel Type'] = 'avocado oil'
  
  // Func setting objects disabled property to true
  let remotelyDisable = obj =>
    obj.disabled = true
  
  // call and log spaceship object
  greenEnergy(spaceship3);
  remotelyDisable(spaceship3);
  
  console.log(spaceship3);
  
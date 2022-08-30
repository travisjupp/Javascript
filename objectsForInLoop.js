/* Looping Through Objects
Loops are programming tools that repeat a block of code until a condition is met. We learned how to iterate through arrays using their numerical indexing, but the key-value pairs in objects aren’t ordered! JavaScript has given us alternative solution for iterating through objects with the for...in syntax . */

// Ex 1

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
console.log('======= Ex 1 =======')
// List crew members roles and names e.g. 'medic: Clementine'
for (let cRoleName in spaceship.crew) {
  console.log(`${cRoleName}: ${spaceship.crew[cRoleName].name}`);
};
// List crew members names and degrees
for (let cNameDeg in spaceship.crew) {
  console.log(`${spaceship.crew[cNameDeg].name}: ${spaceship.crew[cNameDeg].degree}`);
}
console.log('\n======= Ex 2 =======')
////////////////////////////////////////////
// Ex 2

let mobile = {
    brand: 'Samsung',
    model: 'Galaxy Note 9'
  };
   
  for (let key in mobile) {
    console.log(`${key}: ${mobile[key]}`); 
}
// brand: Samsung
// model: Galaxy Note 9


// Object access properties methods:
console.log(mobile.brand); // Samsung
console.log(mobile['brand']); // Samsung
console.log(mobile.brand[0]) // S
console.log(mobile.model[0]) // G

console.log(Object.keys(mobile)); // ['brand', 'model']

console.log([mobile][0]) // {brand: 'Samsung', model: 'Galaxy Note 9'}

////////////////////////////////////////////
// Ex 3

let creature = {
  dnaStrand: ["G","C","G","G","T","C","G","A","G","C","T","T","T","G","A"],
  dnaBase: ["Adenine", "Cytosine", "Thymine", "Guanine"]
}

// testing iterator variable use in nested for...loop
// using "i" variable for both for...loops

// absent "let" keyword
// for (let i in creature.dnaStrand){
//   console.log(i,creature.dnaStrand[i]); // count (0 - 14)
//   for (i in creature.dnaBase){ // the absence of the inner "let" keyword
//     console.log('-',i,creature.dnaBase[i]); // count (0 - 3)
//   }
//   console.log(i); // index sides with inner for...loop (3)
// }


// for (let i in creature.dnaStrand){
//   console.log(i,creature.dnaStrand[i]); // count (0 - 14)
//   for (let i in creature.dnaBase){ // "let" keyword exists
//     console.log('-',i,creature.dnaBase[i]); // count (0 - 3)
//   }
//   console.log(i); // index sides with outer for...loop
// }

for (i in creature.dnaStrand){ // absent outer "let"
  console.log(i,creature.dnaStrand[i]); // count (0 - 14)
  for (let i in creature.dnaBase){ // inner "let" keyword exists
    console.log('-',i,creature.dnaBase[i]); // count (0 - 3)
  }
  console.log(i); // index sides with outer for...loop
}


// using "i" then "j" variables
// for (i in creature.dnaStrand){
//   console.log(i,creature.dnaStrand[i]); // should count 15
//   for (j in creature.dnaBase){
//     console.log(i,'-',j,creature.dnaBase[j]); // should count 4
//   }
//   console.log(j);
// }
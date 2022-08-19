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

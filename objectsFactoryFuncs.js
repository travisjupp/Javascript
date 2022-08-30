// Factory Functions: Func that returns an object and can be reused to make multiple object instances.

// Ex 1
// Factory Func returns an object with 2 props and a method
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

// Call Factory Func assigned to var tinCan (becomes obj name)
const tinCan = robotFactory('P-500', true);

console.log('==== Ex 1: robotFactory ====')
// Call .beep() on tinCan
tinCan.beep(); // Beep Boop logged to console, object created
console.log(tinCan); // logs: {model: 'P-500', mobile: true, beep: ƒ}

////////////////////////////////////////////
// Ex 2
// Factory function with getters, setters, and methods
 
const dogFactory = (name, breed, weight) => { 
  
  return dogObj = { // dogObj = {} (names new object: dogObj)
    _name: name,
    _breed: breed,
    _weight: weight,
    set name(newName){
      if(typeof newName === 'string'){
        this._name = newName;
      } else {
        console.log('name must be a string');
      }
    },
    get name(){
      return this._name;
    },
    set breed(newBreed){
      if(typeof newBreed === 'string'){
        this._breed = newBreed;
      } else {
        console.log('breed must be a string');
      }
    },
    get breed(){
      return this._breed;
    },
    set weight(newWeight){
      if(typeof newWeight === 'number'){
        return this._weight = newWeight;
      } else {
        console.log(newWeight, 'must be a number');
      }
    },
    get weight(){
      return this._weight;
    },
    bark(){
      console.log( 'ruff! ruff!');
    },
    eatTooManyTreats(){
      return this._weight++
    }
  }
}



console.log('==== Ex 2: dogFactory ====')

console.table(dogFactory('Rover', 'BassetHound', 13))
console.log(dogFactory('Rover', 'BassetHound', 13))

console.log(dogObj.weight) // 13
console.log(dogFactory(5, 5, 'string')) // this should error but doesen't
// calling getter/setter must use dogObj
console.log(dogObj.name = 4) // must be a string
console.log(dogObj.breed = 3) // must be a string
console.log(dogObj.name)

// Ex 3
const personFactory = name => {
  return {
      _name: name,
      set setName(newName){
          if(typeof newName === 'string'){
              return this._name = newName;
          } else {
              return 'name not string';
          }
      },
      get getName(){
          return this._name;
      }
  }
}

console.log('==== Ex 3: personFactory ====')
const personObj = personFactory('Rob')
console.log(personObj.getName)
personObj.setName = 'bill'
console.log(personObj.getName)
console.log(personObj.setName = 9);
console.log(personObj.getName)

// Ex 4

const musicFactory = () => {
  return music = {
      type: 'freestyle',
      genre: 'hiphop'
  }
}

// const factory = musicFactory();
musicFactory();

let painting = music;
console.log('==== Ex 4: musicFactory ====')
// console.log(music);
console.log(painting);
console.log(music);
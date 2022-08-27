// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// factory function pAequorFactory() that has two parameters:

// The first parameter is a number (no two organisms should have the same number).
// The second parameter is an array of 15 DNA bases.
// pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.

let num = 0;
function counter () {
  return num++;
};

let newMock = mockUpStrand(); // so user can mutate strand in two steps
const pAequorFactory = () => {
  return specObj = {
    specimenNum: counter(),
    dna: newMock,
    // Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
    // To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
    // .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
    // For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.
    mutate() {
      console.group('==mutate()==');
      console.log(this.dna);
      let origStrand = [...this.dna];
      let randNum = Math.floor(Math.random()*this.dna.length);
      let randBase = this.dna[randNum];
      let rrb = returnRandBase();
      
      // while randbase === rrb get new base
      console.log('rrb at start',rrb);

      while (randBase === rrb){
        rrb = returnRandBase();
        console.log('rrb in while loop', rrb);
      }

      this.dna[randNum] = 'R:'+rrb;
      console.log(`${origStrand} original \n${this.dna} mutant`);
      console.groupEnd();
      return this.dna;
    }
  }
};

// console.log(pAequorFactory());
// console.log(pAequorFactory());

console.log(pAequorFactory());
console.log(specObj.dna); // running the factory: pAequorFactory() then running pAequorFactory().mutate() does not mutate the first dna but generates a new strand it then mutates. Probably because dna prop-value is not a variable but runs mockUpStrand() directly.

console.log('pAequorFactory().mutate():\n',pAequorFactory().mutate());
// console.log(JSON.stringify(specObj));
// console.log('specObj.mutate():\n',specObj.mutate());

// console.log(counter());
// console.log(counter());


// console.table(mockUpStrand());
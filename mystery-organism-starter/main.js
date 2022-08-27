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

const pAequorFactory = () => {
  return specObj = {
    specimenNum: counter(),
    dna: mockUpStrand(),
    // Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
    // To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
    // .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
    // For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.
    mutate() {
      console.log('==mutate()==');
      console.log(this.dna);
      let randNum = Math.floor(Math.random()*this.dna.length);
      let randBase = this.dna[randNum];
      let rrb = returnRandBase();
      // console.log('select random base:',this.dna[Math.floor(Math.random()*this.dna.length)]);
      
      if (randBase !== rrb) {
        console.log('bases not equal','randBase:',randBase);
        this.dna[randNum] = 'R:'+rrb;
      } else {
        console.log('bases equal, try again');
      }
      // randBase = 'R:'+returnRandBase();
      // console.log(this.dna);
      return this.dna;
    }
  }
};

// console.log(pAequorFactory());
// console.log(pAequorFactory());
// console.log(pAequorFactory());
console.log('pAequorFactory().mutate():\n',pAequorFactory().mutate());
// console.log(specObj);
// console.log(JSON.stringify(specObj));
// console.log('specObj.mutate():\n',specObj.mutate());

// console.log(counter());
// console.log(counter());


// console.table(mockUpStrand());
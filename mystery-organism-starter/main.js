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

let newMock = mockUpStrand(); // mutate strand in two steps (dna: newMock)
const pAequorFactory = () => {

  return specObj = {
    specimenNum: counter(),
    dna: mockUpStrand(),
    // Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
    // To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
    // .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
    // For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.
    mutate() {
      console.group('==mutate()==');
      console.log(this.dna);
      let origStrand = [...this.dna]; // copy original object dna value
      let randNum = Math.floor(Math.random()*this.dna.length);
      let randBase = this.dna[randNum]; // choose random dna base
      let rrb = returnRandBase(); // generate new random base
      // while randbase === rrb get new base
      console.log('rrb at start',rrb);
      // make sure new generated base not same as chosen random base
      // if bases are the same, generate new random base. Loop until bases not equal
      while (randBase === rrb){
        rrb = returnRandBase();
      }

      this.dna[randNum] = 'R:'+rrb; // randomly place new generated base in dna strand
      console.groupEnd();
      console.log(`${origStrand} original \n${this.dna} mutant`); // log strands for comparison
      return this.dna; // return mutated dna strand
    },
    // Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.
    
    // .compareDNA() has one parameter, another pAequor object.
    
    // The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.
    
    // For example:
    // ex1 = ['A', 'C', 'T', 'G']
    // ex2 = ['C', 'A', 'T', 'T']
    // ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common. The resulting message would read something along the lines of: specimen #1 and specimen #2 have 25% DNA in common.
    compareDNA(passedDNA) {
      console.group('==compareDNA==');
      console.log('currentDNA:',JSON.stringify(this.dna)); // current object
      console.log('inputDNA:',JSON.stringify(passedDNA.dna)); // input object
      let identicalBases = 0; // 
      // compare passed object with current using a nested for...loop
    
      for (i in this.dna){
        // console.log(this.dna[i]);
        for (j in passedDNA.dna){
          // console.log('-',passedDNA.dna[j]);
          // compare bases when indexes are the same
          if (i === j){
            if(this.dna[i] === passedDNA.dna[j]){
              console.log('@index:',i,'bases',this.dna[i],'-',passedDNA.dna[j],'equal');
              identicalBases += 1;
            }
          }
        }
      }
      console.log('identicalBases =',identicalBases);
    }
  } // object end
};

// console.log('pAequorFactory()',pAequorFactory());
// console.log(specObj.dna);
// console.log('pAequorFactory()',pAequorFactory());
// console.log(specObj.dna);

// ----------conpareDNA() calls------------
const inputDNA = pAequorFactory(); // creates new object: inputDNA

console.log('inputDNA.dna',inputDNA.dna);

// console.log(pAequorFactory().compareDNA(inputDNA))
pAequorFactory().compareDNA(inputDNA)


// -------------mutate() calls---------------
// console.log(pAequorFactory());
// console.log('specObj.dna:',specObj.dna); // running the factory: pAequorFactory() then running pAequorFactory().mutate() mutates the first dna strand generated. dna prop-value has been moved to a variable instead of running mockUpStrand() directly as it did before. NOTE: This only works if => dna: mockUpStrand() is changed to => dna: newMock

// console.log('pAequorFactory().mutate():\n',pAequorFactory().mutate());
// console.log('pAequorFactory().compareDNA():\n',pAequorFactory().compareDNA());
// console.log(JSON.stringify(specObj));
// console.log('specObj.mutate():\n',specObj.mutate());
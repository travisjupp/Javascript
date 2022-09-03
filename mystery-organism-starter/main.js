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
    mutate() {
      console.group('mutate()');
      let origStrand = [...this.dna]; // copy original object dna value
      
      let randNum = Math.floor(Math.random()*this.dna.length);
      let randBase = this.dna[randNum]; // choose random dna base
      let rrb = returnRandBase(); // generate new random base
      
      // make sure new generated base not same as chosen random base
      // if bases are the same, generate new random base. Loop until bases not equal
      while (randBase === rrb){
        rrb = returnRandBase();
      }
      
      this.dna[randNum] = rrb; // randomly place new generated base in dna strand
      console.log(specObj.specimenNum,specObj.dna);

      console.log(`Spec# ${this.specimenNum}\n${origStrand} original DNA \n${this.dna} mutated DNA`); // log strands for comparison
      console.groupEnd();
      return this.dna; // return mutated dna strand
    }, // mutate() end
    compareDNA(passedDNA) {
      console.group('compareDNA()');
      console.log(`Spec# ${passedDNA.specimenNum} (input DNA)\n${passedDNA.dna}\n`)
      console.log(`Spec# ${this.specimenNum} (current DNA)\n${this.dna}\n`)
      let identicalBases = 0; // 
      // compare passed object with current using a nested for...loop
      for (const i in this.dna){
        // console.log(this.dna[i]);
        for (const j in passedDNA.dna){
          // console.log('-',passedDNA.dna[j]);
          // compare bases when indexes are the same
          if (i === j){
            if(this.dna[i] === passedDNA.dna[j]){
              console.log('equal bases =>',this.dna[i],'=',passedDNA.dna[j],'@index:',i);
              identicalBases += 1;
            }
          }
        }
      }
      console.log('\nidenticalBases =',identicalBases);
      // return percentage of DNA in common: indenticalBases / total bases (15)
      console.log(`\nSpecimen #${passedDNA.specimenNum} and specimen #${this.specimenNum} have ${(identicalBases / this.dna.length).toFixed(2)*(100)}% DNA in common.\n`);
      console.groupEnd();
    }, // compareDNA() end

    willLikelySurvive() {
      console.group('willLikelySurvive()');
      let cBases = 0;
      let gBases = 0;
      let instances = 0; // count number of loops
      let survivors = [];
      
      do {
        // zero out bases
        cBases = 0;
        gBases = 0;
        instances += 1;
        
        // create new strand
        this.dna = mockUpStrand();
        // console.log(`${this.dna}`);

        // check strand (get number of bases)
        for (const base in this.dna) {
          if (this.dna[base] === 'C') {
            cBases += 1;
            // console.log(cBases,base,this.dna[base]);
          } else if (this.dna[base] === 'G') {
            gBases += 1;
            // console.log(gBases,base,this.dna[base]);
          }
        }
        
        // if > 60 push to survivors array
        if ((cBases+gBases) / 15 * 100 >= 60) {
          console.log(`Survivor:${this.dna}`);
          survivors.push({
            specimenNum: counter(),
            dna: this.dna});
        } else {
          console.log(`Victim:${this.dna}`)
        }
      } while (survivors.length < 30); // do until array is full

        console.log(`${this.dna}`);
        console.log('survivors:',JSON.stringify(survivors));
        // console.log('cBases>60:',cBases / 15 * 100 > 60);
        // console.log('gBases>60:',gBases / 15 * 100 > 60);
        console.log('Bases>60%:',(gBases+cBases) / 15 * 100 >= 60); // merging bases for higher probability
        console.log('Bases:',(gBases+cBases) / 15 * 100, '%'); // merging bases for higher probability
      
      

      console.log('cBases:',cBases,'gBases:',gBases,'instances:',instances);
      console.groupEnd();
    } // willLikelySurvive() end
  } // object end
};

// console.log('pAequorFactory()',pAequorFactory());
// console.log(specObj.dna);
// console.log('pAequorFactory()',pAequorFactory());
// console.log(specObj.dna);

// ------------mutate() calls--------------
// Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
// To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
// .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
// For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.

pAequorFactory().mutate()
// console.log('pAequorFactory().mutate():\n',pAequorFactory().mutate());

// ----------conpareDNA() calls------------
// Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.

// .compareDNA() has one parameter, another pAequor object.

// The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.

// For example:
// ex1 = ['A', 'C', 'T', 'G']
// ex2 = ['C', 'A', 'T', 'T']
// ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common. The resulting message would read something along the lines of: specimen #1 and specimen #2 have 25% DNA in common.

const inputDNA = pAequorFactory(); // creates new object: inputDNA
pAequorFactory().compareDNA(inputDNA);

// -------willLikelySurvive() calls--------
// .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.

// your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.
pAequorFactory().willLikelySurvive();
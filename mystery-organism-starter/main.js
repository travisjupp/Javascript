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
function counter() {
  return num++;
};

const pAequorFactory = () => {
  return specObj = {
    specimenNum: counter(),
    dna: mockUpStrand(),
    mutate() {
      console.group('mutate()');
      let origStrand = [...this.dna]; // copy original object dna value
      let randNum = Math.floor(Math.random() * this.dna.length);
      let randBase = this.dna[randNum]; // choose random dna base
      let rrb = returnRandBase(); // generate new random base

      // make sure new generated base not same as chosen random base
      // if bases are the same, generate new random base. Loop until bases not equal
      while (randBase === rrb) {
        rrb = returnRandBase();
      };

      this.dna[randNum] = rrb; // randomly place new generated base in dna strand

      console.log(`Spec# ${this.specimenNum}:\n${origStrand} original DNA \n${this.dna} mutated DNA`); // log strands for comparison
      console.groupEnd();
      return this.dna; // return mutated dna strand
    }, // mutate() end
    compareDNA(object) {
      console.group('compareDNA()');
      console.log(`Spec# ${object.specimenNum} (input DNA)\n${object.dna}\n`);
      console.log(`Spec# ${this.specimenNum} (current DNA)\n${this.dna}\n`);
      let identicalBases = 0;
      // compare passed object with current using a nested for...loop
      for (const i in this.dna) {
        for (const j in object.dna) {
          // compare bases when indexes are the same
          if (i === j) {
            if (this.dna[i] === object.dna[j]) {
              // console.log('equal bases =>',this.dna[i],'=',object.dna[j],'@index:',i);
              identicalBases += 1;
            }
          }
        }
      };
      console.log('identicalBases =', identicalBases);
      // return percentage of DNA in common: indenticalBases / total bases (15)
      console.log(`\nSpecimen #${object.specimenNum} and Specimen #${this.specimenNum} have ${(identicalBases / this.dna.length).toFixed(2) * (100)}% DNA in common.\n`);
      console.groupEnd();

      return (identicalBases / this.dna.length).toFixed(2) * (100);

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

        // check strand (get number of bases)
        for (const base in this.dna) {
          if (this.dna[base] === 'C') {
            cBases += 1;
            // console.log(cBases,base,this.dna[base]);
          } else if (this.dna[base] === 'G') {
            gBases += 1;
            // console.log(gBases,base,this.dna[base]);
          };
        };

        // if > 60 push to arr
        if ((cBases + gBases) / 15 * 100 >= 60) {
          // console.log(`Survivor: ${this.dna} Spec# ${this.specimenNum}`);
          survivors.push({
            specimenNum: this.specimenNum,
            dna: this.dna
          });
        } else {
          // console.log(`Victim: ${this.dna} Spec# ${this.specimenNum}`)
        };

        this.dna = mockUpStrand();// create new strand
        this.specimenNum = counter();// create new specimenNum
      } while (survivors.length < 30);

      console.log(`Likely to Survive: ${survivors.length} / Processed: ${instances}`);
      console.groupEnd();
    }, // willLikelySurvive() end
    complementStrand() {
      console.group('complementStrand()');
      let complementDNA = [];
      // build strand from current strand
      for (const base of this.dna) {
        switch (base) {
          case 'A':
            complementDNA.push('T');
            break;
          case 'T':
            complementDNA.push('A');
            break;
          case 'C':
            complementDNA.push('G');
            break;
          case 'G':
            complementDNA.push('C');
            break;
          default: return 'Missing Base';
        };
      };
      console.log(`Spec# ${this.specimenNum} \n${this.dna}\n`);
      console.log(`Complement \n${complementDNA}`);

      specObj.complementDNA = complementDNA; // add to object
      // console.log(specObj.complementDNA);

      console.groupEnd();
    }, // complementStrand() end
    mostRelated(numberToCompare) {
      console.group('mostRelated()');
      // generate DNA, save to samples array
      let samples = [];
      while (samples.length < numberToCompare) {
        // samples.push({ specimenNum: counter(), dna: mockUpStrand() });
        samples.push(pAequorFactory()); // does same as above
      };
      // run compareDNA() on samples, save to results array
      let results = [];
      for (let el of samples) {
        results.push({
          compareResult: this.compareDNA(el),
          specInput: el.specimenNum,
          specCurrent: this.specimenNum
        })
      };
      // compare samples against each other
      let identicalBases2 = 0;
      for (let i = 0; i < samples.length; i++) {
        for (let j = i + 1; j < samples.length; j++) {
          if (j !== i){
            // console.log(i,j);
            console.log(samples[i],samples[j]);
            console.log(samples[i].dna);
            console.log(samples[j].dna);
            // would use compareDNA() here
            
            console.log('samples[i].compareDNA(samples[j]', samples[i].compareDNA(samples[j])); // FUCKING WORKS! HAD TO CALL PA FACTORY WHEN FILLING SAMPLES ARRAY
            
            // console.log('compareDNA(samples[i]).bind(specObj)',compareDNA(samples[i]).bind(specObj)); // compareDNA not defined
            
            // console.log('this.compareDNA(samples[i]).bind(specObj)',this.compareDNA(samples[i]).bind(specObj)); // not a function
            
            // console.log('compareDNA(samples[i]).bind(this)',compareDNA(samples[i]).bind(this)); // compareDNA not defined
            
            // console.log('this.compareDNA(samples[i])', this.compareDNA(samples[i])); // works!
            
            // console.log('samples[i].this.compareDNA',samples[i].this.compareDNA); // TypeError: Cannot read property 'compareDNA' of undefined
            
            // console.log('this.compareDNA',this.compareDNA); // displays method
            
            // console.log('samples[i].pAequorFactory().compareDNA',samples[i].pAequorFactory().compareDNA); // not a function
            
            // console.log('samples[i].pAequorFactory().compareDNA(samples[j])',samples[i].pAequorFactory().compareDNA(samples[j])); // not a function
            
            // console.log('samples[i].compareDNA(samples[j])',samples[i].compareDNA(samples[j])); // not a function
            
            // console.log('this.samples[i]',this.samples[i]); // undefined
            
            // console.log('pAequorFactory().compareDNA',pAequorFactory().compareDNA); // displays method
            // console.log('pAequorFactory.compareDNA',pAequorFactory.compareDNA); // undefined
            
            // let c = this.compareDNA;
            // // console.log('c',c); // shows method
            // let si = samples[i];
            // let sj = samples[j];
            // console.log('samples[i].c',samples[i].c); // undefined
            // console.log('samples[i].c()',samples[i].c()); // not a function
            // console.log('si.c()',si.c()); // not a function
            // console.log('si.c(samples[j])',si.c(samples[j])); // not a function
            // console.log('si.c(sj)',si.c(sj)); // not a function

            // console.log('specObj.compareDNA(samples[i])',specObj.compareDNA(samples[i])); // works!
            
            // console.log('samples[i].specObj.compareDNA(samples[i])',samples[i].specObj.compareDNA(samples[j])); // TypeError: Cannot read property 'compareDNA' of undefined

            // console.log('this:',this); // shows specObj
            // console.log('specObj',specObj); // shows specObj
            // console.log('typeof samples[i]',typeof samples[i]); // object



            for (let k = 0; k < 15; k++){
              console.log(samples[i].dna[k],'-',samples[j].dna[k]);
              if (samples[i].dna[k] === samples[j].dna[k]) {
                identicalBases2 += 1;
                console.log('^identicalBases2 in loop',identicalBases2);
              }
            }
            console.log('identicalBases2 out loop',identicalBases2);
            console.log((identicalBases2 / 15).toFixed(2) * 100);
            
            results.push({
              compareResult: (identicalBases2 / 15).toFixed(2) * 100,
              specInput: samples[i].specimenNum,
              specCurrent: samples[j].specimenNum
            });
            
            identicalBases2 = 0; // clear var
            
            
          }
          }
        }
      console.log('identicalBases2',identicalBases2);
      // sort results array by comparison percentages
      results.sort((a, b) => a.compareResult - b.compareResult);
      let mostInCommon = results.pop();
      console.log(`Specimen #${mostInCommon.specInput} and Specimen #${mostInCommon.specCurrent} have the highest level of DNA in common at ${mostInCommon.compareResult}%`);
      console.groupEnd();
    } // mostRelated() end
  }; // object end
};

// ------------mutate() calls--------------
// Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
// To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
// .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
// For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.
// pAequorFactory().mutate();

let sampleStrand = pAequorFactory();
// console.log(sampleStrand);
// sampleStrand.mutate();
// console.log(specObj.dna);


// ----------conpareDNA() calls------------
// Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.

// .compareDNA() has one parameter, another pAequor object.
// The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.

// For example:
// ex1 = ['A', 'C', 'T', 'G']
// ex2 = ['C', 'A', 'T', 'T']
// ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common. The resulting message would read something along the lines of: specimen #1 and specimen #2 have 25% DNA in common.

const inputDNA = pAequorFactory();
// pAequorFactory().compareDNA(inputDNA);
// sampleStrand.compareDNA(inputDNA);
// console.log('specObj.compareDNA(inputDNA)',specObj.compareDNA(compareDNA)); // works!
// console.log('sampleStrand.compareDNA(inputDNA)',sampleStrand.compareDNA(inputDNA)); // (works! shows result)

// bypass calling pA to create an object then compareDNA
// const bypassOb = { specimenNum: counter(), dna: mockUpStrand() };
// console.log('bypassOb',bypassOb); // shows object
// console.log('bypassOb.compareDNA(inputDNA)',bypassOb.compareDNA(inputDNA)); // not a function


// -------willLikelySurvive() calls--------
// .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.

// your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.
// pAequorFactory().willLikelySurvive();

// --------complementStrand() calls--------
// .complementStrand() method to the factory function’s object that returns the complementary DNA strand.
// If the strand1’s first base is an 'A', then the strand2’s opposing base is a 'T'. If the second spot of strand1 is a 'C', then strand2’s opposing base is a 'G'.
// pAequorFactory().complementStrand();

// ----------mostRelated() calls-----------
// Use the .compareDNA() to find the two most related instances of pAequor
pAequorFactory().mostRelated(3);

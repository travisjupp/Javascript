// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {beforeAll, expect, jest} from '@jest/globals';
import util from 'node:util';
import {style} from '../../styles.js';
import { binarySearchIterative, binarySearchRecursive } from './binarySearch.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// util.inspect.defaultOptions.compact = true; // dont break objects to new lines
// util.inspect.defaultOptions.compact = false; // break objects to new lines

// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;

beforeEach(() => {
  global.console = console;
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset);
});

afterEach(() => {
  global.console = jestConsole;
  console.log(style.color(99), style.hr.double, style.reset);
});

// const logItDescription = (description, callback) => {
//   console.log(style.green, '   ☞ ', style.reset,description);
//   it(description, callback);
// };

const logItDescription = (description, callback) => {
  it(description, async () => {
    // Array to store captured log messages for this specific test
    const capturedLogs = [];
    
    // Spy on console.log and push messages to our array
    const logSpy = jest.spyOn(console, 'log').mockImplementation((...args) => {
      capturedLogs.push(args);
    });

    // Capture console.log output during the test's execution
    try {
      await callback(); // Assuming the callback might be async
    } finally {
      // Restore the original console.log behavior
      logSpy.mockRestore();

      // Print the custom description and then the captured logs
      // console.log(style.green, ' ☞ ', style.reset, description);
      capturedLogs.forEach(logArgs => {
        console.log('   ↳ ', ...logArgs);
      });
    }
  });
};

const logCategory = (description, callback) => {
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),description,style.reset); 
  describe(description, callback);
};

const logDescribe = (description, callback) => {
  console.log('\n', style.orange,'  ▷',style.reset,style.color(39),description,style.reset); 
  describe(description, callback);
};

describe(`${style.bold}binarySearch${style.reset}`, () => {
  console.log(`
${style.h1('# Binary Search')}
Find an element by comparing the element to the middle element of a sorted
array and--if not found--splitting, discarding sub-arrays until it is.

${style.h2('## Time Complexity')}
Ο(log N)  Ω(1)  Θ(log N)  

> Because we are cutting the list in half at each interval, 
  the time complexity is \`O(log N)\`.  
> A sorted list of \`64\` elements will take at most \`log2(64) = 6\` comparisons.
> \`Ω(1)\` because the target may be the middle element of the array

${style.h2('## Notes')}
- For binary search to know which half of the data to discard after each split,  
    the data source must always be sorted.

${style.h2('## Steps')}
1. Check the middle value of the dataset.
- If this value matches our target we can return the index

2. If the middle value is less than our target
- Start at step 1 using the right half of the list.

3. If the middle value is greater than our target
- Start at step 1 using the left half of the list.
`);

  // BINARY SEARCH (ITERATIVE)
  describe(`${style.underline}${style.italic}(Iterative)\n${style.reset}`, () => {

    logItDescription('should find index of target AT END of a 4 element searchable', () => {
      const searchable = [2, 4, 6, 8];
      const targetVal = 8;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchIterative(searchable, targetVal);
      console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target AT BEGINNING of a 4 element searchable', () => {
      const searchable = [2, 4, 6, 8];
      const targetVal = 2;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchIterative(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should NOT find index of target in a 4 element searchable', () => {
      const searchable = [2, 4, 6, 8];
      const targetVal = 0;
      const expectedIdx = null;
      const receivedIdx = binarySearchIterative(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target AT END of a 3 element searchable', () => {
      const searchable = [2, 4, 6];
      const targetVal = 6;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target AT BEGINNING of a 3 element searchable', () => {
      const searchable = [2, 4, 6];
      const targetVal = 2;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target IN MIDDLE of a 3 element searchable', () => {
      const searchable = [2, 4, 6];
      const targetVal = 4;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target AT END of a 2 element searchable', () => {
      const searchable = [2, 4];
      const targetVal = 4;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target AT BEGINNING of a 2 element searchable', () => {
      const searchable = [2, 4];
      const targetVal = 2;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target in a 1 element searchable', () => {
      const searchable = [2];
      const targetVal = 2;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should NOT find index of target in a 1 element searchable', () => {
      const searchable = [2];
      const targetVal = 7;
      const expectedIdx = null;
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

  });

  // BINARY SEARCH (RECURSIVE)
  describe(`${style.underline}${style.italic}(Recursive)\n${style.reset}`, () => {

    logItDescription('should find index of target AT END of a 4 element searchable', () => {
      const searchable = [2, 4, 6, 8];
      const targetVal = 8;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchIterative(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target AT BEGINNING of a 4 element searchable', () => {
      const searchable = [2, 4, 6, 8];
      const targetVal = 2;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchIterative(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should NOT find index of target in a 4 element searchable', () => {
      const searchable = [2, 4, 6, 8];
      const targetVal = 0;
      const expectedIdx = null;
      const receivedIdx = binarySearchIterative(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target AT END of a 3 element searchable', () => {
      const searchable = [2, 4, 6];
      const targetVal = 6;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target AT BEGINNING of a 3 element searchable', () => {
      const searchable = [2, 4, 6];
      const targetVal = 2;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target IN MIDDLE of a 3 element searchable', () => {
      const searchable = [2, 4, 6];
      const targetVal = 4;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target AT END of a 2 element searchable', () => {
      const searchable = [2, 4];
      const targetVal = 4;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target AT BEGINNING of a 2 element searchable', () => {
      const searchable = [2, 4];
      const targetVal = 2;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should find index of target in a 1 element searchable', () => {
      const searchable = [2];
      const targetVal = 2;
      const expectedIdx = searchable.indexOf(targetVal);
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

    logItDescription('should NOT find index of target in a 1 element searchable', () => {
      const searchable = [2];
      const targetVal = 7;
      const expectedIdx = null;
      const receivedIdx = binarySearchRecursive(searchable, targetVal);
      // console.log('expectedIdx', expectedIdx, 'receivedIdx', receivedIdx);
      assert.equal(receivedIdx, expectedIdx);
    });

  });
});



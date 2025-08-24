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

// beforeEach(() => {
//   global.console = console;
//   console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset); 
//   // console.log(expect.getState());
// });

// afterEach(() => {
//   global.console = jestConsole;
//   console.log(style.color(99), style.hr.double, style.reset);
// });

const logItDescription = (description, callback) => {
  console.log(style.green, '   ☞ ', style.reset,description);
  it(description, callback);
};

const logCategory = (description, callback) => {
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),description,style.reset); 
  describe(description, callback);
};

const logDescribe = (description, callback) => {
  console.log('\n', style.orange,'  ▷',style.reset,style.color(39),description,style.reset); 
  describe(description, callback);
};

logCategory(`${style.bold}binarySearch${style.reset}`, () => {

  // BINARY SEARCH (ITERATIVE)
  logDescribe(`${style.underline}${style.italic}binarySearch (Iterative)\n${style.reset}`, () => {

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

  // BINARY SEARCH (RECURSIVE)
  logDescribe(`${style.underline}${style.italic}binarySearch (Recursive)\n${style.reset}`, () => {

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



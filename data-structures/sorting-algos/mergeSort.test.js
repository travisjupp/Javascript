// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '../../styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// util.inspect.defaultOptions.depth = 1; // show truncated objects
// util.inspect.defaultOptions.breakLength = 30;
util.inspect.defaultOptions.compact = true; // dont break objects to new lines
// util.inspect.defaultOptions.compact = false; // break objects to new lines

// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
import mergeSort from './mergeSort';

beforeEach(() => {
  global.console = console;
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
  global.console = jestConsole;
  console.log(style.color(99), style.hr.double, style.reset);
});

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

describe('mergeSort', () => {

console.log(`
${style.h1('# Merge Sort')}
Breaks a list into smaller parts to simplify sorting

${style.h2('## Time Complexity')}
Ο(N * log N)  Ω(N * log N)  Θ(N * log N)  

${style.h2('## Notes')}
- created in 1945 by John von Neumann
- average, best, and worst case complexity are equal due to
  the same steps being taken regardless of the input (order and length).
- _divide-and-conquer alorithm_
- does not mutate original list
- base case of recursive splitting function is when \`arr.length = 1\`

${style.h2('## Steps')}
The \`log N\` part:
- recursively split input list down to single-element lists

The \`N\` part:
- merge and sort the single-element lists until the originial input size is acheived
    `);

  logItDescription('should sort incrementally', () => {
    console.log(mergeSort([5, 10, -3, -3, 7, 9]));
    expect(mergeSort([5, 10, -3, -3, 7, 9]))
      .toStrictEqual([-3, -3, 5, 7, 9, 10])
  });

});



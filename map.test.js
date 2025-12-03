// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from './styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// util.inspect.defaultOptions.compact = true; // dont break objects to new lines
// util.inspect.defaultOptions.compact = false; // break objects to new lines

// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;

beforeEach(() => {
  global.console = console;
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
  global.console = jestConsole;
  console.log(style.color(99), style.hr.double, style.reset);
});

const logItDescription = (description, callback) => {
  console.log(style.green, '   ☞ ', style.reset,description);
  it(description, callback);
};

const logItDescriptionLogs = (description, callback) => {
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

import {inventory, restock, sufficient} from './map.js';

describe('Map', () => {
  it('should...', () => {
  });
});

describe('Map.groupBy()', () => {

  it('should describe the grouping process', () => {

    const map = Map.groupBy(inventory, ({ quantity }) =>
      quantity < 10 ? restock : sufficient,
    );
    console.log(style.h1('The Map.groupBy() static method groups the elements of a given iterable using the values returned by a provided callback function. The final returned Map uses the unique values from the test function as keys, which can be used to get the array of elements in each group\n'));

    console.log(style.h2('Given an iterable (inventory):\n\n'),
      inventory, '\n');

    console.log(style.h2('..And grouping values (restock, sufficient):\n\n'),  restock, '\n', sufficient, '\n');

    console.log(style.h2(
      `..Using \`Map.groupBy()\` with a cb that conditionally returns
the grouping values for each inventory item: 
${style.green}
  Map.groupBy(inventory, ({ quantity }) =>
    quantity < 10 ? restock : sufficient,
  );
${style.reset}`), );

    console.log(style.h2(
    `..Will give use the result (Map):\n`));
    console.log(map);
    
  });

  it('should filter inventory using `Map.groupBy()`', () => {

    const result = Map.groupBy(inventory, ({ quantity }) =>
      quantity < 10 ? restock : sufficient,
    );
    console.log('result', result);
    expect(result.get(restock)).toBeTruthy();
  });

  it('should filter inventory using `Map.groupBy()`', () => {

    const result = Map.groupBy([[1,3],[2,3]], ([a,]) => {
      return a === 1 ? a : 2;
    });
    console.log('result', result);
    expect(result.get(1)).toBeTruthy();
  });

});



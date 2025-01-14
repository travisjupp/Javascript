// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
beforeEach(() => { global.console = console; });
afterEach(() => { global.console = jestConsole; });
import {inventory, restock, sufficient} from './map.js';

describe('Map', () => {
    it('should filter inventory using `Map.groupBy()`', () => {
        console.log(expect.getState().currentTestName);

        const result = Map.groupBy(inventory, ({ quantity }) =>
            quantity < 10 ? restock : sufficient,
        );
        console.log(result.get(restock));
        console.log('result', result);
        // [{ name: "bananas", type: "fruit", quantity: 5 }]
        expect(result.get(restock)).toBeTruthy();
    });

    it('should filter inventory using `Map.groupBy()`', () => {
        console.log(expect.getState().currentTestName);

        const result = Map.groupBy([[1,3],[2,3]], ([a,]) => {
            return a === 1 ? a : 2;
        });
        console.log('result', result);
        expect(result.get(1)).toBeTruthy();
    });

});


// https://leetcode.com/problems/find-the-town-judge/
// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '../styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
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

import {findJudge} from './findJudge.js';

describe('findJudge', () => {
    it('should find judge among 2 people', () => {
        console.log(findJudge(2,[[1,2]]));
        // console.log(expect.getState());
    });

    it('should find judge among 3 people', () => {
        console.log(findJudge(3,[[1,3],[2,3]]));
    });

    it('should not find judge among 3 people', () => {
        console.log(findJudge(3,[[1,3],[2,3],[3,1]]));
    });

    it('should not find judge among 3 people', () => {
        console.log(findJudge(3,[[1,3],[2,3],[3,1]]));
    });

    it('should find judge among 4 people', () => {
        console.log(findJudge(4,[[1,3],[1,4],[2,3],[2,4],[4,3]]));
    });
});


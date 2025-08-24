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

const logCategory = (description, callback) => {
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),description,style.reset); 
  describe(description, callback);
};

const logDescribe = (description, callback) => {
  console.log('\n', style.orange,'  ▷',style.reset,style.color(39),description,style.reset); 
  describe(description, callback);
};


describe('styles', () => {
  it('should display style test', () => {
    style.test();
  });

  it('should display style help', () => {
    style.help();
  });

});



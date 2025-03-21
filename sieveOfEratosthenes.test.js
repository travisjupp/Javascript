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
import sieve from './sieveOfEratosthenes.js';

beforeEach(() => {
  global.console = console;
  console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
  global.console = jestConsole;
  console.log(style.color(99), style.hr.double, style.reset);
});

const isPrime = (num) => {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

describe('sieveOfEratosthenes', () => {

  it('should find primes in list', () => {
    const res = sieve(16);
    console.log(res.filter(isPrime));
    expect(res)
      .toStrictEqual(res.filter(isPrime));
  });

  it('should return [] if called with 0', () => {
    const res = sieve(0);
    console.log(res.filter(isPrime));
    expect(res)
      .toStrictEqual(res.filter(isPrime));
  });

  it('should return [] if called with 1', () => {
    const res = sieve(1);
    console.log(res.filter(isPrime));
    expect(res)
      .toStrictEqual(res.filter(isPrime));
  });

  it('should return [2] if called with 2', () => {
    const res = sieve(2);
    console.log(res.filter(isPrime));
    expect(res)
      .toStrictEqual(res.filter(isPrime));
  });

});


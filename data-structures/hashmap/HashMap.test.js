import assert from 'node:assert';
// import {describe, it} from 'node:test';
import HashMap from './HashMap.js';
import {jest} from '@jest/globals';
import LinkedList from '../linked-lists/singly-linked-list/LinkedList.js';
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
beforeEach(() => { global.console = console; });
afterEach(() => { global.console = jestConsole; });

// test HashMap result
describe.only('HashMap', () => {

  it.only('should create a new HashMap', () => {
    const hashmap = new HashMap();
    assert.ok(hashmap instanceof HashMap);
  });

  it.only('should create a 3 item HashMap', () => {
    const threeItemHashmap = new HashMap(3);
    assert.equal(threeItemHashmap.hashmap.length, 3);
  });

  it.only('should have 3 linked lists', () => {
    const threeItemHashmap = new HashMap(3);
    for (const el of threeItemHashmap.hashmap) {
      assert.ok(el instanceof LinkedList);
    }
  });

  it.only('should have 3 linked lists with null', () => {
    const threeItemHashmap = new HashMap(3);
    for (const el of threeItemHashmap.hashmap) {
      assert.equal(el.head, null);
    }
  });

  it.only('should create a hash key', () => {
    const threeItemHashmap = new HashMap(3);
    assert.equal(threeItemHashmap.hash('someKey'), 2);
  });

  it.only('should assign an item to the HashMap', () => {
    const threeItemHashmap = new HashMap(3);
    threeItemHashmap.assign('someKey', 'someVal');
    const {key, value} = threeItemHashmap.hashmap[2].head.data;
    assert.equal(key, 'someKey');
    assert.equal(value, 'someVal');
  });

  it.only('should avoid collisions with separate chaining', () => {
    const threeItemHashmap = new HashMap(3);
    // hashes match?
    assert.ok(threeItemHashmap.hash('someKey') ===
      threeItemHashmap.hash('someNewKey'));
    threeItemHashmap.assign('someKey', 'someVal');
    threeItemHashmap.assign('someNewKey', 'someNewVal');
    const linkedList = threeItemHashmap.hashmap[2];
    // next node is 'someNewKey'?
    assert.equal(linkedList.head.next.data.key, 'someNewKey');
  });


  it.only('should update values for items with same key', () => {
    const threeItemHashmap = new HashMap(3);
    // check first val
    threeItemHashmap.assign('someKey', 'someVal');
    const linkedList = threeItemHashmap.hashmap[2];
    assert.equal(linkedList.head.data.value, 'someVal');
    // check updated val
    threeItemHashmap.assign('someKey', 'someUpdatedVal');
    assert.equal(linkedList.head.data.value, 'someUpdatedVal');
  });

  it.only('should retrieve a value from the HashMap', () => {
    const threeItemHashmap = new HashMap(3);
    threeItemHashmap.assign('someKey', 'someVal');
    const {key, value} = threeItemHashmap.hashmap[2].head.data;
    assert.equal(threeItemHashmap.retrieve(key), value);
  });

});


const assert = require('node:assert/strict');
const {describe, it} = require('node:test');
const HashMap = require('./HashMap');
const LinkedList = require('../linked-lists/singly-linked-list/LinkedList');

// test HashMap result
describe.only('HashMap', () => {

  it.only('should create a new HashMap', () => {
    const hashmap = new HashMap();
    assert.ok(hashmap instanceof HashMap);
  });

  it.only('should create a 3 item HashMap', () => {
    const threeItemHashmap = new HashMap(3);
    assert.ok(threeItemHashmap.hashmap.length === 3);
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
      assert.ok(el.head === null);
    }
  });

  it.only('should create a hash key', () => {
    const threeItemHashmap = new HashMap(3);
    assert.ok(threeItemHashmap.hash('someKey') === 2);
  });

  it.only('should assign an item to the HashMap', () => {
    const threeItemHashmap = new HashMap(3);
    threeItemHashmap.assign('someKey', 'someVal');
    const {key, value} = threeItemHashmap.hashmap[2].head.data;
    assert.ok(key === 'someKey' && value === 'someVal');
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
    assert.ok(linkedList.head.next.data.key === 'someNewKey');
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
    assert.ok(threeItemHashmap.retrieve(key) === value);
  });

});


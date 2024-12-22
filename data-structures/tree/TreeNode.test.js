const assert = require('node:assert');
const {describe, it} = require('node:test');
const TreeNode = require('./TreeNode.js');

// test TreeNode
describe.only('TreeNode', () => {
  it.only('should create a tree node', () => {
    const tree = new TreeNode(1);
    assert.ok(tree);
  });
});

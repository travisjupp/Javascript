import {describe, it} from 'node:test';
import assert from 'node:assert';
import TreeNode from './TreeNode.js';

// test TreeNode
describe.only('TreeNode', () => {
  it.only('should create a tree node', () => {
    const tree = new TreeNode(1);
    assert.ok(tree);
  });
});

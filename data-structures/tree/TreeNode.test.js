import {describe, it} from 'node:test';
import assert from 'node:assert';
import TreeNode from './TreeNode.js';

// test TreeNode
describe.only('TreeNode', () => {

  it.only('should create a tree node', () => {
    const tree = new TreeNode(1);
    assert.ok(tree);
  });

  it('should add a child', () => {
    const tree = new TreeNode(1);
    tree.addChild(15);
    const child = new TreeNode(15);
    assert.deepStrictEqual(tree.children[0], child);
  });

  it('should add a child (node)', () => {
    const tree = new TreeNode(1);
    const node = new TreeNode(15);
    tree.addChild(node);
    const child = new TreeNode(15);
    assert.deepStrictEqual(tree.children[0], child);
  });

  it('should remove a child', () => {
    const tree = new TreeNode(1);
    tree.addChild(15);
    tree.removeChild(15);
    assert.ok(!tree.children.length);
  });
});


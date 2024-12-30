// import {describe, it} from 'node:test';
import assert from 'node:assert';
import TreeNode from './TreeNode.js';
import {jest} from '@jest/globals';
// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;
beforeEach(() => { global.console = console; });
afterEach(() => { global.console = jestConsole; });

const randNum = () => {
  return Math.floor(Math.random() * 20);
}

const buildTree = (arg) => {
  const tree = new TreeNode(1);

  for (let i = 0; i < arg; i++) {
    tree.addChild('c'+ i); 
    tree.children[i].addChild('gc'+ i);
    tree.children[i].children[0].addChild('ggc' + i);
  }
  return tree;
}


// test TreeNode
describe('TreeNode', () => {

  it('should create a tree node', () => {
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

  it('should remove a child (node)', () => {
    const tree = new TreeNode(1);
    const node = new TreeNode(15);
    tree.addChild(node);
    tree.removeChild(node);
    assert.ok(!tree.children.length);
  });

  it('should traverse the tree by depth', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const tree = buildTree(2);
    tree.depthFirstTraversal();
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "c0");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "gc0");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, "ggc0");
    expect(consoleSpy).toHaveBeenNthCalledWith(5, "c1");
    expect(consoleSpy).toHaveBeenNthCalledWith(6, "gc1");
    expect(consoleSpy).toHaveBeenNthCalledWith(7, "ggc1");
  });
});


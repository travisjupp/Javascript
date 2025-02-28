// import {describe, it} from 'node:test';
import assert from 'node:assert';
import TreeNode from './TreeNode.js';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from '../../styles.js';
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

const randNum = () => {
  return Math.floor(Math.random() * 20);
}

const buildTree = (size) => {
  const tree = new TreeNode(1);

  for (let i = 0; i < size; i++) {
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
    console.log(tree);
    assert.ok(tree);
  });

  it('should add a child', () => {
    const tree = new TreeNode(1);
    console.log(tree);
    tree.addChild(15);
    console.log(tree);
    const child = new TreeNode(15);
    assert.deepStrictEqual(tree.children[0], child);
  });

  it('should add a child (node)', () => {
    const tree = new TreeNode(1);
    const node = new TreeNode(15);
    console.log(tree);
    tree.addChild(node);
    console.log(tree);
    const child = new TreeNode(15);
    assert.deepStrictEqual(tree.children[0], child);
  });

  it('should remove a child', () => {
    const tree = new TreeNode(1);
    tree.addChild(15);
    console.log(tree);
    tree.removeChild(15);
    console.log(tree);
    assert.ok(!tree.children.length);
  });

  it('should remove a child (node)', () => {
    const tree = new TreeNode(1);
    const node = new TreeNode(15);
    tree.addChild(node);
    console.log(tree);
    tree.removeChild(node);
    console.log(tree);
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



class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  removeChild(childToRemove) {
    const length = this.children.length;
    this.children = this.children.filter(child => {
      // console.log('child', child);
      if (child instanceof TreeNode) {
        return childToRemove !== child ? true : false;
      }
      if (!(child instanceof TreeNode)) {
        return childToRemove !== child.data ? true : false;
      }
    });
    if (length === this.children.length) {
      this.children.forEach(child => {
        child.removeChild(childToRemove);
      });
    } 
  }

  print(level = 0) {
    let result = '';
    for (let i = 0; i < level; i++) {
      result += '-- ';
    }
    console.log(`${result}${this.data}`);
    this.children.forEach(child => child.print(level + 1));
  }

  depthFirstTraversal() {
    console.log(this.data);
    this.children.forEach(child => child.depthFirstTraversal());
  }

  breadthFirstTraversal() {
    let queue = [ this ];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);
      queue = queue.concat(current.children);
    }
  }
}

const tree = new TreeNode(1);
tree.addChild(15);
const node = new TreeNode(30);
tree.addChild(node);
console.log('tree', tree, '\n\n\n');
tree.removeChild(15);
console.log('tree', tree, '\n\n\n');
tree.removeChild(node);
console.log('tree', tree, '\n\n\n');
tree.print();
tree.depthFirstTraversal();
tree.breadthFirstTraversal();
// tree.removeChild('x');

module.exports = TreeNode;


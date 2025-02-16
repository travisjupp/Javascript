// Convert Binary Search Tree to Array
// usage: uses partial function
// const convertBST = BSTToArray(binarySearchTree);
// convertBST(binarySearchTree);
import {TreeNode} from './l33t/sortedArrayToBST.js';
function BSTToArray(bt) {
  // store first val in a partial
  const btAsArray = [bt.val]; 
  // recursively walk binary tree
  return function walkBST(bt) {
    if (bt.left) {
      // console.log(bt.left.val);
      btAsArray.push(bt.left.val);
    } else {
      btAsArray.push(null);
      // console.log('lnull');
    }
    if (bt.right) {
      // console.log(bt.right.val);
      btAsArray.push(bt.right.val);
    } else {
      btAsArray.push(null);
      // console.log('rnull');
    }
    if (bt.left instanceof TreeNode &&
      (bt.left.left || bt.left.right)) {
      walkBST(bt.left);
    }
    if (bt.right instanceof TreeNode &&
      (bt.right.left || bt.right.right)) {
      walkBST(bt.right);
    }
    // return trimmed array
    return btAsArray.slice(0,-1);
  }
}

export default BSTToArray;


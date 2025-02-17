// Convert Binary Search Tree to Array
import {TreeNode} from './l33t/sortedArrayToBST.js';

const btAsArray = [];
const temp = []; // store root node

function BSTToArray(bt, l=1) {
  if (l) btAsArray.length=0; // clear arr on first run only
  bt.left ? btAsArray.push(bt.left.val) : btAsArray.push(null);
  bt.right ? btAsArray.push(bt.right.val) : btAsArray.push(null);
  if (bt.left instanceof TreeNode &&
    (bt.left.left || bt.left.right)) {
    BSTToArray(bt.left, 0);
  }
  if (bt.right instanceof TreeNode &&
    (bt.right.left || bt.right.right)) {
    BSTToArray(bt.right, 0);
  }
  temp[0] = bt.val; // overwrite root nodes
  return btAsArray[btAsArray.length - 1] === null ?
    temp.concat(btAsArray).slice(0, -1)
    : temp.concat(btAsArray);
}

export default BSTToArray;


// 108. Convert Sorted Array to Binary Search Tree
// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {
    const mid = Math.floor(nums.length/2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid+1, nums.length);
    // if array empty return null
    if (!nums.length) return null;
    // find middle, create node with value
    return new TreeNode(
        // create node from middle element
        nums[mid],
        // recursively construct left subtree
        sortedArrayToBST(left),
        // recursively construct right subtree
        sortedArrayToBST(right)
    );
};

export {TreeNode, sortedArrayToBST};


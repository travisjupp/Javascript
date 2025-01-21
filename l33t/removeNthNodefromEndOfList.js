// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// 
//  
// 
// Example 1:
// 
// 
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:
// 
// Input: head = [1], n = 1
// Output: []
// Example 3:
// 
// Input: head = [1,2], n = 1
// Output: [1]
//  
// 
// Constraints:
// 
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
//  
// 
// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let nodeToRemovePrev = null;
  let nodeToRemove = head;
  let current = head;
  let count = 0;
  let tail = current;

  while (current) {
    if (count === n) nodeToRemovePrev = head;
    if (count >= n && current.next) {
      nodeToRemovePrev = nodeToRemovePrev.next;
    }
    if (count >= n) {
      nodeToRemove = nodeToRemove.next;
    }
    if (current.next) tail = current.next;
    current = current.next;
    count++;
  }

  // ntr is head only (not tail)
  if (nodeToRemove === head && head !== tail) {
    console.log('ntr is head');
    head = nodeToRemove.next
  };

  // ntr is tail only (not head)
  if (nodeToRemove === tail && head !== tail) {
    console.log('ntr is tail');
    nodeToRemovePrev.next = null;
  }

  // ntr is between head and tail
  if (nodeToRemovePrev && nodeToRemove.next) {
    console.log('ntr between head/tail');
    nodeToRemovePrev.next = nodeToRemove.next;
  }

  // one item
  if (nodeToRemove === head && nodeToRemove === tail) {
    console.log('ntr is only item');
    head = null;
  };

  return head;
};


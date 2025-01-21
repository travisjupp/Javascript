// https://leetcode.com/problems/last-stone-weight/
// You are given an array of integers stones where stones[i] is the weight of the ith stone.
//
// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
//
// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.
//
// Return the weight of the last remaining stone. If there are no stones left, return 0.
//
//
//
// Example 1:
//
// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
// Example 2:
//
// Input: stones = [1]
// Output: 1
//
//
// Constraints:
//
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */

 class MaxHeap {
  constructor() {
    this.heap = [ null ];
    this.size = 0;
  }
  popMax() {
    if (this.size === 0) {
      return null
    }
    const max = this.heap[1];
    this.swap(1, this.size);
    this.heap.pop();
    this.size--;
    this.heapify();
    return max;
  }
  add(value) {
    this.heap.push(value);
    this.size++;
    this.bubbleUp();
  }
  bubbleUp() {
    let current = this.size;
    while (current > 1 &&
      this.heap[getParent(current)] < this.heap[current]) {
      this.swap(current, getParent(current));
      current = getParent(current);
    }
  }
  heapify() {
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);
    while (this.canSwap(current, leftChild, rightChild)) {
      if (this.exists(leftChild) && this.exists(rightChild)) {
        if (this.heap[leftChild] > this.heap[rightChild]) {
          this.swap(current, leftChild);
          current = leftChild;
        } else {
          this.swap(current, rightChild);
          current = rightChild;
        }
      } else {
        this.swap(current, leftChild);
        current = leftChild;
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
  }
  exists(index) {
    return index <= this.size;
  }
  canSwap(current, leftChild, rightChild) {
    return (
      this.exists(leftChild) &&
      this.heap[current] < this.heap[leftChild] ||
      this.exists(rightChild) &&
      this.heap[current] < this.heap[rightChild]
    );
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

var lastStoneWeight = function (stones) {
    const mh = new MaxHeap();
    // build maxheap
    for (let i = 0; i < stones.length; i++) {
        mh.add(stones[i]);
    }
    while (mh.size > 1) {
        let y = mh.popMax();
        let x = mh.popMax();
        if (x !== y) {
            mh.add(y - x);
        }
    }
    return mh.popMax() || 0;
}


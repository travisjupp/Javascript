
// BINARY SEARCH (ITERATIVE)
export const binarySearchIterative = (arr, targetVal) => {
  console.log('searchable', arr, ',','targetVal', targetVal);
  let leftPointer = 0;
  let rightPointer = arr.length;
  
  while (rightPointer > leftPointer) {
    const midIdx = Math.floor((leftPointer + rightPointer) / 2);
    const midVal = arr[midIdx];
    console.log('setting leftPointer', leftPointer, 'rightPointer', rightPointer, 'midIdx', midIdx, '(val', midVal, ')');
    console.log('searching arr', arr.slice(leftPointer,rightPointer), 'with midVal', midVal, 'for targetVal', targetVal);
  
    if (midVal === targetVal) {
      console.log('midVal === targetVal', midVal === targetVal);
      return midIdx;
    } else if (midVal < targetVal) {
      console.log('midVal < targetVal .. moving leftPointer to', midIdx + 1);
      leftPointer = midIdx + 1;
    } else {
      console.log('midVal > targetVal .. moving rightPointer to', midIdx);
      rightPointer = midIdx;
    }
  }
  console.log('targetVal not found');
  return null;
};

// BINARY SEARCH (RECURSIVE)
export const binarySearchRecursive = (arr, targetVal, leftPointer = 0, rightPointer = arr.length) => {
  console.log('searchable', arr, ',','targetVal', targetVal);
  const midIdx = Math.floor((leftPointer + rightPointer) / 2);
  const midVal = arr[midIdx];
  console.log('setting leftPointer', leftPointer, 'rightPointer', rightPointer, 'midIdx', midIdx, '(val', midVal, ')');
  console.log('searching arr', arr.slice(leftPointer,rightPointer), 'with midVal', midVal, 'for targetVal', targetVal);
  if (arr.length > 0) {
    if (midVal === targetVal) {
      console.log('midVal === targetVal', midVal === targetVal);
      return midIdx;
    } else if (midVal < targetVal) {
      console.log('midVal < targetVal .. moving leftPointer to', midIdx + 1);
      leftPointer = midIdx + 1;
      console.log('calling binarySearchRecursive(rarr, targetVal, leftPointer)');
      return binarySearchRecursive(arr, targetVal, leftPointer, rightPointer);
    } else if (midVal > targetVal) {
      rightPointer = midIdx;
      console.log('midVal > targetVal .. moving rightPointer to', midIdx);
      rightPointer = midIdx;
      console.log('calling binarySearchRecursive(larr, targetVal, leftPointer, rightPointer)');
      return binarySearchRecursive(arr, targetVal, leftPointer, rightPointer);
    }
  }
  console.log('targetVal not found');
  return null;
}



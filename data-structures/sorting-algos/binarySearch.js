
// BINARY SEARCH (ITERATIVE)
export const binarySearchIterative = (arr, target) => {
  let left = 0;
  let right = arr.length;
  
  while (right > left) {
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = arr[indexToCheck];
  
    if (checking === target) {
      return indexToCheck;
    } else if (checking < target) {
      left = indexToCheck + 1;
    } else {
      right = indexToCheck;
    }
  }
  return null;
};

// BINARY SEARCH (RECURSIVE)
export const binarySearchRecursive = (arr, target, left = 0, right = arr.length) => {
  const indexToCheck = Math.floor((left + right) / 2);
  const valueToCheck = arr[indexToCheck];
  // console.log('arr', arr, 'valueToCheck', valueToCheck, 'target', target);
  if (arr.length > 0) {
    if (valueToCheck === target) {
      // console.log('valueToCheck === target', valueToCheck === target, 'indexToCheck', indexToCheck, 'valueToCheck', valueToCheck);
      return indexToCheck;
    } else if (valueToCheck < target) {
      left = indexToCheck + 1;
      // console.log('calling binarySearchRecursive(rarr, target, left)');
      return binarySearchRecursive(arr, target, left, right);
    } else if (valueToCheck > target) {
      right = indexToCheck;
      // console.log('calling binarySearchRecursive(larr, target, left, right)');
      return binarySearchRecursive(arr, target, left, right);
    }
  }
  return null;
}



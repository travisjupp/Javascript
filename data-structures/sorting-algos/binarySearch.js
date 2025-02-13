// binarySearch (iterative)
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;
  
  while (right > left) {
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = arr[indexToCheck];
    console.log(`indexToCheck equals: ${indexToCheck}`)
  
    if (checking === target) {
      return indexToCheck;
    } else if (checking < target) {
      left = indexToCheck + 1;
    } else {
      right = indexToCheck;
    }
     
  }
  return null;
}

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 8;

const targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);

export default binarySearch;


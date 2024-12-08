// Measure the performance of an algorithm

const { performance } = require('perf_hooks');

function generateArray(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

const smallArray = generateArray(100);
const mediumArray = generateArray(1000);
const largeArray = generateArray(10000);

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}


function measureTime(func, arr, target) {
  const start = performance.now();
  func(arr, target);
  const end = performance.now();
  return end - start;
}

const times = {
  small: measureTime(linearSearch, smallArray, 50),
  medium: measureTime(linearSearch, mediumArray, 50),
  large: measureTime(linearSearch, largeArray, 50),
};

console.log(times); 

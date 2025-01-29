const bubbleSort = input => {
  let swapping = true;

  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length-1; i++) {
      if (input[i] > input[i+1]) {
        [input[i], input[i+1]] = [input[i+1], input[i]];
        swapping = true;
      }
    }
  }

  return input;
}

console.log(bubbleSort([4,3,2,1]));
console.log(bubbleSort([4,8,2,21]));
export default bubbleSort;


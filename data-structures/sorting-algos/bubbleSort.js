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

export default bubbleSort;


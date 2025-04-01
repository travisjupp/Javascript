const dynamicKnapsack = function(weightCap, weights, values) {
  const numItem = weights.length;
  const matrix = new Array(numItem);

  for (let index = 0; index <= numItem; index++) {
    matrix[index] = new Array(weightCap + 1);
    for (let weight = 0; weight <= weightCap; weight++) {
      // Write your code here:
      if (index === 0 || weight === 0) {
        matrix[index][weight] = 0;
      } else if (matrix[index - 1][weight] <= weight) {
        
      }

    }
  }
  return matrix[numItem][weightCap]; 
};

export default dynamicKnapsack;


const dynamicKnapsack = function(weightCap, weights, values) {
  const numItem = weights.length;
  const matrix = new Array(numItem);

  for (let index = 0; index <= numItem; index++) {
    matrix[index] = new Array(weightCap + 1);
    for (let weight = 0; weight <= weightCap; weight++) {
      if (index === 0 || weight === 0) {
        matrix[index][weight] = 0;
        // else if the weight of element at index - 1 <= weight:
      } else if (weights[index-1] <= weight) {
        // find possible values of including and excluding the item
        const prevItemsValue = matrix[index - 1][weight];
        const currItemsWeight = weights[index - 1];
        const currItemsValue = values[index - 1];
        const availWeight = weight - currItemsWeight;
        const prevItems = matrix
          .map((item, i) => {
            // return prev item values without overflowing knapsack
            return item[availWeight]
              && i !== index // Exclude current items row
              ? item[availWeight]
              : 0
          });

        console.log('ROW:', index, 'COL:', weight, 'currItemsValue:',
          currItemsValue, '\n', 'prevItems (avail):', prevItems, 'MAX:',
          prevItems.reduce((a, b) => {return Math.max(a, b)}, -Infinity),
          '\n',);

        // set element at [index][weight] to max of those values
        matrix[index][weight] = Math.max(
          prevItemsValue,
          currItemsValue,
          prevItems.reduce(
            (a, b) => {
              return Math.max(a, b)
            }, -Infinity) + currItemsValue
        )

      } else { // item weight > weight
        // set element at [index][weight] to element one above
        matrix[index][weight] = matrix[index-1][weight];
      }
    }
  }
  console.log('=>', matrix[numItem][weightCap]);
  return matrix[numItem][weightCap];
};

export default dynamicKnapsack;



const recursiveKnapsack = (weightCap, weights, values, i) => {
  console.log('i', i);
  if (weightCap === 0 || i === 0) {
    return 0;
  } else if (weights[i - 1] > weightCap) {
    return recursiveKnapsack(weightCap, weights, values, i - 1);
  } else {
    const includeItem = values[i - 1] + 
      recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1);
    const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1);
    return Math.max(includeItem, excludeItem);
  }
}

export default recursiveKnapsack;


const recursiveKnapsack = (weightCap, weights, values, i) => {
  console.log('i:', i, 'weight:', weights[i-1], 'val:', values[i-1], 'wcap:', weightCap);
  if (weightCap === 0 || i === 0) {
    console.log(weightCap === 0 ? 'wc is 0' : '---');
    console.log(i === 0 ? 'i is 0' : '---');
    return 0;
  } else if (weights[i - 1] > weightCap) {
    console.log('weights[', i-1, '> wcap');
    return recursiveKnapsack(weightCap, weights, values, i - 1);
  } else {
    const includeItem = values[i - 1] + 
      recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1);
    console.log('inc item:', includeItem);
    // what is weightCap for exludeItems recursiveKnapsack() call?
    console.log('post inc item-(excludeItem firing with)', 'wcap:', weightCap, 'i:', i);
    const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1);
    console.log('exc item:', excludeItem);
    console.log('=>', Math.max(includeItem, excludeItem));
    return Math.max(includeItem, excludeItem);
  }
}

export default recursiveKnapsack;


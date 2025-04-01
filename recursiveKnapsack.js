
const recursiveKnapsack = (weightCap, weights, values, i) => {
  // console.log('i:', i, 'weight:', weights[i-1], 'val:', values[i-1], 'wcap:', weightCap);

  if (weightCap === 0 || i === 0) {

    console.log(weightCap === 0 ? `wc is 0, => 0 for: ${values[i - 1]}` : '---');
    console.log(i === 0 ? `i is 0, => 0 for: ${values[i - 1]}` : '---');

    return 0;

  } else if (weights[i - 1] > weightCap) {

    console.log('weights[', i-1, '> wcap');
    console.log('skipping', values[i - 1]);

    return recursiveKnapsack(weightCap, weights, values, i - 1);

  } else {

    console.log('includeItem called with wcap:', weightCap - weights[i - 1], 'i:', i-1, 'val:', values[i-2]);
    console.log('adding', values[i-1], 'to includeItem');
    const includeItem = values[i - 1] + 
      recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1);

    // console.log('include item (before excludeItem calls):', includeItem);
    console.log('excludeItem called with wcap:', weightCap, 'i:', i-1, 'val:', values[i-2]);

    const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1);

    console.log('exclude item (after excludeItem calls):', excludeItem);
    console.log('include item (after excludeItem calls):', includeItem);
    console.log('=>', Math.max(includeItem, excludeItem));

    return Math.max(includeItem, excludeItem);
  }
}

export default recursiveKnapsack;


const explicitSortWithComparator = (inputArray, order) => {

  const explicitComparator = (a, b) => {
    let indexA = order.length;
    let indexB = order.length;

    if (order.includes(a)) {
      indexA = order.indexOf(a);
    }
    if (order.includes(b)) {
      indexB = order.indexOf(b);
    }

    function test() {
      return indexA - indexB >0 ? b+a
        : indexA - indexB === 0 ? b+a
        : a+b;
    }
    console.log(`A:${a} indexA:${indexA} ---\
    B:${b} indexB:${indexB} ---\
    indexA - indexB = ${indexA - indexB} ---\
    ${indexA - indexB > 0 ? 'b before a' : indexA - indexB === 0 ? 'no swap' : 'a before b'}`, `input: ${test()}`);
    return indexA - indexB; 
  }

  return inputArray.sort(explicitComparator).slice();
}

export default explicitSortWithComparator;


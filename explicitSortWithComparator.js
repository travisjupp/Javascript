const explicitSortWithComparator = (inputArray, order) => {

  const explicitComparator = (A, B) => {
    let indexA = order.length;
    let indexB = order.length;

    if (order.includes(A)) {
      indexA = order.indexOf(A);
    }
    if (order.includes(B)) {
      indexB = order.indexOf(B);
    }

    /******** log sort-order ********/
    function test() {
      return indexA - indexB > 0 ? B+A
        : indexA - indexB === 0 ? B+A
        : A+B;
    }
    console.log(`A:${A} indexA:${indexA} ---\
    B:${B} indexB:${indexB} ---\
    indexA - indexB = ${indexA - indexB} ---\
    ${indexA - indexB > 0 ? 'B before A' : indexA - indexB === 0 
        ? 'no swap' : 'A before B'}`, `input: ${test()}`);
    /******** /log sort-order ********/

    return indexA - indexB; 
  }
  return inputArray.sort(explicitComparator).slice();
}

export default explicitSortWithComparator;


const quickSort = (array, leftBound = 0, rightBound = array.length - 1) => {
  if (leftBound < rightBound) {
    console.log('. Calling partition', array, `with leftBound ${leftBound} and rightBound ${rightBound}`);

    const pivotIndex = partition(array, leftBound, rightBound);
    console.log(`. Returning pivotIndex = ${pivotIndex}`);

    console.log(`\nCalling quickSort for left partition with leftBound ${leftBound} and (pivotIndex-1) ${pivotIndex - 1}`);

    quickSort(array, leftBound, pivotIndex - 1);
    console.log(`\nCalling quickSort for right partition with pivotIndex ${pivotIndex} and rightBound ${rightBound}`);

    quickSort(array, pivotIndex, rightBound);
  }
  return array;
}


const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
  console.log(`.. Partitioning with pivot ${pivot} leftIndex ${leftIndex} rightIndex ${rightIndex}`);

  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
      console.log(`.. ${array[leftIndex-1]} < ${pivot} : Incremented leftIndex => ${leftIndex}`);

    }
    while (array[rightIndex] > pivot) {
      rightIndex--;
      console.log(`.. ${array[rightIndex+1]} > ${pivot} : Decremented rightIndex => ${rightIndex}`);

    }
    if (leftIndex <= rightIndex) {
      const string = `${leftIndex} <= ${rightIndex}`;
      [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
      console.log(`.. ${string} : Swapped leftIndex ${leftIndex} with rightIndex ${rightIndex}`, array);

      leftIndex++;
      rightIndex--;
      console.log(`......... : Incremented leftIndex => ${leftIndex} Decremented rightIndex => ${rightIndex}`);

    }
  }
  return leftIndex;
}

export default quickSort;


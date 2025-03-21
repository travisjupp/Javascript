const collectRainWater = heights => {
  let leftBound = 0;
  let rightBound = 0;
  let leftIdx = 0;
  let rightIdx = heights.length - 1;
  let rainWater = 0;

  while (leftIdx < rightIdx) {
    let l = heights[leftIdx];
    let r = heights[rightIdx];

    if (l <= r) {
      if (l > leftBound) leftBound = l;
      rainWater += leftBound - l;
      leftIdx++;
    } else {
      if (r > rightBound) rightBound = r;
      rainWater += rightBound - r;
      rightIdx--;
    }
  }
  console.log('rainWater: ', rainWater);
  return rainWater;
}

export default collectRainWater;


// format number as string adding commas

const formatNumber = number => {
    // convert num to string, remove decimals
    let numStr = String(Math.floor(number));
    // iterate from end of str adding commas for every 3rd num
    loopCount = 0;
    for (let i = numStr.length - 3; i > 0; i -= 3) {
        loopCount++;
        console.log('----------', loopCount);
        console.log(i);
        console.log(numStr = numStr.slice(0, i) + ',' + numStr.slice(i));
        console.log(numStr.length);
    }
}

formatNumber(12345678.99);




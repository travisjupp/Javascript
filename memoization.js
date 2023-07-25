// Memoization: caching computated results, an optimization technique
const lookupTable = [];

function searchLookupTable(q) {
    for (let ob of lookupTable) {
        for (let key in ob) {
            if (key != q) {
                return;
            }
            return ob[key];
        }
    }
}

// searchLookupTable();

function factorial(n) {
    if (n === 0) {
        console.log('n === 0')
        return 1;
    } else if (searchLookupTable(n)) {
        return searchLookupTable(n);
    } else {
        let x = factorial(n - 1) * n;
        // store x
        lookupTable.push({[n]: x});
        return x;
    }
}

factorial(2);
factorial(3);
console.log(JSON.stringify(lookupTable))

// Memoization: caching computated results, an optimization technique
const lookupTable = []; // the cache

function searchLookupTable(q) {
    // console.log('searchLookupTable ran');
    for (let ob of lookupTable) {
        for (let key in ob) {
            if (key != q) {
                console.log(q,'not found');
                return;
            } else if (key == q) {
                console.log(q, 'found');
                return ob[key];
            }
        }
    }
}

function factorial(n) {
    if (n === 0) {
        return 1;
    } else if (searchLookupTable(n)) {
        return searchLookupTable(n);
    } else {
        console.log('recursive call');
        let x = factorial(n - 1) * n;
        // store x
        lookupTable.push({ [n]: x });
        return x;
    }
}

factorial(5);
console.log(JSON.stringify(lookupTable));
factorial(7);
console.log(JSON.stringify(lookupTable));

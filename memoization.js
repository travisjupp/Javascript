// Memoization: caching computated results, an optimization technique
const lookupTable = []; // the cache

// function searchLookupTable(q) {
//     for (let ob of lookupTable) {
//         for (let key in ob) {
//             if (key == q) {
//                 console.log(q, 'found');
//                 return ob[key];
//             }
//         }
//     }
// }

// refactored searchLookupTable
function searchLookupTable(q) {
    let result = lookupTable.find(ob => Object.keys(ob) == q );
    return result ? (console.log(q, 'found'), result[q]) : undefined;
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

factorial(5); // 5 recursive call
console.log(JSON.stringify(lookupTable)); // [{"1":1},{"2":2},{"3":6},{"4":24},{"5":120}]
factorial(7); // 2 recursive call // 5 found
console.log(JSON.stringify(lookupTable)); // [{"1":1},{"2":2},{"3":6},{"4":24},{"5":120},{"6":720},{"7":5040}]

// Note the above is a JS version of the memoization pseudocode example from https://en.wikipedia.org/wiki/Memoization Example follows:

// function factorial (n is a non-negative integer)
//     if n is 0 then
//         return 1 [by the convention that 0! = 1]
//     else if n is in lookup-table then
//         return lookup-table-value-for-n
//     else
//         let x = factorial(n – 1) times n [recursively invoke factorial
//                                          with the parameter 1 less than n]
//         store x in lookup-table in the nth slot [remember the result of n! for later]
//         return x
//     end if
// end function

// In this particular example, if factorial is first invoked with 5, and then invoked later with any value less than or equal to five, those return values will also have been memoized, since factorial will have been called recursively with the values 5, 4, 3, 2, 1, and 0, and the return values for each of those will have been stored. If it is then called with a number greater than 5, such as 7, only 2 recursive calls will be made (7 and 6), and the value for 5! will have been stored from the previous call. In this way, memoization allows a function to become more time-efficient the more often it is called, thus resulting in eventual overall speed-up.
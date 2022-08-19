// All valid credit card numbers
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Luhn Algorithm
// https://en.wikipedia.org/wiki/Luhn_algorithm#Description
console.log('====== validateCred ======');
const validateCred = arr => {
    let n;
    let sum = 0;
    // iterate every other digit right to left
    for (let i = arr.length - 2; i >= 0; i = i - 2) {
        // console.log('i: ', i-2);
        // console.log('i: ', i);
        // console.log('arr[i]: ', arr[i]);
// CHECK DIGIT (LAST DIGIT) IS NOT DOUBLED
        
        n = arr[i] * 2; // double iterated digits
        // console.log(n);

        // if doubled digit > 9 subtract 9
        if (n > 9) {
            n -= 9;
        }
        // console.log(n);
        // sum up all digits and add to sum 
        sum = n + sum;
    };
    // sum every other digit starting from end of arr
    for(let i = arr.length - 1; i >= 0; i = i - 2){
        // console.log('i2: ', arr[i]);
        // console.log('n: ', n);
        n = 0; // zero out n
        n = arr[i]; // add to n
        sum = n + sum; // add to sum
    };

    // console.log('sum: ', sum, 'n: ', n);
    // if sum modulo 10 = 0 the array is valid
    if (sum % 10 === 0) {
        return 'array is valid';
    } else {
        return 'array is invalid';
    };
}
validateCred(valid1);

console.log('====== findInvalidCards ======');
// The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
let invalidCards = [];
const findInvalidCards = (arr) => {
    arr.filter(i => {
        // console.log('i: ', i);
        if(validateCred(i) === 'array is invalid'){
            invalidCards.push(i);
        }
        
    });

    // console.table(invalidCards);
    return invalidCards;
}
findInvalidCards(batch);

console.log('====== idInvalidCardCompanies ======');
// find invalid nums, return array of companies (one entry per; no dupes). First number in CC reveals card Co. Nums not in the list print msg: "Company not found"
// 3 Amex (American Express) // 4 Visa // 5 Mastercard // 6 Discover
// For param use invalidCards array
const idInvalidCardCompanies = (arr) => {
    let invalidCompanies = [];
    for(card of arr){
        console.log('card[0]: ', card[0]);
        // if statement card num analysis
        if (card[0] === 3){
            if (invalidCompanies.includes('Amex')){
                console.log('Amex found');
            } else {
                console.log('Amex not found: pushing Amex');
                invalidCompanies.push('Amex');
            }
            
        } else if (card[0] === 4){
            if (invalidCompanies.includes('Visa')){
                console.log('Visa found');
            } else {
                console.log('Visa not found: pushing Visa');
                invalidCompanies.push('Visa');
            }
        }
    }
    console.log(invalidCompanies)
}
idInvalidCardCompanies(invalidCards);



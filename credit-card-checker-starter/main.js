// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
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
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4] // invalid
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9] // valid
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3] // invalid
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3] // invalid
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3] // valid

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Use different credit card numbers from a credit card number generator and validator site and test if your functions work for all types of credit cards.

// Invalid numbers from https://www.freeformatter.com/credit-card-number-generator-validator.html
const valid6 = [4, 9, 2, 9, 9, 6, 5, 0, 5, 6, 2, 0, 0, 0, 1, 1];
const invalid6 = [4, 9, 2, 9, 9, 6, 5, 0, 5, 6, 2, 0, 0, 0, 1, 2];

// To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)
console.log('====== str2arr ======');
function str2arr (str) {
    let newArr = [];
    for (let i of str){
        newArr.push(parseInt(i)); // convert to number and push
    }
    return newArr;
}
console.log(str2arr('4929965056200011'));

// Luhn Algorithm
// https://en.wikipedia.org/wiki/Luhn_algorithm#Description
console.log('====== validateCred ======');
const validateCred = arr => {
    let n;
    let sum = 0;
    // iterate every other digit right to left
    for (let i = arr.length - 2; i >= 0; i = i - 2) {
    // CHECK DIGIT (LAST DIGIT) IS NOT DOUBLED
        n = arr[i] * 2; // double iterated digits
        // if doubled digit > 9 subtract 9
        if (n > 9) {
            n -= 9;
        }
        // sum digits and add to sum 
        sum += n;
    };
    // sum every other digit (not yet processed) starting from end of arr
    for (let i = arr.length - 1; i >= 0; i = i - 2){
        n = 0; // zero out n
        n = arr[i]; // add to n
        sum += n; // add to sum
    };
    // if sum modulo 10 = 0 the array is valid
    if (sum % 10 === 0) {
        return 'array is valid';
    } else {
        return 'array is invalid';
    };
}
// console.log(validateCred(valid1));
console.log(validateCred(valid6));

console.log('====== findInvalidCards ======');
// The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
const findInvalidCards = arr => {
    let invalidCards = [];
    arr.filter(i => {
        if(validateCred(i) === 'array is invalid'){
            invalidCards.push(i);
        }
    });
    return invalidCards;
}
console.log(findInvalidCards(batch));

console.log('====== idInvalidCardCompanies ======');
// find invalid nums, return array of companies (one entry per; no dupes). First number in CC reveals card Co. Nums not in the list print msg: "Company not found"
// 3 Amex (American Express) // 4 Visa // 5 Mastercard // 6 Discover
const idInvalidCardCompanies = arr => {
    let invalidCompanies = [];
    for(card of arr){
        // console.log('card[0]: ', card[0]);
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
        } else if (card[0] === 5){
            if (invalidCompanies.includes('Mastercard')){
                console.log('Mastercard found');
            } else {
                console.log('Mastercard not found: pushing Mastercard');
                invalidCompanies.push('Mastercard');
            }
        } else if (card[0] === 6){
            if (invalidCompanies.includes('Discover')){
                console.log('Discover found');
            } else {
                console.log('Discover not found: pushing Discover');
                invalidCompanies.push('Discover');
            }
        } else {
            console.log('Company not found');
        }
    }
    console.log(invalidCompanies)
}
idInvalidCardCompanies(batch);

// Create a function that will convert invalid numbers into valid numbers.
// const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalidMod1 = [5, 4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5] // valid
//                  ^ result (5) added to invalid1
// const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalidMod2 = [2, 5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3] // invalid
//                   ^ result (2) added to invalid2
const invalidMod3 = [8, 5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3] // valid
//                   ^ 10 - result = (8) added to invalid2  

// const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalidMod4 = [2, 3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4] // invalid
//                   ^ 10 - result = (2) added to invalid3

// must add result to a section that does not get doubled
// since every other num after the check number gets doubled, would prob be best to add at index -3

// const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalidMod5 = [2, 0, 3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4] // valid
//                   ^--^-- retain array.length parity by adding two numbers
//                          (0) does not get doubled 

// const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalidMod6 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 1] // valid
// try to modify check digit if check digit > result, subtract result else add
// result is 2 so 2 is subtracted from check digit

// const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalidMod7 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 0] // valid
// result (5) subtracted from check digit

// const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalidMod8 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5, 0, 5] // valid
// made result check digit (5) with (0) preceeding to keep parity

// const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalidMod9 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3, 0, 8] // valid
// made result check digit (8) with (0) preceeding to keep parity

// const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalidMod10 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4, 0, 2] // valid
// made result check digit (2) with (0) preceeding to keep parity

// const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalidMod11 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5, 0, 5] // valid
// made result check digit (5) with (0) preceeding to keep parity

// const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]
const invalidMod12 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4, 0, 9] // valid
// made result check digit (9) with (0) preceeding to keep parity

// const invalid6 = [4, 9, 2, 9, 9, 6, 5, 0, 5, 6, 2, 0, 0, 0, 1, 2]
const invalidMod13 = [4, 9, 2, 9, 9, 6, 5, 0, 5, 6, 2, 0, 0, 0, 1, 2, 0, 9] // valid
// made result check digit (9) with (0) preceeding to keep parity

// pushing 5 to the end still returns invalid array
// pushing 5 (from invalidCard result) to invalidMod -3 (before the last two nums) makes it valid
// shifting 5 to beginning of array also works
console.log('===== makeCardValid =====');
const makeCardValid = invalidCard => {
    let n;
    let sum = 0;
    let result;
    if (validateCred(invalidCard) === 'array is invalid') {
        console.log('validateCred says: array is invalid');
        for (let i = invalidCard.length - 2; i >= 0; i = i - 2) {
            n = invalidCard[i] * 2;
            console.log('doubled:',n);
            if (n > 9) {
                n -= 9;
            }
            sum += n;
        }
        for (let i = invalidCard.length - 1; i >= 0; i = i - 2) {
            n = 0;
            n = invalidCard[i];
            console.log('invalidCard[i]:',invalidCard[i]);
            sum += n;
        }
        result = sum % 10; // check sum mod 10 = 0
        let newValidCard = [...invalidCard]; // copy invalidCard array to newValidCard
        let checkDigit = 10 - result; // New check digit to push to newValidCard

        console.log('invalidCard:',invalidCard);
        // add result to newValidCard
        newValidCard.push(0); // keep the parity of the length of cc (item value 0)
        newValidCard.push(checkDigit); // push new check digit to end of array
        console.log('sum:',sum,'result:',result,'checkDigit:',checkDigit);
        console.log('newValidCard:',newValidCard);

    } else {
        console.log('validateCred says: array is valid');
    }
}

makeCardValid(invalid1);

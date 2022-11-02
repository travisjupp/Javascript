// ex 1
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] === "Notorious B.I.G.") {
        break;
    }
}

console.log('And if you don\'t know, now you know.');

// ex2 
let total = 0; // 9 // 98 // 987
for (let n = 9; n >= 6; n -= 1) // 9 // 8 // 7 // 6
{
    console.log(`n = ${n}`);
    total *= 10; // 0 * 10 = 0 // 9 * 10 = 90 // 98 * 10 = 980 // 987 * 10 = 9870
    total += n;  // 0 + 9  = 9 // 90 + 8 = 98 // 980 + 7 = 987 // 9870 + 6 = 9876
    console.log(`total = ${total}`); // 9 // 98 // 987 // 9876
}
// the computed result is 9876.

// for loop compared to while loop
for (let i = 9; i >= 6; i -= 1) {
    console.log("for loop i = " + i); // 9 // 8 // 7 // 6
}

let i = 9
while (i >= 6) {
    i--
    console.log(`while loop i = ${i}`); // 8 // 7 // 6 // 5
}

let newn = 9;
let newTotal = 0;
while (newn >= 6) {
    newn--
    newTotal *= 10;
    newTotal += newn;
    console.log(`total = ${newTotal}`); // 8 // 7 // 6 // 5
}


// for loop iteration example
const greetAliens = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
    }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

// Primes

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        console.log(`i:${i} num:${num} num%i:${num % i}`);
        if (num % i === 0) {
            return false;
        }
    }
    console.log(`${num}>1:${num > 1}`);
    return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
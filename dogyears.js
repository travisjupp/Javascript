// Calculate age in dog years

const myAge = 40;

// the first 2 human years of a dogslife are 10 and a half years for a dog
let earlyYears = 2;
earlyYears = earlyYears *= 10.5;

// accounts for first 2 10.5 year length dog years
let laterYears = myAge - 2;

// accounts for the dog years in my later years
laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears;

let myName = "Travis";

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);

// Write your function here:
  // get current year
  const today = new Date();
  const thisYear = today.getFullYear();

function howOld(age, year) {
  // determine born year current year - age
  let currentYear = thisYear;
  let bornYear = currentYear - age;
  if (year > currentYear){
    return `You will be ${year - bornYear} in the year ${year}`;
  } else if (year < bornYear) {
    return `The year ${year} was ${bornYear - year} years before you were born`;
  } else if (year < currentYear && year > bornYear) {
    return `You were ${year - bornYear} in the year ${year}`;
  }
}

console.log(howOld(45, 1978));
// console.log(thisYear)
// Once your function is written, write function calls to test your code!

// ============================================================================

/* INSTRUCTIONS FROM CODECADEMY */

/*

Write a function, howOld(), that has two number parameters, age and year,
and returns how old someone who is currently that age was (or will be) during that year.
Handle three different cases:

* If the year is in the future, you should return a string in the following format:

'You will be [calculated age] in the year [year passed in]'



* If the year is before they were born, you should return a string in the following format:

'The year [year passed in] was [calculated number of years] years before you were born'



* If the year is in the past but not before the person was born,
you should return a string in the following format:

'You were [calculated age] in the year [year passed in]'


Hint
You might find these two variables helpful:

const yearDifference = year - theCurrentYear
const newAge = age + yearDifference
Once you have newAge, you’ll be able to handle the three difference cases.

If the newAge is less than 0, this means the year provided was before the person was born. If the newAge is greater than their current age, this means the year passed in is in the future. Otherwise, we know the year provided was in the past but not before they were born.

*/
// Get Sleep Hours Per Day
const getSleepHours = day => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 5;
  } else if (day === "friday") {
    return 4;
  } else if (day === "saturday") {
    return 3;
  } else if (day === "sunday") {
    return 2;
  } else {
    return 'No day specified';
  }
};

// Get Total Sleep Hours
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

// Get Ideal Sleep Hours
const getIdealSleepHours = hours => {
  let idealHours = hours;
  return idealHours * 7;
};

// Calculate Sleep Debt
const calculateSleepDebt = hours => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(hours);
  if (actualSleepHours > idealSleepHours) {
    console.log(
      "The user got " + (actualSleepHours - idealSleepHours) + " hours more sleep than needed");
  } else if (actualSleepHours === idealSleepHours) {
    console.log("The user got the perfect amount of sleep");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("The user needs at least " + (idealSleepHours - actualSleepHours) + " more hours of sleep");
  }
};

calculateSleepDebt(2) // console.log already returned from function
// adding an extra console.log is what creates 'UNDEFINED' in stack-trace
console.log('Ideal sleep hours:', getIdealSleepHours(2))
console.log('Actual sleep hours:', getActualSleepHours())
console.log('Hours of sleep on specified day:', getSleepHours('sunday'))


/*
PROGRAM RETURNS 'UNDEFINED' BUT OTHERWISE WORKS PROPERLY <= *FIXED*
========================================================

note: console.log not the output of last 3 funcs therefore needed
*/
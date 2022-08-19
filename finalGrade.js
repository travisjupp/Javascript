// Write your function here:

/*
finalGrade()
Instructions
1.
Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A' */

const finalGrade = (midterm, final, homework) => {
  const average = (midterm + final + homework)/3;
  if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
    return 'You have entered an invalid grade.';
  } else if (average >= 0 && average <= 59) {
    return 'F';
  } else if (average >= 60 && average <= 69) {
    return 'D';
  } else if (average >= 70 && average <= 79) {
    return 'C';
  } else if (average >= 80 && average <= 89) {
    return 'B';
  } else if (average >= 90 && average <= 100) {
    return 'A';
  }
}




// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'
// console.log(finalGrade(0, 0, 0))
// We encourage you to add more function calls of your own to test your code!
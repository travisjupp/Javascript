// A Magic 8 Ball program where people input their name, and a question for the Magic 8 Ball to answer. 
// We will be using control-flow, the console log, and the random operator from the JS Math library to answer the user questions. 
// Note: we will be using camelCase form when typing element id's.

// first we create a variable that will hold the users name with an empty string for now.
let userName = '';

// now create a ternary expression deciding the action to take if a user name is supplied or not
// Note: I tried it using just one '=' sign but it would just return the first console log even if the userName string was empty, changing it to '===' strict equality fixed it. Also, remember to use backticks when interpolating strings using ternary operators.
// OK, nevermind using the strict equality, it messes thigs up. Back to using '='
// also no quotes around false or true
// OK after messind around with this for awhile and getting errors I went with the '==' double equality, seems to work if userName and userQuestion or both empty strings. Now it works.

userName == false ? console.log('Hello!') : console.log(`Hello, ${userName}`);

// Create the user question variable

let userQuestion = 'Am I rad?';

userQuestion == false ? console.log(`Sorry, I did not get that, please ask a question.`) : console.log(`You asked: ${userQuestion}`);

// OK sticking with double equality since single and strict equality don't seem to do the trick--moving on to creating the random number variable

randomNumber = Math.floor(Math.random() * 8);

// creating the eight ball variable

eightBall = '';

// create a control-flow that takes randomNumber then assigns eightBall to a reply that a Magic 8 Ball would return. Use, if/else or switch.

switch (randomNumber) {
  case 0:
  	eightBall = 'It is certain';
  	break;
  case 1:
  	eightBall = 'It is decidedly so';
  	break;
  case 2:
  	eightBall = 'Reply hazy try again';
  	break;
  case 3:
  	eightBall = 'Cannot predict now';
  	break;
  case 4:
  	eightBall = 'Do not count on it';
    break;
  case 5:
  	eightBall = 'My sources say no';
    break;
  case 6:
  	eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default: console.log('something went err')
}

console.log(`The Magic Eight Ball answered: ${eightBall}`)
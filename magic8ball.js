// A Magic 8 Ball program where people input their name, and a question for the Magic 8 Ball to answer. 

let userName = '...you';

userName === false ?
  console.log('Hello!') : console.log(`Hello, ${userName}`);

let userQuestion = 'Are you drunk?';

userQuestion === false ?
  console.log(`Sorry, I did not get that, please ask a question.`) : console.log(`You asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

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


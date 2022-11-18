const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(arr) {
    this.field = arr;
    this.direction = "";
  }
  print() {
    prompt(
      this.field[0].join("") +
        "\n" +
        this.field[1].join("") +
        "\n" +
        this.field[2].join("")
    );
  }
  move() {
    this.direction = prompt("Your Move: Up, Down, Left, Right? ");
    console.log(this.direction);
  }
}

const myField = new Field([
  [pathCharacter, fieldCharacter, hole],
  [fieldCharacter, hole, fieldCharacter],
  [fieldCharacter, hat, fieldCharacter],
]);

let y = 0;
let x = 0;
myField.move();

const checkBounds = () => {
  if (x < 0) {
    console.log(`GAME OVER: Outta Bounds x<0:${x}`);
    return process.exit();
  } else if (x > 2) {
    console.log(`GAME OVER: Outta Bounds x>2:${x}`);
    return process.exit();
  } else if (y < 0) {
    console.log(`GAME OVER: Outta Bounds y<0:${y}`);
    return process.exit();
  } else if (y > 2) {
    console.log(`GAME OVER: Outta Bounds y>2:${y}`);
    return process.exit();
  } else if (myField.field[y][x] === hole) {
    console.log(`GAME OVER: You fell into a hole!`);
    return process.exit();
  } else if (myField.field[y][x] === hat) {
    console.log(`WINNER! You found your hat!`);
    return process.exit();
  } else {
    console.log("y:", y, "x:", x);
  }
};

let game = "on";
while (game === "on") {
  if (myField.direction.toLowerCase() === "up") {
    y--;
    checkBounds();
    myField.field[y][x] = pathCharacter;
  } else if (myField.direction.toLowerCase() === "down") {
    y++;
    checkBounds();
    myField.field[y][x] = pathCharacter;
  } else if (myField.direction.toLowerCase() === "left") {
    x--;
    checkBounds();
    myField.field[y][x] = pathCharacter;
  } else if (myField.direction.toLowerCase() === "right") {
    x++;
    checkBounds();
    myField.field[y][x] = pathCharacter;
  }
  myField.print();
  myField.move();
}

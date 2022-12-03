// Find Your Hat: Interactive terminal game
// To play => node main.js
const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(arr) {
    this.field = arr;
    this.direction = "";
    this.gameMode = "normal";
    this.moveRepo = [];
    this.yPathRand = 0;
    this.xPathRand = 0;
  }

  print() {
    console.log('mode:', this.gameMode);
    this.field.forEach((el) => {
      console.log(el.join(""));
    });
  }

  move() {
    this.direction = prompt("Your Move: Up, Down, Left, Right? ").toLowerCase();
    console.log(this.direction);
    // move repository saves moves to moveRepo array
    if (this.gameMode === 'hard' && (this.direction === 'up' || this.direction === 'down' || this.direction === 'left' || this.direction === 'right')) {
      this.moveRepo.push(this.direction);
      console.log('moveRepo:', this.moveRepo);
    }
  }

  play() {
    this.gameMode = prompt("Game mode: normal/hard? "); // set game mode
    if (this.gameMode !== "hard") {
      this.gameMode = "normal";
    }
    // randomly assign a pathCharacter
    const getPathRand = () => {
      this.yPathRand = Math.floor(Math.random() * (this.field.length - 1));
      this.xPathRand = Math.floor(Math.random() * (this.field[0].length -1));
    }
    // pathCharacter overwrites fieldCharacters only
    do {
      getPathRand();
    } while (this.field[this.yPathRand][this.xPathRand] !== fieldCharacter);

    this.field[this.yPathRand][this.xPathRand] = pathCharacter;

    let y = this.yPathRand;
    let x = this.xPathRand;
    
    console.log('play() this.yPathRand',this.yPathRand, 'this.xPathRand', this.xPathRand);

    this.print();
    this.move();

    const checkBounds = () => {
      if (x < 0) {
        console.log(`GAME OVER: Outta Bounds x<0:${x}`);
        return process.exit();
      } else if (x > this.field[0].length - 1) {
        console.log(`GAME OVER: Outta Bounds x:${x}`);
        return process.exit();
      } else if (y < 0) {
        console.log(`GAME OVER: Outta Bounds y<0:${y}`);
        return process.exit();
      } else if (y > this.field.length - 1) {
        console.log(`GAME OVER: Outta Bounds y:${y}`);
        return process.exit();
      } else if (this.field[y][x] === hole) {
        console.log(`GAME OVER: You fell into a hole!`);
        return process.exit();
      } else if (this.field[y][x] === hat) {
        console.log(`WINNER! You found your hat!`);
        return process.exit();
      } else if (this.moveRepo.join('').includes('downdown')) {
        console.log('downdown triggered => add 5% field holes!');
        this.moveRepo = []; // clear moveRepo
          // add 5% holes
          let yFieldHolesRand = 0;
          let xFieldHolesRand = 0;
          const getFieldHolesRand = () => {
            yFieldHolesRand = Math.floor(Math.random() * (this.field.length - 1));
            xFieldHolesRand = Math.floor(Math.random() * (this.field[0].length - 1));
          };

          let numFieldHoles = parseInt(((this.field.length - 1) * (this.field[0].length - 1) * 5 / 100).toFixed());
          while (numFieldHoles > 0) {
            while (this.field[yFieldHolesRand][xFieldHolesRand] !== fieldCharacter) {
              getFieldHolesRand();
            }
            this.field[yFieldHolesRand][xFieldHolesRand] = hole;
            numFieldHoles--;
          }
      } else {
        console.log("y:", y, "x:", x);
      }
    };

    while (true) {
      if (this.direction === "up") {
        y--;
        checkBounds();
        this.field[y][x] = pathCharacter;
      } else if (this.direction === "down") {
        y++;
        checkBounds();
        this.field[y][x] = pathCharacter;
      } else if (this.direction === "left") {
        x--;
        checkBounds();
        this.field[y][x] = pathCharacter;
      } else if (this.direction === "right") {
        x++;
        checkBounds();
        this.field[y][x] = pathCharacter;
      } else {
        console.log('Invalid move');
      }
      this.print();
      this.move();
    }
  }

  static generateField(height, width, percentage) {
    // generate subArray full of fieldCharacters using width param
    let subArr = [];
    let w = width;
    while (w > 0) {
      subArr.push(fieldCharacter);
      w--;
    }
    // push subArrays to an empty arr using height param
    let h = height;
    let field = [];
    while (h > 0) {
      field.push(JSON.parse(JSON.stringify(subArr))); // deep copy subArr avoids ref-vals
      h--;
    }
    // randomly assign fieldHoles
    let numFieldHoles = parseInt(
      (height * width * percentage / 100).toFixed()
    );
    let yFieldHolesRand = 0;
    let xFieldHolesRand = 0;
    function getFieldHolesRand() {
      yFieldHolesRand = Math.floor(Math.random() * height);
      xFieldHolesRand = Math.floor(Math.random() * width);
    }
    while (numFieldHoles > 0) {
      // holes overwrite fieldCharacters only
      do {
        getFieldHolesRand();
      } while (field[yFieldHolesRand][xFieldHolesRand] !== fieldCharacter);

      field[yFieldHolesRand][xFieldHolesRand] = hole;
      numFieldHoles--;
    }
    // randomly assign a hat
    let yHatRand = 0;
    let xHatRand = 0;
    function getHatRand() {
      yHatRand = Math.floor(Math.random() * height);
      xHatRand = Math.floor(Math.random() * width);
    }
    // hat overwrites fieldCharacters only
    do {
      getHatRand();
    } while (field[yHatRand][xHatRand] !== fieldCharacter);

    field[yHatRand][xHatRand] = hat;
  return field;
  }
}

const myField = new Field(Field.generateField(7, 9, 20));
myField.play();




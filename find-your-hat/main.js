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
    this.moveRepo;
  }
  print() {
    this.field.forEach((el) => {
      console.log(el.join(""));
    });
  }
  move() {
    this.direction = prompt("Your Move: Up, Down, Left, Right? ").toLowerCase();
    console.log(this.direction);
  }
  play() {
    let y = 0;
    let x = 0;
    this.print();
    this.move();

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
      } else if (this.field[y][x] === hole) {
        console.log(`GAME OVER: You fell into a hole!`);
        return process.exit();
      } else if (this.field[y][x] === hat) {
        console.log(`WINNER! You found your hat!`);
        return process.exit();
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
      }
      this.print();
      this.move();
    }
  }
  static print() {
    this.field.forEach((el) => {
      console.log(el.join(""));
    });
  }
  static move() {
    console.log("static move");
    this.direction = prompt("Your Move: Up, Down, Left, Right? ").toLowerCase();
    // move repository saves moves to moveRepo array
    if (this.gameMode === 'hard' && this.direction === 'up' || this.direction === 'down' || this.direction === 'left' || this.direction === 'right') {
      this.moveRepo.push(this.direction);
      console.log('moveRepo:', this.moveRepo);
    }

  }
  static generateField(height, width, percentage) {
    this.gameMode = prompt("Game mode: normal/hard? "); // set game mode
    if (this.gameMode !== "hard") {
      this.gameMode = "normal";
    }
    console.log('Game mode:', this.gameMode);
    this.moveRepo = []; // initialize moveRepo
    // write func that generate subArray full of fieldCharacters using width as param
    let subArr = [];
    let w = width;
    while (w > 0) {
      subArr.push(fieldCharacter);
      w--;
    }
    // push subArrays to an empty arr assigned to this.field based on height (number of times)
    let h = height;
    this.field = [];
    while (h > 0) {
      this.field.push(JSON.parse(JSON.stringify(subArr))); // deep copy subArr avoids ref-vals
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
      getFieldHolesRand();
      // ensure holes overwrite fieldCharacters only
      while (this.field[yFieldHolesRand][xFieldHolesRand] !== fieldCharacter) {
        getFieldHolesRand();
      }
      this.field[yFieldHolesRand][xFieldHolesRand] = hole;
      numFieldHoles--;
    }
    // randomly assign a pathCharacter
    let yPathRand = 0;
    let xPathRand = 0;
    function getPathRand() {
      yPathRand = Math.floor(Math.random() * height);
      xPathRand = Math.floor(Math.random() * width);
    }
    getPathRand();
    // ensure pathCharacter overwrites fieldCharacters only
    while (this.field[yPathRand][xPathRand] !== fieldCharacter) {
      getPathRand();
    }
    this.field[yPathRand][xPathRand] = pathCharacter;
    // randomly assign a hat
    let yHatRand = 0;
    let xHatRand = 0;
    function getHatRand() {
      yHatRand = Math.floor(Math.random() * height);
      xHatRand = Math.floor(Math.random() * width);
    }
    getHatRand();
    // ensure hat only overwrites fieldCharacters only
    while (this.field[yHatRand][xHatRand] !== fieldCharacter) {
      getHatRand();
    }
    this.field[yHatRand][xHatRand] = hat;
    // Play
    const play = () => {
      let y = yPathRand;
      let x = xPathRand;
      this.print();
      this.move();

      const checkBounds = () => {
        if (x < 0) {
          console.log(`GAME OVER: Outta Bounds x<0:${x}`);
          return process.exit();
        } else if (x > width - 1) {
          console.log(`GAME OVER: Outta Bounds x>width-1:${x}`);
          return process.exit();
        } else if (y < 0) {
          console.log(`GAME OVER: Outta Bounds y<0:${y}`);
          return process.exit();
        } else if (y > height - 1) {
          console.log(`GAME OVER: Outta Bounds y>height-1:${y}`);
          return process.exit();
        } else if (this.field[y][x] === hole) {
          console.log(`GAME OVER: You fell into a hole!`);
          return process.exit();
        } else if (this.field[y][x] === hat) {
          console.log(`WINNER! You found your hat!`);
          return process.exit();
        } else if (this.moveRepo.join('').includes('downdown')) {
          console.log('downdown triggered => adding 5% field holes');
          this.moveRepo = []; // clear moveRepo
          // add 5% holes
          numFieldHoles = parseInt((height * width * 5 / 100).toFixed());
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
          console.log('invalid move input');
        }
        this.print();
        this.move();
      }
    };
    play();
  }
}

Field.generateField(5, 6, 20);

// const myField = new Field([
//   [pathCharacter, fieldCharacter, hole],
//   [fieldCharacter, hole, fieldCharacter],
//   [fieldCharacter, hat, fieldCharacter],
// ]);
// myField.play();


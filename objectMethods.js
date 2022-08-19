let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Object methods()
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};
// Calling methods
alienShip.retreat();
alienShip.takeOff();
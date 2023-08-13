let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Object methods()
let alienShip = {
  // ES5 method definition syntax
  ES5retreat: function() {
    console.log('ES5 ',retreatMessage);
  },
  // ES6 shorthand syntax
  ES6retreat() {
    console.log('ES6 ',retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  },
  // ES6 alternate syntax
  ES6alernateRetreat: () => {
    console.log('ES6 Alt ',retreatMessage.toUpperCase());
  },
};
// Calling methods
alienShip.ES5retreat();
alienShip.takeOff();
alienShip.ES6retreat();
alienShip.ES6alernateRetreat();
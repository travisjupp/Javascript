let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  // spaceship['passengers'] = ['Tom', 'Tim', {Jake: 'Ill'}]
  spaceship['passengers'] = [{animal: 'Space Cat', human: 'Fritz'}, {plant: 'Space Plant'}]
  
  let firstPassenger = spaceship.passengers[0].animal; // Space Cat
  
  // console.log(spaceship.telescope['yearBuilt']);
  
  console.log(spaceship.crew);
  console.log(firstPassenger);
  console.log(spaceship['passengers'][0]);
  console.log(spaceship.passengers[0][1])
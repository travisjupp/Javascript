const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

// Get random cards until spade hits
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};
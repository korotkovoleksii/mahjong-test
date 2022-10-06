function getDeckOfCards() {
  //get array with prime numbers 0 to 60
  const arrPrime = Array.from({ length: 60 }, (_, i) => i + 1).filter(
    (item) => {
      if (item === 1) {
        return false;
      }
      for (let i = 2; i <= item / 2; i++) {
        if (item % i === 0) {
          return false;
        }
      }
      return true;
    }
  );
  // mix this array
  shuffle(arrPrime);
  //select 16 numbers for card
  const selectNumbers = arrPrime.slice(1);
  // make deck of card
  const deck = selectNumbers.concat(selectNumbers);
  // mix deck
  shuffle(deck);
  return deck;
}
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
export default getDeckOfCards;

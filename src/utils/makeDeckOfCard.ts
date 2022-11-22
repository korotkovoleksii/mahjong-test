const shuffle = (array: number[]): number[] => [
  ...array.sort(() => Math.random() - 0.5),
];

const getDeckOfCards = (): number[] => {
  //get array with prime numbers 0 to 60
  const arrPrime: number[] = Array.from({ length: 60 }, (_, i) => i + 1).filter(
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
  // i shuffle first time for remove random item, coz i don't want remove the same item every time
  const selectNumbers: number[] = shuffle(arrPrime).slice(1);

  return shuffle(selectNumbers.concat(selectNumbers));
};

export default getDeckOfCards;

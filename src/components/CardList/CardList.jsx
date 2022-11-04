import { useEffect, useState } from 'react';
import getDeckOfCards from '../../utils/makeDeckOfCard';
import Card from '../Card';
import './CardList.css';

const CardList = () => {
  const [deck, setDeck] = useState([]);
  const [selectedCardIndexes, setSelectedCardIndexes] = useState([]);
  const [visibleCardIndexes, setVisibleCardIndexes] = useState([]);
  const [firstShowNumber, setFirstShowNumber] = useState(true);

  const getStyleCard = (index) =>
    (firstShowNumber && 'show-number') ||
    (visibleCardIndexes.includes(index) && 'visible') ||
    (selectedCardIndexes.includes(index) && 'select') ||
    'hide';

  const handelSelectedCardIndexes = (index) => {
    if (
      !selectedCardIndexes.includes(index) &&
      !visibleCardIndexes.includes(index) &&
      !firstShowNumber &&
      selectedCardIndexes.length < 2
    ) {
      setSelectedCardIndexes([...selectedCardIndexes, index]);
    }
  };

  useEffect(
    function changeStateOfCard() {
      if (selectedCardIndexes.length === 2) {
        if (deck[selectedCardIndexes[0]] !== deck[selectedCardIndexes[1]]) {
          setTimeout(() => {
            setSelectedCardIndexes([]);
          }, 500);
        } else {
          setVisibleCardIndexes([
            ...visibleCardIndexes,
            ...selectedCardIndexes,
          ]);
          setSelectedCardIndexes([]);
        }
      }
    },
    [deck, selectedCardIndexes, visibleCardIndexes]
  );

  useEffect(function showFirstTimeInStartGame() {
    setDeck(getDeckOfCards());
    setTimeout(() => {
      setFirstShowNumber(false);
    }, 5000);
  }, []);

  const cards = deck.map((item, index) => (
    <Card
      key={index}
      index={index}
      number={item}
      style={getStyleCard(index)}
      selectCard={handelSelectedCardIndexes}
    />
  ));

  return <div className="card-list">{cards}</div>;
};

export default CardList;

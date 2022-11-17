import { useEffect, useState } from 'react';
import getDeckOfCards from '../../utils/makeDeckOfCard';
import Card from '../Card';
import './CardList.css';

const CardList = (): JSX.Element => {
  const [deck, setDeck] = useState<number[]>([]);
  const [selectedCardIndexes, setSelectedCardIndexes] = useState<number[]>([]);
  const [visibleCardIndexes, setVisibleCardIndexes] = useState<number[]>([]);
  const [firstShowNumber, setFirstShowNumber] = useState(true);

  const getStyleCard = (index: number): string =>
    (firstShowNumber && 'show-number') ||
    (visibleCardIndexes.includes(index) && 'visible') ||
    (selectedCardIndexes.includes(index) && 'select') ||
    'hide';

  const handelSelectedCardIndexes = (index: number): void => {
    if (
      !selectedCardIndexes.includes(index) &&
      !visibleCardIndexes.includes(index) &&
      !firstShowNumber &&
      selectedCardIndexes.length < 2
    ) {
      setSelectedCardIndexes([...selectedCardIndexes, index]);
    }
  };

  useEffect(() => {
    if (selectedCardIndexes.length === 2) {
      if (deck[selectedCardIndexes[0]] !== deck[selectedCardIndexes[1]]) {
        setTimeout(() => {
          setSelectedCardIndexes([]);
        }, 500);
      } else {
        setVisibleCardIndexes([...visibleCardIndexes, ...selectedCardIndexes]);
        setSelectedCardIndexes([]);
      }
    }
  }, [deck, selectedCardIndexes, visibleCardIndexes]);

  useEffect(() => {
    setDeck(getDeckOfCards());
    setTimeout(() => {
      setFirstShowNumber(false);
    }, 5000);
  }, []);

  const cards = deck.map((item, index) => (
    <Card
      key={index}
      index={index}
      visibleNumber={item}
      style={getStyleCard(index)}
      selectCard={handelSelectedCardIndexes}
    />
  ));

  return <div className="card-list">{cards}</div>;
};

export default CardList;

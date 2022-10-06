import Card from '../Card/Card';
import getDeckOfCards from '../../utils/makeDeckOfCard';
import './CardList.css';
import { useEffect, useState } from 'react';
const CardList = () => {
  const [deck, setDeck] = useState([]);
  const [selectCards, setSelectCards] = useState([]);

  const getSelectCard = (obj) => {
    //когда вибраніх кард дві ми перевіряемо чи однакові вони якщо так тоді залищаемо їх видемімі та очищуемо масів
    // ящо карті не однакові тоді закріваемо
    obj.handleVisible('select');

    if (selectCards.length === 1) {
      if (selectCards[0].number !== obj.number) {
        const copy = [...selectCards, obj];
        setTimeout(() => {
          copy.forEach((item) => item.handleVisible('hide'));
        }, 500);

        setSelectCards([]);
      } else {
        const copy = [...selectCards, obj];

        copy.forEach((item) => item.handleVisible('visible'));

        setSelectCards([]);
      }
    } else {
      setSelectCards([...selectCards, obj]);
    }
  };

  useEffect(() => {
    setDeck(getDeckOfCards());
  }, []);
  let cards = deck.map((item, i) => (
    <Card
      key={i}
      number={item}
      getSelectCard={getSelectCard}
      visibleNumber={true}
    />
  ));

  return <div className="card-list">{cards}</div>;
};
export default CardList;

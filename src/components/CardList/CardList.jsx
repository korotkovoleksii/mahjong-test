import { useEffect, useState } from 'react';
import Card from '../Card';
import getDeckOfCards from '../../utils/makeDeckOfCard';
import './CardList.css';

const CardList = () => {
  const [deck, setDeck] = useState([]);
  const [selectCard, setSelectCard] = useState(null);

  const getSelectCard = ({ number, handleVisible }) => {
    handleVisible('select');
    const { number: selectCardNumber, handleVisible: selectCardHV } =
      selectCard || {};

    if (selectCard) {
      if (selectCardNumber !== number) {
        setTimeout(() => {
          handleVisible('hide');
          selectCardHV('hide');
        }, 500);
        setSelectCard(null);
      } else {
        handleVisible('visible');
        selectCardHV('visible');
        setSelectCard(null);
      }
    } else {
      setSelectCard({ number, handleVisible });
    }
  };

  useEffect(() => {
    setDeck(getDeckOfCards());
  }, []);

  const cards = deck.map((item, i) => (
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

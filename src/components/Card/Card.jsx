import { useEffect, useState } from 'react';
import './Card.css';
const Card = ({ number, getSelectCard }) => {
  const [visible, setVisible] = useState('show-number');
  // const [isSelected, seIsSelected] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible('hide');
    }, 5000);
  }, []);

  const handleVisible = (visible) => {
    console.log(visible);
    if (visible === 'select') {
      setVisible('select');
    } else if (visible === 'visible') {
      setVisible('visible');
    } else if (visible === 'hide') {
      setVisible('hide');
    }
  };
  const handleCard = () => {
    getSelectCard({ number, handleVisible });
  };

  let styleCard = '';
  if (visible === 'hide') {
    styleCard = 'card';
  } else if (visible === 'select') {
    styleCard = 'card card__select';
  } else if (visible === 'visible') {
    styleCard = 'card card__visible';
  } else if (visible === 'show-number') {
    styleCard = 'card';
  }

  return (
    <div className={styleCard} onClick={handleCard}>
      {visible !== 'hide' ? <p className="card__number"> {number}</p> : null}
    </div>
  );
};
export default Card;

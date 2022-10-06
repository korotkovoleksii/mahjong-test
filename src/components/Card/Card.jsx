import { useEffect, useState } from 'react';
import './Card.css';

const Card = ({ number, getSelectCard }) => {
  const [visibleType, setVisibleType] = useState('show-number');

  useEffect(() => {
    setTimeout(() => {
      setVisibleType('hide');
    }, 5000);
  }, []);

  const handleVisible = (visible) => {
    setVisibleType(visible);
  };

  const handleCard = () => {
    getSelectCard({ number, handleVisible });
  };

  return (
    <div className={`card card__${visibleType}`} onClick={handleCard}>
      {visibleType !== 'hide' ? (
        <p className="card__number"> {number}</p>
      ) : null}
    </div>
  );
};

export default Card;

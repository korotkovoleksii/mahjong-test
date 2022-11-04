import './Card.css';

const Card = ({
  index,
  number = 0,
  style = '',
  selectCard = Function.prototype,
}) => {
  return (
    <div className={`card card__${style}`} onClick={() => selectCard(index)}>
      {style !== 'hide' ? <p className="card__number"> {number}</p> : null}
    </div>
  );
};

export default Card;

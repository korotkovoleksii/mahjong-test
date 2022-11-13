import './Card.css';

interface ICardItemProps {
  index: number;
  visibleNumber: number;
  style: string;
  selectCard: (index: number) => void;
}

const Card = ({ index, visibleNumber, style, selectCard }: ICardItemProps) => {
  return (
    <div className={`card card__${style}`} onClick={() => selectCard(index)}>
      {style !== 'hide' ? (
        <p className="card__number"> {visibleNumber}</p>
      ) : null}
    </div>
  );
};

export default Card;

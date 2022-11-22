import './Card.css';
import { ICardItemProps } from '../../types';

const Card = ({
  index,
  visibleNumber,
  style,
  selectCard,
}: ICardItemProps): JSX.Element => {
  return (
    <div className={`card card__${style}`} onClick={() => selectCard(index)}>
      {style !== 'hide' ? (
        <p className="card__number"> {visibleNumber}</p>
      ) : null}
    </div>
  );
};

export default Card;

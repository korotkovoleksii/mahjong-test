import './Card.css';

const Card = ({
  index,
  number = 0,
  style = '',
  selectCard = Function.prototype,
}) => {
  // const [visibleType, setVisibleType] = useState('show-number');
  // useEffect(() => {
  //   setTimeout(() => {
  //     setVisibleType('hide');
  //   }, 5000);
  // }, []);
  // const handleVisible = (visible) => {
  //   setVisibleType(visible);
  // };
  // const handleCard = () => {
  //   getSelectCard({ number, handleVisible });
  // };
  // return (
  //   <div className={`card card__${visibleType}`} onClick={handleCard}>
  //     {visibleType !== 'hide' ? (
  //       <p className="card__number"> {number}</p>
  //     ) : null}
  //   </div>
  // );
  return (
    <div className={`card card__${style}`} onClick={() => selectCard(index)}>
      {style !== 'hide' ? <p className="card__number"> {number}</p> : null}
    </div>
  );
};

export default Card;

import FilmCardItem from "./FilmCardItem";
import "./FilmCardList.scss";

const FilmCardList = (props) => {
  return (
    <ul className='list'>
      {props.cards.map((card) => (
        <FilmCardItem
          key={card.id}
          id={card.id}
          title={card.title}
          image={card.image}
          quantity={card.quantity}
          description={card.description}
          number={card.number}
        />
      ))}
    </ul>
  );
};

export default FilmCardList;

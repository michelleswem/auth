
import './FilmCardItem.scss';

const FilmCardItem = (props) => {
  return (
    <li className = 'filmcard'>
      <div className='filmcard__card'>
        <div className='filmcard__box'>
          <h2 className='filmcard__heading'>{props.title}</h2>
          <div className='filmcard__imgbox'>
            <img src={props.image} alt={props.title}/>
          </div>
        </div>
        <p className='filmcard__paragraph1'>{props.quantity}</p>
        <p className='filmcard__paragraph2'>
          <span className = 'filmcard__span1'>{props.number}</span>
          <span className = 'filmcard__span2'>{props.description}</span>
        </p>
      </div>
    </li>
  );
};

export default FilmCardItem;

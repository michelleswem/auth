import videocamera from '../../assets/videocamera (1).svg';
import user from '../../assets/user-6.jpg';
import './FilmItem.scss';

const FilmItem = (props) => {
  return (
    <li>
      <div className = 'film-item'>
        <div className = 'film-item__box'>
            <div  className = 'film-item__img-box'>
            <img src = {videocamera} alt='videoCamera'/>
            </div>
          <h3 className = 'film-item__heading'>{props.title}</h3>
        </div>
        <div className = 'film-item__box'>
          <img src = {user} alt='Directorphoto'className = 'film-item__img' />
          <h3 className = 'film-item__heading'>{props.director}</h3>
        </div>
        <div className = 'film-item__box'>
          <img src= {user} alt='producerphoto' className = 'film-item__img'/>
          <h3 className = 'film-item__heading'>{props.producer}</h3>
        </div>
        <div className = 'film-item__box'>{props.releasedate}</div>
        <div className = 'film-item__box'>{props.episodeid}</div>
        <div className = 'film-item__box film-item__box--link'>{props.characters}</div>
      </div>
    </li>
  );
};

export default FilmItem;

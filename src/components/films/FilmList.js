import FilmItem from "./FilmItem";

import "./FilmList.scss";

const FilmList = (props) => {
  return (
    <ul className='film-list'>
      {props.films.map((film) => (
        <FilmItem
          key={film.id}
          id={film.id}
          title= {film.title}
          releasedate={film.releasedate}
          episodeid={film.episodeid}
          characters={film.characters}
          producer = {film.producer}
          director = {film.director}
        />
      ))}
    </ul>
  );
};

export default FilmList;

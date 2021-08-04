import { useEffect, useState } from "react";
import FilmList from "./FilmList";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import Card from "../UI/Card";

const Films = () => {
  const [films, setFilms] = useState([]);
  const { error, isLoading, sendRequest: filmRequest } = useHttp();

  useEffect(() => {
    const transformFilms = (filmObj) => {
      const loadedFilm = [];
      for (const filmKey in filmObj) {
        loadedFilm.push({
          id: filmKey,
          releasedate: filmObj[filmKey].releasedate,
          episodeid: filmObj[filmKey].episodeid,
          characters: filmObj[filmKey].characters,
          title: filmObj[filmKey].title,
          producer: filmObj[filmKey].producer,
          director: filmObj[filmKey].director,
        });
      }

      setFilms(loadedFilm);
    };

    filmRequest(
      { url: "https://starwars-b772d-default-rtdb.firebaseio.com/movies.json" },
      transformFilms
    );
  }, [filmRequest]);

  let content = <p>Found No Films</p>;
  if (films.length > 0) {
    content = <FilmList films={films} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Card>
      <h2>Films</h2>
      {content}
    </Card>
  );
};

export default Films;

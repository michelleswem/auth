
import FilmCardList from "./FilmCardList";
import camera from  "../../assets/videocamera (1).svg";
import ufo from '../../assets/ufo.svg';
import people from '../../assets/group-of-students.svg';
import taxi from '../../assets/taxi.svg';
import phylogenetics from '../../assets/phylogenetics.svg';

const DUMMY_CARDS = [
  {
    id: "c1",
    image:camera,
    title: "Films",
    quantity: "200",
    description: "More than Yesterday",
    number: "20",
  },

  {
    id: "c2",
    image:ufo,
    title: "Starships",
    quantity: "200",
    description: "More than Yesterday",
    number: "20",
  },

  {
    id: "c3",
    image:people,
    title: "People",
    quantity: "200",
    description: "More than Yesterday",
    number: "20",
  },
  {
    id: "c4",
    image:taxi,
    title: "Vehicles",
    quantity: "200",
    description: "More than Yesterday",
    number: "20",
  },
  {
    id: "c5",
    image:phylogenetics,
    title: "Species",
    quantity: "200",
    description: "More than Yesterday",
    number: "20",
  },
];

const FilmCard = () => {
  return <FilmCardList cards={DUMMY_CARDS} />;
};

export default FilmCard;

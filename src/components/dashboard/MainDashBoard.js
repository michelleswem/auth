import "./MainDashBoard.scss";
import images from "../../assets/images.png";
import Films from '../films/Films';
import FilmCard from '../films/FilmCard';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const DashBoard = () => { 
const authCtx = useContext(AuthContext)

const logoutHandler = () => {
  authCtx.logout()

}
  return (
    <div className='overview'>
      <div className='header'>
        <div className='header__content'>
          <h1 className  = 'header__heading'>Dashboard</h1>
          <div className = 'header__img-box'>
          <img src={images} alt='NotificationImage'/>
          </div>
          <button onClick = {logoutHandler} className = 'header__btn'>Logout</button>
        </div>
      </div>
      <FilmCard/>
      <Films/>
    </div>

  );
};

export default DashBoard;


import {NavLink} from 'react-router-dom';
import starwar from "../../assets/Star wars logo.png";
import dashboard from '../../assets/dashboard.svg';
import building from "../../assets/building.svg";
import shoppingbasket from '../../assets/shopping-basket (1).svg'
import vechicle from "../../assets/taxi.svg";
import menu from "../../assets/menu.svg";
import './SideBarDashBoard.scss';


const SideBarDashBoard = () => {
  return (
    <div className = 'side-nav'>
      <div className = 'side-nav__logobox'>
        <img src={starwar} alt="starwar-logo" className = 'side-nav__logo' />
      </div>
      <nav className="side-nav__nav">
        <ul className="side-nav__list">
          <li className="side-nav__item">
            <NavLink to = '/dashboard' className="side-nav__link" activeClassName = 'side-nav__active'>
              <img src={dashboard} alt="dashboard" className = 'side-nav__icon' />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li className="side-nav__item">
            <NavLink to = '/starships' className="side-nav__link" activeClassName = 'side-nav__active'>
              <img src={building} alt="building" className = 'side-nav__icon' />
              <span>Starships</span>
            </NavLink>
          </li>
          <li className="side-nav__item">
            <NavLink to = '/people' className="side-nav__link" activeClassName = 'side-nav__active'>
              <img src={shoppingbasket} alt="shoppingbasket" className = 'side-nav__icon' />
              <span>People</span>
            </NavLink>
          </li>
          <li className="side-nav__item">
            <NavLink to='/vehicles' className="side-nav__link" activeClassName = 'side-nav__active'>
              <img src={vechicle} alt="vechicle" className = 'side-nav__icon' />
              <span>Vehicles</span>
            </NavLink>
          </li>
          <li className="side-nav__item">
            <NavLink to = '/species' className="side-nav__link" activeClassName = 'side-nav__active'>
              <img src={menu} alt="menu" className = 'side-nav__icon' />
              <span>Species</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBarDashBoard;

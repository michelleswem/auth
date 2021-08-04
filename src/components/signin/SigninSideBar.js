import starImage from "../../assets/star.svg";
import "./SigninSideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar__heading">Welcome to Star Wars the Clone Wars</h1>
      <div className="sidebar__box">
        <img className="sidebar__starimage" src={starImage} alt="A star" />
      </div>
    </div>
  );
};

export default SideBar;

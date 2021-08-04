import Astronaut from "../../assets/astronaut-img.svg";
import SigninForm from "./SigninForm";
import Footer from './Footer';
import "./SigninMainBar.scss";

const SigninMainBar = () => {
  return (
    <div className="mainbar">
      <div className="mainbar__img-box">
        <img className="mainbar__img" src={Astronaut} alt="Astronaut" />
      </div>
      <div className="mainbar__signup">
        <SigninForm />
      </div>
      <Footer/>
    </div>
  );
};

export default SigninMainBar;

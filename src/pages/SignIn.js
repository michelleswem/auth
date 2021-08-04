import { Fragment } from "react";
import SigninSideBar from "../components/signin/SigninSideBar";
import SigninMainBar from "../components/signin/SigninMainBar";

const Signin = () => {
  return (
    <Fragment>
      <SigninSideBar />
      <SigninMainBar />
    </Fragment>
  );
};

export default Signin;

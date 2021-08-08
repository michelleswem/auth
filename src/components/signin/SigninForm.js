import "./SigninForm.scss";
import { validEmail, validPassword } from "../../store/regex";
import useForm from "../../hooks/use-form";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const isEmail = (value) => validEmail.test(value);
const isPassword = (value) => validPassword.test(value);

const SigninForm = () => {
  const [isSigin, setIsSigin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const login = authCtx.login;

  const switchSiginModeHandler = () => {
    setIsSigin((prevState) => !prevState);
  };
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    enteredValueChangeHandler: emailChangeHandler,
    valueBlurChangeHandler: emailBlurHandler,
    reset: restEmail,
  } = useForm(isEmail);

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    enteredValueChangeHandler: passwordChangeHandler,
    valueBlurChangeHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useForm(isPassword);

  let formIsValid = false;
  if (passwordIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    setIsLoading(true);
    setError(null);
    let url;
    if (isSigin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Incorrect Email or Password!";
            if (data && data.error && data.error.message) {
             errorMessage = data.error.message
             }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        login(data.idToken, expirationTime.toISOString());
        history.replace("/dashboard");
      })
      .catch((err) => {
        setError(err.message);
      });

    restEmail();
    resetPassword();
  };

  return (
    <div className='signin-box'>
      <h2 className='heading-secondary'>
        {isSigin
          ? "Signin to continue to your account"
          : "Signup to create an account"}
      </h2>
      <form className='form' onSubmit={submitFormHandler}>
        <div className='form__group'>
          {
            <div className='form__control'>
              <label className='form__label' htmlFor='email'>
                E-Mail Address
              </label>
              <input
                className='form__input'
                placeholder='Email address'
                type='email'
                id='email'
                onChange={emailChangeHandler}
                value={enteredEmail}
                onBlur={emailBlurHandler}
              />
              {emailHasError && (
                <p className='form__text-error'>Please Enter a Valid Email!</p>
              )}
            </div>
          }
          <div className='form__control'>
            <label className='form__label' htmlFor='password'>
              Password
            </label>
            <input
              className='form__input'
              placeholder='Enter strong password'
              type='password'
              id='password'
              onChange={passwordChangeHandler}
              value={enteredPassword}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className='form__text-error'>
                Please Enter a Strong Password!
              </p>
            )}
          </div>
        </div>
        <div className='form__actions'>
          {!isLoading && (
            <button type='submit' className='form__btn' disabled={!formIsValid}>
              {isSigin ? "Sign in" : "Create Account"}
            </button>
          )}
          {isLoading && (
            <div className='centered'>
              <LoadingSpinner />
            </div>
          )}
          {error && <p className='form__text-error'>{error}</p>}
          <button
            type='button'
            className='form__toggle'
            onClick={switchSiginModeHandler}
          >
            {isSigin ? "Create new account" : "Sigin with exiting account"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;

import { useState } from "react";

const useForm = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const enteredValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurChangeHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    enteredValueChangeHandler,
    valueBlurChangeHandler,
    reset,
  };
};

export default useForm;

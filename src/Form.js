import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const [visibilidad, setVisibilidad] = useState(false);

  function component() {
    setVisibilidad(true);
  }
  return (
    <>
      <div className="form-container">
        <span onClick={component} className="close-btn">
          ×
        </span>
        <div className="form-content-left">
          <img
            className="form-img"
            src="https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg"
            alt="spaceship"
          />
        </div>
        {!isSubmitted || !visibilidad ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;

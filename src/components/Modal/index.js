// Thank you for submitting answers modal

import React from "react";
import "./styles.css";

const Modal = ({ waiting }) => {

  return (
    <>
      <div className="submit-answers-modal">
        <h2>Thanks for submitting you answers</h2>
        <h3>{waiting}</h3>
      </div>
    </>
  );
};
export default Modal;

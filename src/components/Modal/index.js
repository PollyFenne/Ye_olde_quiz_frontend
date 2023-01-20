import React from "react";
import "./styles.css";

const Modal = ({ waiting }) => {

  return (
    <>
      <div className="modal">
        <h2>Thank you for submitting your answers</h2>
        <h3>{waiting}</h3>
      </div>
    </>
  );
};
export default Modal;

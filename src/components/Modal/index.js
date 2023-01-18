import React from "react";
import "./styles.css";

const Modal = ({ showModal, waiting }) => {
  return (
    <>
      {showModal && (
        <div className="modal">
          <h2>Thanks for submitting you answers</h2>
          <h3>{waiting}.</h3>
        </div>
      )}
    </>
  );
};
export default Modal;

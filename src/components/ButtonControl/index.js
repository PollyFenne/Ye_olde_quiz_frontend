import React from "react";

import "./styles.css";

const ButtonControl = ({ buttonHandler, buttonText }) => {
  return (
    <button onClick={buttonHandler} className="create-game-button">
      {buttonText}
    </button>
  );
};

export default ButtonControl;

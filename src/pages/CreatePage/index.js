import React, { useState } from "react";

import Banner from "../../components/Banner";
import Topics from "../../components/Topics";

import "./styles.css";

const CreatePage = () => {
  const [showRoundOne, setShowRoundOne] = useState(true);
  const [showRoundTwo, setShowRoundTwo] = useState(false);
  const [showRoundThree, setShowRoundThree] = useState(false);

  const [roundOneTopic, setRoundOneTopic] = useState("");

  const handleRoundOneRedirect = () => {
    if (!showRoundOne) {
      console.log("round 1");
      setShowRoundOne(true);
      setShowRoundTwo(false);
      setShowRoundThree(false);
    }

  };

  const handleRoundTwoRedirect = () => {
    console.log("round 2");
    if (!showRoundTwo) {
      setShowRoundOne(false);
      setShowRoundTwo(true);
      setShowRoundThree(false);

    }
  };

  const handleRoundThreeRedirect = () => {
    console.log("round 3");
    if (!showRoundThree) {
      setShowRoundOne(false);
      setShowRoundTwo(false);
      setShowRoundThree(true);
    }
  };

  return (
    <div className="create-page">
      <Banner />
      <form>
        <div className="difficulty">
          <h2>Select difficulty:</h2>
          <div>
            <input type="button" className="select-button" value="Easy" />
            <input type="button" className="select-button"  value="Medium" />
            <input type="button" className="select-button"  value="Hard" />
          </div>
        </div>
        <div className="rounds">
        <h2>Select one topic for each round:</h2>
          <input
            onClick={handleRoundOneRedirect}
            type="button"
            value="Round 1"
            className="select-button"
          />
          <input
            onClick={handleRoundTwoRedirect}
            type="button"
            value="Round 2"
            className="select-button" 
          />
          <input
            onClick={handleRoundThreeRedirect}
            type="button"
            value="Round 3"
            className="select-button" 
          />
        </div>
        <div>
          {showRoundOne ? <Topics /> : <p>round 1</p>}
          {showRoundTwo ? <Topics /> : <p>round 2</p>}
          {showRoundThree ? <Topics /> : <p>round 3</p>}
        </div>
        <input type="submit" value="Create quiz!" />
      </form>
    </div>
  );
};

export default CreatePage;

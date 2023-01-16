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
    <>
      <Banner />
      <form>
        <div>
          <h2>Select difficulty</h2>
          <div>
            <input type="button" className="difficulty-button" value="Easy" />
            <input type="button" className="difficulty-button" value="Medium" />
            <input type="button" className="difficulty-button" value="Hard" />
          </div>
        </div>
        <h2>Select 3 topics</h2>
        <div>
          <input
            onClick={handleRoundOneRedirect}
            type="button"
            value="Round 1"
          />
          <input
            onClick={handleRoundTwoRedirect}
            type="button"
            value="Round 2"
          />
          <input
            onClick={handleRoundThreeRedirect}
            type="button"
            value="Round 3"
          />
        </div>
        <div>
          {showRoundOne ? <Topics /> : <p>round 1</p>}
          {showRoundTwo ? <Topics /> : <p>round 2</p>}
          {showRoundThree ? <Topics /> : <p>round 3</p>}
        </div>
        <input type="submit" value="Create quiz!" />
      </form>
    </>
  );
};

export default CreatePage;

import React, { useState } from "react";

import Banner from "../../components/Banner";
import Topics from "../../components/Topics";

import "./styles.css";

const CreatePage = () => {
  const [showRoundOne, setShowRoundOne] = useState(true);
  const [showRoundTwo, setShowRoundTwo] = useState(false);
  const [showRoundThree, setShowRoundThree] = useState(false);

  const [roundOneTopic, setRoundOneTopic] = useState("");
  const [roundTwoTopic, setRoundTwoTopic] = useState("");
  const [roundThreeTopic, setRoundThreeTopic] = useState("");

  console.log([roundOneTopic, roundTwoTopic, roundThreeTopic]);

  const handleRoundOneRedirect = () => {
    if (!showRoundOne) {
      setShowRoundOne(true);
      setShowRoundTwo(false);
      setShowRoundThree(false);
    }
  };

  const handleRoundTwoRedirect = () => {
    if (!showRoundTwo) {
      setShowRoundOne(false);
      setShowRoundTwo(true);
      setShowRoundThree(false);
    }
  };

  const handleRoundThreeRedirect = () => {
    if (!showRoundThree) {
      setShowRoundOne(false);
      setShowRoundTwo(false);
      setShowRoundThree(true);
    }
  };

  const updateRoundOneTopic = (topic) => {
    setRoundOneTopic(topic);
  };

  const updateRoundTwoTopic = (topic) => {
    setRoundTwoTopic(topic);
  };

  const updateRoundThreeTopic = (topic) => {
    setRoundThreeTopic(topic);
  };

  return (
    <>
      <Banner />
      <form>
        <div className="select-difficulty-container">
          <h2>Select difficulty</h2>
          <div className="difficulty-buttons-container">
            <input
              type="button"
              className="difficulty-button easy-button"
              value="Easy"
            />
            <input
              type="button"
              className="difficulty-button medium-button"
              value="Medium"
            />
            <input
              type="button"
              className="difficulty-button hard-button"
              value="Hard"
            />
          </div>
        </div>
        <div className="select-round-container">
          <h2>Select 3 topics</h2>
          <div className="round-buttons-container">
            <input
              className="round-button"
              onClick={handleRoundOneRedirect}
              type="button"
              value="Round 1"
            />
            <input
              className="round-button"
              onClick={handleRoundTwoRedirect}
              type="button"
              value="Round 2"
            />
            <input
              className="round-button"
              onClick={handleRoundThreeRedirect}
              type="button"
              value="Round 3"
            />
          </div>
        </div>

        {showRoundOne ? (
          <Topics updateTopic={updateRoundOneTopic} topic={roundOneTopic} />
        ) : (
          <></>
        )}
        {showRoundTwo ? (
          <Topics updateTopic={updateRoundTwoTopic} topic={roundTwoTopic} />
        ) : (
          <></>
        )}
        {showRoundThree ? (
          <Topics updateTopic={updateRoundThreeTopic} topic={roundThreeTopic} />
        ) : (
          <></>
        )}

        <input type="submit" value="Create quiz!" />
      </form>
    </>
  );
};

export default CreatePage;

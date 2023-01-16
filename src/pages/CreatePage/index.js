// CreatePage webpage

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

  const [easyActive, setEasyActive] = useState(false);
  const [mediumActive, setMediumActive] = useState(false);
  const [hardActive, setHardActive] = useState(false);

  const [roundOneActive, setRoundOneActive] = useState(true);
  const [roundTwoActive, setRoundTwoActive] = useState(false);
  const [roundThreeActive, setRoundThreeActive] = useState(false);

  console.log([roundOneTopic, roundTwoTopic, roundThreeTopic]);

  const handleRoundOne = () => {
    if (!showRoundOne) {
      setShowRoundOne(true);
      setShowRoundTwo(false);
      setShowRoundThree(false);

      setRoundOneActive(true);
      setRoundTwoActive(false);
      setRoundThreeActive(false);
    }
  };

  const handleRoundTwo = () => {
    if (!showRoundTwo) {
      setShowRoundOne(false);
      setShowRoundTwo(true);
      setShowRoundThree(false);

      setRoundOneActive(false);
      setRoundTwoActive(true);
      setRoundThreeActive(false);
    }
  };

  const handleRoundThree = () => {
    if (!showRoundThree) {
      setShowRoundOne(false);
      setShowRoundTwo(false);
      setShowRoundThree(true);

      setRoundOneActive(false);
      setRoundTwoActive(false);
      setRoundThreeActive(true);
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

  // HandleClicks
  const handleClickEasy = () => {
    setEasyActive(true);
    setMediumActive(false);
    setHardActive(false);
  };

  const handleClickMedium = () => {
    setEasyActive(false);
    setMediumActive(true);
    setHardActive(false);
  };

  const handleClickHard = () => {
    setEasyActive(false);
    setMediumActive(false);
    setHardActive(true);
  };

  const renderRoundButtonClassNames = (activeRound) => {
    if (activeRound) {
      if (easyActive) {
        return "round-button round-button-easy-active";
      }
      if (mediumActive) {
        return "round-button round-button-medium-active";
      }
      if (hardActive) {
        return "round-button round-button-hard-active";
      }
      return "round-button round-button-easy-active";
    } else if (!activeRound) {
      if (easyActive) {
        return "round-button round-button-easy";
      }
      if (mediumActive) {
        return "round-button round-button-medium";
      }
      if (hardActive) {
        return "round-button round-button-hard";
      }
      return "round-button round-button-easy";
    }
  };

  return (
    <div className="create-page">
      <form>
        <div className="select-difficulty-container">
          <h2>Select difficulty</h2>
          <div className="difficulty-buttons-container">
            <input
              type="button"
              className={
                easyActive
                  ? "difficulty-button easy-button-clicked"
                  : "difficulty-button easy-button"
              }
              value="Easy"
              onClick={handleClickEasy}
            />
            <input
              type="button"
              className={
                mediumActive
                  ? "difficulty-button medium-button-clicked"
                  : "difficulty-button medium-button"
              }
              value="Medium"
              onClick={handleClickMedium}
            />
            <input
              type="button"
              className={
                hardActive
                  ? "difficulty-button hard-button-clicked"
                  : "difficulty-button hard-button"
              }
              value="Hard"
              onClick={handleClickHard}
            />
          </div>
        </div>
        <div className="select-round-container">
          <h2>Select 3 topics</h2>
          <div className="round-buttons-container">
            <input
              className={renderRoundButtonClassNames(roundOneActive)}
              onClick={handleRoundOne}
              type="button"
              value="Round 1"
            />
            <input
              className={renderRoundButtonClassNames(roundTwoActive)}
              onClick={handleRoundTwo}
              type="button"
              value="Round 2"
            />
            <input
              className={renderRoundButtonClassNames(roundThreeActive)}
              onClick={handleRoundThree}
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

        <input type="submit" className="submit-button" value="Create quiz!" />
      </form>
    </div>
  );
};

export default CreatePage;

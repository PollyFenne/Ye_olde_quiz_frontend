// CreatePage webpage

import React, { useState } from "react";

import Topics from "../../components/Topics";
import Banner from "../../components/Banner";

import "./styles.css";



const CreatePage = () => {
  const [color, setColor] = useState("#6db4b0");

  // const [showRoundOne, setShowRoundOne] = useState(true);
  // const [showRoundTwo, setShowRoundTwo] = useState(false);
  // const [showRoundThree, setShowRoundThree] = useState(false);

  const [roundShown, setRoundShown] = useState([true, false, false])

  // const [roundOneTopic, setRoundOneTopic] = useState("");
  // const [roundTwoTopic, setRoundTwoTopic] = useState("");
  // const [roundThreeTopic, setRoundThreeTopic] = useState("");

  const [topics, setTopics] = useState(["", "", ""])

  const [easyActive, setEasyActive] = useState(false);
  const [mediumActive, setMediumActive] = useState(false);
  const [hardActive, setHardActive] = useState(false);

  const [roundOneActive, setRoundOneActive] = useState(true);
  const [roundTwoActive, setRoundTwoActive] = useState(false);
  const [roundThreeActive, setRoundThreeActive] = useState(false);

  // console.log([roundOneTopic, roundTwoTopic, roundThreeTopic]);
  console.log(topics)

  const makeRoundHandler = (index) => {
    return () => {
      if (!roundShown[index]) {

        const newRoundShown = [...roundShown];
        newRoundShown[index] = true;
        for (let i = 0; i < roundShown.length; i++) {
          if (i == index) {
            continue
          }
          newRoundShown[i] = false;
        }
  
        setRoundShown(newRoundShown);
      }
    }
  }

  const handleRoundOne = makeRoundHandler(0);
  // const handleRoundOne = () => {
  //   if (!showRoundOne) {
  //     setShowRoundOne(true);
  //     setShowRoundTwo(false);
  //     setShowRoundThree(false);

  //     setRoundOneActive(true);
  //     setRoundTwoActive(false);
  //     setRoundThreeActive(false);
  //   }
  // };


  const handleRoundTwo = makeRoundHandler(1);
  // const handleRoundTwo = () => {
  //   if (!showRoundTwo) {
  //     setShowRoundOne(false);
  //     setShowRoundTwo(true);
  //     setShowRoundThree(false);

  //     setRoundOneActive(false);
  //     setRoundTwoActive(true);
  //     setRoundThreeActive(false);
  //   }
  // };

  const handleRoundThree = makeRoundHandler(2);
  // const handleRoundThree = () => {
  //   if (!showRoundThree) {
  //     setShowRoundOne(false);
  //     setShowRoundTwo(false);
  //     setShowRoundThree(true);

  //     setRoundOneActive(false);
  //     setRoundTwoActive(false);
  //     setRoundThreeActive(true);
  //   }
  // };

  // this could easily just be a function that takes two args: const updateTopicForRound = (round, topic) => { ... }
  const makeTopicHandler = (index) => {
    return (topic) => {
      const newTopics = [...topics];
      newTopics[index] = topic;
      setTopics(newTopics);
    }
  }

  const updateRoundOneTopic = makeTopicHandler(0);
  // const updateRoundOneTopic = (topic) => {
  //   setRoundOneTopic(topic);
  // };

  const updateRoundTwoTopic = makeTopicHandler(1);
  // const updateRoundTwoTopic = (topic) => {
  //   setRoundTwoTopic(topic);
  // };

  const updateRoundThreeTopic = makeTopicHandler(2);
  // const updateRoundThreeTopic = (topic) => {
  //   setRoundThreeTopic(topic);
  // };

  // HandleClicks
  const handleClickEasy = () => {
    setEasyActive(true);
    setMediumActive(false);
    setHardActive(false);

    setColor("#6db4b0");
  };

  const handleClickMedium = () => {
    setEasyActive(false);
    setMediumActive(true);
    setHardActive(false);

    setColor("#e2ae47");
  };

  const handleClickHard = () => {
    setEasyActive(false);
    setMediumActive(false);
    setHardActive(true);

    setColor("#c84639");
  };

  const setRoundButtonClassNames = (activeRound) => {
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
    <>
      <Banner isCreate={true} />
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
                className={setRoundButtonClassNames(roundOneActive)}
                onClick={handleRoundOne}
                type="button"
                value="Round 1"
              />
              <input
                className={setRoundButtonClassNames(roundTwoActive)}
                onClick={handleRoundTwo}
                type="button"
                value="Round 2"
              />
              <input
                className={setRoundButtonClassNames(roundThreeActive)}
                onClick={handleRoundThree}
                type="button"
                value="Round 3"
              />
            </div>
          </div>
          {roundShown[0] ? (
            <Topics
              color={color}
              updateTopic={updateRoundOneTopic}
              topic={topics[0]}
            />
          ) : (
            <></>
          )}
          {roundShown[1] ? (
            <Topics
              color={color}
              updateTopic={updateRoundTwoTopic}
              topic={topics[1]}
            />
          ) : (
            <></>
          )}
          {roundShown[2] ? (
            <Topics
              color={color}
              updateTopic={updateRoundThreeTopic}
              topic={topics[2]}
            />
          ) : (
            <></>
          )}
          <input type="submit" className="submit-button" value="Create quiz!" />
        </form>
      </div>
    </>
  );
};

export default CreatePage;

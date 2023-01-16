// HOMEPAGE

import React from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../../components/Banner";

import ButtonControl from "../../components/ButtonControl";
import HighScoreCard from "../../components/HighScoreCard";
import LastActiveCard from "../../components/LastActiveCard";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const createQuiz = () => {
    navigate("/create");
  };

  return (
    <>
      <Banner />
      <div className="home-content">
        <div className="buttons-container">
          <ButtonControl
            buttonHandler={createQuiz}
            buttonText={"Create a quiz!"}
          />
          <ButtonControl buttonText={"Join a quiz!"} />
        </div>
        <HighScoreCard />
        <LastActiveCard />
      </div>
    </>
  );
};

export default Home;

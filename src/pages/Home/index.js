// HOMEPAGE

import React from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../../components/Banner";

import ButtonControl from "../../components/ButtonControl";
import HighScoreCard from "../../components/HighScoreCard";
import LastActiveCard from "../../components/LastActiveCard";

import "./Home.css";

const Home = () => {
  const sessionToken = localStorage.getItem("session");
  const navigate = useNavigate();

  const createQuiz = () => {
    if (sessionToken) navigate("/create");
    else navigate("/login");
  };

  const joinGame = () => {
    if (sessionToken) navigate("/join");
    else navigate("/login");
  };

  return (
    <div className="main">
      <Banner isHome={true} />
      <div className="home-content">
        <div className="buttons-container">
          <ButtonControl
            buttonHandler={createQuiz}
            buttonText={"Create a quiz!"}
          />
          <ButtonControl buttonHandler={joinGame} buttonText={"Join a quiz!"} />
        </div>
        <div className="cards">
          <HighScoreCard />
          <LastActiveCard />
        </div>
      </div>
    </div>
  );
};

export default Home;

// GAME PAGE

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import FetchQuiz from "../../components/FetchQuiz";

const GamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const gameInfo = location.state.gameInfo;
  const admin = location.state.admin;

  return (
    <>
      <h1>Gamepage</h1>
      <FetchQuiz allInfo={location.state} />
    </>
  );
};

export default GamePage;

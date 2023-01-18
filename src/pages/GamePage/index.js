// GAME PAGE

import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Banner from "../../components/Banner";
import FetchQuiz from "../../components/FetchQuiz";
import Timer from "../../components/Timer";
import Modal from "../../components/Modal";
import { SocketContext } from "../../socket";
import "./styles.css";

const GamePage = () => {
  const [userscore, setUserScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [waiting, setWaiting] = useState("");

  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    socket.on("wait-for-others", (usersCompleted, totalUsers) => {
      setWaiting(`Waiting for others... ${usersCompleted}/${totalUsers}`);
    });

    socket.on("next-round", (scores) => {
      socket.emit("leave-waiting", location.state.gameInfo.join_code);
      console.log(scores.sort((a, b) => (a.userscore > b.userscore ? 1 : -1)));
      // Hide modal
      // setShowModal(false);
      // Hide current round

      // Show leader for 3 seconds ?

      // Show next round
    });
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    const inputs = document.querySelectorAll("input[type=radio]:checked");
    inputs.forEach((input) => {
      score += parseInt(input.value);
    });
    setUserScore(score);
    console.log(score);
    setShowModal(true);
    socket.emit("user-complete", location.state.gameInfo.join_code, {
      socket_id: socket.id,
      userscore,
    });
  };

  const handleTimerSubmit = () => {
    let score = 0;
    const inputs = document.querySelectorAll("input[type=radio]:checked");
    inputs.forEach((input) => {
      score += parseInt(input.value);
    });
    setUserScore(score);
    console.log(userscore);
    setShowModal(true);
    socket.emit("user-complete", location.state.gameInfo.join_code, {
      socket_id: socket.id,
      userscore,
    });
  };

  console.log("gamepage", location.state);
  return (
    <div className="gameMain">
      <Banner />
      <div className="gameMainContent">
        <Timer handleTimerSubmit={handleTimerSubmit} />
        <FetchQuiz allInfo={location.state} handleSubmit={handleSubmit} />
      </div>
      <Modal showModal={showModal} waiting={waiting} />
    </div>
  );
};

export default GamePage;

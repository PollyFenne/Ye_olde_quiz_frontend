// GAME PAGE

import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Banner from "../../components/Banner";
import FetchQuiz from "../../components/FetchQuiz";
import Timer from "../../components/Timer";
import Modal from "../../components/Modal";
import ShowResultModal from "../../components/showResultModal";
import { SocketContext } from "../../socket";
import "./styles.css";

const GamePage = () => {
  const [round, setRound] = useState(1);
  const [isRoundComplete, setIsRoundComplete] = useState(false);

  const [userscore, setUserScore] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [waiting, setWaiting] = useState("");

  const [showResultModal, setShowResultModal] = useState(false);
  const [allScores, setAllScores] = useState([]);

  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    socket.on("wait-for-others", (usersCompleted, totalUsers) => {
      setWaiting(`waiting for others... ${usersCompleted}/${totalUsers}`);
    });

    socket.on("next-round", (scores) => {
      socket.emit("leave-waiting", location.state.gameInfo.join_code);

      setAllScores(scores);

      console.log("testing");
      // Hide modal
      setShowModal(false);
      setShowResultModal(true);
      setTimeout(() => {
        setIsRoundComplete(true);
        setShowResultModal(false);
        setUserScore(null);
      }, 3000);
    });
  }, [socket]);

  useEffect(() => {
    if (userscore != null) {
      socket.emit("user-complete", location.state.gameInfo.join_code, {
        socket_id: socket.id,
        userscore,
      });
    }
  }, [userscore]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let score = 0;
    const inputs = document.querySelectorAll("input[type=radio]:checked");
    inputs.forEach((input) => {
      score += parseInt(input.value);
    });
    setUserScore(score);
    setShowModal(true);
  };

  const handleTimerSubmit = () => {
    let score = 0;
    const inputs = document.querySelectorAll("input[type=radio]:checked");
    inputs.forEach((input) => {
      score += parseInt(input.value);
    });
    setUserScore(score);
    setShowModal(true);
  };

  useEffect(() => {
    setIsRoundComplete(false);
  }, [round]);

  useEffect(() => {
    if (isRoundComplete) {
      setRound(round + 1);
    }
  }, [isRoundComplete]);

  return (
    <div className="gameMain">
      <Banner />
      <div className="gameMainContent">
        <Timer
          handleTimerSubmit={handleTimerSubmit}
          isRoundComplete={isRoundComplete}
        />
        <FetchQuiz
          allInfo={location.state}
          handleSubmit={handleSubmit}
          round={round}
        />
      </div>
      {showModal && <Modal waiting={waiting} />}
      {showResultModal && <ShowResultModal scores={allScores} />}
    </div>
  );
};

export default GamePage;

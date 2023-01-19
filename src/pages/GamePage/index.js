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

  const [userComplete, setUserComplete] = useState(false)
  const [userscore, setUserScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [waiting, setWaiting] = useState("");

  const [showResultModal, setShowResultModal] = useState(false);
  const [showFinalScores, setFinal] = useState(false);
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

      setAllScores(scores.sort((a, b) => { return b.userscore - a.userscore}));

      console.log("testing");
      // Hide modal
      setShowModal(false);
      setShowResultModal(true);
      setTimeout(() => {
        // move to next round
        setUserComplete(false);
        setIsRoundComplete(true);
        setShowResultModal(false);
      }, 3000);
    });

    socket.on("waiting-for-scores", () => {
      console.log("waiting for all scores")
    })

    socket.on("all-scores", (finalScores) => {
      setAllScores(finalScores.sort((a, b) => { return b.userscore - a.userscore}))
      setFinal(true)
      setShowResultModal(true)
      setTimeout(() => {

      }, 600000)
    })
  }, [socket]);

  useEffect(() => {
    if (userComplete) {
      socket.emit("user-complete", location.state.gameInfo.join_code, {
        socket_id: socket.id,
        userscore,
      });
    }
  }, [userComplete]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let score = 0;
    const inputs = document.querySelectorAll("input[type=radio]:checked");
    inputs.forEach((input) => {
      score += parseInt(input.value);
    });
    setUserComplete(true)
    setUserScore(userscore + score);
    setShowModal(true);
  };

  const handleTimerSubmit = () => {
    let score = 0;
    const inputs = document.querySelectorAll("input[type=radio]:checked");
    inputs.forEach((input) => {
      score += parseInt(input.value);
    });
    setUserComplete(true)
    setUserScore(lastRoundScore + score);
    setShowModal(true);
  };

  useEffect(() => {
    setIsRoundComplete(false);
  }, [round]);

  useEffect(() => {
    // if round >= 3 then quiz is done
    if (round >= 3){
      socket.emit("pass-finalscores", location.state.gameInfo.join_code, {
        socket_id: socket.id,
        userscore,
      })
    }
    else if (isRoundComplete) {
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
      {showResultModal && <ShowResultModal scores={allScores} finalResults={showFinalScores}/>}
    </div>
  );
};

export default GamePage;

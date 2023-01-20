// GAME PAGE

import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Banner from "../../components/Banner";
import FetchQuiz from "../../components/FetchQuiz";
import Modal from "../../components/Modal";
import ShowResultModal from "../../components/showResultModal";
import { SocketContext } from "../../socket";
import "./styles.css";

const url = "http://localhost:3000";

const GamePage = () => {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state.username;

  const [round, setRound] = useState(1);
  const [isRoundComplete, setIsRoundComplete] = useState(false);
  const [roundIDs, setRoundIDs] = useState(location.state.round_ids);
  const [roundScore, setRoundScore] = useState(0);

  const [correctAnswers, setCorrectAnswers] = useState([]);

  const [userComplete, setUserComplete] = useState(false);
  const [userscore, setUserScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [waiting, setWaiting] = useState("");

  const [showResultModal, setShowResultModal] = useState(false);

  const [allScores, setAllScores] = useState([]);

  useEffect(() => {
    const updateScores = async () => {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("session"),
        },
        body: JSON.stringify({
          score: roundScore,
        }),
      };

      try {
        const response = await fetch(
          `${url}/scores/${roundIDs[round]}`,
          options
        );
        const data = await response.json();
        if (response.status == 200) {
          console.log(data);
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const callUpdateScores = async () => {
      await updateScores();
    };

    callUpdateScores();
  }, [roundScore]);

  useEffect(() => {
    socket.on("wait-for-others", (usersCompleted, totalUsers) => {
      setWaiting(`waiting for others... ${usersCompleted}/${totalUsers}`);
    });

    socket.on("next-round", (scores) => {
      socket.emit("leave-waiting", location.state.gameInfo.join_code);

      setAllScores(
        scores.sort((a, b) => {
          return b.userscore - a.userscore;
        })
      );

      console.log("testing");
      // Hide modal
      setShowModal(false);
      setShowResultModal(true);
      setTimeout(() => {
        // move to next round
        setUserComplete(false);
        setIsRoundComplete(true);
        setShowResultModal(false);
        const buttons = document.querySelectorAll("input[type=radio]:checked");
        buttons.forEach((button) => {
          button.checked = false;
        });
      }, 8000);
    });

    socket.on("waiting-for-scores", (usersSent, totalUsers) => {
      console.log("waiting for all scores");
      setWaiting(`Waiting for others... ${usersSent}/${totalUsers}`);
    });

    socket.on("redirect-to-results", (finalScores) => {
      setAllScores(
        finalScores.sort((a, b) => {
          return b.userscore - a.userscore;
        })
      );

      setShowModal(false);
      setShowResultModal(true);
      setTimeout(() => {
        navigate("/results", {
          state: { gameInfo: location.state.gameInfo, finalScores, username },
        });
      }, 8000);
    });
  }, [socket]);

  useEffect(() => {
    if (userComplete && round < 3) {
      socket.emit("user-complete", location.state.gameInfo.join_code, {
        username: location.state.username,
        userscore,
      });
    } else if (userComplete && round >= 3) {
      console.log({
        username: location.state.username,
        userscore,
      });

      console.log("round > 3");
      socket.emit("pass-finalscores", location.state.gameInfo.join_code, {
        username: location.state.username,
        socket_id: socket.id,
        userscore,
      });
    }
  }, [userComplete]);

  const handleSubmit = async (e, answers) => {
    e.preventDefault();
    console.log(answers);
    setCorrectAnswers(answers);
    let score = 0;
    const inputs = document.querySelectorAll("input[type=radio]:checked");
    inputs.forEach((input) => {
      score += parseInt(input.value);
    });
    setRoundScore(score);
    setUserComplete(true);
    setUserScore(userscore + score);
    setShowModal(true);
  };

  const handleTimerSubmit = (answers) => {
    console.log(answers);
    setCorrectAnswers(answers);
    let score = 0;
    const inputs = document.querySelectorAll("input[type=radio]:checked");
    inputs.forEach((input) => {
      score += parseInt(input.value);
    });
    setRoundScore(score);
    setUserComplete(true);
    setUserScore(userscore + score);
    setShowModal(true);
  };

  useEffect(() => {
    setIsRoundComplete(false);
  }, [round]);

  useEffect(() => {
    // if round >= 3 then quiz is done
    if (isRoundComplete && round < 3) {
      setRound(round + 1);
    }
  }, [isRoundComplete]);

  return (
    <div className="gameMain">
      <Banner />
      <div className="gameMainContent">
        {/* <Timer
          handleTimerSubmit={handleTimerSubmit}
          isRoundComplete={isRoundComplete}
        /> */}
        <FetchQuiz
          allInfo={location.state}
          handleSubmit={handleSubmit}
          round={round}
          isRoundComplete={isRoundComplete}
          handleTimerSubmit={handleTimerSubmit}
        />
      </div>
      {showModal && <Modal waiting={waiting} />}
      {showResultModal && (
        <ShowResultModal
          scores={allScores}
          round={round}
          correctAnswers={correctAnswers}
        />
      )}
    </div>
  );
};

export default GamePage;

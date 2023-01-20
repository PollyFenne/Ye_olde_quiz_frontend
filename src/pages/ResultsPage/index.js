import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SocketContext } from "../../socket";

import "./styles.css";

const url = "http://localhost:3000";

const ResultsPage = () => {
  const socket = useContext(SocketContext);
  const location = useLocation();
  const navigate = useNavigate();
  const gameInfo = location.state.gameInfo;
  const [won, setWon] = useState(false);
  const finalScores = location.state.finalScores;
  const username = location.state.username;
  const orderedScores = finalScores.sort((a, b) => {
    return b.userscore - a.userscore;
  });

  console.log("Results Page", gameInfo, finalScores);

  useEffect(() => {
    socket.emit("did-i-win", orderedScores[0].socket_id, gameInfo.join_code);

    const updateHighScore = async (score) => {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("session"),
        },
        body: JSON.stringify({ score: score }),
      };
      try {
        const response = await fetch(`${url}/users/`, options);
        const data = await response.json();
        if (response.status == 200) {
          console.log(data);
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const callUpdateHighScores = async () => {
      console.log("calling update");
      const index = finalScores.map((user) => user.username).indexOf(username);
      console.log(index);
      console.log(finalScores[index]);
      updateHighScore(finalScores[index].userscore);
    };

    callUpdateHighScores();
  }, []);

  useEffect(() => {
    socket.on("winner", () => {
      setWon(true);
    });

    socket.on("left-end-lobby", () => {
      navigate("/");
    });
  }, [socket]);

  const handleLeaveGame = () => {
    socket.emit("leave-end-lobby", gameInfo.join_code);
  };

  return (
    <div className="result-page">
      {won ? (
        <h1 className="winner-loser-message">Winner winner chicken dinner</h1>
      ) : (
        <h1 className="winner-loser-message">Loser, get smarter</h1>
      )}
      <h1 className="final-result-message">Final results...</h1>
      <ul className="final-score">
        {orderedScores.map((finalScore, i) => {
          return (
            <li key={i}>
              {finalScore.username}: {finalScore.userscore}/30
            </li>
          );
        })}
      </ul>
      <button
        onClick={handleLeaveGame}
        className="leave-game-button"
        type="button"
      >
        Leave game
      </button>
    </div>
  );
};

export default ResultsPage;

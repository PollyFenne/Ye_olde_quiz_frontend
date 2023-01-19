import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SocketContext } from "../../socket";

import './styles.css'

const ResultsPage = () => {
  const socket = useContext(SocketContext);
  const location = useLocation();
  const navigate = useNavigate();
  const gameInfo = location.state.gameInfo;
  const [won, setWon] = useState(false);
  const finalScores = location.state.finalScores;
  const orderedScores = finalScores.sort((a, b) => {
    return b.userscore - a.userscore;
  });

  console.log("Results Page", gameInfo, finalScores);

  useEffect(() => {
    console.log("i sent");
    socket.emit("did-i-win", orderedScores[0].socket_id, gameInfo.join_code);
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
      <h1 className="final-result-message">Final Results...</h1>
      <ul className="final-score">
        {orderedScores.map((finalScore) => {
          return (
            <li>
              {finalScore.username}: {finalScore.userscore}/30
            </li>
          );
        })}
      </ul>
      <button onClick={handleLeaveGame} className="leave-game-button" type="button">
        Leave game
      </button>
    </div>
  );
};

export default ResultsPage;

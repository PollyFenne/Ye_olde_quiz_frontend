import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SocketContext } from "../../socket";

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
    <div className="modal">
      {won ? (
        <h1>Winner winner chicken dinner</h1>
      ) : (
        <h1>Loser, get smarter</h1>
      )}
      <h1>Final Results...</h1>
      <ul>
        {orderedScores.map((finalScore) => {
          return (
            <li>
              {finalScore.username}: {finalScore.userscore}/30
            </li>
          );
        })}
      </ul>
      <button onClick={handleLeaveGame} type="button">
        Leave game
      </button>
    </div>
  );
};

export default ResultsPage;

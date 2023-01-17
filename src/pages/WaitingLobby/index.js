// Waiting lobby page

import React, { useState, useEffect, useContext } from "react";
import Banner from "../../components/Banner";
import { SocketContext } from "../../socket";
import { useLocation } from "react-router-dom";
import "./styles.css";

const url = "http://localhost:3000";

const WaitingLobby = () => {
  const socket = useContext(SocketContext);
  const [users, setUsers] = useState([]);
  //get admin_id from data
  const [admin, setAdmin] = useState("");
  const location = useLocation();
  const joinCode = location.state.createGameInfo.join_code;
  const username = location.state.username;


  // Listing users in the lobby
  socket.on("add-player", () => {

  })

  const handleStartGame = () => {
    if (admin === socket.id) {
      socket.emit("start-game");
    }
  };

  const renderUsers = () => {
    users.map((user) => {
      return <p>{user} has joined the lobby</p>;
    });
  };

  return (
    <div className="lobbyMain">
      <Banner displayBack={true} />
      <div className="joincode">
        <h1>Join Code: {joinCode}</h1>
        <p>Share this code with your friends</p>
      </div>
      <div className="lobby">
        <h2>In the waiting room...</h2>
        {renderUsers()}
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default WaitingLobby;

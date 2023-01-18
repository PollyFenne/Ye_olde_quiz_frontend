// Waiting lobby page

import React, { useState, useEffect, useContext } from "react";
import Banner from "../../components/Banner";
import { SocketContext } from "../../socket";
import { useLocation } from "react-router-dom";
import "./styles.css";
import UsersList from "../../components/UsersList";

const url = "http://localhost:3000";

const WaitingLobby = () => {
  const socket = useContext(SocketContext);
  const [users, setUsers] = useState([]);
  //get admin_id from data
  const [admin, setAdmin] = useState("");
  const location = useLocation();

  // console.log(location.state);
  const joinCode = location.state.join_code;

  useEffect(() => {
    socket.on("update-users", (socketIDs) => {
      console.log("new socket ids", socketIDs);
      // console.log(socketIds);
      setUsers(socketIDs);
    });
  }, [socket]);

  useEffect(() => {
    console.log("in lobby", users);
  }, [users]);


  const handleStartGame = () => {
    if (admin === socket.id) {
      socket.emit("start-game");
    }
  };

  return (
    <div className="lobbyMain">
      <Banner displayBack={true} />
      <div className="joincode">
        <h1>Join Code: {joinCode}</h1>
        <p>Share this code with your friends</p>
      </div>
      <UsersList users={users} />
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default WaitingLobby;

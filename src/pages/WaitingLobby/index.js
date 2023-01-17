import React, { useState, useEffect, useContext } from "react";
import Banner from "../../components/Banner";
import { SocketContext } from "../../socket";
import { useLocation } from "react-router-dom";
import "./styles.css";

const WaitingLobby = () => {
  const socket = useContext(SocketContext);
  const [users, setUsers] = useState([]);
  //get admin_id from data
  const [admin, setAdmin] = useState("");
  const location = useLocation();

  const joinCode = location.state.join_code;

  useEffect(() => {
    socket.on("update users", (updatedUsers) => {
      setUsers([...updatedUsers]);
    });

    socket.on("admin", (adminId) => {
      setAdmin(adminId);
    });

    return () => {
      socket.off("update users");
      socket.off("admin");
    };
  }, []);

  const handleStartGame = () => {
    if (admin === socket.id) {
      socket.emit("start-game");
    }
  };

  const renderUsers = () => {
    users.map((user) => {
      return <p>{user}</p>;
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

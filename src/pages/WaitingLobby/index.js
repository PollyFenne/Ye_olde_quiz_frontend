import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
const { socket } = useContext(SocketContext);

const WaitingLobby = () => {
  const [users, setUsers] = setState();
  const [admin, setAdmin] = setState();

  useEffect(() => {
    socket.on("update users", (updatedUsers) => {
      setUsers([...updatedUsers]);
    });

    return () => {
      socket.off("update users");
    };
  });

  const handleStartGame = () => {
    if (admin === socket.id) {
      socket.emit("start game");
    }
  };

  return (
    <div className="lobbyMain">
      <Banner />
      <div className="lobby">
        <h3>In the waiting room:</h3>
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default WaitingRoom;

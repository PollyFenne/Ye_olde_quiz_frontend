// Waiting lobby page

import React, { useState, useEffect, useContext } from "react";
import Banner from "../../components/Banner";
import { SocketContext } from "../../socket";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import UsersList from "../../components/UsersList";

const url = "http://localhost:3000";

const WaitingLobby = () => {
  const socket = useContext(SocketContext);
  const [users, setUsers] = useState([]);
  const [startGame, setStartGame] = useState(false);
  //get admin_id from data
  const [admin, setAdmin] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location.state);
  const gameinfo = location.state;
  console.log("lobby", gameinfo);
  const joinCode = location.state.join_code;

  console.log("admin", admin);

  useEffect(() => {
    socket.on("set-admin", (isAdmin) => {
      console.log("isAdmin", isAdmin);
      setAdmin(isAdmin);
    });

    socket.on("disconnect-user", (socket_id, message) => {
      const findUser = [...users];
      const newUsers = findUser.splice(findUser.indexOf(socket_id), 1);
      setUsers(newUsers);
      navigate("/join");
    });

    socket.on("update-users", (socketIDs) => {
      console.log("new socket ids", socketIDs);
      // console.log(socketIds);
      setUsers(socketIDs);
    });

    // socket.on("game-starting", () => {
    //   navigate("/game");
    // });
  }, [socket]);

  useEffect(() => {
    socket.on("game-starting", () => {
      console.log("handleStartGame");
      navigate("/game", { state: gameinfo });
    });
  }, [startGame]);

  const handleLeave = async () => {
    await socket.emit("leave-game", gameinfo);
  };

  const handleStartGame = async () => {
    await socket.emit("start-game", gameinfo);
    setStartGame(true);
    navigate("/game", { state: gameinfo });
  };

  return (
    <div className="lobbyMain">
      <Banner displayBack={true} />
      <div className="joincode">
        <h1>Join Code: {joinCode}</h1>
        <p>Share this code with your friends</p>
      </div>
      <div className="waiting-room-container">
        <UsersList users={users} />
        <button
          onClick={handleLeave}
          className="leave-lobby-button"
          type="button"
        >
          Leave lobby
        </button>
      </div>
      {admin && <button onClick={handleStartGame}>Start Game</button>}
    </div>
  );
};

export default WaitingLobby;

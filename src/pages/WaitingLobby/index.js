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
  // const [username, setUsername] = useState(null);
  const [users, setUsers] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [gameID, setGameID] = useState(null);
  const [gotGameID, setGotGameID] = useState(false);
  //get admin_id from data
  const [admin, setAdmin] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location.state);
  const gameInfo = location.state.createGameInfo;
  // console.log("lobby", gameInfo);
  const username = location.state.username;
  const joinCode = location.state.createGameInfo.join_code;

  useEffect(() => {
    if (admin) {
      socket.emit("pass-game-id", {
        game_id: location.state.createGameInfo.game_id,
        join_code: joinCode,
      });
      console.log("emitted game id");
    }
  }, [users]);

  useEffect(() => {
    socket.on("set-admin", (isAdmin) => {
      // console.log("isAdmin", isAdmin);
      setAdmin(isAdmin);
    });

    socket.on("disconnect-user", (socket_id, users) => {
      // const findUser = [...users];
      // const newUsers = findUser.splice(findUser.indexOf(socket_id), 1);
      // setUsers(newUsers);
      navigate("/join");
    });

    socket.on("update-users", (users) => {
      // console.log("new socket ids", socketIDs);
      // console.log(socketIds);
      setUsers(users);
    });

    socket.on("receive-game-id", (game_id) => {
      console.log("received");
      gameInfo.game_id = game_id;
    });

    console.log(gameInfo);

    // socket.on("game-starting", () => {
    //   navigate("/game");
    // });
  }, [socket]);

  useEffect(() => {
    const createScores = async () => {
      // const options = {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: localStorage.getItem("session"),
      //   },
      //   body:
      // }
    };
  }, [gotGameID]);

  useEffect(() => {
    socket.on("game-starting", () => {
      // console.log("handleStartGame");
      navigate("/game", { state: { gameInfo, admin, username } });
    });
  }, [startGame]);

  const handleLeave = async () => {
    await socket.emit("leave-game", gameInfo, username);
  };

  const handleStartGame = async () => {
    await socket.emit("start-game", gameInfo);
    setStartGame(true);

    navigate("/game", { state: { gameInfo, admin, username } });
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
      {admin && <button onClick={handleStartGame} className="start-game-button">Start Game</button>}
    </div>
  );
};

export default WaitingLobby;

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
  // const [userID, setUserId] = useState(null);
  const [gotGameID, setGotGameID] = useState(false);
  const [roundIDs, setRoundIDs] = useState(null);
  // const [scoreIDs, ]
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
      setGotGameID(true);
      gameInfo.game_id = game_id;
    });

    console.log(gameInfo);

    // socket.on("game-starting", () => {
    //   navigate("/game");
    // });
  }, [socket]);

  useEffect(() => {
    const findRoundIDs = async () => {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("session"),
        },
      };
      try {
        const response = await fetch(
          `${url}/rounds/${gameInfo.game_id}`,
          options
        );
        const data = await response.json();
        const roundIDs = data.map((r) => r.round_id);
        if (response.status == 200) {
          setRoundIDs(roundIDs);
        }
      } catch (err) {
        console.warn(err);
      }
    };

    findRoundIDs();
  }, [gotGameID]);

  useEffect(() => {
    const createScores = async (pass_round_id) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("session"),
        },
        body: JSON.stringify({
          game_id: gameInfo.game_id,
          round_id: pass_round_id,
        }),
      };
      try {
        const response = await fetch(`${url}/scores`, options);
        const data = await response.json();
        if (response.status == 201) {
          console.log(data);
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const callCreateScores = async () => {
      if (roundIDs != null) {
        await Promise.all(
          roundIDs.map(async (round_id) => {
            console.log(round_id);
            await createScores(round_id);
          })
        );
      }
    };

    callCreateScores();
  }, [roundIDs]);

  useEffect(() => {
    socket.on("game-starting", () => {
      // console.log("handleStartGame");
      navigate("/game", {
        state: { gameInfo, admin, username, round_ids: roundIDs },
      });
    });
  }, [startGame]);

  const handleLeave = async () => {
    await socket.emit("leave-game", gameInfo, username);
  };

  const handleStartGame = async () => {
    await socket.emit("start-game", gameInfo);
    setStartGame(true);

    navigate("/game", {
      state: { gameInfo, admin, username, round_ids: roundIDs },
    });
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
      {admin && (
        <button onClick={handleStartGame} className="start-game-button">
          Start Game
        </button>
      )}
    </div>
  );
};

export default WaitingLobby;

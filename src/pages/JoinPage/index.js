// JOIN Game
import "./styles.css";
import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { SocketContext } from "../../socket";
import { useNavigate } from "react-router-dom";

import Banner from "../../components/Banner";

const url = "http://localhost:3000";

function JoinPage() {
  const [joinCode, setJoinCode] = useState("");
  const [username, setUsername] = useState(null);
  const socket = useContext(SocketContext);
  const sessionToken = localStorage.getItem("session");
  const navigate = useNavigate();

  useEffect(() => {
    const getUsername = async () => {
      try {
        const response = await fetch(`${url}/users/${sessionToken}`);
        const data = await response.json();
        console.log(data);
        setUsername(data.title);
      } catch (err) {
        console.log("no user logged in");
      }
    };

    getUsername();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("join-game", {
      join_code: joinCode,
      username,
    });
    socket.on("max-users-error", (message) => {
      navigate("/join");
      alert(message);
    });
    navigate("/waiting-lobby", {
      state: { createGameInfo: { join_code: joinCode }, username },
    });
  };

  return (
    <div className="joinMain">
      <Banner displayBack={true} />
      <form onSubmit={handleSubmit}>
        <div className="join-code">
          <label htmlFor="join" className="join-text">
            Enter join code:
          </label>
          <input
            type="text"
            name="join"
            placeholder="Enter join code"
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
          />
        </div>
        <button type="submit">Join</button>
      </form>
    </div>
  );
}

export default JoinPage;

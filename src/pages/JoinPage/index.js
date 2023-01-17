// JOIN Game
import "./styles.css";
import React, { useState } from "react";
import { useContext } from "react";
import { SocketContext } from "../../socket";
import { useNavigate } from "react-router-dom";

import Banner from "../../components/Banner";

function JoinPage() {
  const [joinCode, setJoinCode] = useState("");
  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("join-game", joinCode);
    navigate("/waiting-lobby", {
      state: { join_code: joinCode },
    });
  };

  return (
    <div className="joinMain">
      <Banner />
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

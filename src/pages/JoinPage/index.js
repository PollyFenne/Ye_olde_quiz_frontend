// JOIN Game
import "./styles.css";
import React, { useState } from "react";
import { useContext } from "react";
import { SocketContext } from "../../socket";

import Banner from "../../components/Banner";

function JoinPage() {
  const [joinCode, setJoinCode] = useState("");
  const socket = useContext(SocketContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("join-game", joinCode);
    navigate("/waiting-lobby", {
      state: { join_code: joinCode },
    });
  };

  return (
    <div className="main">
      <Banner />
      <form onSubmit={handleSubmit}>
        <label></label>
        <input
          type="text"
          placeholder="Enter join code"
          value={joinCode}
          onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
}

export default JoinPage;

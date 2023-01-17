import React, { useState } from "react";
import { useContext } from "react";
import { SocketContext } from "./socket";

function JoinForm() {
  const [joinCode, setJoinCode] = useState("");
  const socket = useContext(SocketContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("join", joinCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter join code"
        value={joinCode}
        onChange={(e) => setJoinCode(e.target.value)}
      />
      <button type="submit">Join</button>
    </form>
  );
}

export default JoinForm;

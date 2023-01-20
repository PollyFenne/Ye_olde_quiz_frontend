import React from "react";
import { useState } from "react";

import "./styles.css";

const url = "https://yeoldequiz.onrender.com";

const LastActiveCard = () => {
  const [lastActive, setLastActive] = useState(null);
  const sessionToken = localStorage.getItem("session");

  const getLastActive = async () => {
    try {
      const response = await fetch(`${url}/users/${sessionToken}`);
      const data = await response.json();
      setLastActive(data.active);
    } catch (err) {
      console.warn("no activity data");
    }
  };

  return (
    <div className="last-active-card">
      <h2>Last Active:</h2>
      <h2>{lastActive}</h2>
    </div>
  );
};

export default LastActiveCard;

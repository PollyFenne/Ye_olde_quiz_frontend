import React from "react";
import { useState, useEffect } from "react";

import "./styles.css";

const url = "https://yeoldequiz.onrender.com";

const HighScoreCard = () => {
  const [highScore, setHighScore] = useState(null);
  const sessionToken = localStorage.getItem("session");

  const getHighScore = async () => {
    try {
      const response = await fetch(`${url}/users/${sessionToken}`);
      const data = await response.json();
      setHighScore(data.highest_score);
    } catch (err) {
      console.log("no high score");
    }
  };

  useEffect(() => {
    getHighScore();
  }, [highScore]);

  return (
    <div className="high-score-card">
      <h2>High Score: {highScore}</h2>
    </div>
  );
};

export default HighScoreCard;

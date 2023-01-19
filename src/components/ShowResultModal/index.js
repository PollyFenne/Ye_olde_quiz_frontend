// Scores and answers after each round

import React from "react";
import "./styles.css";
import decodeHtml from "../../utils/helpers";

const ShowResultModal = ({ scores, round, correctAnswers }) => {
  const renderCorrectAnswers = () => {
    return (
      <ol className="correct-answers-list">
        {correctAnswers.map((answer) => {
          return <li>{decodeHtml(answer)}</li>;
        })}
      </ol>
    );
  };

  if (round == 1) {
    return (
      <div className="round-results-modal">
        <h2>Leaderboard</h2>
        <ul className="round-result-score">
          {scores.map((score, i) => (
            <li key={i}>
              {score.username}: {score.userscore}/10
            </li>
          ))}
        </ul>
        <div className="correct-answers">
          <h2>Answers</h2>
          {renderCorrectAnswers()}
        </div>
      </div>
    );
  } else if (round == 2) {
    return (
      <div className="round-results-modal">
        <h2>Leaderboard</h2>
        <ul className="round-result-score">
          {scores.map((score, i) => (
            <li key={i}>
              {score.username}: {score.userscore}/20
            </li>
          ))}
        </ul>
        <div className="correct-answers">
          <h2>Answers</h2>
          {renderCorrectAnswers()}
        </div>
      </div>
    );
  } else if (round == 3) {
    return (
      <div className="round-results-modal">
        <h2>Leaderboard</h2>
        <ul className="round-result-score">
          {scores.map((score, i) => (
            <li key={i}>
              {score.username}: {score.userscore}/30
            </li>
          ))}
        </ul>
        <div className="correct-answers">
          <h2>Answers</h2>
          {renderCorrectAnswers()}
        </div>
      </div>
    );
  }
};

export default ShowResultModal;

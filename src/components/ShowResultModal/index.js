// Results are each round

import React from "react";
import './styles.css'

const ShowResultModal = ({ scores, round, correctAnswers }) => {
  const renderCorrectAnswers = () => {
    return (
      <ol>
        {correctAnswers.map((answer) => {
          return <li>{answer}</li>;
        })}
      </ol>
    );
  };

  if (round == 1) {
    return (
      <div className="modal">
        <h1>Running total</h1>
        <ul>
          {scores.map((score, i) => (
            <li key={i}>
              {score.username}: {score.userscore}/10
            </li>
          ))}
        </ul>
        {renderCorrectAnswers()}
      </div>
    );
  } else if (round == 2) {
    return (
      <div className="modal">
        <h1>Running total</h1>
        <ul>
          {scores.map((score, i) => (
            <li key={i}>
              {score.username}: {score.userscore}/20
            </li>
          ))}
        </ul>
        {renderCorrectAnswers()}
      </div>
    );
  } else if (round == 3) {
    return (
      <div className="modal">
        <h1>Running total</h1>
        <ul>
          {scores.map((score, i) => (
            <li key={i}>
              {score.username}: {score.userscore}/30
            </li>
          ))}
        </ul>
        {renderCorrectAnswers()}
      </div>
    );
  }
};

export default ShowResultModal;

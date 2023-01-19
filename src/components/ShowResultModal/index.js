// Results are each round

import React from "react";
import './styles.css'

const ShowResultModal = ({ scores, finalResults }) => {
  console.log(scores, finalResults);

  return (
    <div className="round-results-modal">
      {finalResults ?? <h1>Final Results are:</h1>}
      <h2>Score after that round:</h2>
      <ul className="round-result-score">
        {scores.map((score, i) => (
          <li key={i}>
            {score.username}: {score.userscore}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowResultModal;

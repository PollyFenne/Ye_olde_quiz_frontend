import React from "react";

const ShowResultModal = ({ scores, finalResults }) => {
  console.log(scores, finalResults);

  return (
    <div className="modal">
      {finalResults ?? <h1>Final Results are:</h1>}
      <ul>
        {scores.map((score, i) => (
          <li key={i}>
            {score.socket_id}: {score.userscore}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowResultModal;

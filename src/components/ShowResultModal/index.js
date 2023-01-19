import React from "react";

const ShowResultModal = ({ scores, finalResults }) => {
  console.log(finalResults)

  return (
    <div className="modal">
      {finalResults ?? <h1>Final Results are:</h1>}
      <ul>
        {scores.map((score) => (
          <li>
            {score.socket_id}: {score.userscore}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowResultModal;

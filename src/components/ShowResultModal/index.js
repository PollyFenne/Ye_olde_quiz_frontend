import React from "react";

const ShowResultModal = ({ scores }) => {
  return (
    <div className="modal">
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

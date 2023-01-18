import React from "react";

const UsersList = ({ users }) => {
  console.log(users);
  return (
    <div className="lobby">
      <h2>In the waiting room...</h2>
      {users.map((user) => (
        <p>{user} has joined the lobby</p>
      ))}
    </div>
  );
};

export default UsersList;

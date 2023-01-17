const url = "http://localhost:3000";

export const createGame = async (gameData) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("session"),
    },
    body: JSON.stringify(gameData),
  };

  const response = await fetch(`${url}/games`, options);
};

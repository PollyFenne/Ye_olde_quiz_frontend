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
  try {
    const response = await fetch(`${url}/games`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
};

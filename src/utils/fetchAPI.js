const url = "https://yeoldequiz.onrender.com";

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

export const convertLevel = (level) => {
  switch (level) {
    case 1:
      return "easy";
    case 2:
      return "medium";
    case 3:
      return "hard";
    default:
      return "easy";
  }
};

export const convertTopics = (topicNo) => {
  switch (topicNo) {
    case "General Knowledge":
      return 9;
    case "Sports":
      return 21;
    case "Geography":
      return 22;
    case "History":
      return 23;
    case "Politics":
      return 24;
    case "Art":
      return 25;
    case "Film":
      return 11;
    case "Television":
      return 14;
    case "Literature":
      return 10;
    case "Music":
      return 12;
    case "Science and Nature":
      return 17;
    case "Celebrities":
      return 26;
  }
};

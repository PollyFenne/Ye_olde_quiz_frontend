// Fetching game data component
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import shuffleArray from "../ShuffleArray";
import CleanData from "../CleanData";
import { SocketContext } from "../../socket";
import { convertLevel, convertTopics } from "../../utils/fetchAPI";
import decodeHtml from "../../utils/helpers";
import "./styles.css";

// Needs to be a fetch
const gameInfo = {
  level: 3,
  topics: ["Film", "Geography", "History"],
};

// Defining url for each topic
const apiURLOne = `https://opentdb.com/api.php?amount=10&category=${convertTopics(
  gameInfo.topics[0]
)}&difficulty=${convertLevel(gameInfo.level)}`;

const apiURLTwo = `https://opentdb.com/api.php?amount=10&category=${convertTopics(
  gameInfo.topics[1]
)}&difficulty=${convertLevel(gameInfo.level)}`;

const apiURLThree = `https://opentdb.com/api.php?amount=10&category=${convertTopics(
  gameInfo.topics[2]
)}&difficulty=${convertLevel(gameInfo.level)}`;

// console.log(apiURLOne);

const FetchQuiz = ({ allInfo }) => {
  const socket = useContext(SocketContext);
  const [quizData, setQuizData] = useState([]);
  const [userscore, setUserScore] = useState(0);

  useEffect(() => {
    console.log("fetching...");
    // console.log(allInfo);
    if (allInfo.admin) {
      axios
        .get(apiURLOne)
        .then((response) => {
          socket.emit(
            "send-questions",
            response.data.results,
            allInfo.gameInfo.join_code
          );
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    socket.on("receive-questions", (questionsInfo) => {
      setQuizData(questionsInfo);
    });
  }, [socket]);

  console.log(quizData);
  //   if (quizData.length > 0) {
  //     console.log(decodeHtml(quizData[0].question));
  //   }

  const RenderQA = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      let score = 0;
      const inputs = document.querySelectorAll("input[type=radio]:checked");
      inputs.forEach((input) => {
        score += parseInt(input.value);
      });
      setUserScore(score);
      console.log(score);
    };

    return (
      <form className="question-form" onSubmit={handleSubmit}>
        {quizData.map((data, i) => {
          const choices = data.incorrect_answers.map((answer) =>
            decodeHtml(answer)
          );
          choices.push(decodeHtml(data.correct_answer));

          return (
            <div className="QA" key={i}>
              <h2>{decodeHtml(data.question)}</h2>
              <div className="choices">
                {shuffleArray(choices).map((choice, j) => (
                  <>
                    <input
                      type="radio"
                      value={choice == data.correct_answer ? 1 : 0}
                      key={j}
                      name={data.question}
                    />
                    <label>{choice}</label>
                  </>
                ))}
              </div>
            </div>
          );
        })}
        <button type="submit">Next Round</button>
      </form>
    );
  };

  return (
    <>
      <RenderQA />
    </>
  );
};

export default FetchQuiz;

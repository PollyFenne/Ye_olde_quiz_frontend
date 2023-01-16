import React, { useEffect } from "react";
import "./styles.css";

const Topics = ({ color, updateTopic, topic }) => {
  useEffect(() => {
    const topicButtons = document.querySelectorAll(".topic-button");
    topicButtons.forEach((button) => {
      if (topic == button.value) {
        button.style.backgroundColor = color;
        button.style.color = "#fff3e3";
      } else {
        button.style.backgroundColor = "transparent";
        button.style.color = color;
      }
    });
  });

  const handleRadioClick = (e) => {
    updateTopic(e.target.value);
  };

  const renderColorClass = () => {
    if (color == "#6db4b0") {
      return "topic-button topic-button-easy";
    }
    if (color == "#e2ae47") {
      return "topic-button topic-button-medium";
    }
    if (color == "#c84639") {
      return "topic-button topic-button-hard";
    }
  };

  return (
    <div className="topics-container">
      <ul className="topics">
        <li className="topic-list-item">
          <label htmlFor="general-knowledge"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="General Knowledge"
            id="general-knowledge"
            name="general-knowledge"
            onClick={handleRadioClick}
          />
        </li>
        <li className="topic-list-item">
          <label htmlFor="sports"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="Sports"
            id="sports"
            name="sports"
            onClick={handleRadioClick}
          />
        </li>
        <li className="topic-list-item">
          <label htmlFor="geography"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="Geography"
            id="geography"
            name="topics"
            onClick={handleRadioClick}
          />
        </li>
        <li className="topic-list-item">
          <label htmlFor="history"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="History"
            id="history"
            name="topics"
            onClick={handleRadioClick}
          />
        </li>
        <li className="topic-list-item">
          <label htmlFor="politics"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="Politics"
            id="politics"
            name="topics"
            onClick={handleRadioClick}
          />
        </li>
        <li className="topic-list-item">
          <label htmlFor="art"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="Art"
            id="art"
            name="topics"
            onClick={handleRadioClick}
          />
        </li>
        <li className="topic-list-item">
          <label htmlFor="film"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="Film"
            id="film"
            name="topics"
            onClick={handleRadioClick}
          />
        </li>
        <li className="topic-list-item">
          <label htmlFor="television"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="Television"
            id="television"
            name="topics"
            onClick={handleRadioClick}
          />
        </li>
        <li className="topic-list-item">
          <label htmlFor="literature"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="Literature"
            id="literature"
            name="topics"
            onClick={handleRadioClick}
          />
        </li>
        <li className="topic-list-item">
          <label htmlFor="music"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="Music"
            id="music"
            name="topics"
            onClick={handleRadioClick}
          />
        </li>
        <li className="topic-list-item">
          <label htmlFor="science-nature"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="Science-Nature"
            id="science-nature"
            name="topics"
            onClick={handleRadioClick}
          />
        </li>
        <li className="topic-list-item">
          <label htmlFor="celebrities"></label>
          <input
            className={renderColorClass()}
            type="button"
            value="Celebrities"
            id="celebrities"
            name="topics"
            onClick={handleRadioClick}
          />
        </li>
      </ul>
    </div>
  );
};

export default Topics;

// let labels = [];
// Array.from(button).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.preventDefault();
//     const clickedButton = button.value;
//     if (!isButtonClicked(clickedButton)) {
//       if (labels.length < 3) {
//         labels.push(clickedButton);
//         button.style.backgroundColor = "rgb(" + 54 + "," + 98 + "," + 121 + ")";
//       }
//     } else {
//       labels.splice(labels.indexOf(clickedButton), 1);
//       button.style.backgroundColor = "rgb(" + 71 + "," + 128 + "," + 157 + ")";
//     }
//     console.log(labels);
//   });
// });
// function isButtonClicked(clickedButton) {
//   for (let value of labels) {
//     if (value == clickedButton) {
//       return true;
//     }
//   }
//   return false;
// }

import React from "react";

const Topics = () => {
  return (
    <div>
      <ul>
        <li>
          <button type="button" value="General Knowledge">
            General Knowledge
          </button>
        </li>
        <li>
          <button type="button" value="Sports">
            Sports
          </button>
        </li>
        <li>
          <button type="button" value="Geography">
            Geography
          </button>
        </li>
        <li>
          <button type="button" value="History">
            History
          </button>
        </li>
        <li>
          <button type="button" value="Politics">
            Politics
          </button>
        </li>
        <li>
          <button type="button" value="Art">
            Art
          </button>
        </li>
        <li>
          <button type="button" value="Film">
            Film
          </button>
        </li>
        <li>
          <button type="button" value="Television">
            Television
          </button>
        </li>
        <li>
          <button type="button" value="Literature">
            Literature
          </button>
        </li>
        <li>
          <button type="button" value="Music">
            Music
          </button>
        </li>
        <li>
          <button type="button" value="Science and Nature">
            Science and Nature
          </button>
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

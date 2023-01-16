import React from "react";

const Topics = () => {
  return (
    <div>
      <ul>
        <li>
          <label htmlFor="knowledge" >General Knowledge</label>
          <input type="radio" value="General-Knowledge" id="knowledge" name="topics"/>
        </li>
        <li>
          <label htmlFor="sports" >Sports</label>
          <input type="radio" value="Sports" id="sports" name="topics"/>
        </li>
        <li>
          <label htmlFor="geography" >Geography</label>
          <input type="radio" value="Geography" id="geography" name="topics"/>
        </li>
        <li>
          <label htmlFor="history" >History</label>
          <input type="radio" value="History" id="history"name="topics"/>
        </li>
        <li>
          <label htmlFor="politics" >Politics</label>
          <input type="radio" value="Politics" id="politics"name="topics"/>
        </li>
        <li>
          <label htmlFor="art" >Art</label>
          <input type="radio" value="Art" id="art"name="topics"/>
        </li>
        <li>
          <label htmlFor="film" >Film</label>
          <input type="radio" value="Film" id="film"name="topics"/>
        </li>
        <li>
          <label htmlFor="television" >Television</label>
          <input type="radio" value="Television" id="television"name="topics"/>
        </li>
        <li>
          <label htmlFor="literature" >Literature</label>
          <input type="radio" value="Literature" id="literature"name="topics"/>
        </li>
        <li>
          <label htmlFor="music" >Music</label>
          <input type="radio" value="Music" id="music"name="topics"/>
        </li>
        <li>
          <label htmlFor="science-nature" >Science and Nature</label>
          <input type="radio" value="Science-Nature" id="science-nature"name="topics"/>
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

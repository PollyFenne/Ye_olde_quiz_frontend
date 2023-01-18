// Fetching game data component
import React, { useEffect, useState } from "react";
import axios from 'axios';
import shuffleArray from '../ShuffleArray'

import './styles.css'

// Needs to be a fetch
const gameInfo = {
    level: 3,
    topics: ['Film', 'Geography', 'History']
}

// Converting number level to word
const convertLevel = (level) => {
    switch(level) {
        case 1: return "easy"; break;
        case 2: return "medium"; break;
        case 3: return "hard"; break;
    }
};


// Converting word topic to number
const convertTopics = (topicNo) => {
    switch(topicNo) {
        case "General Knowledge": return 9; break;
        case "Sports": return 21; break;
        case "Geography": return 22; break;
        case "History": return 23; break;
        case "Politics": return 24; break;
        case "Art": return 25; break;
        case "Film": return 11; break;
        case "Television": return 14; break;
        case "Literature": return 10; break;
        case "Music": return 12 ; break;
        case "Science and Nature": return 17; break;
        case "Celebrities": return 26; break 
    }
};

// Defining url for each topic
const apiURLOne = `https://opentdb.com/api.php?amount=10&category=${convertTopics(gameInfo.topics[0])}&difficulty=${convertLevel(gameInfo.level)}`
const apiURLTwo = `https://opentdb.com/api.php?amount=10&category=${convertTopics(gameInfo.topics[1])}&difficulty=${convertLevel(gameInfo.level)}`
const apiURLThree = `https://opentdb.com/api.php?amount=10&category=${convertTopics(gameInfo.topics[2])}&difficulty=${convertLevel(gameInfo.level)}`

console.log(apiURLOne)

const FetchQuiz = () => {

    const [quizData, setQuizData] = useState([]);
    
    useEffect(() => {
        console.log('fetching...')
        axios.get(apiURLOne)
            .then(response => setQuizData(response.data.results))
            .catch(error => console.log(data))
    }, []);

    console.log(quizData)

    const RenderQA = () => {

        return (
         <div>
             {quizData.map((data,i) => {
                 const choices = data.incorrect_answers;
                 choices.push(data.correct_answer)
             return(<div className="QA" key={i}>
                 <h2 >{data.question}</h2>
                 <div className="choices">
                     {shuffleArray(choices).map((choice,j) =>(<button key={j}>{choice}</button>))}
                 </div>
             </div>)
             })}
         </div>
         )
     };
    
    return(
        <>
        <h1>FETCHING GAME</h1>
        <RenderQA />
        </>
    )
};

export default FetchQuiz;
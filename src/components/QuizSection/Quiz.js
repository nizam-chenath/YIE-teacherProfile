import React, {useState} from 'react';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';

function Quiz() {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
  
  ];

  const optionClicked = (isCorrect) =>{
    if(isCorrect){
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  }
   
  const reStart =() =>{
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }
  
  let navigate = useNavigate(); 
  // go to multi correct questions
  const routeChange = () =>{ 
    let path = "/quiz2"; 
    navigate(path);
  }
   


  return (
    <div className="quiz">

        {/* heading*/}
      <h1 className="main-heading">Quiz-Section</h1>

        {/* level 1 */}
        <h2 className="question-type">Single Correct Questions</h2>
        {/* current score */}
        <h2>Current Score : {score}</h2>

        {showFinalResults ? (

        <div className="final-results">
          <h1>Result</h1>
          <h2>{score} out of {questions.length}correct - ({(score/questions.length ) * 100}%)</h2>
          <button className="btn1" onClick={() => reStart()}>Once again</button>
          <button className="btn2" onClick={routeChange}>Next-Part</button>
        </div>

        ):(
          
        <div className="question-section">
          <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option)=>{
              return(
                <li onClick={()=> optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
              )
            })}
          </ul>

        </div>

        )}

        
    </div>
  )
}

export default Quiz
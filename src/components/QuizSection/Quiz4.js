import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz4() {

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0)
  
    const questions = [
        {
            text: "The Atlantic Ocean is the world’s biggest ocean. ",
            options: [
              { id: 0, text: "True", isCorrect: false },
             
            ],
          },
      {
        text: "Nepal is the only country in the world without a rectangular flag. ",
        options: [
          { id: 0, text: "True", isCorrect: true },
         
        ],
      },
      {
        text: "The first living animal sent into space were fruit flies.",
        options: [
          { id: 0, text: "True", isCorrect: true },
          
        ],
      },
      {
        text: "When going out of the cave, the bats always turn in the right direction. ",
        options: [
          { id: 0, text: "True", isCorrect: false },
         
        ],
      },
      {
        text: "In a regular deck of cards, all kings have a mustache. ",
        options: [
          { id: 0, text: "True", isCorrect: false },
          
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
   


  return ( <div className="quiz">

  {/* heading*/}
<h1 className="main-heading">Quiz-Section</h1>

  {/* level 1 */}
  <h2 className="question-type">One Word Questions</h2>
  {/* current score */}
  <h2>Current Score : {score}</h2>

  {showFinalResults ? (

  <div className="final-results">
    <h1>Result</h1>
    <h2>{score} out of {questions.length}correct - ({(score/questions.length ) * 100}%)</h2>
    <button className="btn1" onClick={() => reStart()}>Once again</button>
   
  </div>

  ):(
    
  <div className="question-section">
    <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
    <h3 className="question-text">{questions[currentQuestion].text}</h3>

     <form action="">
     <label htmlFor="answer">Answer : </label>
    <input type="text" className="oneword-answer" id="answer"/>
    <input type="submit" className="btn1" />
     </form>

            <button className="btn2" onClick={ optionClicked}>Next</button>
          
  </div>

  )}

  
</div>
)
}

export default Quiz4
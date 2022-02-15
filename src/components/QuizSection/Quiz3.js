import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz3() {

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0)
  
    const questions = [
        {
            text: "The Atlantic Ocean is the world’s biggest ocean. ",
            options: [
              { id: 0, text: "True", isCorrect: false },
              { id: 1, text: "False", isCorrect: true },
            ],
          },
      {
        text: "Nepal is the only country in the world without a rectangular flag. ",
        options: [
          { id: 0, text: "True", isCorrect: true },
          { id: 1, text: "False", isCorrect: false },
        ],
      },
      {
        text: "The first living animal sent into space were fruit flies.",
        options: [
          { id: 0, text: "True", isCorrect: true },
          { id: 1, text: "False", isCorrect: false },
        ],
      },
      {
        text: "When going out of the cave, the bats always turn in the right direction. ",
        options: [
          { id: 0, text: "True", isCorrect: false },
          { id: 1, text: "False", isCorrect: true },
        ],
      },
      {
        text: "In a regular deck of cards, all kings have a mustache. ",
        options: [
          { id: 0, text: "True", isCorrect: false },
          { id: 1, text: "False", isCorrect: true },
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
    // GO to one word Questions
    const routeChange = () =>{ 
      let path = "/quiz4"; 
      navigate(path);
    }
    


  return ( <div className="quiz">

  {/* heading*/}
<h1 className="main-heading">Quiz-Section</h1>

  {/* level 1 */}
  <h2 className="question-type">True or False Questions</h2>
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

export default Quiz3
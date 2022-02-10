
import './App.css';
import {  Route, Routes } from "react-router-dom";
import Profile1 from './components/Page3';
import Page4 from './components/Page4';
import StudentProfile from './components/Page5';
import Quiz from './components/QuizSection/Quiz';
import Quiz2 from './components/QuizSection/Quiz2';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/" element={ <Profile1/> }/>
         <Route path="/page2" element={ <Page4/> }/>
         <Route path="/page3" element={ <StudentProfile/>}/>
         
         <Route path="/quiz" element={ <Quiz/>}/>
         <Route path="/quiz2" element={ <Quiz2/>}/>

       </Routes>
    </div>
  );
}

export default App;


import './App.css';
import {  Route, Routes } from "react-router-dom";
import Profile1 from './components/Page3';
import Page4 from './components/Page4';
import StudentProfile from './components/Page5';
import Quiz from './components/QuizSection/Quiz';
import Quiz2 from './components/QuizSection/Quiz2';
import Quiz3 from './components/QuizSection/Quiz3';
import Quiz4 from './components/QuizSection/Quiz4';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/" element={ <Profile1/> }/>
         <Route path="/page2" element={ <Page4/> }/>
         <Route path="/page3" element={ <StudentProfile/>}/>
         {/* Quiz Section */}
         <Route path="/quiz" element={ <Quiz/>}/>
         <Route path="/quiz2" element={ <Quiz2/>}/>
         <Route path="/quiz3" element={ <Quiz3/>}/>
         <Route path="/quiz4" element={ <Quiz4/>}/>

       </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './studentprofile.css'
import img1 from '../Images/img1.jpg'

function StudentProfile() {
  return <div className="container">

  <div className="student-profile">
        <h1 className="main-heading">Teacher Dashboard</h1>
         <div className="student-profile-container">
             <span>Student Information</span>
             <br />
             <img src={img1} alt=" student img" />
             <form action="">
                 <label htmlFor="Name">Name :</label>
                 <input type="text" id="name" value="Arun" /><br/>
                 <label htmlFor="Class">Class :</label>
                 <input type="text" id="class" value="Science" /><br />
                 <label htmlFor="">Age :</label>
                 <input type="number" id="Age" value="10" /><br />
                 <label htmlFor="">ID :</label>
                 <input type="number" id="id" value="12343556" /><br />
                 <br />
                 <label htmlFor="">Subjects with you :</label>
                 <input type="text" id="subjects" value="Your all subjects" /><br/>
                 <label htmlFor="">Aggregate Assesments :</label>
                 <input type="text" id="assesments" value="Assesments" /><br/>
                 <label htmlFor="">Aggregate Quiz :</label>
                 <input type="text" id="quiz" value="quiz-section" /><br/>
             </form>
         </div>
         <div className="btn-section">
             <button className="btn1">Back to Student List</button>
             <button className="btn1">Go to Performance Evaluation</button>
         </div>
  </div>;
  </div>
}

export default StudentProfile;

import React, {useState} from 'react';
import StudentProfile from './Page5';
import TeacherProfile from './TeacherProfile';

function Profile1() { 
    const [showStudentProfile, setShowStudentProfile] = useState(false);
    const [showTeacherProfile, setShowTeacherProfile] = useState(false);
    const [list, setList] = useState(false)

    const editStudent=()=>{
        setShowStudentProfile(true)
    }
    const editTeacher=()=>{
        setShowTeacherProfile(true)
    }
    const showList = ()=>{
        setList(true);
    }

  return <div className="user-profile">

      {showStudentProfile && <StudentProfile/>}
      {showTeacherProfile && <TeacherProfile/>}

      <h2 className="main-heading">Teacher Dashboard</h2>
      <div className="profile-section">
          
         <div className="my-profile">
            <h2>My Profile</h2>
            <div className="user-profile">
                <a href="">User profile</a>
                <p>Name :</p>
                <p>Class :</p>
                <p>ID :</p>
                <p>School :</p>
                <p>Age :</p>
                <a href="">Delegations</a>

            </div>
         </div>
         <div className="my-class-profile">
              <h2>My Class Profile</h2>
              <div className="classes-tought">
                  <p>Classes Tought</p>
                  <button className="btn2" onClick={showList}>Science</button><br/>
                  {list && 
                       
                  <div className="list">
                      <button className="links">class 10</button>
                      <button className="links">class 8</button>
                      <button className="links">class 9</button>
                      <button className="links">class 7</button>
                  </div>
                  }
                  <button className="btn1">Math</button> <br/>
                  <a href="">Users List</a>
              </div>
         </div>
         
      </div>
      <div className="submit-section">

      <button className="btn1" onClick={editTeacher}> Edit User Profile</button>
         <button className="btn2">Update Class Information</button>
      </div>
      <button className="edit-student-btn btn1" onClick={editStudent}>Edit Student Profile</button>
  </div>;
}

export default Profile1;

import React, {useState} from 'react';

function TeacherProfile() {
   const [name, setName] = useState({ userName : ""});
   const [subject, setSubject]= useState( { subject : ""});
   const [age, setAge] = useState({age : ""})

  const handleName = event =>{
     setName({ userName : event.target.value})
   }
  
   const handleSubject = event =>{
     setSubject({ subject : event.target.value})
   }
   
   const handleAge = event =>{
     setAge( {  age : event.target.value})
   } 
   

  return <div className="container">
       
      <div className="student-profile">
      <h1 className="main-heading">Teacher Dashboard</h1>
      <div className="student-profile-container">
          <span>Edit User Information</span>
          <br />
          
          <form action="">
              <label htmlFor="Name">Name: </label>
              <input type="text" id="name" value={name.userName}  onChange={handleName}/><br/>
              <label htmlFor="Class">Class :</label>
              <input type="text" id="class" value={subject.subject} onChange={handleSubject}/><br />
              <label htmlFor="">Age : </label>
              <input type="number" id="Age" value={age.age}  onChange={handleAge}/><br />
              
              <button type="submit" className="btn1 " onClick>Confirm</button>
             
          </form>
      </div>
      <div className="btn-section">
       
       
      </div>
    </div>;
    
  </div>
}
export default TeacherProfile;

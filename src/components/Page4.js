import React from 'react';
import { Link } from 'react-router-dom'

function Page4() {
  const data = [
    {
        name : "Arun",
        class : 10
    },
    {
        name : "Ajay",
        class : 10
    },
    {
        name : "Bijoy",
        class : 10
    },
    {
        name : "varun",
        class : 10
    },
    {
        name : "varun",
        class : 10
    },
    {
        name : "varun",
        class : 10
    },
    {
        name : "varun",
        class : 10
    },
]    
    const row = data.map((item) =>{
        return(
            <tr>
                <td className="name-section"><a>{item.name}</a></td>
                <td className="class-section">{item.class}</td>
            </tr>
        )
    })

    
  return <div className="container">
        <h2 className="main-heading">Teacher Dashboard</h2>
        <div className="my-profile">
            <h2 className="class-details">Science, class 10</h2>
        </div>
        <table class="class-details-table">
            
                                <thead >
                                    <tr>
                                        <th className="name-section">
                                            Name
                                        </th>
                                        <th  class="class-section">
                                            Class
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{row}</tbody>
                            </table>
  </div>;
}

export default Page4;

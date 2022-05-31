import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const AssessmentForm = () => {
  const navigate = useNavigate();

  return (
    <div>
    <div className="card" onClick={() => navigate("/assessmentadd")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
        <h5>Add Assessment Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/assessmentupdate")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Update Assessment Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/assessmentdelete")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Delete Assessment Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/assessmentgetall")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Display Assessment Data</h5>
      </div>
    </div>  
    </div>
  )
}

export default AssessmentForm



// <div>
//     <form className="profileForm">
//     <h2 className="profileFormh2">Assessment</h2>
//     <div className="mini-nav">
//     <button className="mini-nav-bt" onClick={() => navigate("/assessmentadd")}>
//       Add Assessment Data
//     </button>
//     <button className="mini-nav-bt" onClick={() => navigate("/assessmentupdate")}>
//      Update Assessment Data
//     </button>
//     <button className="mini-nav-bt" onClick={() => navigate("/assessmentdelete")}>
//      Delete Assessment Data
//     </button>
//     <button className="mini-nav-bt" onClick={() => navigate("/asm")}>
//      Display All Assessment Data
//     </button>
//    </div >
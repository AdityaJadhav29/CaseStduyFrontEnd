import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectMappingForm = () => {
    const navigate = useNavigate();
  return (
    <div>
    <div className="card" onClick={() => navigate("/profileadd")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
        <h5>Add ProjectMapping Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profileupdate")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Update ProjectMapping Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profiledelete")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Delete ProjectMapping Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profilegetall")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Display ProjectMapping Data</h5>
      </div>
    </div>  
    </div>
  )
}

export default ProjectMappingForm
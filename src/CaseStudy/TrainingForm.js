import React from 'react'
import { useNavigate } from 'react-router-dom'

const TrainingForm = () => {

    const navigate = useNavigate();
  return (
    <div>
    <div className="card" onClick={() => navigate("/profileadd")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
        <h5>Add Training Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profileupdate")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Update Training Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profiledelete")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Delete Training Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profilegetall")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Display Training Data</h5>
      </div>
    </div>  
    </div>
  )
}

export default TrainingForm
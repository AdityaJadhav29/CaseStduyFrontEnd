import React from 'react'
import { useNavigate } from 'react-router-dom'

const TrainingReport = () => {
    const navigate = useNavigate();
  return (
    <div>
    <div className="card" onClick={() => navigate("/profileadd")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
        <h5>Add TrainingReport Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profileupdate")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Update TrainingReport Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profiledelete")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Delete TrainingReport Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profilegetall")}>
      <img src={'/Capgemini-Emblem.png'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Display TrainingReport Data</h5>
      </div>
    </div>  
    </div>
  )
}

export default TrainingReport
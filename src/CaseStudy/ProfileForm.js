import React from 'react'
import { useNavigate } from 'react-router-dom'


export const ProfileForm = () => {
  const navigate = useNavigate();


  return (
    <div>
    <div className="card" onClick={() => navigate("/profileadd")}>
      <img src={'/add.jpg'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
        <h5>Add Employee Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profileupdate")}>
      <img src={'/update.jpg'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Update Employee Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profiledelete")}>
      <img src={'/delete.jpg'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Delete Employee Data</h5>
      </div>
    </div>
    <div className="card" onClick={() => navigate("/profilegetall")}>
      <img src={'/display.jpg'} alt="Avatar" id='cardimage' />
      <div className="Profilecontainer">
      <h5>Display Employee Data</h5>
      </div>
    </div>  
    </div>
  )
}

export default ProfileForm
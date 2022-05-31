import React , { useState }from 'react'

export const AssessmentFormDelete = () => {

   const [empId,setEmpId]= useState(' ')

  return (
    <div>
    <form className="profileFormAdd">
    <h2 className="profileFormh2">Delete Employee Data Form</h2>
      <div>
      <div className='proinputtext'>
    <input type="text"  placeholder='Employee Id' onChange={(e)=>setEmpId(e.target.value)}/>
    </div>
    <button className="btn-profile"> Submit </button> 
    </div>  
    </form>
    </div>
  )
}

export default AssessmentFormDelete
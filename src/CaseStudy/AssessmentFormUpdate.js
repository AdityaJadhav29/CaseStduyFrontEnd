import React, { useState} from 'react'

export const AssessmentFormUpdate = () => {

  const [empId,setEmpId]= useState(' ')
  const [typeTrain,setTypeTrain,]= useState(' ')
  const [modScore,setModScore]= useState(' ')
  const [assessStatus,setAssessStatus]= useState(' ')
  const [finalScore,setFinalScore]= useState(' ')
  const [modules,setModules]= useState(' ')
  


  return (
    <div>
    <form className="assessmentForm">
    <h2 >Add Assesment Data</h2>
    <div className='inputtext'>
    <input type="text"  placeholder='Employee Id' onChange={(e)=>setEmpId(e.target.value)}/>
    </div>
    <div className='inputtext'>
    <input type="text"  placeholder='Type Of Training' onChange={(e)=>setTypeTrain(e.target.value)}/>
    </div>
    <div className='inputtext'>
    <input type="text"  placeholder='Module Score' onChange={(e)=>setModScore(e.target.value)}/>
    </div>
    <div className='inputtext'>
    <input type="text"  placeholder='Assesment Status' onChange={(e)=>setAssessStatus(e.target.value)}/>
    </div>
    <div className='inputtext'>
    <input type="text"  placeholder='Final Score' onChange={(e)=>setFinalScore(e.target.value)}/>
    </div>
    <div className='inputtext2'>
    <input type="text"  placeholder='Modules' onChange={(e)=>setModules(e.target.value)}/>
    </div>
    <button className="btn-assessment"> Submit </button>
    </form>
    </div> 
  )
}

export default AssessmentFormUpdate
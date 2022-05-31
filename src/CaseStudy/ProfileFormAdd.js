import React, { useState } from 'react'

 const ProfileFormAdd = () => {
  const [empId, setEmpId] = useState(' ')
  const [empName, setEmpName] = useState(' ')
  const [gender, setGender] = useState(' ')
  const [grade, setGrade] = useState(' ')
  const [degree, setDegree] = useState(' ')
  const [tech, setTech] = useState(' ')
  const [trainType, setTrainType] = useState(' ')
  const [buName, setBuName] = useState(' ')
  const [buDMonth, setBuDMonth] = useState(' ')
  const [buFMonth, setBuFMonth] = useState(' ')
  const [offMailId, setOffMailId] = useState(' ')
  const [colleDetail, setColleDetail] = useState(' ')
  const [conNo, setConNo] = useState(' ')
  const [pEmailId, setPEmailId] = useState(' ')
  const [eduQ, setEduQ] = useState(' ')
  const [specializ, setSpecializ] = useState(' ')
  const [trainingSDate, setTrainingSDate] = useState(' ')
  const [traningEDate, setTraningEDate] = useState(' ')

  const response={
    empID: empId,
    empName: empName,
    gender: gender,
    grade: grade,
    degree: degree,
    tech: tech,
    type: trainType,
    buName: buName,
    ofMailId: offMailId,
    collegeDetails: colleDetail,
    personalEmailId: pEmailId,
    spec: specializ,
    eduQualification: eduQ,
    buDemandMonth: buDMonth,
    buFullfillmentMonth: buFMonth,
    trainingSDate: trainingSDate,
    traningEDate: traningEDate,
    contactNo: conNo
   }


   function ProfileAdd(e){ 
    e.preventDefault();
    console.warn(empId);
    fetch('http://localhost:8080/api/pro/add',{
method:"POST",
headers: {
   "Content-Type": "application/json; charset=utf-8",
   "Authorization":"Bearer"+'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1Mzk0NzMyNiwiaWF0IjoxNjUzOTI5MzI2fQ.oHUWihUhB3e6TTqmCgWzvPSeA6xJaKEIY-X1LgDt8kNV119_B1VeJVqb9ly7jNCTqKGU4Xxo-xmkFaz7kIDhDA'
},

body:JSON.stringify(response)
   }).then((resp)=>{
       resp.json().then((result)=>{
           console.warn("Succesfull Registered");
       })
   }).catch((resp)=>{console.log(resp)})
}


  return (
    <div>
      <form className="profileFormAdd">
        <h2 className="profileFormh2">Add Employee Data Form</h2>
        <div>
          <div className='proinputtext'>
            <div >
              <input type="text" placeholder='Employee Id' onChange={(e) => setEmpId(e.target.value)} />
            </div>
            <div >
              <input type="text" placeholder='Employee Name' onChange={(e) => setEmpName(e.target.value)} />
            </div>
            <div >
              <input type="text" placeholder='Gender' onChange={(e) => setGender(e.target.value)} />
            </div>
            <div >
              <input type="text" placeholder='Grade' onChange={(e) => setGrade(e.target.value)} />
            </div>
            <div >
              <input type="text" placeholder='Degree' onChange={(e) => setDegree(e.target.value)} />
            </div>
            </div>
            <div className='proinputtext2'>
            <div>
              <input type="text" placeholder='Technology' onChange={(e) => setTech(e.target.value)} />
            </div>
            <div >
              <input type="text" placeholder='Training Type' onChange={(e) => setTrainType(e.target.value)} />
            </div>
            <div >
              <input type="text" placeholder='BU Name' onChange={(e) => setBuName(e.target.value)} />
            </div>
            <div>
              <input type="text" placeholder='BU Demand Month' onChange={(e) => setBuDMonth(e.target.value)} />
            </div>
            <div>
              <input type="text" placeholder='BU Fullfillment Month' onChange={(e) => setBuFMonth(e.target.value)} />
            </div>
            </div>
          <div className='proinputtext3'>
            <div >
              <input type="text" placeholder='Offical Mail Id' onChange={(e) => setOffMailId(e.target.value)} />
            </div>
            <div >
              <input type="text" placeholder='College Details' onChange={(e) => setColleDetail(e.target.value)} />
            </div>
            <div >
              <input type="text" placeholder='Contact No' onChange={(e) => setConNo(e.target.value)} />
            </div>
            <div >
              <input type="text" placeholder='Personal Email ID' onChange={(e) => setPEmailId(e.target.value)} />
            </div>
            <div >
              <input type="text" placeholder='Educational Qualification' onChange={(e) => setEduQ(e.target.value)} />
            </div>
            </div>
          <div className='proinputtext4'>
            <div >
              <input type="text" placeholder='Specialization' onChange={(e) => setSpecializ(e.target.value)} />
            </div>
            <div >
              <input type="date" placeholder='Training Start Date' onChange={(e) => setTrainingSDate(e.target.value)} />
            </div>
            <div >
              <input type="date" placeholder='Traning End Date' onChange={(e) => setTraningEDate(e.target.value)} />
            </div>
          </div>
          <button className="btn-profile" onClick={ProfileAdd}> Submit </button>
        </div>
      </form>
    </div>
  )
}

export default ProfileFormAdd
import React , { useState }from 'react'
import axios from 'axios'

export const ProfileFormDelete = () => {

  const [empId,setEmpId]= useState()
  const [empName,setEmpName]= useState(' ')
  const [gender,setGender]= useState(' ')
  const [grade,setGrade]= useState(' ')
  const [degree,setDegree]= useState(' ')
  const [tech,setTech]= useState(' ')
  const [trainType,setTrainType]= useState(' ')
  const [buName,setBuName]= useState(' ')
  const [buDMonth,setBuDMonth]= useState(' ')
  const [buFMonth,setBuFMonth]= useState(' ')
  const [offMailId,setOffMailId]= useState(' ')
  const [colleDetail,setColleDetail]= useState(' ')
  const [conNo,setConNo]= useState(' ')
  const [pEmailId,setPEmailId]= useState(' ')
  const [eduQ,setEduQ]= useState(' ')
  const [specializ,setSpecializ]= useState(' ')
  const [trainingSDate, setTrainingSDate] = useState(' ')
  const [traningEDate, setTraningEDate] = useState(' ')

  const response={
    empId: parseInt(empId),
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

   const res={
    empID: empId
   }

   function ProfileGet(e){ 
    setEmpName(e.target.value)

    e.preventDefault();
axios.get(`http://localhost:8080/api/pro/get/${empId}`, {
  headers: {
    'Authorization':'Bearer'+ 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1Mzk0NzMyNiwiaWF0IjoxNjUzOTI5MzI2fQ.oHUWihUhB3e6TTqmCgWzvPSeA6xJaKEIY-X1LgDt8kNV119_B1VeJVqb9ly7jNCTqKGU4Xxo-xmkFaz7kIDhDA'
  }
})
.then((res) => {
  console.log(res);
  setEmpName(res.data.empName);
  setGender(res.data.gender)
  setGrade(res.data.grade)
  setDegree(res.data.degree)
  setTech(res.data.tech)
  setTrainType(res.data.type)
  setBuName(res.data.buName)
  setBuDMonth(res.data.buDemandMonth)
  setBuFMonth(res.data.buFullfillmentMonth)
  setOffMailId(res.data.ofMailId)
  setColleDetail(res.data.collegeDetails)
  setConNo(res.data.contactNo)
  setPEmailId(res.data.personalEmailId)
  setEduQ(res.data.eduQualification)
  setSpecializ(res.data.spec)
  setTrainingSDate(res.data.trainingSDate)
  setTraningEDate(res.data.traningEDate)
})
.catch((error) => {
  console.error(error)
})
 }


 
 function ProfileDelete(e){ 
  setEmpName(e.target.value)
  e.preventDefault();
axios.delete(`http://localhost:8080/api/pro/delete/${empId}`, {
headers: {
  'Authorization':'Bearer'+ 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1Mzk0NzMyNiwiaWF0IjoxNjUzOTI5MzI2fQ.oHUWihUhB3e6TTqmCgWzvPSeA6xJaKEIY-X1LgDt8kNV119_B1VeJVqb9ly7jNCTqKGU4Xxo-xmkFaz7kIDhDA'
}
})
.then((res) => {
console.log(res);
})
.catch((error) => {
console.error(error)
})
}

  return (
    <div>
      <form className="profileFormAdd">
        <h2 className="profileFormh2">Delete Employee Data Form</h2>
        <div>
          <div className='proinputtext'>
            <div >
              <input type="number" placeholder='Employee Id' onChange={(e) => setEmpId(e.target.value)} onBlur={ProfileGet} />
            </div>
            <div >
             <input type="text" placeholder='Employee Name'  value={empName}  /> 
            </div>
            <div >
              <input type="text" placeholder='Gender' value={gender} />
            </div>
            <div >
              <input type="text" placeholder='Grade' value={grade} />
            </div>
            <div >
              <input type="text" placeholder='Degree'  value={degree}/>
            </div>
            </div>
            <div className='proinputtext2'>
            <div>
              <input type="text" placeholder='Technology'  value={tech}/>
            </div>
            <div >
              <input type="text" placeholder='Training Type'  value={trainType}/>
            </div>
            <div >
              <input type="text" placeholder='BU Name'  value={buName}/>
            </div>
            <div>
              <input type="text" placeholder='BU Demand Month'  value={buDMonth}/>
            </div>
            <div>
              <input type="text" placeholder='BU Fullfillment Month'  value={buFMonth}/>
            </div>
            </div>
          <div className='proinputtext3'>
            <div >
              <input type="text" placeholder='Offical Mail Id'  value={offMailId}/>
            </div>
            <div >
              <input type="text" placeholder='College Details'  value={colleDetail}/>
            </div>
            <div >
              <input type="text" placeholder='Contact No' value={conNo}/>
            </div>
            <div >
              <input type="text" placeholder='Personal Email ID'  value={pEmailId}/>
            </div>
            <div >
              <input type="text" placeholder='Educational Qualification' value={eduQ}/>
            </div>
            </div>
          <div className='proinputtext4'>
            <div >
              <input type="text" placeholder='Specialization'  value={specializ}/>
            </div>
            <div >
              <input type="date" placeholder='Training Start Date' value={trainingSDate}/>
            </div>
            <div >
              <input type="date" placeholder='Traning End Date'  value={traningEDate}/>
            </div>
          </div>
          <button className="btn-profile" onClick={ProfileDelete} > Submit </button>
        </div>
      </form>
    </div>
  )
}

export default ProfileFormDelete
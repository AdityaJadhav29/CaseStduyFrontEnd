import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ProfileFormGetAll = () => {

    const [response,setResponse]=useState([])

    useEffect(()=> {
        axios.get(`http://localhost:8080/api/pro/getall`, {
            headers: {
                'Authorization': 'Bearer' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1Mzk0NzMyNiwiaWF0IjoxNjUzOTI5MzI2fQ.oHUWihUhB3e6TTqmCgWzvPSeA6xJaKEIY-X1LgDt8kNV119_B1VeJVqb9ly7jNCTqKGU4Xxo-xmkFaz7kIDhDA'
            }
        })
            .then(res => {
                console.log(res);
                setResponse(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    },[])

    return (
        <div className="Profiletable">
            <table>
            <div>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Gender</th>
                    <th>Grade</th>
                    <th>Degree</th>
                    <th>Technology</th>
                    <th>Training Type</th>
                    <th>BU Name</th>
                    <th>Bu Demand Month</th>
                    <th>BU Fullfillment Month</th>
                    <th>Offical Mail Id</th>
                    <th>College Details</th>
                    <th>Contact No</th>
                    <th>Personal Email Id</th>
                    <th>Educational Qualification</th>
                    <th>Specialization</th>
                    <th>Training Start Date</th>
                    <th>Traning End Date</th>
                </tr>
            </div>
            <div>
                {
                    response.map((resp) => (
                        <tr>
                            <td>{resp.empId}</td>
                            <td>{resp.empName}</td>
                            <td>{resp.gender}</td>
                            <td>{resp.grade}</td>
                            <td>{resp.degree}</td>
                            <td>{resp.tech}</td>
                            <td>{resp.type}</td>
                            <td>{resp.buName}</td>
                            <td>{resp.buDemandMonth}</td>
                            <td>{resp.buFullfillmentMonth}</td>
                            <td>{resp.ofMailId}</td>
                            <td>{resp.collegeDetails}</td>
                            <td>{resp.contactNo}</td>
                            <td>{resp.personalEmailId}</td>
                            <td>{resp.eduQualification}</td>
                            <td>{resp.spec}</td>
                            <td>{resp.trainingSDate}</td>
                            <td>{resp.traningEDate}</td>
                        </tr>
                    ))
                }
                </div>
            </table>
        </div>
    )
}

export default ProfileFormGetAll
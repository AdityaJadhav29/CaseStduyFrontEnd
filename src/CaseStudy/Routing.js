import React from "react";
import "./style.css";
import Footer from "./Footer"
import Header from './Header'
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import SignUpForm from "./SignUpForm";
import SignInForm  from "./SignInForm";
import  ContactUsForm  from "./ContactUsForm";
import  ProfileForm  from "./ProfileForm";
import AssessmentForm from "./AssessmentForm"; 
import ProfileFormAdd from "./ProfileFormAdd";
import ProfileFormUpdate from "./ProfileFormUpdate";
import  ProfileFormDelete  from "./ProfileFormDelete";
import AssessmentFormAdd from "./AssessmentFormAdd";
import AssessmentFormUpdate from "./AssessmentFormUpdate";
import AssessmentFormDelete from "./AssessmentFormDelete";
import ProfileFormGetAll from "./ProfileFormGetAll";
import TrainingForm from "./TrainingForm";
import ProjectMappingForm from "./ProjectMappingForm";
import TrainingReport from "./TrainingReport";

function Routing() {
  return (
     <div className="maincontainer">
      <Router>
      <Header/>
      <Routes>
        <Route path='/signup' element={<SignUpForm/>}/>
        <Route path='/signin' element={<SignInForm/>}/>
        <Route path='/contact' element={<ContactUsForm/>}/>
        <Route path='/profile' element={<ProfileForm/>}/>
        <Route path='/profileadd' element={<ProfileFormAdd/>}/>
        <Route path='/profileupdate' element={<ProfileFormUpdate/>}/>
        <Route path='/profiledelete' element={<ProfileFormDelete/>}/>
        <Route path='/profilegetall' element={<ProfileFormGetAll/>}/>
        <Route path='/assessment' element={<AssessmentForm/>}/>
        <Route path='/assessmentadd' element={<AssessmentFormAdd/>}/>
        <Route path='/assessmentupdate' element={<AssessmentFormUpdate/>}/>
        <Route path='/assessmentdelete' element={<AssessmentFormDelete/>}/>
        <Route path='/training' element={<TrainingForm/>}/>
        <Route path='/project' element={<ProjectMappingForm/>}/>
        <Route path='/trainingreport' element={<TrainingReport/>}/>

    </Routes>
      </Router>
        <Footer/>
    </div>
  )
}

export default Routing

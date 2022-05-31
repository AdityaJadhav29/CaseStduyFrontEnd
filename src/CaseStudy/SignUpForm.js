import React, { useState } from 'react'


const SignUpForm = () => {
    
  const [username,setusername]= useState(' ')
  const [password,setpassword]= useState(' ')
  
  const [userError,setuserError]= useState(' ')
  const [passError,setpassError]= useState(' ')

  const response={
     userName:username,
     passWord:password
    }

function Signup(e){ 
    e.preventDefault();
    const isValid=formValidation();
    if(isValid){
    console.warn(username,password);
    fetch('http://localhost:8080/api/jwt/reg',{
method:"POST",
headers: {
   "Content-Type": "application/json; charset=utf-8"
},

body:JSON.stringify(response)
   }).then((resp)=>{
       resp.json().then((result)=>{
           console.warn("Succesfull Registered");
       })
   }).catch((resp)=>{console.log(resp)})
}
  }

  const formValidation=()=>{
      const userError={};
      const passError={};

      let  isValid=true;

    if(username.trim().length<6){
        userError.userNameShort="User Name must contain atlest 6 character";
        isValid=false
    }
    if(username.trim().length>10){
        userError.userNameShort="Max character limit is 10";
        isValid=false
    }
    if(username.trim().length===0){
        userError.userEmpty="Max character limit is 10";
        isValid=false
    }
    if(password.trim().length<3){
        passError.passWordShort="PassWord must contain atlest 3 character";
        isValid=false
    }

        setuserError(userError);
        setpassError(passError);

        return isValid;
  }


  return (
<div className="container">
<form className="registrationForm">
<h2>Sign Up </h2>
 <div className="inputtext" >
<input type="text" placeholder='Username' onChange={(e)=>setusername(e.target.value)}/> 
{Object.keys(userError).map((key)=>{
    return <h6 style={{color:'red'}}>{userError[key]}</h6>
})}
</div>
 <div className="inputtext">
<input type="password" placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/> 
{Object.keys(passError).map((key)=>{
    return <h6 style={{color:'red'}}>{passError[key]}</h6>
})}
</div>
<button className="btn-signup" onClick={Signup} > Register </button> 
</form>
</div>
)
}


export default SignUpForm
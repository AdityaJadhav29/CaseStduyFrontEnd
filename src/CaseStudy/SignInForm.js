import React , { useState }from 'react'

export const SignInFormUI = () => {
  const [username,setusername]= useState(' ')
  const [password,setpassword]= useState(' ')
  const[error,setError]=useState('')
  const[isLogin,setIsLogin]=useState()

  
  const response={
     userName:username,
     passWord:password,
     token:null
    }


function Login(e){ 
  e.preventDefault();
  const loginError={};
    console.warn(username,password);
    fetch('http://localhost:8080/api/jwt/auth',{
method:"POST",
headers: {
   "Content-Type": "application/json; charset=utf-8"
},

body:JSON.stringify(response)
   }).then((resp)=>{
       resp.json().then((result)=>{
           console.warn("result",result);
           setIsLogin(true);
           console.log(isLogin)
       })
       if(resp.status===200){
        loginError.isVlidCred="Welcome"
        setError(loginError)
       }else{
         loginError.isVlidCred="Invalid Credentials!!"
        setError(loginError)
       }
   }).catch((error)=>{
     console.log(error)
     setIsLogin(false)
    })
  }

  return (
    <div className="container">
    <form className="registrationForm">
    <h2 >Sign In</h2>
     <div className="inputtext" >
    <input type="text" placeholder='Username' onChange={(e)=>setusername(e.target.value)}/>  
    </div>
     <div className="inputtext"  >
    <input type="password" placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/> 
    </div>
    <div>
    <button className="btn-signup" onClick={Login}> Submit </button> 
    {Object.keys(error).map((key)=>{
      return <div id='signinerror' style={{color:'red'}}>{error[key]}</div>
  })}
  </div>
    </form>
    </div>
  )
}
export default SignInFormUI
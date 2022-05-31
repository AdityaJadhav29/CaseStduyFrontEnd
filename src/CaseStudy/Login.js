
import React, { Component } from 'react'

class Login extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
       userName:null,
       passWord:null,
        login:false,
        token:null,

     }
   }
   login(e)
   {
    //console.warn("form data",this.state);
fetch('http://localhost:8080/api/jwt/auth',{
method:"POST",
headers: {
   "Content-Type": "application/json; charset=utf-8"
},

body:JSON.stringify(this.state)
   }).then((resp)=>{
       resp.json().then((result)=>{
           console.warn("result",result);
       })
   })

   }
 render() {
   return (

    <div className="container">
<form className="registrationForm">
<h2>Sign In </h2>
 <div className="inputtext" >
<input type="text" placeholder='Username' onChange={(event)=>{this.setState({userName:event.target.value})}}/>  
</div>
 <div className="inputtext">
<input type="password" placeholder='Password' onChange={(event)=>{this.setState({passWord:event.target.value})}}/> 
</div>
<button className="btn-signup" onClick={()=>{this.login()}} > Register </button> 
</form>
</div>

);


  //    <div className="container"><h1><i>Login</i></h1><div>
  //     <input className="inputBox" type="text" placeholder="Enter Username" onChange={(event)=>{this.setState({userName:event.target.value})}} /><br/><br/>
  //     <input className="inputBox" type="text" placeholder="Enter Password" onChange={(event)=>{this.setState({passWord:event.target.value})}} /><br/><br/>

    

      

  //     <button className="appButton" onClick={()=>{this.login()}}>Login</button>
  //     </div></div>
  //  );
 }
}

export default Login
import { Link } from "react-router-dom";
import React from "react";
import '../Login.css'


export default function Login() {

  function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('email');
    var userPw = document.getElementById('password');

    // check if stored data from register-form is equal to data from login form
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('Enter Password or Email! Please Try Again!');
    }else {
        alert('You are loged in.');
        window.location.href = '/';
    }
}



    return (
        <div className='login' >
  
       <form className="login-form">
   
  <div className="form-outline mb-4 ">
    <input type="email" id="email" className="form-control" required placeholder="Email" />
     
  </div>

   
  <div className="form-outline mb-4">
    <input type="password" id="password" className="form-control" required placeholder="Password" />
     
</div>
  

   
  <button type="button" className="btn btn-primary btn-block mb-4" onClick={check}>Login</button>
<p>Not a member? <Link to="register">Register</Link></p>
   
</form>
        </div>
        
    )
}
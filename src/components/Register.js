import React from "react";
import '../Register.css'


export default function Register() {
    function store() {
        let email = document.getElementById('email');
        let psw = document.getElementById('confirmPassword');
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', psw.value);
    }
    function validateForm() {
         
    
        let mobile = document.forms["myForm"]["mobile"].value;
        if (mobile.length > 10) {
            alert("Please enter a valid mobile number ");
        }
 
     
        let name = document.forms["myForm"]["name"].value;
        if (name == "") {
            alert("Name must be filled out");
            return false;

        }
    
     
        let email = document.forms["myForm"]["email"].value;
        if (email == "") {
            alert("Email must be filled out");
            return false;
        }

        else{store();
            alert("Registration Successfully")
            window.location.href = '/login';
        }

    }
    function passwordCheck() {
        let psw = document.forms["myForm"]["psw"].value;
        if (psw.length < 8) {
            alert("Password must be at least 8 characters");
            return false
        }
        let password1 = document.forms["myForm"]["password1"].value;
        if (!(psw === password1)) {
            alert("Both Passwords should match");
            return false

        }
    }
    return (
        <div className='register' method="post" >

            <form className="register-form" name="myForm">
                <div className="form-outline mb-4 ">
                    <input type="email" id="name" name="name" className="form-control" required placeholder="Name" />

                </div>
                <div className="form-outline mb-4 ">
                    <input type="email" id="email" name="email" className="form-control" required placeholder="Email" />

                </div>


                <div className="form-outline mb-4">
                    <input type="password" id="createPassword" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="form-control" required placeholder="Create Password" />

                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="confirmPassword" name="password1" className="form-control" required placeholder="Confirm Password" />

                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="confirmPassword" className="form-control" name="mobile" required placeholder="Mobile Number" />

                </div>


                <button type="button" className="btn btn-primary btn-block mb-4" onClick={validateForm}>Sign in</button>


            </form>
        </div>

    )
}
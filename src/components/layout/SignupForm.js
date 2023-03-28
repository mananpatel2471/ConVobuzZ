import React from "react";
import "../Css/SignupForm.css";
const SignupForm = () => {
    return(
    <>
        <div className="Signup"> 
        <div><img className="Logo"
                   src="./images/icons/Convobuzz.svg"/>
        </div>

        <div className="Text1">Create an Account</div>

        <div>
            <input className="Signup-1"
                   type="text"
                   placeholder="      Enter User Name"
            />
            <img className="Name"
                  
                  src="./images/icons/Name.svg"
            />
        </div>
        <div>
            <input className="Signup-2"
                   type="text"
                   placeholder="      Enter Email"
            />
            <img className="Email"
                  
                  src="./images/icons/Email.svg"
            />
        </div>
        <div>
            <input className="Signup-3"
                   type="text"
                   placeholder="      Enter Password"
            />
            <img className="Password"
                  
                  src="./images/icons/Password.svg"
            />
        </div>
        <div>
            <input className="Signup-4"
                   type="text"
                   placeholder="      Confirm Password"
            />
            <img className="Cpassword"
                  
                  src="./images/icons/password-check.svg"
            />
        </div>
        <div>
            <input className="Signup-5"
                   type="mobile"
                   placeholder="       Mobile no"
            />
            <img className="Mobioleno"
                  
                  src="./images/icons/MobileNO.svg"
            />
        </div>
        <div>
            <button className="Register" >Register</button>
        </div>
        <div className="Text2">Already Registered?</div>
        <div className ="Text3">Sign in</div>
        </div>
    </>
 );
}
export default SignupForm;
import "../Css/Login.css"
const Login = () => {
return(
    <>
        <div className="Login-1">
        <div><img className="Logo"
            src="./images/icons/Convobuzz.svg"/>
        </div>
        <div>
            <input className="Login-2"
                   type="text"
                   placeholder="      Enter Email"
            />
            <img className="Email"
                  
                  src="./images/icons/Email.svg"
            />
        </div>
        <div>
            <input className="Login-3"
                   type="text"
                   placeholder="      Enter Password"
            />
            <img className="Password"
                  
                  src="./images/icons/Password.svg"
            />
        </div>
        <button className = "Loginbutton">Log in</button>
        <div className="Text1"> Don't have an account?</div>
        <div className = "Text2">Sign up</div>
        </div>
         
    </>
);
}
export default Login;
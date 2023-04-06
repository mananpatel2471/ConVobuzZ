import React, {Component, useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import axios from 'axios';
import config from "../../config/default";
import {setErrorState, setUser} from "../../state/global";
import {useNavigate} from 'react-router-dom';

const SignupForm = () => {

  const SERVER_URL = config.SERVER_URL;
  const [uname, setUname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileno, setMobileno] = useState("");

  const navigate = useNavigate();
  const {
    register,
    formState: {errors},
    handleSubmit,

  } = useForm();

  const onSubmit = (form, event) => {
    event.preventDefault();
    const data = {
      name: uname,
      email,
      password,
      mobile: mobileno
    }
    axios.post(SERVER_URL + "/api/register", data)
      .then((res) => {
        setUser(res.data.user.email, res.data.user.name, res.data.user.mobile, res.data.token)
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("email", res.data.user.name);
        localStorage.setItem("email", res.data.user.mobile);
        localStorage.setItem("email", res.data.token);
        navigate('/home');
      })
      .catch((err => {
        console.log(err)
        const code = err.response.status;
        const {error, description, trace} = err.response.data;
        setErrorState(code, error, description, trace);
        //console.log(err)
        navigate('/error');
      }))
  };


  return (

    <div className="flex justify-center items-center pt-16 p-4">
      <div className=" w-full sm:w-[600px] bg-[#93bfcf] mx-auto rounded-xl p-4">
        <div className="flex justify-center items-center">
          <img
            className="w-[80px] h-[80px]"
            src="./images/icons/convobuzz.svg"
          />
        </div>
        <h3 className="text-3xl  flex justify-center items-center">Create an Account</h3>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/Name.svg"/>
            <input
              {...register("Username", {required: true, maxLength: 20})}
              type="text"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[40px] rounded-2xl pl-5"
              placeholder="Enter User Name*"

              onChange={(event) => setUname(event.target.value)}
            />
          </div>
          <label className="ml-12 text-red-600">
            {errors.Username?.type === "required" && "Username is Required!"}
            {errors.Username?.type === "maxLength" && "Username cannot exceed 20 characters"}
          </label>


          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/Email.svg"/>
            <input
              {...register("email", {required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,})}
              type="email"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[40px] rounded-2xl pl-5"
              placeholder="Enter Email*"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <label className="ml-12 text-red-600 ">
            {errors.email?.type === "required" && "Email is Required!"}
            {errors.email?.type === "pattern" && "Inval Email."}
          </label>


          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/Password.svg"/>
            <input
              {...register("Password", {
                required: true,
                pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8}$",
              })}
              type="password"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[40px] rounded-2xl pl-5"
              placeholder="Enter Password*"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <label className="ml-12 text-red-600">
            {errors.Password?.type === "required" && "Password is Required!"}
            {errors.Password?.type === "pattern" && "One Uppercase and lowercase letter, and at least 8 characters"}
          </label>

          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/Cpassword.svg"/>
            <input
              {...register("Cpassword", {
                required: true,
                pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8}$",
              })}
              type="password"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[40px] rounded-2xl pl-5"
              placeholder="Enter Confirm Password*"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <label className="ml-12 text-red-600">
            {errors.Cpassword?.type === "required" && "Confirmpassword is Required!"}
            {errors.Cpassword?.type === "pattern" && "One Uppercase and lowercase letter, and at least 8 characters"}
          </label>


          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/MobileNo.svg"/>
            <input
              {...register("mobileno", {required: true, pattern: /[1-9]\d*|0\d+/, maxLength: 10})}
              type="phone"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[40px] rounded-2xl pl-5"
              placeholder="Enter Mobile no*"
              onChange={(event) => setMobileno(event.target.value)}
            />
          </div>
          <label className="ml-12 text-red-600">
            {errors.mobileno?.type === "required" && "MobileNumber is Required!"}
            {errors.mobileno?.type === "pattern" && "Number Only"}
            {errors.mobileno?.type === "maxLength" && "Invalid MobileNumber."}
          </label>


          <div className="flex justify-center items-center py-3 ">
            <button
              type="submit"
              className=" text-xl w-[200px] h-[40px] bg-[#e0e0ed] rounded-xl hover:bg-[#6096B4]">
              Register
            </button>
          </div>

          <p className="flex justify-center items-center ">
            Already Registered?
            <Link to="/login" className="ml-1 text-blue-800">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignupForm;
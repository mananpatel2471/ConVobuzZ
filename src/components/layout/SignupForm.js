import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
 
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [mobileno, setMobileno] = useState("");
  
 
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(fname, email, password, confirmpassword, mobileno);
  };
  return (
    <>
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
          
          <div className="flex justify-center items-center py-2">
            <img src="./images/icons/Name.svg" />
            <input
            {...register("Username", { required: true, maxLength:20 })}
              type="text"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter User Name"
              onChange={(event) => setFname(event.target.value)}
            />
            <lable>
                {errors.username?.type === "required" &&
                  "UserName is Required!"}
                  {errors.username?.type === "maxLength" && "UserName cannot exceed 20 characters "
                  }
              </lable>
          </div>

          <div className="flex justify-center items-center py-2">
            <img src="./images/icons/Email.svg" />
            <input
            {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, })}
              type="email"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <lable>
                {errors.email?.type === "required" && "Email is Required"}
                {errors.email?.type === "pattern" && "Inval Email."}
              </lable>
          </div>

          <div className="flex justify-center items-center py-2">
            <img src="./images/icons/Password.svg" />
            <input
          
              type="password"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="flex justify-center items-center py-2">
            <img src="./images/icons/Cpassword.svg" />
            <input
              type="password"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter Confirm Password"
              onChange={(event) => setConfirmpassword(event.target.value)}
            />
          </div>


          <div className="flex justify-center items-center py-2">
            <img src="./images/icons/MobileNo.svg" />
            <input
            {...register("mobileno", { required: true,pattern: /^[0-9]+$/i, maxLength:10 })}
              type="phone"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter Mobile no"
              onChange={(event) => setMobileno(event.target.value)}
            />
            <lable>
                {errors.mobileno?.type === "required" && "MobileNumber is Required!"}
                {errors.mobileno?.type === "pattern" && "Number Only"}
                {errors.mobileno?.type === "maxLength" && "Invalid MobileNumber."}
              </lable>
          </div>

          

          <div className="flex justify-center items-center py-3 ">
            <button
              type="submit"
              className=" text-xl w-[200px] h-[40px] bg-[#e0e0ed] rounded-xl hover:bg-[#6096B4]">
              Register
            </button>
          </div>

          <p className="flex justify-center items-center ">
            Already Registered?
            <a href="/login" className="ml-1 text-blue-800">
            Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
    </>
      );
    };
export default SignupForm;
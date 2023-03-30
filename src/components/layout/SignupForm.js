import React from "react";

const SignupForm = () => {
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
        <form>
          <div className="flex justify-center items-center py-2">
            <img src="./images/icons/Name.svg" />
            <input
              type="text"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter User Name"
            />
          </div>

          <div className="flex justify-center items-center py-2">
            <img src="./images/icons/Email.svg" />
            <input
              type="email"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter Email"
            />
          </div>

          <div className="flex justify-center items-center py-2">
            <img src="./images/icons/Password.svg" />
            <input
              type="password"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter Password"
            />
          </div>

          <div className="flex justify-center items-center py-2">
            <img src="./images/icons/Cpassword.svg" />
            <input
              type="password"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter Confirm Password"
            />
          </div>


          <div className="flex justify-center items-center py-2">
            <img src="./images/icons/MobileNo.svg" />
            <input
              type="mobile"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter Mobile no"
            />
          </div>

          

          <div className="flex justify-center items-center py-3 ">
            <button
              type="submit"
              className=" text-lg w-[200px] h-[40px] bg-[#e0e0ed] rounded-xl hover:bg-[#6096B4]"
            >
             Register
            </button>
          </div>

          <p className="flex justify-center items-center ">
          Already Registered?
            <a href="" className="ml-1 text-blue-800">
            Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
      );
    };
export default SignupForm;
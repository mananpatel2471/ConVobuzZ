import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center pt-32 p-4">
      <div className=" w-full sm:w-[680px] bg-[#93bfcf] mx-auto rounded-xl p-5">
        <div className="flex justify-center items-center">
          <img
            className="w-[100px] h-[100px]"
            src="./images/icons/convobuzz.svg"
          />
        </div>
        <h3 className="text-3xl  flex justify-center items-center">Sign In</h3>
        <form>
          <div className="flex justify-center items-center py-4">
            <img src="./images/icons/Email.svg" />
            <input
              type="email"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter email"
            />
          </div>

          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/Password.svg" />
            <input
              type="password"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter password"
            />
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" sm:pl-16 ">
              <input
                className="relative  "
                type="checkbox"
                id="exampleCheck3"
              />
              <label className="inline-block ml-1 " for="exampleCheck3">
                Remember me
              </label>
            </div>
            <a href="" className=" text-blue-800 sm:mr-3">
              Forgot password?
            </a>
          </div>

          <div className="flex justify-center items-center ">
            <button
              type="submit"
              className=" text-lg w-[200px] h-[40px] bg-[#e0e0ed] rounded-xl hover:bg-[#6096B4]"
            >
              Login
            </button>
          </div>

          <p className="flex justify-center items-center ">
            Don't have an account?
            <a href="" className="ml-1 text-blue-800">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
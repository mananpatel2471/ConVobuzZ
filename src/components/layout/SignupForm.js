import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/toast";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import config from "../../config/default";

const SignupForm = () => {
  const SERVER_URL = config.SERVER_URL;
  const toast = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();

  const submitHandler = async (e) => {
    // setPicLoading(true);
    e.preventDefault();
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log("in config");
      const { data } = await axios.post(
        SERVER_URL + "/api/user",
        {
          name,
          email,
          password,
          mobile,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));

       navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
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
        <h3 className="text-3xl  flex justify-center items-center">
          Create an Account
        </h3>

        <form onSubmit={submitHandler}>
          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/Name.svg" />
            <input
              type="text"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[40px] rounded-2xl pl-5"
              placeholder="Enter User Name*"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/Email.svg" />
            <input
              type="email"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[40px] rounded-2xl pl-5"
              placeholder="Enter Email*"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/Password.svg" />
            <input
              type="password"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[40px] rounded-2xl pl-5"
              placeholder="Enter Password*"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/Cpassword.svg" />
            <input
              type="password"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[40px] rounded-2xl pl-5"
              placeholder="Enter Confirm Password*"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>

          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/MobileNo.svg" />
            <input
              type="phone"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[40px] rounded-2xl pl-5"
              placeholder="Enter Mobile no*"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="flex justify-center items-center py-3 ">
            <button
              type="submit"
              className=" text-xl w-[200px] h-[40px] bg-[#e0e0ed] rounded-xl hover:bg-[#6096B4]"
            >
              Register
            </button>
          </div>

          <p className="flex justify-center items-center ">
            Already Registered?
            <Routes>
              <Route
                path="/login"
                element={<Login />}
                className="ml-1 text-blue-800"
              >
                {" "}
                Sign In
              </Route>
            </Routes>
            {/* <Link to="/login" className="ml-1 text-blue-800" >
              Sign In
            </Link> */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

import React, {useState} from "react";
import { Button } from "@chakra-ui/button";
import axios from "axios";
import config from "../../config/default";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SignupForm from "./SignupForm";


const Login = () => {
  const SERVER_URL = config.SERVER_URL;
  // const [show, setShow] = useState(false);
  // const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  //const navigate = useNavigate();

  const submitHandler = async () => {
    //setLoading(true);
    console.log(email,password)
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

     console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      // console.log(JSON.stringify(data));
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      debugger
      localStorage.setItem("userInfo", JSON.stringify(data));
      //setLoading(false);
      //navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      //setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center pt-24 p-4">
      <div className=" w-full sm:w-[600px] bg-[#93bfcf] mx-auto rounded-xl p-5">
        <div className="flex justify-center items-center">
          <img
            className="w-[100px] h-[100px]"
            src="./images/icons/convobuzz.svg"
          />
        </div>
        <h3 className="text-3xl  flex justify-center items-center">Sign In</h3>
        <form>
          <div className="flex justify-center items-center py-2">
            <img src="./images/icons/Email.svg"/>
            <input
              type="email"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          

          <div className="flex justify-center items-center py-1">
            <img src="./images/icons/Password.svg"/>
            <input
             
              type="password"
              className="ml-5 bg-[#e0e0ed] outline-none w-full h-[45px] rounded-2xl pl-5"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          

          <div className=" flex items-center justify-between ">
            <div className=" sm:pl-16 ">
              <input
                className="relative  "
                type="checkbox"
                id="exampleCheck3"
              />
              <label className="inline-block ml-1 " htmlFor="exampleCheck3">
                Remember me
              </label>
            </div>
            <a href="" className=" text-blue-800 sm:mr-3">
              Forgot password?
            </a>
          </div>

          <div className="flex justify-center items-center py-2 ">
            <button
             onClick={submitHandler}
              type="submit"
              className=" text-xl w-[200px] h-[40px] bg-[#e0e0ed] rounded-xl hover:bg-[#6096B4]"
            >
              Login
            </button>
            <div>
            <Button
                  variant="solid"
                  color="code.2"
                  // bg="code.1"
                  width="100%"
                  onClick={() => {
                    setEmail("guest@example.com");
                    setPassword("123456");
                  }}
                >
              Get Guest User Credentials
            </Button>
            </div>
          </div>

          <p className="flex justify-center items-center ">
            Don't have an account?
            <Routes><Route path="/signup" element ={<SignupForm />} className="ml-1 text-blue-800"> Sign Up </Route></Routes>
            {/* <Link to="/signup" className="ml-1 text-blue-800">
              Sign Up
            </Link> */}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;

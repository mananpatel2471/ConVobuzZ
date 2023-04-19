import { useEffect , useState } from "react";
import React from "react";
import {Link , useNavigate ,Routes, Route} from "react-router-dom";
import Login from "../layout/Login";

const Landingpage = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]); 

  return (
    <>
      <div className="bg-[#6096B4] py-2 px-5">
        <div className="flex item-center justify-center">
          <div className="relative min-w-[120px]">
            <img className="w-12" src="./images/icons/convobuzz.svg"/>
          </div>
          <div className="flex justify-center item-center w-[calc(100%_-_120px)]">
            <p className="text-4xl text-[#303B69] ">ConVoBuzZ</p>

          </div>
          <div className="hidden md:flex items-center ">
            {/* <Link to="/login"> */}
            {/* <Routes><Route path="/login" element ={<Login />} /></Routes>
              <button
                type="submit"
                className="text-lg  w-[134px] h-[38px] bg-[#BDCDD6] rounded-xl hover:bg-[#9FCFEB] shadow-xl"
              > Sign in
              </button> */}
            {/* </Link> */}


          </div>
        </div>
      </div>

    </>
  );
}

export default Landingpage;

  
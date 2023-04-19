import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../layout/Sidebar";


const VideoHome = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/video/room/${RoomCode}`);
  };

  return (
    <div className=" ">
      <Sidebar />
      <div className="relative h-screen ">
        
        
        <div className="absolute h-full w-full flex overflow-hidden bg-[#93BFCF]"></div>
        {/* Hero Info */}
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          {/* Main */}
          <div className=" flex flex-col items-center justify-center pb-8">
            <h1 className="text-[50px] md:text-[80px] text-[#303B69] font-bold pt-12">
              ConVobuzZ
            </h1>
          </div>

          {/* Enter Code */}
          <form
            onSubmit={submitCode}
            className="text-[#303B69] md:pt-12 flex flex-col items-center justify-center"
          >
            <div className=" flex flex-col justify-center items-center">
              <label className="text-[30px] md:text-[40px] font-bold pt-6">
                Enter Room Code
              </label>
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0"
              />
            </div>
            <button
              type="submit"
              className=" bg-[#303B69] text-white duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 "
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VideoHome;

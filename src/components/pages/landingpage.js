import React from "react";
import Login from "../layout/Login";
import {Link} from "react-router-dom";

const Landingpage = () => {

  const handleClick = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <div className="bg-[#6096B4] py-2 px-5">
        <div className="flex item-center justify-center">
          <div className="relative min-w-[120px]">
            <img className="w-8" src="./images/icons/convobuzz.svg"/>
          </div>
          <div className="flex justify-between item-center w-[calc(100%_-_120px)]">
            <div className="relative flex items-center text-grey w-full md:w-[calc(100%_-_50px)]">

              <p className="text-3xl ml-96">ConVoBuzZ</p>

            </div>
            <div className="hidden md:flex items-center ">
              <Link to="/login">
                <button
                  type="submit"
                  className="text-lg w-[134px] h-[38px] bg-[#BDCDD6] rounded-xl hover:bg-[#9FCFEB] shadow-xl"
                >Signin
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
  
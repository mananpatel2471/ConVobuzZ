import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="flex bg-[#BDCDD6] items-center justify-center ">
        <div className="flex flex-col justify-center group items-center px-4   h-full">
          <Link to="/home">
            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex gap-2 flex-col items-center justify-between py-2">

              <span className="text-[14px]  group-hover:text-blue-700 ">
              Home
            </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center group items-center px-4   h-full">
          <Link to="/notifications">
            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex gap-2 flex-col items-center justify-between py-2">

              <span className="text-[14px]  group-hover:text-blue-700 ">
              Notification
            </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center group items-center px-4   h-full">
          <Link to="/search">
            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex gap-2 flex-col items-center justify-between py-2">

              <span className="text-[14px]  group-hover:text-blue-700 ">
              Search User
            </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col  justify-center group items-center px-4  h-full  ">
          <Link to="/chat">

            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex flex-col gap-2 items-center justify-between py-2">

              <span className="text-[14px] group-hover:text-blue-700 ">Chat</span>
            </div>
          </Link>
        </div>

        <div className="flex flex-col ml-1 justify-center group items-center px-4  h-full  ">
          <Link to="/voicecall">

            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex flex-col gap-2 items-center justify-between py-2">

              <span className="text-[14px] group-hover:text-blue-700 ">Call</span>
            </div>
          </Link>
        </div>

        <div className="flex flex-col  justify-center group items-center px-4  h-full  ">
          <Link to="/contact">
            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex flex-col gap-2 items-center justify-between py-2">

              <span className="text-[14px] group-hover:text-blue-700 ">
                Contacts
            </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-col  justify-center group items-center px-4  h-full  ">
          <Link to="/videocall">
            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex flex-col gap-2 items-center justify-between py-2">

              <span className="text-[14px] group-hover:text-blue-700">
              Video Call
            </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-col  justify-center group items-center px-4  h-full  ">
          <Link to="/calender">
            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex flex-col gap-2 items-center justify-between py-2">

              <span className="text-[14px] group-hover:text-blue-700 ">
              Calendar
            </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

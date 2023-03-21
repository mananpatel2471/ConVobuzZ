function Sidebar() {
  return (
    <>
      <div className="flex flex-col bg-gray-g2 w-[68px] h-[762px]">
        <div className="flex flex-col justify-center items-center h-12 my-2">
          <img className="h-6 w-6 mb-1" src="./images/icons/activity.svg" />
          <span className="text-[10px]  ">Notification</span>
        </div>
        <div className="flex flex-col justify-center items-center h-12 my-2">
          <img className="h-6 w-6 mb-1" src="./images/icons/chat.svg" />
          <span className="text-[10px]  ">Chat</span>
        </div>
        <div className="flex flex-col justify-center items-center h-12 my-2">
          <img className="h-6 w-6 mb-1" src="./images/icons/call.svg" />
          <span className="text-[10px]  ">Call</span>
        </div>
        <div className="flex flex-col justify-center items-center h-12 my-2">
          <img className="h-6 w-6 mb-1" src="./images/icons/videocall.svg" />
          <span className="text-[10px]  ">Video Call</span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

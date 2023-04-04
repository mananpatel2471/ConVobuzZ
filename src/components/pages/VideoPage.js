import React from "react";

const VideoPage = () => {
  return (
    <>
      <div className="Box1">
        <div><img className="Illus1" src="./images/icon/Illustration1.svg"></img></div>
        <button className="Button1">New Meeting</button>
        <div><img className="Logo1" src="./images/icon/Newmeeting.svg"></img></div>
      </div>

      <div className="Box2">
        <div><img className="Illus2" src="./images/icon/Scheduleillus.svg"></img></div>
        <button className="Button2">Schedule a Meeting</button>
        <div><img className="Logo2" src="./images/icon/Schedulemeeting.svg"></img></div>
      </div>
    </>
  );
}
export default VideoPage;
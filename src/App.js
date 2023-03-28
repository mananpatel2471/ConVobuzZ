import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Chatscreen from "./components/layout/Chatscreen";
import Chatpage from "./components/pages/Chatpage";
import SignupForm from "./components/layout/SignupForm";
import Login from "./components/layout/Login";
import VideoPage from "./components/pages/VideoPage";

function App() {
  return (
    <>
    <VideoPage />
      {/* <Navbar />
      <Sidebar /> */}
      {/* <SignupForm /> */}
      {/* <div className="sm:flex">
        <Chatscreen />
        <Chatpage />
      </div> */}
    </>
  );
}

export default App;

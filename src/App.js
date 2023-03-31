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
       <Navbar />
      <Sidebar />
      <div className="flex">
        <Chatscreen />
        <Chatpage />
      </div>   
        <SignupForm /> 
       <Login/>      
       <VideoPage/> 
    </>
  );
}

export default App;

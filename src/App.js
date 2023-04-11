import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChatPage1 from "./components/pages/ChatPage1";
import Landingpage from "./components/pages/landingpage";

// import Homepage from "./components/pages/Homepage";
//import LoriRoutes from "./Routes/loriRoutes";

function App() {
  console.log("in app js")
  return (
    <div>
      {/* <LoriRoutes /> */}
      
        <Routes>
        <Route path="/" element ={<Landingpage />} exact />
        <Route path="/chats" element ={<ChatPage1 />} /> 
        </Routes>
     
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Chatscreen from "./components/layout/Chatscreen";
import Chatpage from "./components/pages/Chatpage";
import LoriRoutes from "./Routes/LoriRoutes";
import Landingpage from "./components/pages/Landingpage";


function App() {
  return (
    <>
        <Landingpage /> 
       <Navbar />
      <Sidebar />  
       <div className="flex">
        <Chatscreen />
        <Chatpage />
       </div>  
               
       <LoriRoutes />   
    </>
  );
}

export default App;

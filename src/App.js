import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Chatscreen from "./components/layout/Chatscreen";
import Chatpage from "./components/pages/Chatpage";
import SignupForm from "./components/layout/SignupForm";
import Login from "./components/layout/Login";
import VideoPage from "./components/pages/VideoPage";
import LoriRoutes from "./Routes/loriRoutes";
import Landingpage from "./components/pages/landingpage";

function App() {
  return (
    <>
      <LoriRoutes/>
      {/* <Navbar />
      <Sidebar />  */}
      {/* <div className="flex">
        <Chatscreen />
        <Chatpage />
       </div>   */}
      {/* <LoriRoutes />    */}
    </>
  );
}

export default App;

import React, {useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Chatscreen from "./components/layout/Chatscreen";
import Chatpage from "./components/pages/Chatpage";
import LoriRoutes from "./Routes/loriRoutes";
import Landingpage from "./components/pages/landingpage";
import SignupForm from "./components/layout/SignupForm";
import {getUser, readUserData} from "./state/global";

function App() {
  const {token} = getUser();

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <LoriRoutes/>
    </>
  );
}

export default App;

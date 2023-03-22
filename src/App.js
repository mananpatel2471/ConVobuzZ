import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Chatscreen from "./components/layout/Chatscreen";
import Chatpage from "./components/pages/Chatpage";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="sm:flex">
        <Chatscreen />
        <Chatpage />
      </div>
    </>
  );
}

export default App;

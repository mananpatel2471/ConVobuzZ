import React, {useEffect, useState} from "react";

import "./App.css";
import {Routes, Route} from "react-router-dom";
import ChatPage1 from "./components/pages/ChatPage1";
//import Landingpage from "./components/pages/landingpage";
import Homepage from "./components/pages/Homepage";
import Video from "./components/video/Video";
import LoriRoutes from "./Routes/loriRoutes";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import {UserContext} from "./context/user.context";

// import Homepage from "./components/pages/Homepage";
//import LoriRoutes from "./Routes/loriRoutes";


function App() {
  const [user, setUser] = useState({name: '', email: '', mobile: -1, token})
  return (
    <div>

      <UserContext.Provider value={{user, setUser}}>

      </UserContext.Provider>
      {/*<Navbar />*/}
      {/*<Sidebar/>*/}
      {/*<LoriRoutes />*/}

      <Routes>
        <Route path="/" element={<Homepage/>} exact/>
        <Route path="/chats" element={<ChatPage1/>}/>
        <Route path="/video" element={<Video/>}/>
      </Routes>

    </div>
  );
}


export default App;

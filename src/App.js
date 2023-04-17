import React, {useEffect, useState} from "react";

import "./App.css";
import ChatPage1 from "./components/pages/Chatpage";
import Main from "./Routes/Main";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import {UserContext} from "./context/user.context";

// import Homepage from "./components/pages/Homepage";
//import LoriRoutes from "./Routes/loriRoutes";


function App() {
  const [user, setUser] = useState({name: '', email: '', mobile: -1, token:""})
  return (
    <div>

      <UserContext.Provider value={{user, setUser}}>
        <Navbar />
        <Sidebar/>
        <Main/>
        {/*<Routes>*/}
        {/*  <Route path="/" element={<Homepage/>} exact/>*/}
        {/*  <Route path="/chats" element={<ChatPage1/>}/>*/}
        {/*  <Route path="/video" element={<Video/>}/>*/}
        {/*</Routes>*/}
      </UserContext.Provider>


    </div>
  );
}


export default App;

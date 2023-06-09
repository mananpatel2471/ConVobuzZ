import React, { useState } from 'react';
import { Box } from "@chakra-ui/layout";
import { ChatState } from "../../state/ChatProvider";
import SideDrawer from '../ChatContents/SideDrawer';
import MyChats from '../ChatContents/MyChats';
import ChatBox from '../ChatContents/ChatBox';
import Sidebar from '../layout/Sidebar';

const ChatPage1 = () => {
  console.log("in user ")
  const { user } = ChatState();
  
  const[fetchAgain, setFetchAgain] = useState(false);
    
  
  return (
    <div>
    <div style = {{ width: "100% ",backgroundColor:"#93BFCF"}}>
      {user && <SideDrawer/>}
      <Sidebar />
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
      {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
    </div>
  )
}

export default ChatPage1

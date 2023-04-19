import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
 //import Login from "../layout/Login";
import Login from "../Authentication/Login";
import SignupForm from "../layout/SignupForm";
import Landingpage from "./landingpage";

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, []);

  return (
    <div>
    <Landingpage />
    <Container maxW="xl" centerContent>
      {/* <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        > */}
      {/* <div className="flex justify-center items-center">
          <img
            className="w-[100px] h-[100px]"
            src="./images/icons/convobuzz.svg"
          />
          </div> */}
      {/* <Text fontSize="4xl" fontFamily="Work sans">
            ConVoBuzZ
          </Text> */}
      {/* </Box> */}
    
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignupForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
    </div>
  );
}

export default Homepage;

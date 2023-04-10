import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import SignupForm from "../components/layout/SignupForm";
import Login from "../components/layout/Login";
import Error from "../components/pages/Error";
import Landingpage from "../components/pages/landingpage";
import HomePage from "../components/pages/Home";
import SearchUser from "../components/pages/SearchUser";
import {getUser} from "../state/global";

const LoriRoutes = () => {

  const {token} = getUser();
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/welcome" element={<Landingpage/>}/>
        <Route exact path="/error" element={<Error/>}/>
        <Route exact path="/signup" element={<SignupForm/>}/>
        <Route exact path="/search" element={<SearchUser/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}
export default LoriRoutes;
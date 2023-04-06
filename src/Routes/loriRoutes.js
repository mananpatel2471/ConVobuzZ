import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import SignupForm from "../components/layout/SignupForm";
import Login from "../components/layout/Login";
import Error from "../components/pages/Error";
import Landingpage from "../components/pages/landingpage";
import HomePage from "../components/pages/Home";
import SearchUser from "../components/pages/SearchUser";

const LoriRoutes = () => {
  return (

    <div>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/welcome" element={<Landingpage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/search" element={<SearchUser/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}
export default LoriRoutes;
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import SignupForm from "../components/layout/SignupForm";
import Login from "../components/layout/Login";
import Error from "../components/pages/Error";
import Landingpage from "../components/pages/landingpage";
import HomePage from "../components/pages/Home";

const LoriRoutes = () => {
  return (

    <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/welcome" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
      </Routes>
    </div>
  );
}
export default LoriRoutes;
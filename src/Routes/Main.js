import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import SignupForm from "../components/layout/SignupForm";
import Login from "../components/layout/Login";
import Error from "../components/pages/Error";
import Landingpage from "../components/pages/landingpage";
import HomePage from "../components/pages/Homepage";
import SearchUser from "../components/pages/SearchUser";
import {getUser} from "../state/global";

const Main = () => {

  const {token} = getUser();
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/welcome" element={<Landingpage/>}/>
        <Route exact path="/error" element={<Error/>}/>
        <Route exact path="/search" element={<SearchUser/>}/>
        <Route exact path="/notification"></Route>
      </Routes>
    </div>
  );
}
export default Main;
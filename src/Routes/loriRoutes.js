import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupForm from "./components/layout/SignupForm";
import Login from "./components/layout/Login";

const loriRoutes = () => {
    return (
        <Router>
          <div>
            <Routes>
              <Route
                exact path="/"
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignupForm />} />
            </Routes>
          </div>
        </Router>
      );
}
export default loriRoutes;
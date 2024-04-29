import "./App.css";
import React from "react";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import AboutUs from "./Components/Landingpage/AboutUs";
import ContactUs from "./Components/Landingpage/ContactUs";
import Footer from "./Components/Landingpage/Footer";
import Header from "./Components/Landingpage/Header";
import Landingpage from "./Components/Landingpage/Landingpage";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ThemeState from "./Components/Context/Theme/ThemeState";
import Homepage from "./Components/Home/Homepage";

function App() {
  return (
    <>
    <ThemeState>
      <Router>
        <Routes>

          <Route
            path="/*"
            element={
              <React.Fragment>
                <Header />
                <div>
                  <Routes>
                    <Route exact path="/" element={<Landingpage />} />
                    <Route exact path="/aboutus" element={<AboutUs />} />
                    <Route exact path="/contactus" element={<ContactUs />} />
                  </Routes>
                </div>
                <Footer />
              </React.Fragment>
            }
          />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Homepage/>} />
          
        </Routes>
      </Router>
      </ThemeState>
    </>
  );
}

export default App;

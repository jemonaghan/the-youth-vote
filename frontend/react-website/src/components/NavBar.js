import React, { useState, useEffect } from "react";
import { ClassNames } from "@emotion/react";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../components-styling/NavBar.css";

import logo from "../images/logo-orange.png"
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Navbar = () => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      
  return (
    <div className="NavBar">
        {windowDimensions.width < "990" ? <MobileNavigation />: <Navigation />}

        <div className="nav-logo">
            <a href="/"><img src={logo} alt="the youth vote logo" /></a>
        </div>
    </div>
  );
}
export default Navbar;


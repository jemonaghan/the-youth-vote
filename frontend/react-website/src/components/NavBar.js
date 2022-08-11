import React from "react";
import Navigation from "./Navigation";
import { ClassNames } from "@emotion/react";
import MobileNavigation from "./MobileNavigation";
import "../components-styling/NavBar_module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

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

      
    </div>
  );
}
export default Navbar;


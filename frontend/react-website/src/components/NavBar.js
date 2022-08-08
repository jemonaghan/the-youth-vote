import React from "react";
import Navigation from "./Navigation";
import { ClassNames } from "@emotion/react";
import MobileNavigation from "./MobileNavigation";
import "../components-styling/NavBar_module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgWindows } from "react-icons/cg";
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

// function Navbar() {
//   return (
//     <nav className="nav-bar">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <>
//             &nbsp;
//             </>
//             </div>
//             <div className="row">
//               <div className="col-9 text-left">
//               <Link to="/" className="navbar-logo">The Youth Vote</Link>

//               </div>
//               <div className="col-1 text-center">
//               <Link to="/vote" className="nav-link">Vote</Link>
//               </div>
//               <div className="col-1 text-center">
//               <Link to="/results" className="nav-link">Results</Link>
//               </div>
//               <div className="col-1 text-center">
//               <Link to="/sign-up" className="nav-link">Sign Up</Link>
//               </div>
//               <div className="row">
//               <div className="col-12">
//                 <>
//                 &nbsp;
//                 </>
//               </div>
//             </div>
//             </div>
//         </div>
//       </div>
//       </nav>
//       )
// }
// export default Navbar;

{/* <div className='classes.NavBar'>
      <nav>
        <ul>
          <li>
          <a href="/" className="navbar-logo">The Youth Vote</a>
          </li>
          <li>
          <a href="/vote" className="nav-link">Vote</a>
          </li>
          <li>
          <a href="/results" className="nav-link">Results</a>
          </li>
          <li>
          <a href="/sign-up" className="nav-link">Sign Up</a>
          </li>
        </ul>
      </nav>
    </div> */}

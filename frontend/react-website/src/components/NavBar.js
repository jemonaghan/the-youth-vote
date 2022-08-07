import "../components-styling/NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <>
            &nbsp;
            </>
            </div>
            <div className="row">
              <div className="col-9 text-left">
              <Link to="/home" className="navbar-logo">
                The Youth Vote
              </Link>
              </div>
              <div className="col-1 text-center">
              <Link to="/vote"className="nav-link">Vote</Link>
              </div>
              <div className="col-1 text-center">
              <Link to="/results" className="nav-link">Results</Link>
              </div>
              <div className="col-1 text-center">
              <Link to="/sign-up"className="nav-link">Sign Up</Link>
              </div>
              <div className="row">
              <div className="col-12">
                <>
                &nbsp;
                </>
              </div>
            </div>
            </div>
        </div>
      </div>
      </nav>
      )
}
export default Navbar;

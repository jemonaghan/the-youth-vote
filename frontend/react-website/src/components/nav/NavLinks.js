import React from "react";
import { NavLink } from "react-router-dom"



const NavLinks = (props) => {
    return (
        <ul>
            <NavLink exact activeClassName="active" to="/">
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a href="/" className="navbar-link">The Youth Vote</a>
                </li>
            </NavLink>
            <NavLink exact activeClassName="active" to="/vote">
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a href="/vote" className="nav-link">Vote</a>
                </li>
            </NavLink>
            <NavLink exact activeClassName="active" to="/results">
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a href="/results" className="nav-link">Results</a>
                </li>
            </NavLink>
            <NavLink exact activeClassName="active" to="/learn-more">
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a href="/learn-more" className="nav-link">Learn More</a>
                </li>
            </NavLink>
       </ul>
    );
}
export default NavLinks;
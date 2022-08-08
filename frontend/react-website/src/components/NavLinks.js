import React from "react";


const NavLinks = (props) => {
    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/" className="navbar-logo">The Youth Vote</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/vote" className="nav-link">Vote</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/results" className="nav-link">Results</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/sign-up" className="nav-link">Sign Up</a>
            </li>
       </ul>
    );
}
export default NavLinks;
import React from "react";


const NavLinks = (props) => {
    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/" className="navbar-link">The Youth Vote</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/vote" className="nav-link">Vote</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/results" className="nav-link">Results</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/learn-more" className="nav-link">Learn More</a>
            </li>
       </ul>
    );
}
export default NavLinks;
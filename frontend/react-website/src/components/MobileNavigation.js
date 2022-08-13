import React, { useState } from "react";

import { CgMenu } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';
import { ClassNames } from "@emotion/react";

import NavLinks from './NavLinks';

import '../components-styling/NavBar.css';


  
const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenu className={ClassNames.hamburger}
                            size='40px' color='white' 
                            onClick={() => setOpen(!open)} />

    const closeIcon = <CgClose className={ClassNames.hamburger}
                            size='40px' color='white' 
                            onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => setOpen=(false);
    return (
        <nav className={ClassNames.MobileNavigation}
        >
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}
export default MobileNavigation;
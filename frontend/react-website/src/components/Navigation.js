import React from "react";
import { ClassNames } from '@emotion/react';

import NavLinks from './NavLinks';


const Navigation = () => {
    
    return (
        <nav className={ClassNames.Navigation}
        >
             <NavLinks />
        </nav>
    );
}
export default Navigation;
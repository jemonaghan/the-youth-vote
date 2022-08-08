import React from "react";
import NavLinks from './NavLinks';
import { ClassNames } from '@emotion/react';
import { useState, useEffect } from 'react';


const Navigation = () => {
    
    return (
        <nav className={ClassNames.Navigation}
        >
             <NavLinks />
        </nav>
    );
}
export default Navigation;
import React, { useState } from 'react';
import { motion } from "framer-motion";

import SchoolEnter from './SchoolEnter';
import SchoolResults from './SchoolResults';
import PollCards from './PollCards';
import Validate from './Validate';
import SignUpThankYou from './ThankYou';


function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        schoolSearch: "",
        schoolName: "",
        postcode: "",
        pollCardNum: "",
    });
  
    const PageDisplay = () => {
        if (page === 0) {
            return <SchoolEnter 
                formData={formData} setFormData={setFormData} 
                page={page} setPage={setPage}
            />;
        } 
        
        else if (page === 1) {
            return <SchoolResults 
                formData={formData} setFormData={setFormData} 
                page={page} setPage={setPage}
            />;
        } 
        
        else if (page === 2) {
            return <PollCards 
                formData={formData} setFormData={setFormData} 
                page={page} setPage={setPage}
            />;
        } 
        
        else if (page === 3) {
            return <Validate 
                formData={formData} setFormData={setFormData} 
                page={page} setPage={setPage}
            />;
        } 

        else if (page === 4) {
            return <SignUpThankYou 
                formData={formData} setFormData={setFormData} 
                page={page} setPage={setPage}
            />;
        } 

        else {
            return <h1>Sorry there has been an error please refresh the page</h1>;
        }
    };
  
    return (
        <div className="sign-up-form">
            <motion.div className="form-container"
                animate={{ scale: 1}}
                initial={{ scale: 0.2}}>
                
                <motion.div  
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{delay: 0.2}}
                >
                    {PageDisplay()}
                </motion.div>
                  
            </motion.div>

        </div>
    );
}
  
export default Form;
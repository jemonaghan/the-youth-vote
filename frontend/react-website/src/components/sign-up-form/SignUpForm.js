import React, { useState } from 'react';
import { motion } from "framer-motion";

import SchoolEnter from './SchoolEnter';
import SchoolResults from './SchoolResults';
import PollCards from './PollCards';
import Validate from './Validate';


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
        
        else {
            return <Validate 
                formData={formData} setFormData={setFormData} 
                page={page} setPage={setPage}
            />;
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
        {/* </div>
        <div className="form-container">
        <div className="sign-up-form">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  axios({
                    method: 'post',
                    url: 'https://localhost:5000/school/register',
                    data: {formData}
                  });
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div> */}
      </div>
    );
  }
  
  export default Form;
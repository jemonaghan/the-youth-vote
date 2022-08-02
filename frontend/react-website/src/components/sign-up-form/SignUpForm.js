import {useState, useEffect} from 'react'
import React, { Component } from 'react'

import SchoolEnter from './SchoolEnter';
import SchoolResults from './SchoolResults';
import PollCards from './PollCards';
import Validate from './Validate';


function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      schoolName: "",
      postcode: "",
      pollCardNum: "",
    });
  
    const FormTitles = ["Step 1: School", "Step 1: School", "Step 2: Poll Cards", "Check Details"];
  
    const PageDisplay = () => {
      if (page === 0) {
        return <SchoolEnter formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <SchoolResults formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
        return <PollCards formData={formData} setFormData={setFormData} />;
      } else {
        return <Validate formData={formData} setFormData={setFormData} />;
      }
    };
  
    return (
      <div className="form-container">
        <div className="sign-up-form">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
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
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Form;


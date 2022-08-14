import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';

import ContinueButton from '../buttons/ContinueButton';
import BackButton from '../buttons/BackButton';


function Age({formData, setFormData, page, setPage}) {

    const [errorMessage, setErrorMessage] = useState("");
  
    function continueForward () {
        if (formData.age > 10 && formData.age < 19) {
            setPage(page + 1)
        }
        else if (formData.age > 0 && formData.age <= 10 ){
            console.log("voter is too young")
            setErrorMessage('The voter is too young, you must be between 11 and 18 yearls old.')
        }
        else if (formData.age >= 19 ){
            console.log("voter is too old")
            setErrorMessage('The voter is too old, you must be between 11 and 18 yearls old.')
        }
        else {
            console.log("error in user input, input must be int")
            setErrorMessage('Please enter your age in a numeric format')
        }
    }
    
    function goBack () {
        setPage(page - 1)
    }

    return (
        <div>
            <div className='header inactive'>
                <h1>Step 1: Poll Card</h1>
            </div>
            <motion.div className='header'
                animate={{ y: 0}}
                initial={{ y: 270}}
                transition={{delay: 0.2, type: "inertia "}}
            >
                <h1>Step 2: Age</h1>
            </motion.div>

            <motion.div className='body'
                animate={{ opacity: 1}}
                initial={{ opacity: 0}}
                transition={{delay: 0.4}}>
                <h2>Please Enter Your Age</h2>
            <form>
            <input
                type="number"
                placeholder='XX'
                data-testid="age-input"
                onChange={(event) =>
                    setFormData({ ...formData, age: event.target.value })
                    }
            />
            <p className='message' id="pollcard-error">{errorMessage}</p>
            < ContinueButton onClick={continueForward} buttonLabel="Continue" />
            </form>
            <div className='back'>
                <BackButton onClick={goBack} buttonLabel="< Back"/>
            </div>
            </motion.div>

            <div className='footer-headers'>
                <div className='header inactive'>
                    <h1>Step 3: Vote</h1>
                </div>
            </div>
        </div>
    );
}

export default Age

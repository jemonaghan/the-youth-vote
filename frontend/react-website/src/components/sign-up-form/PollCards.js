import React from 'react';
import { motion } from "framer-motion";

import ContinueButton from '../buttons/ContinueButton';
import BackButton from '../buttons/BackButton';

function PollCards({ formData, setFormData, page, setPage }) {
    
    function continueForward () {
        if (parseInt(formData.pollCardNum) > 0 && parseInt(formData.pollCardNum) <= 150) {
            setPage(page + 1)
        }
        else if (parseInt(formData.pollCardNum) < 0 || parseInt(formData.pollCardNum > 150)){
            console.log("Request need to be between 0 - 150")
        }
        else {
            console.log("Error - input needs to be numeric")
        }
            
    }

    function goBack () {
        setPage(page - 1)
    }

    return (
        <div>
            <div className='header inactive'>
                <h1>Step 1: School</h1>
            </div>
            <motion.div className='header'
                animate={{ y: 0}}
                initial={{ y: 360}}
                transition={{delay: 0.2, type: "inertia "}}
            >
                <h1>Step 2: Poll Cards</h1>
            </motion.div>

            <motion.div className='body'
                animate={{ opacity: 1}}
                initial={{ opacity: 0}}
                transition={{delay: 0.4}}>
                <h2>How Many Poll Cards Does Your School Need?</h2>
                <p>1 pollcard = 1 student vote</p>
            <input  
                type="text"
                placeholder="0 - 150"
                value={formData.pollCardNum}
                onChange={(event) =>
                    setFormData({ ...formData, pollCardNum: event.target.value })
                }   
            />
            <ContinueButton onClick={continueForward} buttonLabel = "Continue" />
            <div className='back'>
                    <BackButton onClick={goBack} buttonLabel="< Back"/>
                </div>
            </motion.div>

            <div className='footer-headers'>

                <div className='header inactive'>
                    <h1>Step 3: Confirm</h1>
                </div>

            </div>

        </div>
    );
}

export default PollCards
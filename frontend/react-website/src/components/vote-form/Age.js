import React from 'react'
import { motion } from "framer-motion";

import ContinueButton from '../buttons/ContinueButton';
import BackButton from '../buttons/BackButton';


function Age({formData, setFormData, page, setPage}) {
  
    function continueForward () {
        setPage(page + 1)
        // console.log(formData)
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
                transition={{delay: 0.2}}>
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
                onChange={(event) =>
                    setFormData({ ...formData, age: event.target.value })
                    }
            />

            < ContinueButton onClick={continueForward} buttonLabel="Continue"/>
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
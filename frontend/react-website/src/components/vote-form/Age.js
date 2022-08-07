import React from 'react'
import { motion } from "framer-motion";

import ContinueButton from '../buttons/ContinueButton';


function Age({formData, setFormData, page, setPage}) {
  
    function handleOnClick () {
        setPage(page + 1)
        // console.log(formData)
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

            < ContinueButton onClick={handleOnClick} buttonLabel="Continue"/>
            </form>
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
import React from 'react'
import { motion } from "framer-motion";

function VoteChoice({formData, setFormData, page, setPage}) {
  
  function handleOnClick2 () {
    // setFormData({ ...formData, postcode: input });
    setPage(page + 1)
    console.log(formData)
  };

    return (
        <div>
            <div className='header inactive'>
              <h1>Step 1: Poll Card</h1>
            </div>
            <div className='header inactive'>
              <h1>Step 2: Age</h1>
            </div>
            <motion.div className='header'
              animate={{ y: 0}}
              initial={{ y: 250}}
              transition={{delay: 0.2}}>
                <h1>Step 3: Vote</h1>
            </motion.div>

            <motion.div className='body'
                animate={{ opacity: 1}}
                initial={{ opacity: 0}}
                transition={{delay: 0.4}}>
                <h2>Select the Party You Would Like to Vote For</h2>
              <div className='party-choices'>
                <div>
                  Labour
                </div>
                <div>
                  Green
                </div>
                <div>
                  Conservative
                </div>
              </div>

                {/* onClick={(event) =>
                    setFormData({ ...formData, vote: event.target.value })
                    } */}

            <button onClick={handleOnClick2}>
                Continue
            </button>
  
            </motion.div>

        </div>
  );
}


export default VoteChoice
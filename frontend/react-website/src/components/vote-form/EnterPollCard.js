import React, { useState } from 'react';
import { motion } from "framer-motion";

import ContinueButton from '../buttons/ContinueButton';

// static poll card number for testing
import voterInfo from "../../data/voterdata.json";

// poll card number for testing
// 110907-000000

function EnterPollCard({formData, setFormData, page, setPage}) {
    
    const [errorMessage, setErrorMessage] = useState("");

    const voterData = voterInfo.data.map(({ pollCardNum }) => pollCardNum);
    const voterNumber = voterData.toString();

    const voterData2 = voterInfo.data.map(({ vote }) =>  vote);
    const voterChoice = voterData2.toString();

    function continueForward () {
        
        //need axios here to check the entered pollcard number and whether or not the voter has voted

        // pollcard number is in database and voter has NOT voted
        if (voterNumber === formData.pollCardNum && voterChoice === "") {
            console.log("match, no vote")
            setPage(page + 1)
        } 
        // pollcard number is in database and voter HAS voted
        else if (voterNumber === formData.pollCardNum && voterChoice === "1") {
            console.log("match, voted")
            setPage(page - 1)
        }
        // pollcard number is not in database
        else {
            console.log("no match")
            setErrorMessage("Sorry that number is not recognised")
        }
    };
  
    return (
        <div>
            <div className='header'>
                <h1>Step 1: Poll Card</h1>
            </div>

            <motion.div className='body'
                animate={{ opacity: 1}}
                initial={{ opacity: 0}}
                transition={{delay: 0.8}}>
                <h2>Please Enter Your Poll Card Number</h2>

                <input
                    type="text"
                    placeholder='XXXXXX-XXXXXX'
                    defaultValue={formData.pollCardNum}
                    onChange={(event) =>
                        setFormData({ ...formData, pollCardNum: event.target.value })
                        }
                />
                
                <ContinueButton onClick={continueForward} buttonLabel = "Continue" />

                <p>(For testing) - 110907-000000</p>
                <p>{errorMessage}</p>
            </motion.div>

            <div className='footer-headers'>

                <div className='header inactive'>
                    <h1>Step 2: Age</h1>
                </div>
                <div className='header inactive'>
                    <h1>Step 3: Vote</h1>
                </div>

            </div>
        </div>
  );
}

export default EnterPollCard
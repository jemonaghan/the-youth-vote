import React, { useState } from 'react';
import axios from 'axios';

import ContinueButton from '../buttons/ContinueButton';


function EnterPollCard({formData, setFormData, page, setPage}) {

    
    const [errorMessage, setErrorMessage] = useState("");
    const [searchVote, setSearchVote] = useState( [] );


    function checkPollCard (event){
        getVote(event.target.value)
        setFormData({ ...formData, pollCardNum: event.target.value })
    };


    const getVote = async (num) => {
        try {
            const response = await axios.get(
                'http://127.0.0.1:5000/voter/pollcard/<pollcard_id>', {
                params: {
                    v: Number(num)                  
                }}
            )
            setSearchVote(response.data)
        }
        catch (error) {
            console.log("Can't find in Database")
        }
    };
   

    function continueForward () {
        getVote()
        // pollcard number is in database and voter has NOT voted
        if (searchVote === 'Exists no vote') {
            console.log("match, no vote")
            setPage(page + 1)
        }

        // pollcard number is in database and voter HAS voted
        else if (searchVote === 'This pollcard has already been used'){
            console.log("match, voted")
            setPage(page + 1)
        }
        
        // pollcard number is not in database
        else {
            console.log("no match")
            setErrorMessage("Sorry that number is not recognised")
        }
    }
    
  
    return (
        <div>
            <div className='header'>
                <h1>Step 1: Poll Card</h1>
            </div>

            <div className='body'>
                <h2>Please Enter Your Poll Card Number</h2>

                <input
                    type="text"
                    placeholder='XXXXXXXXXX'
                    defaultValue={formData.pollCardNum}
                    onChange={checkPollCard}
                />
                
                <ContinueButton onClick={continueForward} buttonLabel = "Continue" />

                <p className='message' id="pollcard-error">{errorMessage}</p>
                
            </div>

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
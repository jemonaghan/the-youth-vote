import React from 'react'
// Components
import ContinueButton from '../buttons/ContinueButton'

function ConfirmChoice({formData, page, setPage}) {
    
    function continueForward () {
        setPage(page + 1)
        //need post to send form data to the database
    };

    return (
        <div>
            <div className='header inactive'>
                <h1>Step 1: Poll Card</h1>
            </div>
            <div className='header inactive'>
                <h1>Step 2: Age</h1>
            </div>
            <div className='header'>
                <h1>Step 3: VOTE</h1>
            </div>

            <div className='body'>
                <h2>Please Confirm Your Details</h2>
                <p>POLL CARD ID: {formData.pollCardNum}</p>
                <p>AGE: {formData.age}</p>
                <p>VOTE: {formData.voteChoice}</p>
                <ContinueButton onClick={continueForward} buttonLabel="Confirm"/>
            </div>

        </div>
    )
}

export default ConfirmChoice
import React from 'react';

import ContinueButton from '../buttons/ContinueButton';
import BackButton from '../buttons/BackButton';

function Validate({ formData, page, setPage }) {
    
    function continueForward () {

        // need axios here to send the form data to the data base

        setPage(page + 1)
    }

    function goBack () {
        setPage(page - 1)
    }
    
    return (
        <div>
            <div className='header inactive'>
                <h1>Step 1: School</h1>
            </div>
            <div className='header inactive'>
                <h1>Step 2: Poll Cards</h1>
            </div>
            <div className='header'>
                <h1>Step 3: Confirm</h1>
            </div>

            <div className='body'>
                <h2>Please Check All the Details Are Correct</h2>
                <div className='details'>
                    <p>School Name: {formData.schoolName}</p>
                    <p>School Address: {formData.postcode}</p>
                    <p>Poll Cards: {formData.pollCardNum}</p>
                </div>
                
                <ContinueButton onClick={continueForward} buttonLabel = "Confirm" />
                
                <div className='back'>
                    <BackButton onClick={goBack} buttonLabel="< Back"/>
                </div>                
            </div>

        </div>
    );
}

export default Validate
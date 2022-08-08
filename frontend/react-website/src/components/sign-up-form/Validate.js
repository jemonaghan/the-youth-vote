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
                <div>
                    <p>School Name: {formData.schoolName}</p>
                </div>
                <div>
                    School Address: {formData.postcode}
                </div>
                <div>
                    Poll Cards: {formData.pollCardNum}
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
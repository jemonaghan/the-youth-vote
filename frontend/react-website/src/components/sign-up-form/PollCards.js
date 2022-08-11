import React from 'react';
import ContinueButton from '../buttons/ContinueButton';
import BackButton from '../buttons/BackButton';

function PollCards({ formData, setFormData, page, setPage }) {
    
    function continueForward () {
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
            <div className='header'>
                <h1>Step 2: Poll Cards</h1>
            </div>

            <div className='body'>
                <h2>How Many Poll Cards Does Your School Need?</h2>
            <input  
                type="text"
                placeholder="Please enter how many Poll Cards you would like"
                value={formData.pollCardNum}
                onChange={(event) =>
                    setFormData({ ...formData, pollCardNum: event.target.value })
                }   
            />
            <ContinueButton onClick={continueForward} buttonLabel = "Continue" />
            <div className='back'>
                    <BackButton onClick={goBack} buttonLabel="< Back"/>
                </div>
            </div>

            <div className='footer-headers'>

                <div className='header inactive'>
                    <h1>Step 3: Confirm</h1>
                </div>

            </div>

        </div>
    );
}

export default PollCards
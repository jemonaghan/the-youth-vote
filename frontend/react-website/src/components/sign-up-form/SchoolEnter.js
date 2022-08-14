import React from 'react';
import {useState} from 'react';

import ContinueButton from '../buttons/ContinueButton';

function SchoolEnter({formData, setFormData, page, setPage}) {

    const [errorMessage, setErrorMessage] = useState("");
    
    function continueForward () {
        if (formData.schoolSearch === "") {
            console.log('Field is empty')
            setErrorMessage('Please enter your school name or school postcode')
        }
        else {
            setPage(page + 1)
        }
    }

    return (
        <div>
            <div className='header'>
                <h1>Step 1: School</h1>
            </div>

            <div className='body'>
                <h2>Please Enter Your School Name or Postcode</h2>
                <input
                    type="text"
                    placeholder="Search for your school..."
                    value={formData.schoolSearch}
                    onChange={(event) =>
                        setFormData({ ...formData, schoolSearch: event.target.value })
                        }
                />
                <p className='message' id="error">{errorMessage}</p>
                <ContinueButton onClick={continueForward} buttonLabel = "Continue" />
            </div>

            <div className='footer-headers'>

                <div className='header inactive'>
                    <h1>Step 2: Poll Cards</h1>
                </div>
                <div className='header inactive'>
                    <h1>Step 3: Confirm</h1>
                </div>

            </div>

        </div>
    )
}

export default SchoolEnter
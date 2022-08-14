import React from 'react';
import axios from 'axios';

import ContinueButton from '../buttons/ContinueButton'
import BackButton from '../buttons/BackButton';

function ConfirmChoice({formData, page, setPage}) {
    
    function continueForward () {

        let pollcard_id = formData.pollCardNum;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/voter/vote/' + pollcard_id,
            headers: {
                'Content-Type': 'application/json'
                },
            data: {
                vote: formData.voteChoice,
                age: Number(formData.age)                                              
            },
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        
        setPage(page + 1)
    };

    function goBack () {
        setPage(page - 1)
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
                <div className='details'>
                    <p>POLL CARD ID: {formData.pollCardNum}</p>
                    <p>AGE: {formData.age}</p>
                    <p>VOTE: {formData.voteChoice}</p>
                </div>
                
                <ContinueButton onClick={continueForward} buttonLabel="Confirm"/>
                
                <div className='back'>
                    <BackButton onClick={goBack} buttonLabel="< Back"/>
                </div>
            </div>

        </div>
    );
}

export default ConfirmChoice
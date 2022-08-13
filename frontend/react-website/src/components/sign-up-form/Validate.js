import React from 'react';
import axios from 'axios';
import { motion } from "framer-motion";

import ContinueButton from '../buttons/ContinueButton';
import BackButton from '../buttons/BackButton';

function Validate({ formData, page, setPage, pollcards, setPollcards }) {


    function updateData (info){
        setPollcards(info);
    }


    function sendGetRequest () {

        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/school/register',
            headers: {
                'Content-Type': 'application/json'
                },
            data: {
                numberOfPollcards: Number(formData.pollCardNum),
                urn: formData.schoolUrn       
            },
        })
            .then(response => {
                let newData = response.data.newPollcardNumbers;
                updateData(newData);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    function continueForward () {     
        sendGetRequest()
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
            <motion.div className='header'
                animate={{ y: 0}}
                initial={{ y: 360}}
                transition={{delay: 0.2, type: "inertia "}}
            >
                <h1>Step 3: Confirm</h1>
            </motion.div>

            <motion.div className='body'
                animate={{ opacity: 1}}
                initial={{ opacity: 0}}
                transition={{delay: 0.4}}
            >
                <h2>Please Check All the Details Are Correct</h2>
                <div className='details'>
                    <p>School Name: {formData.schoolName}</p>
                    <p>School Address: {formData.postcode}</p>
                    <p>Poll Cards: {formData.pollCardNum}</p>
                </div>
                
                <ContinueButton onClick={continueForward} buttonLabel = "Confirm" />
                {pollcards}
                <div className='back'>
                    <BackButton onClick={goBack} buttonLabel="< Back"/>
                </div>                
            </motion.div>

        </div>
    );
}

export default Validate
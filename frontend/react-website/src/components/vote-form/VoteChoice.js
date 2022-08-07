import React, { useState } from 'react';
import { motion } from "framer-motion";

import greenLogo from "../../images/green-party-logo.png";
import consLogo from "../../images/conservative-party-logo.png"
import snpLogo from "../../images/snp-party-logo.png"

import ContinueButton from '../buttons/ContinueButton';
import BackButton from '../buttons/BackButton';

function VoteChoice({formData, setFormData, page, setPage}) {
  
    const [voteValue, setVoteValue] = useState('')
    const [buttonText, setButtonText] = useState('Please Select a Party')

    function selectPartyCons () {
        setVoteValue("Conservative");
        setButtonText('VOTE!');
    }

    function selectPartyGreen () {
        setVoteValue("Green Party");
        setButtonText('VOTE!')
    }

    function selectPartySNP () {
        setVoteValue("Scottish National Party")
        setButtonText('VOTE!')
    }

    function continueForward () {
        if (buttonText === 'VOTE!') {
            setFormData({ ...formData, voteChoice: voteValue })
            setPage(page + 1)

        } else {
            console.log('select party')
        }
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
            <motion.div className='header'
              animate={{ y: 0 }}
              initial={{ y: 320 }}
              transition={{ delay: 0.2 }}>
                <h1>Step 3: Vote</h1>
            </motion.div>

            <motion.div className='body'
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.4 }}>
                <h2>Select the Party You Would Like to Vote For</h2>
              <div className='party-choices'>
                
                <div className="selection">
                    <a onClick={selectPartyGreen}><img src={greenLogo} width={100} alt="green party logo" /></a>
                </div>

                <div>
                    <a onClick={selectPartyCons}><img src={consLogo} width={100} alt="conservative party logo" /></a>
                </div>

                <div>
                    <a onClick={selectPartySNP}><img src={snpLogo} width={100} alt="snp party logo"/></a>
                </div>
              </div>

            <p>Your Choice: {voteValue}</p>
            
            <ContinueButton onClick={continueForward} buttonLabel={buttonText}/>
            
            <div className='back'>
                <BackButton onClick={goBack} buttonLabel="< Back"/>
            </div>

            </motion.div>

        </div>
  );
}


export default VoteChoice
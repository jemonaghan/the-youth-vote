import React, { useState } from 'react';
import { motion } from "framer-motion";

import greenLogo from "../../images/green-party-logo.png";
import consLogo from "../../images/conservative-party-logo.png"
import snpLogo from "../../images/snp-party-logo.png";
import labLogo from "../../images/labour-part-logo.png";
import libdemLogo from "../../images/liberal-democrats-party-logo.png";

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

    function selectPartyLabour () {
        setVoteValue("Labour Party");
        setButtonText('VOTE!')
    }

    function selectPartyLibdem () {
        setVoteValue("Liberal Democrats");
        setButtonText('VOTE!')
    }

    function selectPartySNP () {
        setVoteValue("Scottish National Party")
        setButtonText('VOTE!')
    }

    function continueForward () {
        if (buttonText === 'VOTE!') {
            setFormData({ ...formData, voteChoice: voteValue })

            // need axios here to send formData to database

            setPage(page + 1)

        } 
        else {
            console.log('select a party')
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
                initial={{ y: 380 }}
                transition={{ delay: 0.2, type: "inertia " }}
            >
                <h1>Step 3: Vote</h1>
            </motion.div>

            <motion.div className='body'
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h2>Select the Party You Would Like to Vote For</h2>
                
                <div className='party-choices'>
                    <div className="selection">
                        <img onClick={selectPartyGreen} src={greenLogo} alt="green party logo" />
                    </div>

                    <div className="selection">
                        <img onClick={selectPartyCons}src={consLogo}  alt="conservative party logo" />
                    </div>

                    <div className="selection">
                        <img onClick={selectPartySNP} src={snpLogo} alt="snp party logo" />
                    </div>

                    <div className="selection">
                        <img onClick={selectPartyLabour} src={labLogo} alt="labour party logo" />
                    </div>

                    <div className="selection">
                        <img onClick={selectPartyLibdem} src={libdemLogo} alt="liberal democrats party logo" />
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
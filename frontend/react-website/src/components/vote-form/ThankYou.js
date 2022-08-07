import React from 'react';
import { Link } from "react-router-dom";
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

import GreenButton from '../buttons/GreenButton';


function VoteThankYou() {

    const { width, height } = useWindowSize();

    return (
        <div className='final'>
            <div className='body'>
                <h1>Thank You For Voting!</h1>
                <h2>Now Check The Results</h2>
                <Link to="/results"><GreenButton buttonLabel="Results" /></Link>
            </div>
            <Confetti
                    width={width}
                    height={height}
            />
        </div>
    );
}

export default VoteThankYou
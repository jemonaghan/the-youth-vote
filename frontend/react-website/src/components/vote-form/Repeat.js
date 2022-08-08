import React from 'react'
import { Link } from "react-router-dom";

import GreenButton from '../buttons/GreenButton';

function RepeatVote() {

    return (
        <div className='final'>
            <div className='body'>
                <h1>Whoops! Looks Like You've Already Voted</h1>
                <h2>Would You Like to Check the Results?</h2>
                <Link to="/results"><GreenButton buttonLabel="Results" /></Link>
            </div>
        </div>
    );
}

export default RepeatVote
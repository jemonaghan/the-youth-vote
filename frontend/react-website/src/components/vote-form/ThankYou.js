import React, { Component } from 'react'
import { Link } from "react-router-dom";
// Components
import ResultsButton from '../buttons/ResultsButton';

function VoteThankYou() {
    
    function changePage () {
        <Link to="/results">Results</Link>
    };

    return (
        <div className='body'>
            <h1>Thank You For Voting!</h1>
            <h2>Now Check The Results</h2>
            <ResultsButton onClick={changePage} buttonLabel="Results" />
        </div>
    );
}

export default VoteThankYou
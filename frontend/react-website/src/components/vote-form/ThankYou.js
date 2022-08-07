import React, { Component } from 'react'
import { Link } from "react-router-dom";

function VoteThankYou() {

    return (
        <div className='body'>
            <h1>Thank You For Voting!</h1>
            <h2>Now Check The Results</h2>
            <Link to="/results">Results</Link>
        </div>
    );
}

export default VoteThankYou
import React from 'react';

function SignUpThankYou({ pollcards }) {
  
    return (
        <div className='final'>
            <div className='body'>
                <h1>Thank You For Signing Up</h1>
                <h2>Here Are Your Poll Cards:</h2>
                    <div className='details'>{pollcards.map((pollcards) => 
                        <p key={pollcards}>{pollcards}</p>)}
                    </div>
                <h3>Happy Voting!</h3>
            </div>

        </div>
    );
}

export default SignUpThankYou

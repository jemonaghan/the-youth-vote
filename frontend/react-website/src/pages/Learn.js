import React from 'react'

import "./Learn.css";

function LearnMore() {

    return (
        <div className='learn-more-page'>
            
            <div className="container byc">
                <a href="https://www.byc.org.uk/" target="blank">
                    <div className='box'>
                        <h1>British Youth Council</h1>
                    </div>
                </a>
            </div>

            <div className="container mym">
                <a href="https://www.byc.org.uk/uk/uk-youth-parliament/make-your-mark" target="blank">
                    <div className='box'>
                        <h1>Make Your Mark</h1>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default LearnMore

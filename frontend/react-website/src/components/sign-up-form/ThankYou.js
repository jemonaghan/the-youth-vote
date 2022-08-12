import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';

function SignUpThankYou({ pollcards }) {

    // useEffect(() => {
    //     getPollcards()
    //   }, [])   


    // const [listPollcards, setListPollcards] = useState( [] );
    // const [loading, setLoading] = useState(false)


    // const getPollcards = async () => {
    //     try {
    //         const response = await axios.post(
    //             'http://127.0.0.1:5000/school/register', {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             data: {
    //                 numberOfPollcards: Number(formData.pollCardNum),
    //                 urn: formData.schoolUrn
    //             }}
    //         )
    //         setListPollcards(response.data)
    //         console.log(response.data)
    //         setLoading(true)
    //     }
    //     catch (error) {
    //         alert('Error')
    //     }
    // } 
  
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

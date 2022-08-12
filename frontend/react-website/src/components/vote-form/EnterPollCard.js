import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ContinueButton from '../buttons/ContinueButton';

// static poll card number for testing
import voterInfo from "../../data/voterdata.json";

// poll card number for testing
// 110907-000000

function EnterPollCard({formData, setFormData, page, setPage}) {

    // useEffect(() => {
    //     getVote()
    //   }, [])   


    // const [searchVote, setSearchVote] = useState( [] );
    // const [loading, setLoading] = useState(false)


    // const getVote = async () => {
    //     try {
    //         const response = await axios.get(
    //             'http://127.0.0.1:5000/voter/pollcard/<pollcard_id>', {
    //             params: {
    //                 v: Number(formData.pollCardNum)                  
    //             }}
    //         )
    //         setSearchVote(response.data)
    //         console.log(response.data)
    //         setLoading(true)
    //     }
    //     catch (error) {
    //         alert('Error')
    //     }
    // }

    // const [resultArray, setResultArray] = useState([]);
    
    // useEffect(() => {
    //     const expensesListResp = async () => {
    //         await axios.get('http://127.0.0.1:5000/voter/pollcard/<pollcard_id>', {params: {
    //             v: Number(formData.pollCardNum)}                  
    //           })
    //         .then(response => setResultArray(response.data))
    //         }
        
    //         expensesListResp();
    //     }, []);


    // axios({
    //     method: 'get',
    //     url: 'http://127.0.0.1:5000/voter/pollcard/<pollcard_id>',
    //     params: {
    //       v: Number(formData.pollCardNum)                  
    //     }
    //   })
    //   .then(function (response) {
    //     console.log(response.data);      
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    
    // const [errorMessage, setErrorMessage] = useState("");

    // const numberCheck = voterInfo.data.map(({ pollCardNum }) => pollCardNum);
    
    // let i = numberCheck.indexOf(formData.pollCardNum)

    // const voteCheck = voterInfo.data.map(({ hasVoted }) =>  hasVoted );

    function continueForward () {

    // useEffect(() => {
    //     getVote()
    //   }, [])   


    // const [searchVote, setSearchVote] = useState( [] );
    // const [loading, setLoading] = useState(false)


    // const getVote = async () => {
    //     try {
    //         const response = await axios.get(
    //             'http://127.0.0.1:5000/voter/pollcard/<pollcard_id>', {
    //             params: {
    //                 v: Number(formData.pollCardNum)                  
    //             }}
    //         )
    //         setSearchVote(response.data)
    //         console.log(response.data)
    //         setLoading(true)
    //     }
    //     catch (error) {
    //         alert('Error')
    //     }
    // }

        
        //need axios here to check the entered pollcard number and whether or not the voter has voted

        // pollcard number is in database and voter has NOT voted
        if (numberCheck.includes(formData.pollCardNum) === true && voteCheck[i] === 0) {
            console.log("match, no vote")
            setPage(page + 1)
        } 
        // pollcard number is in database and voter HAS voted
        else if (numberCheck.includes(formData.pollCardNum) === true && voteCheck[i] === 1) {
            console.log("match, voted")
            setPage(page - 1)
        }
        // pollcard number is not in database
        else {
            console.log("no match")
            setErrorMessage("Sorry that number is not recognised")
        }
    };
  
    return (
        <div>
            <div className='header'>
                <h1>Step 1: Poll Card</h1>
            </div>

            <div className='body'>
                <h2>Please Enter Your Poll Card Number</h2>

                <input
                    type="text"
                    placeholder='XXXXXX-XXXXXX'
                    defaultValue={formData.pollCardNum}
                    onChange={(event) =>
                        setFormData({ ...formData, pollCardNum: event.target.value })
                        }
                />
                
                <ContinueButton onClick={continueForward} buttonLabel = "Continue" />

                <p>(numbers for testing) - </p>
                <p>hasn't voted - 110907-000000</p>
                <p>has voted - 110907-111111</p>
                {/* <p>{errorMessage}</p> */}
            </div>

            <div className='footer-headers'>

                <div className='header inactive'>
                    <h1>Step 2: Age</h1>
                </div>
                <div className='header inactive'>
                    <h1>Step 3: Vote</h1>
                </div>

            </div>
        </div>
    );
}

export default EnterPollCard
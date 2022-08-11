import React, {useState, useEffect} from 'react';
import axios from "axios";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// static school data for testing
import schoolsData from "../../data/content.json";

import ContinueButton from '../buttons/ContinueButton';
import BackButton from '../buttons/BackButton';
import useFetch from "../../utils/useFetch";


function SchoolResults({formData, setFormData, page, setPage, event}) {


    useEffect(() => {
        getSchoolResults()
      }, [])   


    const [searchResults, setSearchResults] = useState( [] );
    const [loading, setLoading] = useState(false)


    const getSchoolResults = async () => {
        try {
            const response = await axios.get(
                'http://127.0.0.1:5000/school/find', {
                params: {
                v: formData.schoolSearch                  
                }}
            )
            setSearchResults(response.data)
            console.log(response.data)
            setLoading(true)
        }
        catch (error) {
            alert('Error')
        }
    } 

    function setUrn (event) {
        setFormData({ ...formData, urn: event.target.value })
    }

    function oneSchoolData () {

        const listUrns = searchResults.map((searchResults) => 
        searchResults.urn)

        const listNames = searchResults.map((searchResults) => 
        searchResults.name)

        const listPostcode = searchResults.map((searchResults) => 
        searchResults.address.postcode)

        let i = listUrns.indexOf(formData.urn)

        setFormData({ ...formData, schoolName: listNames[i], postcode: listPostcode[i] });

        console.log(formData)
    }
     

    function continueForward () {
        oneSchoolData()
        setPage(page + 1)
    }

    function goBack () {
        setPage(page - 1)
    }
  
    return (
        <div>
            
            <div className='header'>
                <h1>Step 1: School</h1>
            </div>

            <div className='body'>
                <h2>Select Your School From the List Below</h2>
                <div className='details'>{ loading ? 
                 <FormControl>
                    <FormLabel id="radio-buttons-group-label">Search Results</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                        onChange={setUrn}
                    >
                         
                        {searchResults.map((searchResults) => 
                        <FormControlLabel 
                        value={searchResults.urn} 
                        control={<Radio />} 
                        label={`${searchResults.name}, ${searchResults.address.postcode}`} 
                                    />)}
                        
                    </RadioGroup>
            
                    </FormControl>
                    : <h3>Loading...</h3> } 
                </div>                       
                    
                
                <ContinueButton onClick={continueForward} buttonLabel = "Continue" />
                <p className='message'>if you can't see your school listed please check your details and search again.</p>
                <div className='back'>
                    <BackButton onClick={goBack} buttonLabel="< Back"/>
                </div>
            </div>

            <div className='footer-headers'>

                <div className='header inactive'>
                    <h1>Step 2: Poll Cards</h1>
                </div>
                <div className='header inactive'>
                    <h1>Step 3: Confirm</h1>
                </div>

            </div>

        </div>
    );
}

export default SchoolResults
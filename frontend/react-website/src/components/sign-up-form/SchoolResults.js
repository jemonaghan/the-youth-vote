import React, {useState, useEffect} from 'react';
import axios from "axios";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import ContinueButton from '../buttons/ContinueButton';
import BackButton from '../buttons/BackButton';


function SchoolResults({formData, setFormData, page, setPage, event}) {

    useEffect(() => {
        getSchoolResults()
      }, [])
      
      
    const [searchResults, setSearchResults] = useState( [] );
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    

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
            setLoading(false)
        }
        catch (error) {
            setErrorMessage("Please refresh the page")
            console.log("Error accessing the API")
        }
    }
    
    
    function setUrn (event) {
        setFormData({ ...formData, urn: event.target.value })
    }


    function oneSchoolData () {

        if (!formData.urn){
            return alert ("Please pick a school before you continue") 
        }

        const listUrns = searchResults.map((searchResults) => 
        searchResults.urn)
        
        const listNames = searchResults.map((searchResults) => 
        searchResults.name)
        
        const listPostcode = searchResults.map((searchResults) => 
        searchResults.address.postcode)

        let i = listUrns.indexOf(formData.urn)

        setFormData({ ...formData, schoolName: listNames[i], postcode: listPostcode[i], schoolUrn: listUrns[i] });
        
        console.log(formData)
    }
     

    function continueForward () {
        oneSchoolData()
        if (formData.urn){
            setPage(page + 1)
        }
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
                <div className='details'>
                    {errorMessage}
                    { loading ? 
                    <h3>Loading...</h3> :
                    <FormControl data-testid="show-data">
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
                    } 
                </div>                       


                <ContinueButton onClick={continueForward} buttonLabel = "Continue" />
                <p className='message'>If you can't see your school listed please check your details and search again.</p>
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

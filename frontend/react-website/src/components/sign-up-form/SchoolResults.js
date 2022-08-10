import React from 'react';
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


function SchoolResults({formData, setFormData, page, setPage}) {
    
    // at the minute using a useFetch to get data from database but could use axios

    // using api in app.py
//     const{ data, loading, error } = useFetch("https://localhost:5000/school/find/" + formData.schoolSearch);

    // direct to external api
    // const{ data, loading, error } = useFetch("https://api.maptivo.co.uk/schools?address.postcode=bl4");
  
//     if (loading) return <h1>LOADING...</h1>;
//     if (error) console.log(error);

//     let apiData = data.data

//     console.log(formData.schoolSearch)
//     console.log(`api: ${apiData}`)

//     const schools = schoolsData.data.map(({ name }) => name)
    
        axios({
        method: 'get',
        url: 'http://127.0.0.1:5000/school/find',
        params: {
          v: formData.schoolSearch                  
        }
      })
      .then(function (response) {
        console.log(response.data)
        formData = response.data;        
      })
      .catch(function (error) {
        console.log(error);
      });   
    

    function continueForward () {
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

                {/* trying to map results of api call */}
                {/* <p>{data?.data.name} : {data?.data.urn}</p> */}

                {/* <Select className="select"
                    placeholder="Choose one..."
                    // value={formData.schoolName}
                    // onClick={(event) => {
                    //   setFormData({ ...formData, schoolName: event.target.value })
                    // }}
                    // value={formData.schoolName}
                    // onChange={(event) => {setFormData({ ...formData, schoolName: event.target.value})}}
                    sx={{ minWidth:200 }}
                    >
                    {schools.map(name => <Option value={name} >{name}</Option>)}
                    </Select> */}


                    {/* <select 
                    value={formData.schoolName}
                    onClick={(event) => {
                        setFormData({ ...formData, schoolName: event.target.value })
                    }}
                    >
                    <option>Please Select</option>
                    {schools.map(name => <option value={name}>{name}</option>)}
                    </select> */}

                    <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Schools List</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                        onChange={(event) =>
                        setFormData({ ...formData, schoolName: event.target.value })
                        }
                    >
                        {schools.map(name => 
                        <FormControlLabel 
                        value={name} 
                        control={<Radio />} 
                        label={name} 
                        // onChange={(event) =>
                        //             setFormData({ ...formData, schoolName: event.target.value })
                        //             }
                                    />)}
                        
                    </RadioGroup>
                    </FormControl>
                
                <ContinueButton onClick={continueForward} buttonLabel = "Continue" />
                <p>if you can't see your school listed please check your details and search again.</p>
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

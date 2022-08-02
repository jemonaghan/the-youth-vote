import React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import schoolsData from "../../utils/content.json";
import useFetch from "../useFetch";


function SchoolResults({formData, setFormData}) {
  
  const{ data, loading, error } = useFetch("https://api.maptivo.co.uk/schools?address.postcode=bl4");
  
  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);


  const schools = schoolsData.data.map(({ name }) => name)
  
  return (
    <div className="body form-container sign-up">
      
      <h2>Select Your School From the List Below</h2>
      
      {/* trying to map results of api call */}
      {/* <p>{data?.data.name} : {data?.data.urn}</p> */}

      <Select className="select"
        placeholder="Choose one..."
          // value={formData.schoolName}
          // onClick={(event) => {
          //   setFormData({ ...formData, schoolName: event.target.value })
        // }}
        // value={formData.schoolName}
        // onChange={(event) => {setFormData({ ...formData, schoolName: event.target.value})}}
        sx={{ minWidth:200}}
        >
          {schools.map(name => <Option value={name} >{name}</Option>)}
        </Select>


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
      >
        {schools.map(name => <FormControlLabel value={name} control={<Radio />} label={name} />)}
        
      </RadioGroup>
    </FormControl>
        <p>if you can't see your school listed please check your details and search again.</p>
    </div>
  );
}

export default SchoolResults
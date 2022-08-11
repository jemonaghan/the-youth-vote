// https://react-hook-form.com/get-started

// import "../components-styling/Forms.css"
import {useState, useEffect} from 'react'
import React, { Component } from 'react'
import { set, useForm } from "react-hook-form";
import axios from 'axios';
import PollCards from './PollCards';
import SchoolEnter from './SchoolEnter';
import SchoolResults from './SchoolResults';
import Validate from './Validate';


function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      schoolName: "",
      postcode: "",
      pollCardNum: "",
    });
  
    const FormTitles = ["Step 1: School", "Step 1: School", "Step 2: Poll Cards", "Check Details"];
  
    const PageDisplay = () => {
      if (page === 0) {
        return <SchoolEnter formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <SchoolResults formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
        return <PollCards formData={formData} setFormData={setFormData} />;
      } else {
        return <Validate formData={formData} setFormData={setFormData} />;
      }
    };

    const doFetch = async () => {
      const res = await fetch('http://localhost:5000/school/register/add', {
        body: JSON.stringify({urn: '987656', numberOfPollcards: 10 }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(await (res.json()))
    }
  
    return (
      <div className="sign-up-form">
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              // onClick={() => {
              //   if (page === FormTitles.length - 1) {
              //     alert("FORM SUBMITTED");
              //     console.log(formData);
              //   } else {
              //     setPage((currPage) => currPage + 1);
              //   }
              // }}
              onClick={doFetch}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Form;


// class SignUpForm extends Component {
//     renderBox(title, active) {
//         return <SignUpFormBox title={title} active={active}/>;
//     }

//     render () {
//         const status = "Sign Up Form";

//         return (
//             <div>
//                 <form onSubmit = {handleSubmit(on)}
//                 <div className="name">{status}</div>
//                 <div>
//                     {this.renderBox("Step 1", true)}
//                 </div>
//                 <div>
//                     {this.renderBox("Step 2", false)}
//                 </div>
//                 <div>
//                     {this.renderBox("Step 3")}
//                 </div>
//             </div>
//         )
//     }
// }

// export default SignUpForm


// function SignUpForm(props) {
    
//     const { register, handleSubmit } = useForm();
//     const [data, setData] = useState("");

//     // const [listItems]

//     function CheckApi (props) {
//         const [schoolData, setSchoolData] = useState([]);

//         console.log(`new function + ${data.school_id}`);
        
//         useEffect(() => {
//             axios
//                 .get(`https://api.maptivo.co.uk/schools?address.postcode=${data.school_id}`)
//                 .then((response) => {
//                     setSchoolData(response.data.data);
//                     console.log(response.data.data);
//                 // let apiResp = response.data.data
//                 // let results = apiResp.map(school => school.name)
//                 // console.log(results)
//                 // return results
        
//         // useEffect(() => {
//         //     axios.get(`https://api.maptivo.co.uk/schools?address.postcode=${data.school_id}`)
//         //     .then(response => {
//         //         console.log(response.data.data);
//         //         let apiResp = response.data.data
//         //         let results = apiResp.map(school => school.name)
//         //         console.log(results)
//         //         return results
//                 // setSchoolData(`new data ${results}`);
//                 // console.log(`school data ${schoolData}`);
//             })

//             // .then(response => {
//             //     setSchoolData(JSON.stringify(result))
//             // })

//             .catch(error => {
//                 console.log(error)
//             })
            
//             // .then((response) => {
//             //     console.log(response)
//             //     setSchoolData(response.json())
//             // })

//             // .catch((error) => {
//             //     console.log(error)
//             // })

//             // .then((response) => {
//             //     setSchoolData(response.json())
//             // })
//         }, [data]);  
//             // return results
//             }


//     return (
//         <div className="form-container">
//             <div className="form-title">
//                 <h2>Form</h2>
//             </div>

//             <form 
//                 onSubmit = {handleSubmit((data) => setData((data)), console.log(data), CheckApi(data))}>
                
//                 <input {...register("school_id")} placeholder="Post Code" type="text"/>
//                 <br />
//                 <input type="submit" />
//             </form>
//             <p>{JSON.stringify(data)}</p>
//             {/* {results} */}
//         </div>
//   )
// }

// export default SignUpForm

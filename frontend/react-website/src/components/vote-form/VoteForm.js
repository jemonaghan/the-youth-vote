import "../../components-styling/Forms.css";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import useFetch from "../useFetch";
import { motion } from "framer-motion";
import Age from "./Age";
import EnterPollCard from "./EnterPollCard";
import VoteChoice from "./VoteChoice";
import VoteThankYou from "./ThankYou";
import RepeatVote from "./Repeat";


function VotingForm () {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
      pollCardNum: "",
      age: 0,
      voteChoice: null,
    });

    const PageTitles = ["Sorry", "Step 1: Poll Card", "Step 2: Age", "Step 3: Vote", "Check Details"];

    const PageDisplay = () => {
        if (page === 0) {
          return <RepeatVote 
            formData={formData} setFormData={setFormData} 
            />;
        } else if (page === 1) {
          return <EnterPollCard 
            formData={formData} setFormData={setFormData} 
            page={page} setPage={setPage}/>;
        } else if (page === 2) {
          return <Age 
            formData={formData} setFormData={setFormData} 
            page={page} setPage={setPage}/>;
        } else if (page === 3) {
            return <VoteChoice 
            formData={formData} setFormData={setFormData} 
            page={page} setPage={setPage}/>;
        } else {
          return <VoteThankYou formData={formData} setFormData={setFormData} />;
        }
      };

      return (
        <div className="vote-form">
            <motion.div className="form-container"
              animate={{ scale: 1}}
              initial={{ scale: 0.2}}>
                
                <motion.div  
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{delay: 0.2}}
                >
                    {PageDisplay()}
                </motion.div>
                
                
            </motion.div>
        </div>
      );
    // const [voterData, setVoterData] = useState ([])

    // const { data, loading, error, refetch } = useFetch("http://localhost:5000/voters");

    // if (loading) return <h1>Loading....</h1>;

    // if (error) console.log(error);

    // console.log(data)

    // useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('https://api.npms.io/v2/search?q=react')
    //         .then(response => response.json())
    //         .then(data => setTotalReactPackages(data.total));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

    // useEffect(() => {
    //     fetch("http://localhost:5000/voters")
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json
    //         }
    //         throw response;
    //     })
    //     .then(voterData => {
    //         setVoterData(voterData);
    //     })
    //     .catch(error => {
    //         console.error("Error fetchiing data: ", error);
    //     })
    //     // .finally(() => {
    //     //     set
    //     // })
    
    // }, [])


    // async function getUser(props) {
    //     try {
    //         const response = await axios.get("http://localhost:5000/voters");
    //         const respData = response.data.voters
    //         console.log(respData);
    //     }
    //     catch (error) {
    //         console.error(error);
    //     }
    //   }

    return (
        <div>
            <h2>Voting Form</h2>
            {/* <p>{data}</p> */}
            {/* <button onClick={refetch}>click</button> */}
        </div>
    );

}

export default VotingForm
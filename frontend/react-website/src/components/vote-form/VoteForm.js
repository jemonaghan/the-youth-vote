import "../../components-styling/Forms.css";

import React, {useState, useEffect} from 'react';
import { motion } from "framer-motion";

import EnterPollCard from "./EnterPollCard";
import Age from "./Age";
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

}

export default VotingForm
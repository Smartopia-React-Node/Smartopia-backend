import React, { useState } from 'react'
import "./addGlossary.css"
import Alert from '../Alert/Alert'
import { Button, FormControl } from '@mui/material'
import axios from 'axios';
function addGlossary({setGlossaryArr}) {
    const [alertType, setAlertType] = useState("nothing");
    const [glossaryObj, setGlossaryObj] = useState({
        term: "",
        desc: ""
    });

    const handleGlossaryChange = (e)=>{
        const {name, value} = e.target
        
        setGlossaryObj({
            ...glossaryObj,
            [name]:value
        })
        setAlertType("nothing");
    }

    const uploadNewGlossary =async ()=>{
        //Add
        await axios.post("https://ttool-test.onrender.com/api/glossary/add", glossaryObj).then((response)=>(
            console.log(response.data)
        )).catch((err)=> console.log(err))

        //Get
        await axios.get("https://ttool-test.onrender.com/api/glossary/all").then((response) => {
            setGlossaryArr(response.data);
        }).catch((err)=>console.log(err))

        setGlossaryObj({
            term: "",
            desc: ""
        })
    }

  return (
    <div className='add-glossary-container overlay'>
    <Alert type={alertType}/>
      <div className='header'>
        <h2 >Add Glossary</h2>
          <Button className='payment-btn' 
            variant="contained"
            onClick={uploadNewGlossary}
            >
            <span>Add</span>
          </Button> 
      </div>
      <div className='glossary-upload-container'>
        <div className='data-div'>
            <FormControl >
                <div className='input-container'>
                    <input type="text" name="term" className="email"
                      placeholder="Enter Term"
                      onChange={handleGlossaryChange}
                      value={glossaryObj.term}
                      />
                    <textarea type="text" 
                        name="desc" 
                        className="email glossary-desc"
                        placeholder="Enter Description"
                        onChange={handleGlossaryChange}
                        value={glossaryObj.desc}
                    ></textarea>
                </div>
            </FormControl>
        </div>
      </div>
    </div>
  )
}

export default addGlossary
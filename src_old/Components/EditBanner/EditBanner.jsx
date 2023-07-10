import React, { useEffect, useState } from 'react'
import "./editBanner.css";
import Alert from '../Alert/Alert'
import { Button, FormControl } from '@mui/material'
import axios from 'axios';
function EditBanner({setGlossaryArr}) {
    const [alertType, setAlertType] = useState("nothing");
    const [newBannerText, set_newBannerText] = useState("");
    const [currentBannerText, set_currentBannerText] = useState("");
    const getCurrentBannerText= async ()=>{
        await axios.get("http://localhost:8800/api/banner/get")
        .then((res)=> set_currentBannerText(res.data.text))
        .catch((err)=> console.log(err))
    }
    useEffect(() => {
        getCurrentBannerText()
    }, [])
    

    const handleGlossaryChange = (e)=>{
        
        set_newBannerText(e.target.value)
        setAlertType("nothing");
    }

    const updateBannerText =async ()=>{
        if(newBannerText){
            //update
            await axios.put("http://localhost:8800/api/banner/update", {text: newBannerText})
            .then(()=> setAlertType("succes"))
            .catch((err)=> console.log(err))

            //get new one
            getCurrentBannerText()
        }else{
            setAlertType("incomplete");
        }
    }
  return (
    <div className='add-glossary-container overlay'>
        <Alert type={alertType}/>
        <div className='header'>
            <h2 >Edit Banner Text</h2>
            <Button className='payment-btn' 
                variant="contained"
                onClick={updateBannerText}
                >
                <span>Update</span>
            </Button> 
        </div>
        <div className='glossary-upload-container'>
            <div className='data-div'>
                <FormControl >
                    <div className='input-container'>
                    <label>Current banner Text</label>
                    <textarea type="text" 
                            name="desc" 
                            className="email glossary-desc edit-textarea"
                            placeholder="Old banner Text"
                            value={currentBannerText}
                            disabled
                        ></textarea>

                        <label>New banner Text</label>
                        <textarea type="text"  
                            className="email glossary-desc edit-textarea"
                            placeholder="Enter banner Text"
                            onChange={handleGlossaryChange}
                            value={newBannerText}
                        ></textarea>
                    </div>
                </FormControl>
            </div>
        </div>
    </div>
  )
}

export default EditBanner
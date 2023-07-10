import React, { useState } from 'react'
import "./addTool.css"
import { Button, FormControl } from '@mui/material'
import Alert from '../Alert/Alert'
import Smalltag from '../SmallTag/smalltag'
import axios from 'axios'
function addTool({updateTable}) {

  const [alertType, setAlertType] = useState("nothing");
  const [tag, setTag] = useState("")
  const [toolObj, setToolObj] = useState({
    priceModle: "Free",
    toolName: "",
    toolURL: "",
    toolImageURL: "",
    toolVideoURL: "",
    toolDesc: "",
    toolExtraDesc: "",
    tagList: []
  })

  const handleOnChange = (e)=> {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setToolObj({
        ...toolObj,
        [name]:value
    })
    setAlertType("nothing");
  }

  const handleTag = (e)=>{
    const value = e.target.value;
    setTag(value)
  }
  const addTag = ()=>{
    let newTagList = [...toolObj.tagList, tag]
    setToolObj({
      ...toolObj,
      tagList: newTagList
    })
    
  }

  const uploadTool = async (e)=> {
    e.preventDefault()

    if(
       toolObj.priceModle &&
       toolObj.toolName &&
       toolObj.toolURL &&
       toolObj.toolDesc &&
       toolObj.tagList.length
      ){
        setAlertType("succes");
        console.log(toolObj);
        await axios.post("https://ttool-test.onrender.com/api/tool/addtool", toolObj).then((response) => {
          console.log(response.data);
        })
        await axios.get("https://ttool-test.onrender.com/api/tool/alltool").then((response) => {
          updateTable(response.data);
        });

    }else{
        setAlertType("error");
    }
    console.log(toolObj);
}

  return (
    <div className='add-too-container overlay'>
    <Alert type={alertType}/>
      <div className='header'>
        <h2 >Add Tool</h2>
          <Button className='payment-btn' variant="contained" onClick={uploadTool} >
            <span>Upload</span>
          </Button> 
      </div>
      <div className='upload-container'>
        <div className='left'>
        <div className="data-div">
        <FormControl >              
                    <div className='input-container'>
                      <input type="text" name="toolName" className="email"
                      placeholder="Tool Name"
                        onChange={handleOnChange} value={toolObj.toolName}
                      />
                      <input type="text" name="toolURL" className="email"  placeholder="Tool URL"
                        onChange={handleOnChange} value={toolObj.toolURL}
                      />
                      <input type="text" name="toolImageURL" className="email" placeholder="Tool Image URL"
                        onChange={handleOnChange} value={toolObj.toolImageURL}
                      />
                      <input type="text" name="toolVideoURL" className="email" placeholder="Video URL"
                        onChange={handleOnChange} value={toolObj.toolVideoURL}
                      />
                    </div>
                </FormControl>
                </div>
        </div>


        <div className='right'>
        <FormControl>
          <div className='data-div'>
              <textarea type="text" 
                name="toolDesc" 
                className="email"
                placeholder="Tool Description"
                rows="4" cols="50"
                onChange={handleOnChange} value={toolObj.toolDesc}
              ></textarea>
              <select name="priceModle" 
                className='pmodel'
                onChange={handleOnChange} value={toolObj.priceModle}>
                <option value="Free">Free</option>
                <option value="Freemium" >Freemium</option>
                <option value="GitHub">GitHub</option>
                <option value="Google Colab">Google Colab</option>
                <option value="Open Source" >Open Source</option>
                <option value="GitHub">GitHub</option>
              </select>
              <div className='tag-input-container'>
                <div className='tag-showcase-box'>
                  {
                    toolObj.tagList.map((tagNmae, i)=>(
                      <Smalltag lable={tagNmae} key={i} name={"tooltable"}
                        
                      />
                    ))
                  }
                </div>
                <div className='enterTag-div'>
                  <input type="text" 
                    name="enterTag" 
                    className="email tagInput"
                    placeholder="Enters Tag"
                    onChange={handleTag} value={tag}
                  />
                  <Button className='payment-btn addtag' 
                    variant="contained"
                    onClick={addTag}>
                    <span>Add</span>
                  </Button>
                </div>
              </div>
              
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default addTool
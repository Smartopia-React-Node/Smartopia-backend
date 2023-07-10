import React, { useState } from 'react'
import "./submission.css"
import Alert from '../../Components/Alert/Alert';
import Button from '@mui/material/Button';
import NavBar from '../../Components/Navbar/NavBar'
import GradiantBG from '../../Components/GradiantBG/gradiantBG';
import FormControl from '@mui/material/FormControl';
import Smalltag from '../../Components/SmallTag/smalltag';
import axios from "axios";


function Submission() {

    const [alertType, setAlertType] = useState("nothing");
    const [tag, setTag] = useState("")
    const [submitObj, setSubmitObj] = useState({
        fname: "",
        lname: "",
        email: "",
        priceModle: "Free",
        toolName: "",
        toolURL: "",
        toolImgURL: "",
        toolVideoURL: "",
        toolDesc: "",
        toolExtraDesc: "",
        tagList: []
    })

    function handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setSubmitObj({
            ...submitObj,
            [name]:value
        })
    }
    const handleTag = (e)=>{
      const value = e.target.value;
      setTag(value)
    }
    const addTag = ()=>{
      let newTagList = [...submitObj.tagList, tag]
      setSubmitObj({
        ...submitObj,
        tagList: newTagList
      })
      setTag("");
    }
    const submitData = async (e)=> {
        e.preventDefault()

        if(submitObj.fname &&
           submitObj.lname &&
           submitObj.email &&
           submitObj.priceModle &&
           submitObj.toolName &&
           submitObj.toolURL &&
           submitObj.toolImgURL &&
           submitObj.toolDesc &&
           submitObj.tagList.length
          ){
            setAlertType("succes");
            await axios.post("https://ttool-test.onrender.com/api/submission/submittool", submitObj).then((response) => {
              console.log(response.data);
            });
        }else{
            setAlertType("error");
        }
    }
    
    return (
        <>
        <NavBar  style={{opacity: "1"}} />
        <GradiantBG>
          <div className='submit-container'>
            <div className='submit-instruction-container'>
              <div className='header-box'>
                <h1 className='header'>
                  Submit A Tool
                </h1>
                <p>
                Is there a tool missing from this site that we should know about?
                Share it below!
                </p>
              </div>
              <div className='instruction-box'>
                  <div className='instructions'>
                    <i  className="pointIcon fa-regular fa-hand-point-right"></i>
                    <p>Please do a search on the site before submitting your tool to   ensure that we don't already have it listed.
                    </p>
                  </div>
                  <div className='instructions'>
                    <i  className="pointIcon fa-regular fa-hand-point-right"></i>
                    <p>Please do a search on the site before submitting your tool to   ensure that we don't already have it listed.
                    </p>
                  </div>
                  <div className='instructions'>
                    <i  className="pointIcon fa-regular fa-hand-point-right"></i>
                    <p>Please do a search on the site before submitting your tool to   ensure that we don't already have it listed.
                    </p>
                  </div>
                  <div className='instructions'>
                    <i  className="pointIcon fa-regular fa-hand-point-right"></i>
                    <p>Please do a search on the site before submitting your tool to   ensure that we don't already have it listed.
                    </p>
                  </div>
                  <div className='instructions'>
                    <i  className="pointIcon fa-regular fa-hand-point-right"></i>
                    <p>Please do a search on the site before submitting your tool to   ensure that we don't already have it listed.
                    </p>
                  </div>
                
              </div>
            </div>


            <div className='submit-form-container'>
              <h2>With all that out of the way, show me what you got!</h2>
              <div className="data-div">
                <FormControl >              
                <Alert type={alertType}/>
                    <div className='input-container'>
                        <div className='name-container'>
                            <input type="text" name="fname" className="fname"  placeholder="First name"
                            onChange={handleOnChange} value={submitObj.fname}
                            />
                            <input type="text" name="lname" className="lname" placeholder="Last name"
                                onChange={handleOnChange} value={submitObj.lname}
                            />
                        </div>
                        <input type="email" name="email" className="email" placeholder="Email address"
                            onChange={handleOnChange} value={submitObj.email}
                        />
                        <input type="text" name="toolName" className="email" placeholder="Tool Name"
                            onChange={handleOnChange} value={submitObj.toolName}
                        />
                        <input type="text" name="toolURL" className="email" placeholder="Tool URL"
                            onChange={handleOnChange} value={submitObj.toolURL}
                        />
                        <input type="text" name="toolImgURL" className="email" placeholder="Tool Image URL"
                        onChange={handleOnChange} value={submitObj.toolImgURL}
                      />
                        <textarea type="text" 
                        name="toolDesc" 
                        className="email"
                        placeholder="Tool Description"
                        onChange={handleOnChange} value={submitObj.toolDesc}
                        rows="4" cols="50"
                        ></textarea>
                        <input type="text" name="toolVideoURL" className="email" placeholder="Video URL"
                            onChange={handleOnChange} value={submitObj.toolVideoURL}
                        />
                        <select name="priceModle" 
                          className='pmodel'
                          onChange={handleOnChange}
                          value={submitObj.priceModle}>
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
                              submitObj.tagList.map((tagNmae, i)=>(
                                <Smalltag lable={tagNmae} key={i}/>
                              ))
                            }
                          </div>
                          <div>
                            <input type="text" name="enterTag" className="email tagInput"
                              placeholder="Enters Tag"
                              onChange={handleTag} value={tag}
                            />
                            <Button className='payment-btn addtag' variant="contained" onClick={addTag}>
                                <span>Add</span>
                            </Button>
                          </div>
                        </div>


                        <textarea type="text" 
                        name="toolExtraDesc" 
                        className="extra-deatil"
                        placeholder="Any Other Details You'd Like To Share? | Link to explainer video / Affiliate Program Details / Feedback on the site / Etc. - Share anything else here"
                        onChange={handleOnChange} value={submitObj.toolExtraDesc}
                        ></textarea>
                    </div>

                    <div className="btn-container">
                        <Button className='payment-btn' variant="contained" onClick={submitData}>
                            <span>Submit</span>
                        </Button> 
                    </div> 
                </FormControl>
           </div> 
            </div>
          </div>
        </GradiantBG>
    </>
    )
}

export default Submission

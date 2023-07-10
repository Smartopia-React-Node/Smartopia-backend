import React, { useState } from 'react'
import "./addVideo.css";
import Alert from '../Alert/Alert';
import { Button, FormControl } from '@mui/material';
import Smalltag from '../SmallTag/smalltag';
import getVideoId from 'get-video-id';
import axios from 'axios';
function addVideo({settutorialArr}) {
    const [alertType, setAlertType] = useState("nothing");
    const [tag, setTag] = useState("")
    const [videoObj, setVideoObj] = useState({
        videoId: "",
        videoLink: "",
        videoType: "",
        videoDesc: "",
        videoTitle: "",
        thumbnail: "",
        tagList: []
      })
  
      const handleOnChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setVideoObj({
            ...videoObj,
            [name]:value
        })
        setAlertType("nothing")

      }

      const addTag = ()=>{
        let arr = tag.split(",")
        arr.forEach((item, index, arr)=>{
            arr[index] = item.trim();
        })
        console.log(arr);
        setVideoObj({
          ...videoObj,
          tagList: [...arr, ...videoObj.tagList] 
        })
      }
      const handleTagChange = (e)=>{
        const value = e.target.value;
        setTag(value)
      }
  const uploadTutorial= async ()=> {
    if(videoObj.videoLink &&
      videoObj.videoType &&
      videoObj.videoDesc &&
      videoObj.videoTitle &&
      videoObj.tagList){
    //upload
    await axios.post("http://localhost:8800/api/tutorial/addTutorial", videoObj).then((response) => {
      console.log("uploded");
    }).catch((err)=>{
      console.log(err);
    });
    
    //get
    await axios.get("http://localhost:8800/api/tutorial/alltutorial").then((response) => {
      settutorialArr(response.data);
    });

    }else{
      setAlertType("incomplete")
    }
  }

  const handle_Youtube_Link_Change = async (e)=>{
    const value = e.target.value;
    const v_id = getVideoId(value).id;
    try{
      const result = await axios.get(`http://localhost:8800/api/tutorial/video_details/v=${v_id}`)

      setVideoObj({
        ...videoObj,
        videoId: result.data.items[0].id,
        videoLink: value,
        videoDesc: result.data.items[0].snippet.description,
        videoTitle: result.data.items[0].snippet.title,
        tagList: result.data.items[0].snippet.tags || [],
        thumbnail: result.data.items[0].snippet.thumbnails.standard.url
      })
      
    }catch(err){
        console.log();
    } 
  }


  return (
    <div className='add-video-container overlay'>
        <Alert type={alertType}/>
        <div className='header'>
        <h2 >Add Video</h2>
          <Button className='payment-btn' variant="contained" onClick={uploadTutorial} >
            <span>Upload</span>
          </Button> 
      </div>

      <div className='video-upload-container'>
        <div className='data-div'>
            <FormControl >
                <div className='input-container'>
                    <div className='v-flex-container'>
                      <div className='v-detaile-container'>
                        <input type="text" name="videoLink" className="email"
                        placeholder="Add Youtube Link"
                        onChange={handle_Youtube_Link_Change}
                        value={videoObj.videoLink}
                        />
                        <input type="text" name="videoTitle" className="email"
                        placeholder="Video Title"
                        onChange={handleOnChange}
                        value={videoObj.videoTitle}
                        />
                        <select name="videoType" 
                            className='vtype'
                            onChange={handleOnChange}
                            value={videoObj.videoType}
                            >
                            <option value="">Chooes Type</option>
                            <option value="Free" >Free</option>
                            <option value="Paid" >Paid</option>
                        </select>
                        
                        <div className='tag-input-container'>
                          <div className='tag-showcase-box'>
                            {
                              videoObj.tagList.map((tagNmae, i)=>(
                                <Smalltag  setFunc={setVideoObj} name="tutorial" lable={tagNmae} key={i} index={i} obj={videoObj}/>
                              ))
                            }
                          </div>
                          <div className='enterTag-div'>
                            <input type="text" 
                              name="enterTag" 
                              className="email tagInput"
                              placeholder="Enters Tag"
                              onChange={handleTagChange} value={tag}
                            />
                            <Button className='payment-btn addtag' 
                              variant="contained"
                              onClick={addTag}>
                              <span>Add</span>
                            </Button>
                          </div>
                        </div>

                      </div>
                      <div className='v-container'>
                        <iframe width="100%" 
                            height="100%" 
                            frameBorder="0"
                            allowFullScreen
                            src={"https://www.youtube.com/embed/"+videoObj.videoId}>
                        </iframe>
                      </div>
                    </div>

                    <textarea type="text" 
                        name="videoDesc" 
                        className="email vDesc"
                        placeholder="Video Description"
                        onChange={handleOnChange} 
                        value={videoObj.videoDesc}
                    ></textarea>
                </div>
            </FormControl>
        </div>
      </div>
    </div>
  )
}

export default addVideo
import React, { useEffect, useState } from 'react'
import "./tootTableRow.css"

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import axios from 'axios'


function tootTableRow({setToolArr, toolArr, item, index}) {
  const [tag, setTag] = useState("")
  const [loading, setLoading] = useState(false)
  const [visibility, setVisibility] = useState(false)
  const [toolObj, setToolObj] = useState({
    priceModle: "",
    toolName: "",
    toolURL: "",
    toolImgURL: "",
    toolVideoURL: "",
    toolDesc: "",
    toolExtraDesc: "",
    tagList: "",
    updatedTagList: []
  })


  const deleteItem = async (id)=>{
    await axios.delete(`https://ttool-test.onrender.com/api/tool/delete/${id}`).then((response) =>{
      console.log(response.data);
      setToolArr(toolArr.filter((item)=> item._id !== id))
    })
    console.log(`ok`);
  }

  const expandRow = (index, item)=>{
    const row = document.querySelectorAll(".tool-item-row")
    const body = document.querySelectorAll(".update-container")
    row[index].style.height = "fit-content"
    body[index].style.display = "visible"
    let tags = item.tagList.join(", ")
    setToolObj({...item, toolImgURL: item.toolImageURL, toolVideoURL: item.toolVideoURL, tagList: tags, updatedTagList: []})
    console.log(toolObj);
    setVisibility(!visibility)
  }
  const collapsRow = (index, item)=>{
    const row = document.querySelectorAll(".tool-item-row")
    const body = document.querySelectorAll(".update-container")
    row[index].style.height = "50px"
    setVisibility(!visibility)
  }

  

  const handleOnChange = (e)=> {
    const name = e.target.name;
    const value = e.target.value;
    setToolObj({
        ...toolObj,
        [name]:value
    })
  }

  const handleTagChange = (e)=>{
    const value = e.target.value;
    let prev = toolObj
    setToolObj({
        ...prev,
        tagList: value
    })
  }
  const updateTool = async (e)=>{
    e.preventDefault()
    let arr= [];
    if(toolObj.tagList) arr = toolObj.tagList.split(",")
    arr.forEach((item, index, arr)=>{
        arr[index] = item.trim();
    })
    let prev = toolObj
    setLoading(true)
    await axios.put("https://ttool-test.onrender.com/api/tool/"+item._id+"/update",{
        ...toolObj,
        tagList: [...arr, ...prev.updatedTagList]
    }).then(()=>{
        console.log("udated");
        setLoading(false)
    }).catch((err)=>{
        console.log(err);
    })
    console.log([...arr, ...prev.updatedTagList]);
    console.log({
        ...toolObj,
        tagList: toolObj.updatedTagList
    });

  }
  return (
    <div className='tool-item-row' key={item._id}>
                  <div className='show'>
                  <div className='content-cl'> 
                    <span>{index+1}.</span>
                  </div>
                  <div className='content-cl'> 
                    <span>{item.toolName}</span>
                  </div>
                  <div className='content-cl taglist'> 
                    <span>{item.tagList.join(", ")}</span>
                  </div>

                  
                  <div className='content-cl'> 
                      <DeleteOutlinedIcon className='deleteIcon' onClick={()=> deleteItem(item._id)}/>
                  </div>

                  {!visibility && <div className='content-cl'> 
                      <VisibilityOutlinedIcon className='eyeIcon' onClick={()=>expandRow(index, item)} />
                  </div>}
                  {visibility && <div className='content-cl'> 
                      <VisibilityOutlinedIcon className='eyeIcon' onClick={()=>collapsRow(index, item)} />
                  </div>}
                  </div>

                  <div className='update-container'>
                    <div className='left'>
                      <img className='table-tool-img' src={item.toolImageURL} />
                    </div>
                    <div className='right'>
                    <div className="data-div">
                      <form>             
                        <div className='input-container'>
                          <input type="text" name="toolName" className="email"
                            placeholder={item.toolName}
                              onChange={handleOnChange} value={toolObj.toolName}
                            />
                            <input type="text" name="toolURL" className="email"  placeholder={item.toolURL}
                              onChange={handleOnChange} value={toolObj.toolURL}
                            />
                            <input type="text" name="toolImgURL" className="email" placeholder={item.toolImageURL}
                              onChange={handleOnChange} value={toolObj.toolImgURL}
                            />
                            <input type="text" name="toolVideoURL" className="email" placeholder={item.toolVideoURL|| "Enter Video URL"}
                              onChange={handleOnChange} value={toolObj.toolVideoURL|| ""}
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='update-container2'>
                  <div className="data-div">
                      <form>             
                        <div className='input-container'>
                        <select name="priceModle" 
                          className='pmodel'
                          onChange={handleOnChange} value={toolObj.priceModle}>
                          <option value="">-- Select Pricing Modle --</option>
                          <option value="Free">Free</option>
                          <option value="Freemium" >Freemium</option>
                          <option value="GitHub">GitHub</option>
                          <option value="Google Colab">Google Colab</option>
                          <option value="Open Source" >Open Source</option>
                          <option value="GitHub">GitHub</option>
                        </select>

                        <div className='tag-input-container'>
                          <div className='tag-showcase-box'>
                           
                          </div>
                          <div className='enterTag-div'>
                            <input type="text" 
                              name="enterTag" 
                              className="email tagInput"
                              placeholder="Enters Tag"
                              onChange={handleTagChange} value={toolObj.tagList}
                            />
                            
                          </div>
                        </div>
                          <textarea type="text" 
                              name="toolDesc" 
                              className="email tool-description"
                              placeholder={item.toolDesc}
                              rows="4" cols="50"
                              onChange={handleOnChange} value={toolObj.toolDesc}
                            ></textarea>
                            <button className='payment-btn addtag' 
                              variant="contained"
                              onClick={updateTool}>
                              <span>{loading? "Loading...":"Update"}</span>
                            </button>
                      </div>
                    </form> 
                    </div>
                  </div>
            </div>
  )
}

export default tootTableRow
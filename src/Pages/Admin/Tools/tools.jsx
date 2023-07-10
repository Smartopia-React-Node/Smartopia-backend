import React, { useEffect, useState } from 'react'
import "./tools.css"

import AddTool from '../../../Components/AddTool/addTool'
import Topbar from '../../../Components/TopBar/topbar'
import Rightbar from '../../../Components/RightBar/rightbar'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import axios from 'axios'
import Smalltag from '../../../Components/SmallTag/smalltag'
import { Button } from '@mui/material'
import TootTableRow from '../../../Components/toolTableRow/tootTableRow'
function tools() {
  const [toolArr, setToolArr] = useState([])
  const [alertType, setAlertType] = useState("nothing");
  const [tag, setTag] = useState("")
  const [toolObj, setToolObj] = useState({
    priceModle: "Free",
    toolName: "",
    toolURL: "",
    toolImgURL: "",
    toolVideoURL: "",
    toolDesc: "",
    toolExtraDesc: "",
    tagList: ""
  })
  useEffect(() => {
    axios.get("https://ttool-test.onrender.com/api/tool/alltool").then((response) => {
      setToolArr(response.data);
    });
  }, []);

  const deleteItem = async (id)=>{
    await axios.delete(`https://ttool-test.onrender.com/api/tool/delete/${id}`).then((response) =>{
      console.log(response.data);
      setToolArr(toolArr.filter((item)=> item._id !== id))
    })
    console.log(`ok`);
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
    setTag(value)
  }
  const addTag = (index)=>{
    let newTagList = [...toolArr[index].tagList, tag]
    setToolObj({
      ...toolObj,
      tagList: newTagList
    })
  }


  return (
    <div className='tools-page'>
    <Rightbar />
        <div className='right-part'>
            <Topbar />
            
            <AddTool updateTable={setToolArr} />
            <div className='admin-table'>
                <div className='header'>
                    <div className='title-box'>
                        <span className="title">S. Num</span>
                    </div>
                    <div className='title-box'>
                        <span className="title">Tool Name</span>
                    </div>
                    <div className='title-box taglist'>
                        <span className="title">Tag List</span>
                    </div>
                    <div className='title-box'>
                        <span className="title">Delete</span>
                    </div>
                    <div className='title-box'>
                        <span className="title">View</span>
                    </div>
                </div>

            <div className='admin-table-body'> 
            {
              toolArr.map((item, index)=>(
                <TootTableRow setToolArr={setToolArr} toolArr={toolArr} item={item} index={index} key={item._id}/>
              ))
            }
          </div>
            </div> 
        </div>
    </div>
  )
}

export default tools
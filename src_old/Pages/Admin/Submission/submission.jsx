import React, { useEffect, useState } from 'react'
import './submission.css'
import RightBar from '../../../Components/RightBar/rightbar'
import TopBar from '../../../Components/TopBar/topbar'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import axios from "axios";


function submission() {
  const [submitArr, setSubmitArr] = useState([])
  useEffect(() => {
    axios.get("https://ttool-test.onrender.com/api/submission/allsubmission").then((response) => {
      setSubmitArr(response.data);
    });
  }, []);

  const deleteItem = async (id)=>{
    await axios.delete(`https://ttool-test.onrender.com/api/submission/delete/${id}`).then((response) =>{
      console.log(response.data);
      setSubmitArr(submitArr.filter((item)=> item._id !== id))
    })
    console.log(`ok`);
  }

  const approveItem = async (item)=>{
    //adding item
    await axios.post("https://ttool-test.onrender.com/api/tool/addtool", { 
      toolName: item.toolName,
      toolURL: item.toolURL,
      toolDesc: item.toolDesc,
      toolVideoURL: item.toolVideoURL,
      priceModle: item.priceModle,
      tagList: item.tagList,
      toolExtraDesc: item.toolExtraDesc
    }).then((response) => {
      console.log(response.data);
    })
    //deleting item
    await axios.delete(`https://ttool-test.onrender.com/api/submission/delete/${item._id}`).then((response) =>{
      console.log(response.data);
      setSubmitArr(submitArr.filter((ele)=> ele._id !== item._id))
    })

    console.log(`ok`);
  }
  
  return (
    <div className='submission-page'>
      <RightBar />
      <div className='right-part'>
        <TopBar />
        
        <div className='admin-table overlay'>
          <div className='header'>
            <div className=' snum title-box '>
              <span className="title">S. Num</span>
            </div>
            <div className='title-box tname'>
              <span className="title">Tool Name</span>
            </div>
            <div className='title-box taglist'>
              <span className="title">Tag List</span>
            </div>
            <div className='title-box view'>
              <span className="title">View</span>
            </div>
            <div className='title-box approve'>
              <span className="title">Aprove</span>
            </div>
            <div className='title-box delete-title-box'>
              <span className="title">Delete</span>
            </div>
          </div>

          <div className='admin-table-body'>
            {
              submitArr.map((item, index)=>(
                <div className='item-row' key={item._id}>
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
                  <VisibilityOutlinedIcon className='eyeIcon'/>
                </div>
                <div className='content-cl'> 
                  <CheckCircleOutlineOutlinedIcon className='tickIcon'
                    onClick={()=>approveItem(item)}
                  /> 
                </div>
                <div className='content-cl'>  
                  <DeleteOutlinedIcon className='deleteIcon' 
                  onClick={()=>deleteItem(item._id)}/>
                </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default submission
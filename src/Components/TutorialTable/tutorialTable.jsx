import React from 'react'
import "./tutorialTable.css"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Smalltag from '../SmallTag/smalltag';

function tutorialTable({tutorialArr, deleteItem}) {

  return (
    <div className='tutorial-table'>
        <div className='admin-table'>
                <div className='header'>
                    <div className='title-box sno'>
                        <span className="title">S. Num</span>
                    </div>
                    <div className='title-box v-title'>
                        <span className="title">Video Title</span>
                    </div>
                    <div className='title-box v-type'>
                        <span className="title">Type</span>
                    </div>
                    <div className='title-box del-icon'>
                        <span className="title">Delete</span>
                    </div>
                </div>

            <div className='admin-table-body'> 
            {
                tutorialArr.map((item, index)=>(
                <div className='item-row' key={index}>
                    <div className='content-cl sno'> 
                        <span>{index+1}.</span>
                    </div>
                    <div className='content-cl v-title'> 
                        <span>{item.videoTitle}.</span>
                    </div>
                    <div className='content-cl v-type'> 
                        {
                            item.videoType === "Free"?
                            <Smalltag 
                                lable={"Free"} 
                                bgColor={"#FF0000"} 
                                fontAwsmIcon={"fa-solid fa-circle-play"}
                                fontColor={"white"}
                                iconColor={"white"}
                            />:
                            <Smalltag 
                                lable={"Paid"} 
                                bgColor={"#008CFD"} 
                                fontAwsmIcon={"fa-solid fa-crown"}
                                fontColor={"white"}
                                iconColor={"white"}
                            />
                        }
                    </div>
                    <div className='content-cl del-icon'> 
                        <DeleteOutlinedIcon className='deleteIcon' onClick={()=> deleteItem(item._id)}/>
                    </div>
                </div>
              ))
            }
          </div>
            </div> 
    </div>
  )
}

export default tutorialTable
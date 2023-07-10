import React from 'react'
import './smalltag.css';


function smalltag({lable, bgColor, fontAwsmIcon, fontColor, iconColor, setFunc, name, index, obj}) {
  const handleClick = (e)=>{
    if(setFunc){
      if(true){
        setFunc({
            ...obj,
            tagList: obj.tagList.filter((e, i)=>{
              return index !== i;
            })
        })
      }
    }
    if(name === "tooltable"){

    }
    console.log("got Click")
  }

  return (
    <div className='my-tags-box' style={{backgroundColor: bgColor}} onClick={handleClick}>
        <i style={fontAwsmIcon?{color: iconColor}:{display: "none"}} className={fontAwsmIcon+" my-icon"}></i>
        <p style={{color: fontColor}}>{lable}</p>
    </div>
  )
}

export default smalltag
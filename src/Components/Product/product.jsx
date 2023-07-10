import React, { useState } from 'react'
import './product.css'

function product({name, description, imageURL, onClick}) {
  const [like, setLike] = useState(false)
  const [save, setSave] = useState(false)

  function handleLikeClick(e){
    if(!like){ 
      setLike(true)
      e.target.className = "fa-solid fa-heart like"
    }else{
      setLike(false)
      e.target.className = "fa-regular fa-heart like"
    }
  }
  function handleSaveClick(e){
    if(!save){ 
      setSave(true)
      e.target.className = "fa-solid fa-bookmark save"
    }else{
      setSave(false)
      e.target.className = "fa-regular fa-bookmark save"
    }
  }
  return (
    <div className='product_div' onClick={onClick}>
        <img src={imageURL} />
        <div className='p_detail'>

            <div className='upper'>
              <h2 className='p_heading'>{name}</h2>
              <div className='p_desc'>
                <p >{description}</p>
              </div>
              <div>
                <button className='learn-more'>Learn More</button>
                <span className='lower float-right'>
              <i className="fa-regular fa-bookmark save" onClick={handleSaveClick}></i> 
              <i className="fa-regular fa-heart like" onClick={handleLikeClick}></i>
            </span>
                </div>
            </div>

            

        </div>
    </div>
  )
}
{/* <i class="fa-solid fa-heart like" onClick={}></i>
<i class="fa-solid fa-bookmark save" onClick={}></i>  */}
export default product
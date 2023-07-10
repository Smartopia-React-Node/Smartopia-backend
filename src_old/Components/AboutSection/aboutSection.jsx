import React, { useState } from 'react'
import './aboutSection.css'
import Smalltag from '../SmallTag/smalltag'
import { Link } from 'react-router-dom'

function aboutSection({product}) {
  const [like, setLike] = useState(false)
  const handleLike = ()=> {
    if(like){ 
      setLike(false);
    }
    else setLike(true);
  }

  return (
    <div className='container'>
    <div className='aboutSection'>
        <div className='pd-container pt-5'>
          <div className='row'>
            <div className='col-md-5'>
            <img className='p-img' src={product.toolImageURL} alt=''/>
            </div>
            <div className='col-md-7'>
 
            <div className='p-detail'>
            <h2 className='p-name'>
              {product.toolName}
              <div className='float-right likediv'>
                {(!like &&<i className="fa-regular fa-heart d-like" onClick={handleLike}></i>)}
                {(like &&<i className="fa-solid fa-heart d-like" onClick={handleLike}></i>)}
                <p className='d-inline-block m-0 ml-2'>2.6k</p>
              </div>
            </h2>
            <p className='p-desc'>{product.toolDesc}</p>
            <div className='pricing-modal-div p-mpdelnew'>
              <h3 className='lable'>Pricing Modal:</h3>
              <div className='pricing-modal'>
                <p>{product.priceModle}</p>
              </div>
            </div>
            <div className='tags-div'>
              <h3>Tags: </h3>
              {
                product.tagList.map((lable,i)=>(
                  <Smalltag lable={lable} key={i}/>
                ))
              }
            </div>

            <div className='bottom-detail'>
              <div className='left'>
                { product.toolVideoURL?
                    <Link to={product.toolVideoURL}>
                    <i className="fa-brands fa-youtube yt"></i>
                    </Link>:
                      <i className="fa-brands fa-youtube yt no-video"></i>
                }
                <Link to={product.toolURL} className='visit-link'>
                  <button className='visit-btn'>Visit name</button>
                </Link>
              </div>
             
            </div>

          </div>
            </div>
          </div>
          
        </div>
    </div>
    </div>
  )
}

export default aboutSection
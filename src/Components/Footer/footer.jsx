import React from 'react'
import './footer.css'
function footer() {
  return (
    <div className="row m-0 mt-5">
 <div className='footer'>
  <div className='container'>
      <div className='footer-top'>
         <h4>Follow our</h4>
         <ul>
          <li><a href='#'><i class="fa-brands fa-facebook"></i></a></li>
          <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
          <li><a href='#'><i class="fa-brands fa-youtube"></i></a></li>
         </ul>
      </div>
      <div className='footer-bottom'>
        <div className='row'>
          <div className='col-md-6'>
          <ul>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>Terms and Conditions</a></li>
        </ul>
          </div>
          <div className='col-md-6 text-right'>
          <ul>
          <li className='pr-0'><a href='#'><i class="fa-solid fa-circle-question help-icon"></i> Help</a></li>
        </ul>
          </div>
        </div>
       
      </div>
      </div>
      </div>
    </div>
   
  )
}

export default footer
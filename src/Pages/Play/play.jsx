import React from 'react'
import "./play.css";
import NavBar from '../../Components/Navbar/NavBar';
import { useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer/footer';
function play() {
  const videoObj = useLocation().state
  console.log(videoObj);
  return (
    <>
      <div className='play-page'>
      <NavBar />
        <div className='play-Section'>
            <div className='pv-container'>
              <h1>{videoObj.videoTitle}</h1>
              <iframe width="100%" 
                height="450px" 
                frameBorder="0"
                allowFullScreen
                src={"https://www.youtube.com/embed/"+videoObj.videoId}>
              </iframe>

              <div className='pv-desc-contaoner'>
                <div className='pv-desc'>
                  <h3>Description</h3>
                  <textarea defaultValue={videoObj.videoDesc}>
                  </textarea>
                </div>
              </div>
            </div>
            <Footer />
        </div>
        
    </div>
    
    </>
  )
}

export default play
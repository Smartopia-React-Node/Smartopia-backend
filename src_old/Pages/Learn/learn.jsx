import React, { useEffect, useState } from 'react'
import "./learn.css";
import NavBar from '../../Components/Navbar/NavBar'
import Smalltag from '../../Components/SmallTag/smalltag';
import LearnCard from '../../Components/LearnCard/learnCard';
import Footer from '../../Components/Footer/footer';
import axios from 'axios';
function learn() {
    const [tutorialArr, settutorialArr] = useState([])
    useEffect(() => {
        axios.get("https://ttool-test.onrender.com/api/tutorial/alltutorial").then((response) => {
            settutorialArr(response.data);
          });
    }, [])
  return (
    <div className='learn-page'>
        <NavBar />
        <div className='learn-section'>
        <div className='middle-body'>
                <div className='header'>
                    <h1 className='title'>Learn</h1>
                    <div className='sort-section'>

                    </div>
                </div>
                <div className='content-container'>
                    {/* <LearnCard 
                        title={"AI News is Getting Out of Hand!"}
                        type={"Paid"}
                    /> */}
                    {
                        tutorialArr.map((item, index)=>(
                            <LearnCard key={item._id}
                                item={item}
                            /> 
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default learn 
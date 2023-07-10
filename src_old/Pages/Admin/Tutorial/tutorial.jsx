import React, { useEffect, useState } from 'react'
import "./tutorial.css"
import Rightbar from '../../../Components/RightBar/rightbar'
import TopBar from '../../../Components/TopBar/topbar'
import AddVideo from '../../../Components/AddVideo/addVideo'
import TutorialTable from '../../../Components/TutorialTable/tutorialTable'
import axios from 'axios'
function tutorial() {
  const [tutorialArr, settutorialArr] = useState([])
    useEffect(() => {
        axios.get("https://ttool-test.onrender.com/api/tutorial/alltutorial").then((response) => {
            settutorialArr(response.data);
          });
    }, [])

   const deleteItem = async (id)=>{
        await axios.delete(`https://ttool-test.onrender.com/api/tutorial/delete/${id}`).then((response) =>{
            settutorialArr(tutorialArr.filter((item)=> item._id !== id))
        }).catch((err)=>{
            console.log("ERROR in DELETING", err)
        })
   }
  return (
    <div className='tutorial-page'>
      <Rightbar />
        <div className='right-part'>
          <TopBar />
          <AddVideo settutorialArr={settutorialArr}/>
          <TutorialTable tutorialArr={tutorialArr} deleteItem={deleteItem} />
        </div>
    </div>
  )
}

export default tutorial
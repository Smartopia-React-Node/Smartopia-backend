import React, { useEffect, useState } from 'react'
import "./dashboard.css";
import Rightbar from "../../../Components/RightBar/rightbar"
import TopBar from "../../../Components/TopBar/topbar"
import EditBanner from '../../../Components/EditBanner/EditBanner';
import GlossaryAdminTable from '../../../Components/GlossaryAdminTable/glossaryAdminTable';
import axios from 'axios';
function Dashboard() {

    const [glossaryArr, setGlossaryArr] = useState([])

    useEffect(() => {
        axios.get("https://ttool-test.onrender.com/api/glossary/all").then((response) => {
            setGlossaryArr(response.data);
          }).catch((err)=>console.log(err))
    }, [])

  return (
    <div className='glossary-admin-page'>
        <Rightbar />
        <div className='right-part'>
          <TopBar />
          <EditBanner setGlossaryArr={setGlossaryArr}/>
          
        </div>
    </div>
  )
}

export default Dashboard
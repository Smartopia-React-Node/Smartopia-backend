import React, { useEffect, useState } from 'react'
import "./glossary.css";
import Rightbar from "../../../Components/RightBar/rightbar"
import TopBar from "../../../Components/TopBar/topbar"
import AddGlossary from '../../../Components/AddGlossary/addGlossary';
import GlossaryAdminTable from '../../../Components/GlossaryAdminTable/glossaryAdminTable';
import axios from 'axios';
function glossay() {
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
          <AddGlossary setGlossaryArr={setGlossaryArr}/>
          <GlossaryAdminTable glossaryArr={glossaryArr}/>
        </div>
    </div>
  )
}

export default glossay
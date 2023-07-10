import React, { useEffect, useState } from 'react'
import "./newAdmin.css";
import Rightbar from "../../../Components/RightBar/rightbar"
import TopBar from "../../../Components/TopBar/topbar"
import EditBanner from '../../../Components/EditBanner/EditBanner';
import AddAdmin from '../../../Components/AddAdmin/AddAdmin';
import axios from 'axios';

function newAdmin() {
    const [allAdmins, setAllAdmins] = useState([])

    
  return (
    <div className='glossary-admin-page'>
        <Rightbar />
        <div className='right-part'>
          <TopBar />
          <AddAdmin />
          
        </div>
    </div>
  )
}

export default newAdmin
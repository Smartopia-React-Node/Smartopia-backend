import React, { useEffect, useState } from 'react'
import './banner.css';
import SearchBar from '../SearchBar/searchBar';
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios';

function Banner({setSearch, search}) {

  const [currentBannerText, set_currentBannerText] = useState("");
  
    const getCurrentBannerText= async ()=>{
        await axios.get("http://localhost:8800/api/banner/get")
        .then((res)=> {set_currentBannerText(res.data.text);})
        .catch((err)=> console.log(err))
    }

    useEffect(() => {
        getCurrentBannerText()
    }, [])

  return (
    <div className='banner'>
      <div className='container'>
      <div className='headline_div'>
        {currentBannerText && <TypeAnimation
          sequence={[
            currentBannerText,
            1000
          ]}
          speed={50}
          style={{ fontSize: '3.8em' }}
          repeat={0}
        />}
      </div>
      <br/>
      <div className='searchBar_div'>
          <SearchBar setSearch={setSearch} search={search}/>
      </div>
      </div>
    </div>
  )
}

export default Banner
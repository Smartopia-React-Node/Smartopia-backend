import React, { useEffect, useState } from 'react'
import './glossary.css'
import NavBar from '../../Components/Navbar/NavBar'
import Footer from '../../Components/Footer/footer'
import SearchBar from '../../Components/SearchBar/searchBar'
import GlossaryTable from '../../Components/GlossaryTable/glossaryTable'
import axios from 'axios'
function glossary() {
  const [glossaryArr, setGlossaryArr] = useState([])
  const [filteredArr, setFilteredsArr] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    const getGlossary = async()=>{
      axios.get("https://ttool-test.onrender.com/api/glossary/all").then((response) => {
        setGlossaryArr(response.data);
      }).catch((err)=>console.log(err))
    }
    getGlossary()
    }, [])

    useEffect(() => {
      let res = glossaryArr.filter((glossary)=>{
        if(glossary.term === undefined) return false;
        if(glossary.term.toLowerCase().match(search.toLowerCase())) return true;
        return false
      })
      setFilteredsArr(res)
    
    }, [search])

  return (
   
    <div className=''>
    <NavBar />
    <div className=''>
    <h2 className='heading-glossary'>Glossary</h2>
      <div className='sb-container glo-searchbar mb-5 mt-2'>
      
        <SearchBar setSearch={setSearch} search={search} />
      </div>
      <div className='row m-0'>
        <div className='container'>
          <div>
            { filteredArr.length !== 0?
              <GlossaryTable glossaryArr={filteredArr}/>:
              <GlossaryTable glossaryArr={glossaryArr}/>
            }
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
   
   
  )
}

export default glossary
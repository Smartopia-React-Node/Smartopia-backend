import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/banner'
import FilterSection from '../../Components/FilterSection/filterSection'
import ResultsSection from '../../Components/ResultsSection/resultsSection'
import Footer from '../../Components/Footer/footer'
import NavBar from '../../Components/Navbar/NavBar'
import axios from 'axios'
function Home() {
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedPmodle, setSelectedPmodle] = useState([])
  const [productsArr, setProductsArr] = useState([])
  const [filteredArr, setFilteredsArr] = useState([])
  const [resultsArr, setResultsArr] = useState(productsArr)
  const [search, setSearch] = useState("")
  useEffect(() => {
    async function getProduct(){
      axios.get("https://ttool-test.onrender.com/api/tool/alltool").then((response) => {
      setProductsArr(response.data);
      setFilteredsArr(response.data)
      console.log(response.data);
    });
    }
    getProduct();
  
  }, []) 



  
  useEffect(() => { 

    setResultsArr( productsArr.filter((p)=>{
      if(selectedTags.length === 0) return true

      for(let i=0; i<selectedTags.length; i++){
        if(p.tagList.includes(selectedTags[i])){  
          if(selectedPmodle.length !== 0){
            if(selectedPmodle.includes(p.priceModle)){  
              return true;
            }else return false
          }else return true
        }else if( i === selectedTags.lenth-1) return false
        
      }
    }))
  
  }, [selectedTags,selectedPmodle, productsArr])
  
  return (
    <div className='home'>
        <NavBar />
        <Banner setSearch={setSearch} search={search} />

        <div className='container mt-5'>
          <div className='row border-top border-right'>
          <div className='col-md-3 p-0'>
            
            <div className='filter-maindiv border-right border-left border-bottom'>
              <h3>Filter</h3>
            <FilterSection selectedTags={selectedTags} 
              setSelectedTags={setSelectedTags}
              selectedPmodle={selectedPmodle} 
              setSelectedPmodle={setSelectedPmodle}
              setSearch={setSearch}
            />
            </div>
          </div>
          <div className='col-md-9 p-0'> 
            <div>
            { filteredArr.length !== 0?
              <ResultsSection resultsArr={filteredArr} productsArr={productsArr} />:
              <ResultsSection resultsArr={resultsArr} productsArr={productsArr} />
            }
            </div>
          </div>
          </div>
        </div>
        
        
        <Footer />
    </div>
  )
}

export default Home
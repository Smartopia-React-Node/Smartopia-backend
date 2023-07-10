import React, { useEffect, useState } from 'react'
import "./filterSection.css"
import Tags, {primaryTagArr} from "../Tags/tags"
import {tagsArr1, tagsArr2, tagsArr3} from "../../tagsArray"
import axios from 'axios'

 
function filterSection({selectedTags, setSelectedTags, setSelectedPmodle, selectedPmodle, setSearch}) {
    const [allCategory, setAllCategory] = useState([]) 
    useEffect(() => {
        axios.get("https://ttool-test.onrender.com/api/category/allcategory").then((response) => {
            setAllCategory(response.data);
        });

    }, [])
    

  return (
    <div className='filterSection'>
        <div className='tags_container_1'>
            {
                allCategory.filter((item)=>item.categoryType === "Feature")
                    .map((item)=>(
                        <Tags name={item.categoryName} 
                            setSelectedTags={setSelectedTags} 
                            selectedTags={selectedTags} 
                            key={item._id}
                            setSearch={setSearch}
                        />
                    ))
            }
        </div>
        <div className='tags_container_2'>
            {
                allCategory.filter((item)=>item.categoryType === "Pricing")
                    .map((item)=>(
                        <Tags name={item.categoryName} 
                            setSelectedTags={setSelectedPmodle} 
                            selectedTags={selectedPmodle} 
                            key={item._id}
                            setSearch={setSearch}
                        />
                    ))
            }
        </div>
        <div className='tags_container_3'>
            <Tags name={"TECHIE Tool Pick"} 
                setSelectedTags={setSelectedTags} 
                selectedTags={selectedTags}
                setSearch={setSearch}
            />
        </div>
    </div>
  )
}

export default filterSection

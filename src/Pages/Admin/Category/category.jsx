import React, { useEffect, useState } from 'react'
import './category.css'
import Rightbar from '../../../Components/RightBar/rightbar'
import Topbar from '../../../Components/TopBar/topbar'
import AddCategory from '../../../Components/AddCategory/addCategory'
import CategorySection from '../../../Components/CategorySection/categorySection'
import axios from 'axios';
function category() {
  const [allCategory, setAllCategory] = useState([]) 

    useEffect(() => {
        
        axios.get("https://ttool-test.onrender.com/api/category/allcategory").then((response) => {
            setAllCategory(response.data.reverse());
        });

    }, []);

  return (
    <div className='category-page'>
    <Rightbar />
        <div className='right-part'>
            <Topbar />
            <AddCategory setAllCategory={setAllCategory}/>
            <CategorySection allCategory={allCategory} setAllCategory={setAllCategory}/>
        </div>
    </div>
  )
}

export default category
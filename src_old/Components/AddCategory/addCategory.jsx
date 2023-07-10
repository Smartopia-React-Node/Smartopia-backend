import React, { useState } from 'react'
import './addCategory.css'
import Alert from '../Alert/Alert'
import { Button, FormControl } from '@mui/material'
import axios from 'axios';

function AddCategory({setAllCategory}) {
    const [alertType, setAlertType] = useState("nothing");
    const [categoryObj, setCategoryObj] = useState({
      categoryName: "",
      categoryType: ""
    })

    const handleOnChange = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setCategoryObj({
          ...categoryObj,
          [name]:value
      })
      setAlertType("nothing") 
    }

    const addCategory = async ()=>{
        if(categoryObj.categoryName && categoryObj.categoryType){
          //ADDING CATEGORY TO DATABASE
          await axios.post("https://ttool-test.onrender.com/api/category/add", categoryObj).then((response) => {
            console.log(response.data);
            setAlertType("succes")
          })

          //GETTING CATEGORY LIST
          axios.get("https://ttool-test.onrender.com/api/category/allcategory").then((response) => {
            setAllCategory(response.data.reverse());
          });
          
        }else{
          setAlertType("error")
        }
    }

  return (
    <div className='add-category-container overlay'>
    <Alert type={alertType}/>
      <div className='header'>
        <h2 >Add Category</h2>
          <Button className='payment-btn' 
            variant="contained"
            onClick={addCategory} >
            <span>Add</span>
          </Button> 
      </div>
      <div className='category-upload-container'>
        <div className='data-div'>
            <FormControl >
                <div className='input-container'>
                    <input type="text" name="categoryName" className="email"
                      placeholder="Category Name"
                      onChange={handleOnChange}
                      value={categoryObj.categoryName}
                      />
                    <select name="categoryType" 
                        className='pmodel'
                        onChange={handleOnChange}
                        value={categoryObj.categoryType}
                        >
                        <option value="">Chooes Type</option>
                        <option value="Pricing" >Pricing</option>
                        <option value="Feature" >Feature</option>
                    </select>
                </div>
            </FormControl>
        </div>
      </div>
    </div>
  )
}

export default AddCategory
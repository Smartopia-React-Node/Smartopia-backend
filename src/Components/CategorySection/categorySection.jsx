import React, { useEffect, useState } from 'react'
import './categorySection.css'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import axios from 'axios';

function categorySection({allCategory, setAllCategory}) {

    const [save, setSave] = useState(false)

    const deleteCategory = async (id)=>{
        await axios.delete(`https://ttool-test.onrender.com/api/category/delete/${id}`).then(() => {
            console.log("category has been deleted");
        });
        setAllCategory(allCategory.filter((item)=> item._id !== id))
    }

    const editCategory = (i, className, editIcon, saveIcon)=>{
        document.querySelectorAll("."+className)[i].contentEditable="true"
        document.querySelectorAll("."+editIcon)[i].style.display="none"
        document.querySelectorAll("."+saveIcon)[i].style.display="inline-block"

    }
    const saveCategory =async (i, className,editIcon, saveIcon, id)=>{
        document.querySelectorAll("."+className)[i].contentEditable="false"
        document.querySelectorAll("."+editIcon)[i].style.display="inline-block"
        document.querySelectorAll("."+saveIcon)[i].style.display="none"
        
        await axios.put("https://ttool-test.onrender.com/apih/category/"+id+"/update",{
            categoryName: document.querySelectorAll("."+className)[i].innerText
        }).then(()=>{
            console.log("udated");
        }).catch((err)=>{
            console.log(err);
    })

    }

  return (
    <div className='category-section'>
        <div className='feature-table'>
            <div className='item-box header '>
                <h2>Feature</h2>
            </div>
            <div className='category-container'>
                {
                    allCategory.filter((item)=>item.categoryType === "Feature")
                    .map((item, i)=>(
                        <div className='item-box' key={item._id}>
                            <span className='f-category'>{item.categoryName}</span>
                            <div>
                                <EditIcon className='edit-icon-1' onClick={()=>editCategory(i, "f-category", "edit-icon-1", "save-icon-1")} />
                                <DownloadDoneIcon style={{display:"none"}} className='save-icon-1' onClick={()=>saveCategory(i, "f-category","edit-icon-1", "save-icon-1", item._id)}  />
                                <DeleteOutlinedIcon 
                                    className='deleteIcon' 
                                    onClick={()=>deleteCategory(item._id)}
                                />
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
        <div className='pricing-table'>
            <div className='header item-box'>
                <h2>Pricing</h2>
            </div>
            <div className='category-container'>
                {
                    allCategory.filter((item)=>item.categoryType === "Pricing")
                    .map((item, i)=>(
                        <div className='item-box' key={item._id}>
                            <span className='p-category'>{item.categoryName}</span>
                            <div>
                                <EditIcon className='edit-icon-2' onClick={()=>editCategory(i, "p-category", "edit-icon-2",'save-icon-2')} />
                                <DownloadDoneIcon style={{display:"none"}} className='save-icon-2' onClick={()=>saveCategory(i, "p-category","edit-icon-2","save-icon-2", item._id)}  />
                                <DeleteOutlinedIcon className='deleteIcon'
                                onClick={()=>deleteCategory(item._id)} 
                                />
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default categorySection
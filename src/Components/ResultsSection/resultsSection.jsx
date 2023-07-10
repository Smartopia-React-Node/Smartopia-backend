import React, { useEffect, useState } from 'react'
import './resultsSection.css'
import Product from '../Product/product'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function resultsSection({resultsArr, productsArr}) { 

  
  const navigate = useNavigate()

  
  return (
    <div className='resultsSection  border-bottom'>
      <div className='results'>
        {
          resultsArr.map((res,i)=>(
            <Product 
                name={res.toolName}
                key={res._id}
                description={res.toolDesc}
                pricingModel={res.priceModle}
                imageURL={res.toolImageURL}
                onClick={()=> navigate(`/productdetail/${res._id}`, {state: {productsArr, selectedTags:[]}})}
              />
          ))
        }
      </div>
    </div>
  )
}

export default resultsSection
import React from 'react'
import './productDetail.css';
import NavBar from '../../Components/Navbar/NavBar'
import AboutSection from '../../Components/AboutSection/aboutSection';
import ResultsSection from '../../Components/ResultsSection/resultsSection';
import Footer from '../../Components/Footer/footer'
import { useLocation, useParams } from 'react-router-dom';

const navBg = {opacity: 0.1}
function productDetail() {
  const productObj = useLocation()
  let { productId } = useParams();
  let [showProduct] = productObj.state.productsArr.filter((item)=> productId === item._id)

  return (
    <div className='AboutPage'>
        <NavBar  style={{opacity: "1"}} />
        <AboutSection product={showProduct} />
        <div className='container'>
          <h2 className='pl-3'>Related Tools</h2>
          <ResultsSection resultsArr={productObj.state.productsArr} productsArr={productObj.state.productsArr}/>
        </div>
        <Footer />
    </div> 
  )
}

export default productDetail
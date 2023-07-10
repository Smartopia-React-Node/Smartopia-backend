import React from 'react'
import './gradiantBG.css'
function gradiantBG({children}) {
  return <div className='gradiantBG'>
    {children}
  </div>
}

export default gradiantBG
import React from 'react'
import './glossaryTable.css'

function glossaryTable({glossaryArr}) {
  return (
      <div>
          {
            glossaryArr.map((item, index)=>(
              <div className='each-glossary' key={item._id}>
                <h3>{item.term}</h3>
                <p>{item.desc}</p>
            </div>
            ))
          }
       </div>
  )
}

export default glossaryTable 
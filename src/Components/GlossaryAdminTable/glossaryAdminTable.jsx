import React from 'react'
import "./glossaryAdminTable.css";
function glossaryAdminTable({glossaryArr}) {
  return (
    <div className='glossary-admin-Table'>
    <div className='gTable-header'>
        <div className='title term'>
            <h2>Term</h2>
        </div>
        <div className='title desc'>
           <h2>Description</h2> 
        </div>
    </div>

    {
        glossaryArr.map((item, index)=>(
            <div className='gTable-row' key={item._id}>
                <div className='term'>
                    <div className='term-wrapper' >
                        <p>{item.term}</p>
                    </div>
                </div>
                <div className='desc'>
                    <div className='desc-wrapper'>
                        <p>{item.desc}</p> 
                    </div>
                </div>
            </div>
        ))
    }

    </div>
  )
}

export default glossaryAdminTable
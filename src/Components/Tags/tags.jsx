import React, { useState } from 'react'
import "./tags.css"
let x=0;
function tags({name, setSelectedTags, selectedTags, setSearch}) {
    const [bool, setBool] = useState(false)
    function handleClick(e){
        setSearch("")
        if(!bool){
            e.target.className= "tag onSelectTagColor"
            setSelectedTags((prev)=>{
                return [...prev, e.target.innerText]
            })
            setBool(true)

        }
        else{
            e.target.className = "tag";
            setSelectedTags(selectedTags.filter(tag => tag != e.target.innerText))
            setBool(false)
        }

        console.log(selectedTags);
    }
    
    return (
        <div className={'tag'}>
            <p onClick={handleClick}>{name}</p>
        </div>
      )
}

export default tags